<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-skill">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">技能</p>
      <p class="about-me-card-text-big">我的能力</p>
    </div>
    <!-- 第一行向左移动 -->
    <div class="marquee-row first-row">
      <div class="marquee-content">
        <span v-for="(item, index) in technology" :key="index"> <icon :name="item.icon"/> </span>
        <span v-for="(item, index) in technology" :key="index + technology.length"><icon :name="item.icon"/></span>
      </div>
    </div>
    <!-- 第二行向右移动 -->
    <div class="marquee-row second-row">
      <div class="marquee-content">
        <span v-for="(item, index) in tools" :key="index"><icon :name="item.icon"/></span>
        <span v-for="(item, index) in tools" :key="index + tools.length"><icon :name="item.icon"/></span>
      </div>
    </div>

    <div class="about-me-skill-detail">
      <span v-for="(item, index) in technology" :key="index"> <icon
          :name="item.icon"/> <span>{{ item.type }}</span>  </span>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const technology = ref([
  { type: 'C++', icon: 'devicon:cplusplus' },
  { type: 'C', icon: 'devicon:c' },
  { type: 'Python', icon: 'devicon:python' },
  { type: 'Rust', icon: 'devicon:rust' },
  { type: 'Go', icon: 'devicon:go' },
  { type: 'MySQL', icon: 'devicon:mysql' },
  { type: 'Redis', icon: 'devicon:redis' },
  { type: 'LaTeX', icon: 'devicon:latex' },
  // MATLAB → 使用 simple-icons
  { type: 'MATLAB', icon: 'devicon:matlab' },
  // PyTorch → 使用 simple-icons
  { type: 'PyTorch', icon: 'simple-icons:pytorch' },
]);

const tools = ref([
  { type: 'Git', icon: 'devicon:git' },
  { type: 'GitHub', icon: 'devicon:github' },
  // GitHub Actions → simple-icons 有！
  { type: 'GitHub Actions', icon: 'devicon:githubactions' },
  { type: 'VS Code', icon: 'devicon:vscode' },
  { type: 'Vim', icon: 'devicon:vim' },
  // Postman → simple-icons 有
  { type: 'Postman', icon: 'devicon:postman' },
  { type: 'npm', icon: 'devicon:npm' },
  { type: 'Linux', icon: 'devicon:linux' },
  // Ubuntu / Debian → cib (CoreUI Icons) 或 simple-icons
  { type: 'Ubuntu', icon: 'devicon:ubuntu' },
  { type: 'Debian', icon: 'devicon:debian' },
  { type: 'Windows', icon: 'devicon:windows11' },
  // Anaconda → simple-icons 有
  { type: 'Anaconda', icon: 'devicon:anaconda' },
  // CMake → simple-icons 有
  { type: 'CMake', icon: 'devicon:cmake' },
  { type: 'Docker', icon: 'devicon:docker' },
  { type: 'Nginx', icon: 'devicon:nginx' },
  { type: 'Markdown', icon: 'devicon:markdown' },
  // SVG → simple-icons 有
  { type: 'SVG', icon: 'simple-icons:svg' },
  // Gmail → simple-icons 有（但建议慎用，非开发工具）
  { type: 'Gmail', icon: 'simple-icons:gmail' },
  // PowerShell → simple-icons 有
  { type: 'PowerShell', icon: 'simple-icons:powershell' },
]);
</script>

<style scoped>
.about-me-skill {
  position: relative;
  min-height: 316px;
  padding: 20px 0;
  z-index: 1;

  &:hover .marquee-row {
    opacity: 0;
  }

  &:hover .about-me-skill-detail {
    opacity: 1;
  }
}

.about-me-skill-detail {
  position: absolute;
  top: 100px;
  opacity: 0;
  z-index: 2;
  display: flex;
  padding: 0 20px;
  transition: opacity 0.5s;
  flex-wrap: wrap;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px 6px 0;
    border-radius: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--vp-c-text-2);
    background-color: var(--home-action-bnt-bg);
  }
}

.marquee-row {
  transition: opacity 0.6s 0.1s;
  width: 105%;
  margin-left: -6px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotateZ(-6deg);
}

.marquee-content {
  display: inline-flex;
  animation: marquee-left 30s linear infinite;

  > span {
    border-radius: 20%;
    align-content: center;
    align-items: center;
    background-color: var(--about-me-skill-item-bg);
    width: 80px;
    height: 80px;
    font-size: 50px;
    margin: 0 10px;
  }

}

.first-row {
  margin-top: 20px;
}

.second-row {
  margin-top: 20px;
}

.second-row .marquee-content {
  animation: marquee-right 50s linear infinite;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>