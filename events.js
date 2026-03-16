// 1. Click event
document.getElementById('clickBtn').addEventListener('click', function () {
  alert('Button was clicked!');
});

// 2. Keyup event on input field
document.getElementById('inputBox').addEventListener('keyup', function (event) {
  console.log('You typed:', event.target.value);
});

// 3. Mouseover event
document.getElementById('hoverText').addEventListener('mouseover', function () {
  this.style.color = 'blue';
  this.textContent = 'You hovered over me!';
});

// 4. Mouseout event
document.getElementById('hoverText').addEventListener('mouseout', function () {
  this.style.color = 'black';
  this.textContent = 'Hover over this text';
});
