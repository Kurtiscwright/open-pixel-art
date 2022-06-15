const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { sortPixels, pixelsToString } = require('../utils/pixels-helper');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pixelFilePath = path.join('_data', 'pixels.json');

// Will read the current file, parse the contents, sort the pixels and write a sorted string of pixels to a file else it will write to console.
readFile(pixelFilePath, { encoding: 'utf8' })
  .then(pixelFileData => {
    const pixels = JSON.parse(pixelFileData);

    const sortedPixelString = pixelsToString(sortPixels(pixels));

    writeFile(pixelFilePath, sortedPixelString);
  })
  .catch(console.log);
