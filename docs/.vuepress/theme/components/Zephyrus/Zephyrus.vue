<template>
  <div class="new-zephyrus-home-container-wrapper is-homepage">
    <canvas ref="windCanvasRef" class="wind-canvas"></canvas>

    <div class="main-content-flow">
      <header class="main-header"> 
        <div class="header-content">
          <router-link to="/blog/" class="zephyrus-avatar-link">
            <img src="/avatar.png" alt="TenOne506 Avatar" class="profile-avatar">
          </router-link>
          
          <!-- <h1 class="main-title"></h1> -->
          <p class="subtitle">
            <span class="zephyrus-text">Zephyrus</span>'s Flow: A Data Journey Through Code & Life
          </p>

          <nav class="social-links">
            <a href="https://github.com/TenOne506/" target="_blank" class="social-btn" title="GitHub">
              <icon name="grommet-icons:github" />
            </a>
            <a href="mailto:w13852770506@163.com" target="_blank" class="social-btn" title="Email">
              <icon name="streamline-flex:mail-send-email-message-circle-solid"></icon>
            </a>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// --- Particle Flow System (鼠标互动增强版 V4 - 速度调整) ---
// Particle interface and constants remain the same
interface Particle {
  x: number; y: number; size: number; baseSpeedX: number; baseSpeedY: number;
  currentSpeedX: number; currentSpeedY: number; color: string; noiseOffset: number; 
  history: { x: number, y: number }[]; 
}

const windCanvasRef = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
let particles: Particle[] = [];
const numberOfParticles = 48;
const maxParticleSize = 2.5; 
const minParticleSize = 1.0;
const mouse = {
  x: -1, y: -1, radius: 180, attractionFactor: 0.15, influenceSpeed: 4, 
};
let animationFrameId: number;
const time = ref(0); 
const trailLength = 10;
const noiseScale = 0.003; // 💥 新增: 噪声场的缩放因子，控制风的粗细
const noiseStrength = 0.9; // 💥 新增: 噪声对粒子速度的影响强度

// --- 💥 核心改动：柏林噪声（Perlin Noise）实现 ---

// Permutation table (256 entries) for Perlin Noise
const p = new Array(512);
const permutation = new Array(256).fill(0).map((_, i) => i);
// Shuffle the permutation array (simplified but functional shuffle)
for (let i = permutation.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
}
for (let i = 0; i < 256; i++) {
    p[i] = p[i + 256] = permutation[i];
}

// 辅助函数：插值
function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

// 辅助函数：线性插值
function lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b;
}

// 辅助函数：梯度计算
function grad(hash: number, x: number, y: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : (h === 12 || h === 14 ? x : 0);
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

// 2D 柏林噪声函数
function perlin2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);

    const u = fade(x);
    const v = fade(y);

    const A = p[X] + Y;
    const B = p[X + 1] + Y;

    const A0 = p[A];
    const A1 = p[A + 1];
    const B0 = p[B];
    const B1 = p[B + 1];

    // 梯度点乘
    return lerp(
        lerp(grad(A0, x, y), grad(B0, x - 1, y), u),
        lerp(grad(A1, x, y - 1), grad(B1, x - 1, y - 1), u),
        v
    );
}

// --- End Perlin Noise ---


const initCanvas = () => {
  const canvas = windCanvasRef.value;
  if (!canvas) return;

  ctx.value = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', handleMouseLeave);

  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(createParticle());
  }
};

const resizeCanvas = () => {
  const canvas = windCanvasRef.value;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createParticle = (): Particle => {
  const canvas = windCanvasRef.value;
  if (!canvas) throw new Error("Canvas not initialized");

  const color = document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'rgba(168, 85, 247, 0.8)'
    : 'rgba(37, 99, 235, 0.65)';

  // 基础速度：保持正向（向右）
// 优化后的基础速度范围：[0.8, 1.2]，差异更小，整体更均匀
const baseSpeedX = (Math.random() * 0.4) + 0.8; 
const baseSpeedY = (Math.random() * 0.2) - 0.1; // 进一步减小Y轴波动

  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * (maxParticleSize - minParticleSize) + minParticleSize,
    baseSpeedX: baseSpeedX,
    baseSpeedY: baseSpeedY,
    currentSpeedX: baseSpeedX,
    currentSpeedY: baseSpeedY,
    color: color,
    noiseOffset: Math.random() * 1000, 
    history: [],
  };
};

const drawParticle = (particle: Particle) => {
  const context = ctx.value;
  if (!context) return;

  for (let i = 0; i < particle.history.length; i++) {
    const p = particle.history[i];
    const alpha = (i / particle.history.length) * 0.7;
    context.beginPath();
    context.arc(p.x, p.y, particle.size * (i / particle.history.length), 0, Math.PI * 2);
    context.fillStyle = particle.color.replace('0.7', alpha.toString());
    context.fill();
  }

  context.beginPath();
  context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  context.fillStyle = particle.color;
  context.fill();
};

const updateParticle = (particle: Particle) => {
  const canvas = windCanvasRef.value;
  if (!canvas) return;

  particle.history.push({ x: particle.x, y: particle.y });
  if (particle.history.length > trailLength) {
    particle.history.shift();
  }

  // 💥 核心改动：使用 Perlin Noise 计算风力波动
  const noiseX = perlin2D(particle.x * noiseScale, particle.y * noiseScale);
  const noiseY = perlin2D(particle.y * noiseScale + 1000, particle.x * noiseScale + 1000); 
  // 不同的坐标偏移可以产生不同的噪声值

  // 基础风速 + 噪声波动
  particle.currentSpeedX = particle.baseSpeedX + noiseX * noiseStrength;
  particle.currentSpeedY = particle.baseSpeedY + noiseY * noiseStrength;

  const dx = mouse.x - particle.x;
  const dy = mouse.y - particle.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // 鼠标互动：吸引和加速
  if (distance < mouse.radius && mouse.x !== -1) { 
    const inverseNormalizedDistance = 1 - (distance / mouse.radius); 

    const directionX = dx / distance;
    const directionY = dy / distance;

    const influenceX = directionX * mouse.influenceSpeed * inverseNormalizedDistance * mouse.attractionFactor;
    const influenceY = directionY * mouse.influenceSpeed * inverseNormalizedDistance * mouse.attractionFactor;
    
    particle.currentSpeedX += influenceX;
    particle.currentSpeedY += influenceY;

    // 限制最大速度 (基于 baseSpeedX 的 4 倍)
    const maxSpeed = particle.baseSpeedX * 4; 
    particle.currentSpeedX = Math.max(-maxSpeed, Math.min(maxSpeed, particle.currentSpeedX));
    particle.currentSpeedY = Math.max(-maxSpeed, Math.min(maxSpeed, particle.currentSpeedY));
  }
  
  // 更新位置
  particle.x += particle.currentSpeedX;
  particle.y += particle.currentSpeedY;

  // 粒子循环出入 (西风从左到右循环)
  if (particle.x - particle.size > canvas.width) { 
    particle.x = -particle.size; 
    particle.y = Math.random() * canvas.height; 
    particle.size = Math.random() * (maxParticleSize - minParticleSize) + minParticleSize;
    
    // 重新生成粒子速度
    particle.baseSpeedX = (Math.random() * 0.8) + 0.6;
    particle.baseSpeedY = (Math.random() * 0.4) - 0.2;
    
    particle.history = []; 
  }
  // 垂直方向循环
  if (particle.y - particle.size > canvas.height) { particle.y = -particle.size; }
  if (particle.y + particle.size < 0) { particle.y = canvas.height + particle.size; }
};


const animate = () => {
  const canvas = windCanvasRef.value;
  const context = ctx.value;
  if (!canvas || !context) return;

  // 时间步长
  time.value += 0.15;

  // 用透明清屏，露出底层背景色，避免 canvas 累积出浅绿色
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    updateParticle(particles[i]);
    drawParticle(particles[i]);
  }

  animationFrameId = requestAnimationFrame(animate);
};

const handleMouseMove = (event: MouseEvent) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const handleMouseLeave = () => {
  mouse.x = -1; 
  mouse.y = -1;
};

const handleThemeChange = () => {
    particles.forEach(p => {
        p.color = document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'rgba(168, 85, 247, 0.8)'
            : 'rgba(37, 99, 235, 0.65)';
    });
};

onMounted(() => {
  // 💥 检查点：确保 initCanvas 和 animate 在组件加载后运行
  initCanvas();
  animate();
  
  // 监听主题变化
  new MutationObserver(handleThemeChange).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
  });
});

onUnmounted(() => {
  // 💥 检查点：确保清理工作在组件卸载时运行
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseleave', handleMouseLeave);
  cancelAnimationFrame(animationFrameId);
});

// Assuming this code is inside a Vue setup script or similar environment
// with onMounted and onUnmounted defined.
/*
onMounted(() => {
  initCanvas();
  animate();
  
  new MutationObserver(handleThemeChange).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseleave', handleMouseLeave);
  cancelAnimationFrame(animationFrameId);
});
*/
</script>

<style>
/* --- 主题颜色变量 (全局，必须非 scoped，否则 :root 选择器会带 data-v 属性而失效) --- */
:root {
  --bg-light: #f8fafc;

  --text-primary-light: #0f172a;
  --text-secondary-light: #64748b;

  --flow-color-1-light: #2563eb;
  --flow-color-2-light: #06b6d4;
}


[data-theme="dark"] {
  --bg-dark: #09090b;

  --text-primary-dark: #fafafa;
  --text-secondary-dark: #d4d4d8;

  --flow-color-1-dark: #a78bfa;
  --flow-color-2-dark: #22d3ee;
}
</style>

<style scoped>
/* --- 基础布局 FIX (保持不变) --- */
.new-zephyrus-home-container-wrapper {
  min-height: 100vh;
  height: 100vh;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100vw; 
  z-index: 1; 
  box-sizing: border-box;
  
  background-color: var(--bg-light);
  color: var(--text-primary-light);
  transition: background-color 0.7s ease, color 0.3s ease;
}

[data-theme="dark"] .new-zephyrus-home-container-wrapper {
  background-color: var(--bg-dark);
  color: var(--text-primary-dark);
}

.wind-canvas {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; 
  pointer-events: none;
}

.main-content-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}

/* --- Header & Content (保持透明居中) --- */

.main-header {
  text-align: center;
  width: 100%; 
  max-width: 600px; 
  padding: 0;
  background: none; 
  border: none;
  box-shadow: none;
  border-radius: 0;
  transition: none;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  min-height: 250px; 
}


/* --- 保持文字、头像、链接样式不变 --- */
.zephyrus-avatar-link {
  display: block;
  margin-bottom: 20px; 
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--flow-color-1-light); 
}
[data-theme="dark"] .profile-avatar {
  border: 4px solid var(--flow-color-1-dark);
}

.main-title {
  font-size: 4em; 
  font-weight: 900;
  margin-bottom: 10px; 
  letter-spacing: -2px;
  background: linear-gradient(45deg, var(--flow-color-1-light) 30%, var(--flow-color-2-light) 70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
[data-theme="dark"] .main-title {
  background: linear-gradient(45deg, var(--flow-color-1-dark) 30%, var(--flow-color-2-dark) 70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.2em;
  color: var(--text-secondary-light);
  margin-bottom: 30px; 
  font-style: italic;
  font-weight: 300;
}

.zephyrus-text {
  font-weight: 600;
  color: var(--flow-color-1-light);
}

[data-theme="dark"] .subtitle {
  color: var(--text-secondary-dark);
}
[data-theme="dark"] .zephyrus-text {
  color: var(--flow-color-2-dark);
}

.social-links {
  display: flex;
  gap: 30px;
}
.social-btn {
  font-size: 30px;
  color: var(--text-secondary-light);
  transition: color 0.3s ease, transform 0.3s ease;
}
[data-theme="dark"] .social-btn {
  color: var(--text-secondary-dark);
}
.social-btn:hover {
  color: var(--flow-color-2-light); 
  transform: translateY(-4px) scale(1.2);
}
[data-theme="dark"] .social-btn:hover {
  color: var(--flow-color-2-dark);
}

/* --- 响应式调整 --- */
@media (max-width: 768px) { 
  .main-title {
    font-size: 3em; 
  }
  .zephyrus-avatar-link {
    margin-bottom: 15px;
  }
  .subtitle {
    margin-bottom: 25px;
  }
}
</style>