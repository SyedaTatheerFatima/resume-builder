document.getElementById("generateResume").addEventListener("click", function () {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Validate required fields
    if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
    }

    // Build resume dynamically
    const resumeContainer = document.getElementById("resume");
    resumeContainer.innerHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>${email} | ${phone}</p>
            <p>${address}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education || "Not provided"}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience || "Not provided"}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills ? skills.split(",").map(skill => `<span>${skill.trim()}</span>`).join(", ") : "Not provided"}</p>
        </div>
    `;
});
