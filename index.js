const canvasPlot = document.getElementById('canvas_plot');
const ctx = canvasPlot.getContext('2d');

const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX = 50;
const scaleY = 50;

// Рисуем сетку

//X-axis
ctx.beginPath();
ctx.strokeStyle = '#f5f0e8';

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
  ctx.moveTo(i, 0);
  ctx.lineTo(i, canvasPlotHeight);
}

for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
  ctx.moveTo(0, i);
  ctx.lineTo(canvasPlotWidth, i);
}

ctx.stroke();
ctx.closePath();

//Axises
const xAxis = canvasPlotWidth / 2;
const yAxis = canvasPlotHeight / 2;

ctx.beginPath();
ctx.strokeStyle = '#000000';

ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);

ctx.stroke();
ctx.closePath();
