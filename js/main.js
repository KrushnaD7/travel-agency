// ✅ EmailJS init
emailjs.init("y3Mg3XdNlg3SoMnmN");

const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  try {
    console.log("Submitting...");

    // ✅ Send Email only
    await emailjs.send("service_8033yco", "template_c6fqjwp", {
      name,
      email,
      phone
    });

    console.log("Email sent");

    alert("✅ Submitted successfully!");
    form.reset();

  } catch (err) {
    console.error("FULL ERROR:", err);
    alert("❌ Error: " + (err?.text || err?.message || "Something failed"));
  }
});