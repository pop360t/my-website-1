const themeBtn = document.getElementById('theme-btn');
const statusText = document.getElementById('status-text');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  statusText.textContent = isDark ? 'Current Theme: Dark' : 'Current Theme: Light';
});