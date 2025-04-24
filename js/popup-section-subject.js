document.addEventListener('DOMContentLoaded', function () {
    const sectionsButton = document.getElementById('sections-button');
    const subjectsButton = document.getElementById('subjects-button');
    
    const sectionsPopup = document.getElementById('sections-popup');
    const subjectsPopup = document.getElementById('subjects-popup');
    
    const closeSections = document.getElementById('close-sections');
    const closeSectionsBtn = document.getElementById('close-sections-btn');
    const closeSubjects = document.getElementById('close-subjects');
    const closeSubjectsBtn = document.getElementById('close-subjects-btn');

    sectionsButton.addEventListener('click', function () {
        sectionsPopup.style.display = 'flex';
    });

    subjectsButton.addEventListener('click', function () {
        subjectsPopup.style.display = 'flex';
    });

    closeSections.addEventListener('click', function (e) {
        e.preventDefault();
        sectionsPopup.style.display = 'none';
    });

    closeSubjects.addEventListener('click', function (e) {
        e.preventDefault();
        subjectsPopup.style.display = 'none';
    });

    closeSectionsBtn.addEventListener('click', function () {
        sectionsPopup.style.display = 'none';
    });

    closeSubjectsBtn.addEventListener('click', function () {
        subjectsPopup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === sectionsPopup) {
            sectionsPopup.style.display = 'none';
        }
        if (e.target === subjectsPopup) {
            subjectsPopup.style.display = 'none';
        }
    });
});
