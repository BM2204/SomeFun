let isDragging = false;
let offsetX, offsetY;
let draggedElement;

document.querySelectorAll('.draggable').forEach((div) => {
    div.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - div.getBoundingClientRect().left;
        offsetY = e.clientY - div.getBoundingClientRect().top;
        draggedElement = div;
        draggedElement.classList.add('dragging');
    });
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        draggedElement.classList.remove('dragging');
    }
    draggedElement = null;
});


function showPopup() {
    // Show the popup container
    document.getElementById('popupContainer').style.display = 'flex';
  }

  function closePopup() {
    // Close the popup container
    document.getElementById('popupContainer').style.display = 'none';
  }