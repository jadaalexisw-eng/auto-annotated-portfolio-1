/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true
};

module.exports = nextConfig;
const root = document.documentElement;
const themeButton = document.querySelector('#theme');
let theme = 'light';
try { theme = localStorage.getItem('jada-theme') || theme; } catch {}
function applyTheme() {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
}
applyTheme();
themeButton.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark'; applyTheme();
  try { localStorage.setItem('jada-theme', theme); } catch {}
});
document.querySelector('#year').textContent = new Date().getFullYear();
