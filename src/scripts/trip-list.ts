type SavedTripItem = {
  id: string;
  title: string;
  category: string;
  note: string;
  time?: string;
  image?: string;
  done?: boolean;
  createdAt: string;
};

const STORAGE_KEY = 'kashiya-yokocho-trip-v1';

const readItems = (): SavedTripItem[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedTripItem[];
    return Array.isArray(parsed) ? parsed.filter((item) => item && item.id && item.title) : [];
  } catch {
    return [];
  }
};

const writeItems = (items: SavedTripItem[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const itemFromButton = (button: HTMLButtonElement): SavedTripItem => ({
  id: button.dataset.id ?? crypto.randomUUID(),
  title: button.dataset.title ?? '行きたい場所',
  category: button.dataset.category ?? 'メモ',
  note: button.dataset.note ?? '',
  time: button.dataset.time ?? '',
  image: button.dataset.image ?? '',
  createdAt: new Date().toISOString(),
});

const updateCount = () => {
  const count = readItems().length;
  document.querySelectorAll<HTMLElement>('#trip-count, [data-trip-count]').forEach((el) => {
    el.textContent = String(count);
  });
};

const updateSaveButtons = () => {
  const ids = new Set(readItems().map((item) => item.id));
  document.querySelectorAll<HTMLButtonElement>('.js-save-spot').forEach((button) => {
    const id = button.dataset.id ?? '';
    const saved = ids.has(id);
    button.setAttribute('aria-pressed', saved ? 'true' : 'false');
    const label = button.querySelector<HTMLElement>('[data-save-label]');
    const icon = button.querySelector<HTMLElement>('[data-save-icon]');
    // 表示文言はボタン側の data 属性（言語別）から取得する。
    const addLabel = button.dataset.labelAdd ?? '保存';
    const savedLabel = button.dataset.labelSaved ?? '保存済み';
    if (label) label.textContent = saved ? savedLabel : addLabel;
    if (icon) icon.textContent = saved ? '✓' : '+';
    button.classList.toggle('is-saved', saved);
  });
};

const createText = (tagName: string, text: string, className?: string) => {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
};

const renderList = () => {
  const list = document.querySelector<HTMLElement>('#trip-list');
  const empty = document.querySelector<HTMLElement>('#trip-empty');
  const actions = document.querySelector<HTMLElement>('#trip-actions');
  if (!list) return;

  const items = readItems();
  list.replaceChildren();
  empty?.classList.toggle('hidden', items.length > 0);
  actions?.classList.toggle('hidden', items.length === 0);

  items.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'paper-card rounded-[1.6rem] p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start';

    if (item.image) {
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.title;
      image.loading = 'lazy';
      image.className = 'h-28 w-full sm:w-36 rounded-[1.15rem] object-cover border border-[#693f28]/15';
      article.append(image);
    }

    const body = document.createElement('div');
    body.className = 'min-w-0 flex-1';
    const meta = createText('p', item.category + (item.time ? `・${item.time}` : ''), 'text-xs font-bold tracking-[.2em] text-[#b94732]');
    const title = createText('h2', item.title, 'mt-1 font-serif text-xl font-bold text-[#3f281b]');
    const note = createText('p', item.note, 'mt-2 text-sm leading-7 text-[#7c6757]');
    body.append(meta, title, note);

    const controls = document.createElement('div');
    controls.className = 'flex shrink-0 gap-2';

    const doneButton = document.createElement('button');
    doneButton.type = 'button';
    doneButton.className = item.done ? 'btn-primary text-sm' : 'btn-secondary text-sm';
    doneButton.textContent = item.done ? '訪問済み' : '未訪問';
    doneButton.addEventListener('click', () => {
      const next = readItems().map((candidate) =>
        candidate.id === item.id ? { ...candidate, done: !candidate.done } : candidate,
      );
      writeItems(next);
      updateCount();
      updateSaveButtons();
      renderList();
    });

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'btn-secondary text-sm';
    removeButton.textContent = '削除';
    removeButton.addEventListener('click', () => {
      writeItems(readItems().filter((candidate) => candidate.id !== item.id));
      updateCount();
      updateSaveButtons();
      renderList();
    });

    controls.append(doneButton, removeButton);
    article.append(body, controls);
    list.append(article);
  });
};

const exportList = async () => {
  const items = readItems();
  if (items.length === 0) return;
  const text = items
    .map((item, index) => `${index + 1}. ${item.title}｜${item.category}${item.time ? `｜${item.time}` : ''}\n${item.note}`)
    .join('\n\n');
  try {
    await navigator.clipboard.writeText(text);
    window.alert('旅のリストをクリップボードにコピーしました。');
  } catch {
    window.alert(text);
  }
};

const initTripList = () => {
  document.querySelectorAll<HTMLButtonElement>('.js-save-spot').forEach((button) => {
    button.addEventListener('click', () => {
      const item = itemFromButton(button);
      const current = readItems();
      const exists = current.some((candidate) => candidate.id === item.id);
      const next = exists ? current.filter((candidate) => candidate.id !== item.id) : [item, ...current];
      writeItems(next);
      updateCount();
      updateSaveButtons();
      renderList();
    });
  });

  document.querySelector<HTMLButtonElement>('#trip-export')?.addEventListener('click', () => {
    void exportList();
  });

  document.querySelector<HTMLButtonElement>('#trip-clear')?.addEventListener('click', () => {
    if (!window.confirm('この端末の旅のリストをすべて削除しますか？')) return;
    writeItems([]);
    updateCount();
    updateSaveButtons();
    renderList();
  });

  updateCount();
  updateSaveButtons();
  renderList();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTripList, { once: true });
} else {
  initTripList();
}
