const shapeContainer = document.getElementById('shapeContainer');

document.getElementById('btnCircle').addEventListener('click', () => {
  shapeContainer.innerHTML = ''; // pastro më parë
  const circle = document.createElement('div');
  circle.classList.add('shape_circle');
  shapeContainer.appendChild(circle);
});

document.getElementById('btnRect').addEventListener('click', () => {
  shapeContainer.innerHTML = '';
  const rect = document.createElement('div');
  rect.classList.add('shape_rect');
  shapeContainer.appendChild(rect);
});

document.getElementById('btnTriangle').addEventListener('click', () => {
  shapeContainer.innerHTML = '';
  const triangle = document.createElement('div');
  triangle.classList.add('shape_triangle');
  shapeContainer.appendChild(triangle);
});