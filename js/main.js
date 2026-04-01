import { CONFIG } from "./config.js";

// init EmailJS
emailjs.init(CONFIG.PUBLIC_KEY);

// elements
const form = document.getElementById("leadForm");
const btn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const loader = document.getElementById("btnLoader");
const toast = document.getElementById("toast");

// toast function
function showToast(message, success = true) {
  toast.innerText = message;
  toast.style.background = success ? "#16a34a" : "#dc2626";
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

// form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  try {
    // disable button + show loader
    btn.disabled = true;
    btnText.innerText = "Sending...";
    loader.classList.remove("d-none");

    console.log("Submitting...");

    // send email
    await emailjs.send(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, {
      name,
      email,
      phone
    });

    console.log("Email sent");

    showToast("✅ Submitted successfully!");

    form.reset();

  } catch (err) {
    console.error("FULL ERROR:", err);
    showToast("❌ " + (err?.text || err?.message || "Something failed"), false);
  } finally {
    // restore button
    btn.disabled = false;
    btnText.innerText = "Submit";
    loader.classList.add("d-none");
  }
});