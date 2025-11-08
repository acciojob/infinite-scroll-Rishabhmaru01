//your code here!
const list = document.getElementById('infi-list');

// Function to create and add list items
let count = 1;
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add 10 default list items when page loads
addItems(10);

// Add 2 more items when user scrolls to bottom
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
