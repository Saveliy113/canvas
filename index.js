const canvasPlot = document.getElementById('canvas_plot');
const ctx = canvasPlot.getContext('2d');

const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX = 30;
const scaleY = 30;

const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;
const shiftNumbers = 5;
const shiftAxis = 10;

ctx.font = `${scaleX / 2}px Arial`;
ctx.textAlign = 'left';
ctx.Baseline = 'top';

// Рисуем сетку
//X-axis
ctx.beginPath();
ctx.strokeStyle = '#f5f0e8';

ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);
ctx.fillText('y', xAxis - shiftAxis * 2, shiftAxis * 2);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);
ctx.fillText('x', canvasPlotWidth - shiftAxis * 2, yAxis - shiftAxis);

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
  ctx.moveTo(i, 0);
  ctx.lineTo(i, canvasPlotHeight);

  ctx.fillText(
    (i - xAxis) / scaleX,
    i + shiftNumbers,
    yAxis + shiftNumbers * 3
  );
}

for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
  ctx.moveTo(0, i);
  ctx.lineTo(canvasPlotWidth, i);

  ctx.fillText(
    (yAxis - i) / scaleY,
    xAxis + shiftNumbers,
    i + shiftNumbers * 3
  );
}

ctx.stroke();
ctx.closePath();

//Axises

ctx.beginPath();
ctx.strokeStyle = '#000000';

ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);

ctx.stroke();
ctx.closePath();

//Graphic y = x^2
ctx.fillStyle = '#ff0000';
for (let i = 0; i <= canvasPlotWidth; i++) {
  const x = (i - xAxis) / scaleX;
  const y = Math.pow(x, 2);
  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
