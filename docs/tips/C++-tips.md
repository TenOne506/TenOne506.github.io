---
title: C++-tips
createTime: 2025/12/24 12:07:24
permalink: /tipsissue/xh3bu7eo/
---

### string_view

提供视图，仅提供指针和长度，不提供拷贝。要注意变量析构，悬空引用问题。

### operator+ vs StrCat()

尽量使用函数，可能在两个字符串拼接时没有区别，但是在多个字符串拼接时
operator+()会创建大量临时对象，StrCat()会先计算长度，一次性申请内存进行拼接。

### 避免消失
- 在完整表达式结束前完成临时对象的使用
  ```c++
    // Safe (albeit a silly example):
    size_t len1 = strlen((s1 + s2).c_str());
    size_t len2 = strlen(absl::StrCat(s1, s2).c_str());
  ```
- 存储临时对象
  ```c++
    // Safe (and more efficient than you might think):
    std::string tmp_1 = s1 + s2;
    std::string tmp_2 = absl::StrCat(s1, s2);
    // tmp_1.c_str() and tmp_2.c_str() are safe.
  ```
- 存储对临时对象的引用。
  ```c++
  // Equally safe:
    const std::string& tmp_1 = s1 + s2;
    const std::string& tmp_2 = absl::StrCat(s1, s2);
    // tmp_1.c_str() and tmp_2.c_str() are safe.
    // The following behavior is dangerously subtle:
    // If the compiler can see you’re storing a reference to a
    // temporary object’s internals, it will keep the whole
    // temporary object alive.
    // struct Person { string name; ... }
    // GeneratePerson() returns an object; GeneratePerson().name
    // is clearly a sub-object:
    const std::string& person_name = GeneratePerson().name; // safe
    // If the compiler can’t tell, you’re at risk.
    // class DiceSeries_DiceRoll { `const string&` nickname() ... }
    // GenerateDiceRoll() returns an object; the compiler can’t tell
    // if GenerateDiceRoll().nickname() is a subobject.
    // The following may store a dangling reference:
    const std::string& nickname = GenerateDiceRoll().nickname(); // BAD!
  ```
  正常的类设计，肯定不会直接暴露成员变量的。这里例子就是提醒通过函数暴露成员引用这样可能会
  

::: important 生命周期
引用绑定的临时或作为子对象完整对象的临时，在该引用的生命周期内持续存在。
:::