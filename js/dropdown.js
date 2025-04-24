const yearDropdown = document.getElementById('yearLevel');
const statusField = document.getElementById('status');

function updateStatus() {
  const yearLevel = parseInt(yearDropdown.value);
  if (yearLevel === 1) {
    statusField.value = "FRESHMAN";
  } else if (yearLevel >= 2 && yearLevel <= 4) {
    statusField.value = "OLD STUDENT";
  } else {
    statusField.value = ""; 
  }
}

yearDropdown.addEventListener('change', updateStatus);

updateStatus();