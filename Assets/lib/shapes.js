const fs = require('fs');

class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  renderCircle(color) {
    return `<circle cx="50" cy="50" r="40" fill="${color}" />`;
  }

  renderTriangle(color) {
    return `<polygon points="50,0 0,100 100,100" fill="${color}" />`;
  }

  renderSquare(color) {
    return `<rect x="10" y="10" width="80" height="80" fill="${color}" />`;
  }

  createFile(text, textColor, shape, shapeColor, filename) {
    let shapeMarkup = '';
    if (shape === 'triangle') {
      shapeMarkup = `<polygon points="300,0 0,600 600,600" fill="${shapeColor}" />`;
    } else if (shape === 'circle') {
      shapeMarkup = `<circle cx="300" cy="300" r="240" fill="${shapeColor}" />`;
    } else if (shape === 'rect') {
      shapeMarkup = `<rect x="60" y="60" width="480" height="480" fill="${shapeColor}" />`;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="650" style="display: block; margin: auto;">
      <g transform="translate(0, 100)">
        ${shapeMarkup}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="150">${text}</text>
      </g>
    </svg>`;

    fs.writeFile(filename, svgContent, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Generated ${filename}`);
    });
  }
}

module.exports = Shape;
