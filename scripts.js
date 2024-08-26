// Get the side menu and close button elements
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.querySelector('.close-btn');
const listIcon = document.querySelector('.logo i.bi.bi-list');

// Add event listener to list icon
listIcon.addEventListener('click', () => {
  console.log('List icon clicked');
  // Toggle the open class on side menu to show the menu
  sideMenu.classList.add('open');
});

// Add event listener to close button
closeBtn.addEventListener('click', () => {
  console.log('Close button clicked');
  // Remove the open class on side menu to hide the menu
  sideMenu.classList.remove('open');
});
