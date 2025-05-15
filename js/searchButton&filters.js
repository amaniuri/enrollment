//SAMPLE DATA LANG TO

let students = [
  { id: '2023-12345', name: 'URI, AMANI U.', email: 'AMANIURI@WMSU.EDU.PH', college: 'CCS', course: 'BSIT', yearLevel: '1', status: 'PENDING' },
  { id: '2023-23456', name: 'SAHIBUL, JAYNA L.', email: 'JAYNASAHIBUL@WMSU.EDU.PH', college: 'CN', course: 'BSN', yearLevel: '2', status: 'COMPLETED' },
  { id: '2023-34567', name: 'SAPIE, SHAHEENA C.', email: 'SHAHEENASAPIE@WMSU.EDU.PH', college: 'CTE', course: 'BSED', yearLevel: '3', status: 'PENDING' },
];

let currentTab = 'pending';

const studentList = document.getElementById('student-list');
const emptyState = document.getElementById('empty-state');
const collegeFilter = document.getElementById('course-filter-college');
const courseFilter = document.getElementById('course-filter');
const yearFilter = document.getElementById('year-filter');
const searchInput = document.getElementById('search-input');
const actionsHeader = document.getElementById('actions-header');
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    filterAndRender();
  });
});

function filterAndRender() {
  let filtered = students.filter(student => student.status.toLowerCase() === currentTab);

  const college = collegeFilter.value;
  const course = courseFilter.value;
  const year = yearFilter.value;
  const keyword = searchInput.value.toLowerCase();
  
  if (college !== 'all') {
    filtered = filtered.filter(s => s.college === college);
  }

  if (course !== 'all') {
    filtered = filtered.filter(s => s.course === course);
  }

  if (year !== 'all') {
    filtered = filtered.filter(s => s.yearLevel === year);
  }


  if (keyword) {
    filtered = filtered.filter(student =>
      student.id.toLowerCase().includes(keyword) ||
      student.name.toLowerCase().includes(keyword) ||
      student.email.toLowerCase().includes(keyword) ||
      student.course.toLowerCase().includes(keyword) ||
      student.yearLevel.toLowerCase().includes(keyword)
    );
  }
  
  renderStudents(filtered);
}

function renderStudents(filteredStudents) {
  studentList.innerHTML = '';
  
  if (filteredStudents.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  
  emptyState.style.display = 'none';
  actionsHeader.style.display = currentTab === 'pending' ? 'table-cell' : 'none';
  
  filteredStudents.forEach(student => {
    const profilePage = student.status.toLowerCase() === 'pending' ? 'pending.html' : 'completed.html';
    
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${student.id}</td>
    <td><a class="student-name-span" href="${profilePage}?id=${student.id}">${student.name}</a></td>
    <td>${student.email}</td>
    <td>${student.college}</td>
    <td>${student.course}</td>
    <td>${student.yearLevel}</td>
    ${currentTab === 'pending' ? ` 
      <td>
      
      <button class="action-btn approve-btn" data-id="${student.id}">
      <img src="../images/check-icon.png" alt="Approve">
      </button>
      <button class="action-btn cancelBtn" data-id="${student.id}">
      <img src="../images/x-icon.png" alt="Cancel">
      </button>
      </td>` : `<td style="display: none;"></td>`}
      `;
      
      studentList.appendChild(row);
    });

    document.querySelectorAll('.approve-btn').forEach(btn => {
      btn.addEventListener('click', () => approveEnrollment(btn.dataset.id));
    });

    document.querySelectorAll('.cancel-btn').forEach(btn => {
      btn.addEventListener('click', () => cancelEnrollment(btn.dataset.id));
    });
}

function approveEnrollment(id) {
  const student = students.find(s => s.id === id);
  if (!student) return;
  
  if (confirm(`Accept enrollment request for ${student.name}?`)) {
    student.status = 'COMPLETED';
    filterAndRender();
  }
}

function cancelEnrollment(id) {
  if (confirm(`Cancel enrollment?`)) {
    students = students.filter(s => s.id !== id);
    filterAndRender();
  }
}

searchInput.addEventListener('input', filterAndRender);
courseFilter.addEventListener('change', filterAndRender);
yearFilter.addEventListener('change', filterAndRender);
collegeFilter.addEventListener('change', filterAndRender);

filterAndRender();

const clearBtn = document.getElementById('clear-filters-btn');

clearBtn.addEventListener('click', () => {
  collegeFilter.value = 'all';
  courseFilter.value = 'all';
  yearFilter.value = 'all';
  searchInput.value = '';
  
  filterAndRender();
});

