document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorRing.style.left = `${e.clientX}px`;
      cursorRing.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', () => {
      cursor.classList.add('active');
      cursorRing.classList.add('active');
  });

  document.addEventListener('mouseup', () => {
      cursor.classList.remove('active');
      cursorRing.classList.remove('active');
  });
});
