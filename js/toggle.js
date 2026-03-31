const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// 👉 LOAD SAVED THEME ON PAGE LOAD
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
  icon.textContent = "🌙";
} else {
  icon.textContent = "🌞";
}

// 👉 WHEN USER TOGGLES
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  // change icon
  icon.textContent = isDark ? "🌙" : "🌞";

  // SAVE THEME
  localStorage.setItem("theme", isDark ? "dark" : "light");
});