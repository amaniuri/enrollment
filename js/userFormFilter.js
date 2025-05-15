//USER TYPE FILTER
const userTypeSelect = document.getElementById("userType");

userTypeSelect.addEventListener("change", () => {
  const type = userTypeSelect.value;
  document.querySelectorAll(".student-only, .instructor-only, .admin-only").forEach(el => {
    el.style.display = "none";
  });
  
  if (type === "student") {
    document.querySelectorAll(".student-only").forEach(el => el.style.display = "block");
  } else if (type === "instructor") {
    document.querySelectorAll(".instructor-only").forEach(el => el.style.display = "block");
  } else if (type === "admin") {

  }
});

//NEW USER FORM BUTTON FUNCTIONALITY
function confirmCancel() {
  if (confirm("Are you sure you want to cancel? This will clear the form.")) {
    document.getElementById("userForm").reset();
  }
}

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("User registered!");
  this.reset();
});