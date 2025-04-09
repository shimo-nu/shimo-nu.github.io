document.addEventListener('DOMContentLoaded', () => {
  const notes = document.querySelectorAll('.note');
  const columnWidth = 50; // 2列の幅
  const rowHeight = 25; // 行の高さ
  const leftMargin = 15; // 左側の余白

  // メモを基本的に2列×n列に配置し、少しずらす
  notes.forEach((note, index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const topOffset = Math.random() * 5 - 2.5; // 上下に±2.5%ずらす
      const leftOffset = Math.random() * 5 - 2.5; // 左右に±2.5%ずらす

      note.style.top = `calc(${row * rowHeight}vh + ${topOffset}%)`;
      note.style.left = `calc(${leftMargin + column * columnWidth}vw + ${leftOffset}%)`;
  });

  // 順々に表示するアニメーション
  notes.forEach((note, index) => {
      setTimeout(() => {
          note.style.opacity = '1';
          note.style.transform = 'rotate(0deg)';
          note.style.animation = 'fadeIn 1s';
      }, index * 700); // 表示間隔を700ミリ秒に調整
  });

  // マウスオーバーで1.5秒後に拡大
  notes.forEach(note => {
      let timer;
      note.addEventListener('mouseover', () => {
          timer = setTimeout(() => {
              note.classList.add('enlarged');
          }, 1500);
      });
      note.addEventListener('mouseout', () => {
          clearTimeout(timer);
          note.classList.remove('enlarged');
      });
  });
});
