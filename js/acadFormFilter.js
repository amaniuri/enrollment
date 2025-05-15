const acadTypeSelect = document.getElementById("acadType");

acadTypeSelect.addEventListener("change", () => {
    const type = acadTypeSelect.value;
    
    document.querySelectorAll(".course-only, .section-only, .subject-only").forEach(group => {
        group.style.display = "none";
        group.querySelectorAll("input, select").forEach(input => {
            input.required = false;
        });
    });
    
    let visibleGroups = [];
    if (type === "course") {
        visibleGroups = document.querySelectorAll(".course-only");
    } else if (type === "section") {
        visibleGroups = document.querySelectorAll(".section-only");
    } else if (type === "subject") {
        visibleGroups = document.querySelectorAll(".subject-only");
    }
    
    visibleGroups.forEach(group => {
        group.style.display = "block";
        group.querySelectorAll("input, select").forEach(input => {
            input.required = true;
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    acadTypeSelect.dispatchEvent(new Event("change"));
});

//NEW USER FORM BUTTON FUNCTIONALITY
function confirmCancel() {
    if (confirm("Are you sure you want to cancel? This will clear the form.")) {
        document.getElementById("acadForm").reset();
        acadTypeSelect.dispatchEvent(new Event("change"));
    }
}

document.getElementById("acadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Academic data submitted!");
    this.reset();
    acadTypeSelect.dispatchEvent(new Event("change"));
});