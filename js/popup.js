document.addEventListener('DOMContentLoaded', function() {
    const gradesButton = document.getElementById('grades-button');
    const sectionsButton = document.getElementById('sections-button');
    const subjectsButton = document.getElementById('subjects-button');
    
    const gradesPopup = document.getElementById('grades-popup');
    const sectionsPopup = document.getElementById('sections-popup');
    const subjectsPopup = document.getElementById('subjects-popup');
    
    const closeGrades = document.getElementById('close-grades');
    const closeGradesBtn = document.getElementById('close-grades-btn');
    const closeSections = document.getElementById('close-sections');
    const closeSectionsBtn = document.getElementById('close-sections-btn');
    const closeSubjects = document.getElementById('close-subjects');
    const closeSubjectsBtn = document.getElementById('close-subjects-btn');

    gradesButton.addEventListener('click', function() {
        gradesPopup.style.display = 'flex';
    });
    
    sectionsButton.addEventListener('click', function() {
        sectionsPopup.style.display = 'flex';
    });
    
    subjectsButton.addEventListener('click', function() {
        subjectsPopup.style.display = 'flex';
    });
    
    closeGrades.addEventListener('click', function(e) {
        e.preventDefault();
        gradesPopup.style.display = 'none';
    });
    
    closeGradesBtn.addEventListener('click', function() {
        gradesPopup.style.display = 'none';
    });
    
    closeSections.addEventListener('click', function(e) {
        e.preventDefault();
        sectionsPopup.style.display = 'none';
    });
    
    closeSectionsBtn.addEventListener('click', function() {
        sectionsPopup.style.display = 'none';
    });
    
    closeSubjects.addEventListener('click', function(e) {
        e.preventDefault();
        subjectsPopup.style.display = 'none';
    });
    
    closeSubjectsBtn.addEventListener('click', function() {
        subjectsPopup.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === gradesPopup) {
            gradesPopup.style.display = 'none';
        }
        if (e.target === sectionsPopup) {
            sectionsPopup.style.display = 'none';
        }
        if (e.target === subjectsPopup) {
            subjectsPopup.style.display = 'none';
        }
    });
});