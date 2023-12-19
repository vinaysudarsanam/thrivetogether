// Get references to the buttons
const homeButton = document.getElementById('home-button');
const storyButton = document.getElementById('story-button');
const projectsButton = document.getElementById('projects-button');
const involvedButton = document.getElementById('involved-button');
const nameButton = document.getElementById('name-button');

//Projects Tab Scrolling Section
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const tabs = document.querySelectorAll('.tab')
let currentTabIndex = 0;

// Add event listeners to the buttons
homeButton.addEventListener('click', handleHomeClick);
storyButton.addEventListener('click', handleStoryClick);
projectsButton.addEventListener('click', handleProjectsClick);
involvedButton.addEventListener('click', handleInvolvedClick);
nameButton.addEventListener('click', handleNameClick)
prevButton.addEventListener('click', showPreviousTab);
nextButton.addEventListener('click', showNextTab);

// Redirect to the home page
function handleHomeClick() {
    window.location.href = "index.html";
}

function handleProjectsClick() {
    window.location.href = "projects.html";
}

function handleStoryClick() {
    window.location.href = "story.html";
}

function handleInvolvedClick() {
    window.location.href = "contact.html";
}

// Redirect to the home page
function handleNameClick() {
    window.location.href = "index.html";
}

//Scrolling Tab for Projects Section
function showPreviousTab() {
    // Hide the current tab
    tabs[currentTabIndex].classList.remove('active');
    
    // Decrement the index (looping back to the last tab if necessary)
    currentTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
    
    // Show the new current tab
    tabs[currentTabIndex].classList.add('active');
}

function showNextTab() {
    // Hide the current tab
    tabs[currentTabIndex].classList.remove('active');
    
    // Increment the index (looping back to the first tab if necessary)
    currentTabIndex = (currentTabIndex + 1) % tabs.length;
    
    // Show the new current tab
    tabs[currentTabIndex].classList.add('active');
}





