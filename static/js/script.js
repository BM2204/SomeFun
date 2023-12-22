let isDragging = false;
let offsetX, offsetY;
let draggedElement;

function startDragging(e) {
    isDragging = true;

    if (e.type === 'mousedown') {
        offsetX = e.clientX - draggedElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggedElement.getBoundingClientRect().top;
    } else if (e.type === 'touchstart') {
        offsetX = e.touches[0].clientX - draggedElement.getBoundingClientRect().left;
        offsetY = e.touches[0].clientY - draggedElement.getBoundingClientRect().top;
    }

    draggedElement.classList.add('dragging');
}

function handleDragging(e) {
    if (!isDragging) return;

    let x, y;

    if (e.type === 'mousemove') {
        x = e.clientX - offsetX;
        y = e.clientY - offsetY;
    } else if (e.type === 'touchmove') {
        x = e.touches[0].clientX - offsetX;
        y = e.touches[0].clientY - offsetY;
    }

    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
}

function stopDragging() {
    if (isDragging) {
        isDragging = false;
        draggedElement.classList.remove('dragging');
    }
    draggedElement = null;
}

document.querySelectorAll('.draggable').forEach((div) => {
    div.addEventListener('mousedown', (e) => {
        draggedElement = div;
        startDragging(e);
    });

    div.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default behavior to avoid issues with touch events
        draggedElement = div;
        startDragging(e);
    });
});

document.addEventListener('mousemove', handleDragging);
document.addEventListener('touchmove', handleDragging);

document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);



function showPopup() {
    // Show the popup container
    document.getElementById('popupContainer').style.display = 'flex';
  }

  function closePopup() {
    // Close the popup container
    document.getElementById('popupContainer').style.display = 'none';
  }