type CardSizeKey = 'square' | 'postcard' | 'story';
type CardStyleKey = 'retro' | 'glass' | 'noren';

type CardSize = { width: number; height: number; label: string };
type CardStyle = {
  background: string;
  accent: string;
  ink: string;
  soft: string;
  stamp: string;
};

const sizes: Record<CardSizeKey, CardSize> = {
  square: { width: 1080, height: 1080, label: '1:1' },
  postcard: { width: 1200, height: 1800, label: '縦型ポストカード' },
  story: { width: 1080, height: 1920, label: '9:16' },
};

const styles: Record<CardStyleKey, CardStyle> = {
  retro: { background: '#fff4db', accent: '#b94732', ink: '#352113', soft: '#f8ead0', stamp: '#d7a641' },
  glass: { background: '#f7f1e2', accent: '#6d9071', ink: '#2f261c', soft: '#fffaf0', stamp: '#d68b91' },
  noren: { background: '#3f281b', accent: '#c94e36', ink: '#fff8ea', soft: '#f8ead0', stamp: '#d7a641' },
};

const $ = <T extends HTMLElement>(selector: string): T | null => document.querySelector<T>(selector);

const canvas = $<HTMLCanvasElement>('#memory-canvas');
const ctx = canvas?.getContext('2d') ?? null;
const titleInput = $<HTMLInputElement>('#card-title');
const dateInput = $<HTMLInputElement>('#card-date');
const captionInput = $<HTMLInputElement>('#card-caption');
const sizeSelect = $<HTMLSelectElement>('#card-size');
const styleSelect = $<HTMLSelectElement>('#card-style');
const fileName = $<HTMLElement>('#memory-file-name');
const downloadButton = $<HTMLButtonElement>('#download-card');

let userImage: HTMLImageElement | null = null;
let objectUrl: string | null = null;

const getSize = (): CardSize => sizes[(sizeSelect?.value as CardSizeKey) || 'square'] ?? sizes.square;
const getStyle = (): CardStyle => styles[(styleSelect?.value as CardStyleKey) || 'retro'] ?? styles.retro;

const setCanvasSize = () => {
  if (!canvas) return;
  const size = getSize();
  canvas.width = size.width;
  canvas.height = size.height;
  canvas.style.aspectRatio = `${size.width} / ${size.height}`;
};

const drawCoverImage = (image: HTMLImageElement, x: number, y: number, width: number, height: number) => {
  if (!ctx) return;
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const boxRatio = width / height;
  let sx = 0;
  let sy = 0;
  let sw = image.naturalWidth;
  let sh = image.naturalHeight;

  if (imageRatio > boxRatio) {
    sw = image.naturalHeight * boxRatio;
    sx = (image.naturalWidth - sw) / 2;
  } else {
    sh = image.naturalWidth / boxRatio;
    sy = (image.naturalHeight - sh) / 2;
  }
  ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
};

const roundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
  if (!ctx) return;
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
};

const fitText = (text: string, maxWidth: number, initialSize: number, weight = 800, family = 'serif') => {
  if (!ctx) return initialSize;
  let size = initialSize;
  do {
    ctx.font = `${weight} ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 4;
  } while (size > 34);
  return size;
};

const wrapText = (text: string, maxWidth: number, maxLines = 3) => {
  if (!ctx) return [text];
  const chars = Array.from(text.trim());
  const lines: string[] = [];
  let line = '';
  chars.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  const clipped = lines.slice(0, maxLines);
  const lastIndex = clipped.length - 1;
  const lastLine = clipped[lastIndex];
  if (lastLine) clipped[lastIndex] = lastLine.replace(/.{1,3}$/, '…');
  return clipped;
};

const drawDefaultPattern = (width: number, height: number, style: CardStyle) => {
  if (!ctx) return;
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, style.soft);
  gradient.addColorStop(0.55, style.background);
  gradient.addColorStop(1, '#fffaf0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 42; i += 1) {
    const x = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const y = (Math.sin(i * 78.233) * 24634.6345) % 1;
    const px = Math.abs(x) * width;
    const py = Math.abs(y) * height;
    ctx.beginPath();
    ctx.arc(px, py, 18 + (i % 5) * 8, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? `${style.accent}33` : i % 3 === 1 ? `${style.stamp}44` : '#ffffff66';
    ctx.fill();
  }
};

const drawCard = () => {
  if (!canvas || !ctx) return;
  setCanvasSize();
  const { width, height } = canvas;
  const style = getStyle();
  const margin = Math.round(Math.min(width, height) * 0.065);
  const photoHeight = Math.round(height * (height > width ? 0.64 : 0.58));
  const title = titleInput?.value.trim() || '菓子屋横丁';
  const date = dateInput?.value.trim() || new Date().toISOString().slice(0, 10);
  const caption = captionInput?.value.trim() || '小江戸川越、甘い香りの石畳へ。';

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = style.background;
  ctx.fillRect(0, 0, width, height);

  if (userImage) {
    drawCoverImage(userImage, 0, 0, width, height);
    ctx.fillStyle = 'rgba(40, 24, 13, 0.25)';
    ctx.fillRect(0, 0, width, height);
  } else {
    drawDefaultPattern(width, height, style);
  }

  ctx.save();
  ctx.shadowColor = 'rgba(35, 20, 10, .28)';
  ctx.shadowBlur = Math.round(width * 0.03);
  ctx.shadowOffsetY = Math.round(width * 0.018);
  roundedRect(margin, margin, width - margin * 2, photoHeight, Math.round(width * 0.035));
  ctx.clip();
  if (userImage) {
    drawCoverImage(userImage, margin, margin, width - margin * 2, photoHeight);
  } else {
    drawDefaultPattern(width - margin * 2, photoHeight, style);
  }
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = '#fff8ea';
  ctx.lineWidth = Math.max(8, Math.round(width * 0.011));
  roundedRect(margin, margin, width - margin * 2, photoHeight, Math.round(width * 0.035));
  ctx.stroke();
  ctx.restore();

  const panelY = margin + photoHeight - Math.round(height * 0.055);
  const panelHeight = height - panelY - margin;
  ctx.save();
  ctx.fillStyle = styleSelect?.value === 'noren' ? 'rgba(63, 40, 27, .90)' : 'rgba(255, 248, 234, .92)';
  roundedRect(margin, panelY, width - margin * 2, panelHeight, Math.round(width * 0.04));
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = style.accent;
  ctx.beginPath();
  ctx.arc(width - margin * 1.75, panelY + Math.round(width * 0.075), Math.round(width * 0.055), 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff8ea';
  ctx.font = `700 ${Math.round(width * 0.032)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('小江戸', width - margin * 1.75, panelY + Math.round(width * 0.075));

  ctx.fillStyle = style.ink;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  const titleSize = fitText(title, width - margin * 4.2, Math.round(width * 0.08), 800, 'serif');
  ctx.font = `800 ${titleSize}px serif`;
  ctx.fillText(title, margin * 1.45, panelY + Math.round(panelHeight * 0.34));

  ctx.fillStyle = style.accent;
  ctx.font = `700 ${Math.round(width * 0.032)}px sans-serif`;
  ctx.fillText(date.replaceAll('-', '.'), margin * 1.48, panelY + Math.round(panelHeight * 0.50));

  ctx.fillStyle = style.ink;
  ctx.globalAlpha = 0.82;
  ctx.font = `500 ${Math.round(width * 0.035)}px sans-serif`;
  const lines = wrapText(caption, width - margin * 3, 3);
  lines.forEach((line, index) => {
    ctx.fillText(line, margin * 1.48, panelY + Math.round(panelHeight * 0.67) + index * Math.round(width * 0.05));
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = style.accent;
  for (let i = 0; i < 7; i += 1) {
    ctx.beginPath();
    ctx.arc(margin * 1.5 + i * Math.round(width * 0.035), height - margin * 0.7, Math.round(width * 0.008), 0, Math.PI * 2);
    ctx.fill();
  }
};

const loadImage = (file: File) => {
  if (!file.type.startsWith('image/')) return;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file);
  const image = new Image();
  image.onload = () => {
    userImage = image;
    if (fileName) fileName.textContent = file.name;
    drawCard();
  };
  image.src = objectUrl;
};

const downloadCard = () => {
  if (!canvas) return;
  drawCard();
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kashiya-yokocho-card-${getSize().label}.png`;
    link.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
};

const initMemoryCard = () => {
  if (!canvas || !ctx) return;
  document.querySelectorAll<HTMLInputElement>('.memory-file-input').forEach((input) => {
    input.addEventListener('change', () => {
      const file = input.files?.[0];
      if (file) loadImage(file);
    });
  });
  [titleInput, dateInput, captionInput, sizeSelect, styleSelect].forEach((input) => {
    input?.addEventListener('input', drawCard);
    input?.addEventListener('change', drawCard);
  });
  $('#render-card')?.addEventListener('click', drawCard);
  downloadButton?.addEventListener('click', downloadCard);
  drawCard();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMemoryCard, { once: true });
} else {
  initMemoryCard();
}
