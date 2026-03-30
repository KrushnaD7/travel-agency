const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  icon.textContent = document.body.classList.contains("dark-mode")
    ? "🌙"
    : "🌞";
});