<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-life">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">生活</p>
      <p class="about-me-card-text-big">我的日常</p>
    </div>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartRef = ref(null);

// 示例数据
const lifeData = [
  { name: "睡眠", value: 7 },     // 新增基础项（强烈建议）
  { name: "工作", value: 8 },
  { name: "学习", value: 3 },
  { name: "游戏", value: 2 },
  { name: "阅读", value: 1 },
  { name: "生活", value: 3 },    // 含吃饭、通勤、家务等
];
// 总计：24 小时，更真实
onMounted(() => {
  const myChart = echarts.init(chartRef.value);
  // const colors = [
  //   '#4A90E2', // 蓝
  //   '#50C878', // 翁布拉绿（祖母绿）
  //   '#FF6F61', // 珊瑚红
  //   '#FFD700', // 金色
  //   '#9B59B6', // 紫
  // ];
  const colors = ['#007BFF', '#6F42C1', '#28A745', '#DC3545', '#FFC107', '#ADB5BD']; // 新增: 亮灰
  const option = {
    color: colors,

    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return `${params.name}: ${params.percent}%`;
      },
    },
    series: [
      {
        name: "我的日常",
        type: "pie",
        radius: ["50%", "75%"],
        center: ["50%", "60%"],
        startAngle: 180,
        endAngle: 360,
        data: lifeData,

        // 👇 关键：关闭透明度 & 强化描边
        itemStyle: {
          borderColor: '#fff',     // 白色分隔线
          borderWidth: 2,          // 分隔线宽度
          opacity: 1,              // 确保不透明（虽然 color 已是纯色）
        },
        
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          }
        }
      },
    ],
  };

  myChart.setOption(option);

  // 响应式调整
  window.addEventListener("resize", () => {
    myChart.resize();
  });
});
</script>

<style scoped>
.about-me-life {
  height: 316px;
  padding: 20px 0;
  overflow: inherit;
}

.chart-container {
  height: 100%;
}
</style>