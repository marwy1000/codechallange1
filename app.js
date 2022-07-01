// Read the README.md first :)

const blackPixel = 1;
const whitePixel = 0;
const sampleInputImage = [
    [1,0,0,0,0,0],
    [0,1,0,1,1,1],
    [0,0,1,0,1,0],
    [1,1,0,0,1,0],
    [1,0,1,1,0,0],
    [1,0,0,0,0,1]
];

const workingImage = createWorkingImage(sampleInputImage);
const imageIterationInfo = createIteratedImageInfo(sampleInputImage);

function main() {
	let nextPos = getNextPosition();
	while (nextPos != null) {
   	let pixelColor = sampleInputImage[nextPos.x][nextPos.y];
    if (pixelColor == whitePixel) {
    	imageIterationInfo[nextPos.x][nextPos.y] = 0;
        workingImage[nextPos.x][nextPos.y] == whitePixel;
    }
    else {
        imageIterationInfo[nextPos.x][nextPos.y] = 0;
        workingImage[nextPos.x][nextPos.y] = blackPixel;
        activateNeighbours(nextPos);
    }
  	nextPos = getNextPosition();
  }
  console.table(sampleInputImage);
  console.table(workingImage);
}

/**
 * Searches imageIterationInfo for 1:s and returns the position
 * @returns json with x,y properties or null if not found}
 */
function getNextPosition() {
	for (let x=0; x < imageIterationInfo.length; x++) {
        for (let y=0; y < imageIterationInfo[x].length; y++) {
            if (imageIterationInfo[x][y] == 1) {
                return {x: x, y: y};
            }
        }
    } 
    return null;
}
//! improve this
function activateNeighbours(currentPos) {
	if ((currentPos.x-1 > 0)) {
        if (imageIterationInfo[currentPos.x-1][currentPos.y] == null)
            imageIterationInfo[currentPos.x-1][currentPos.y] = 1;
	}
    if ((currentPos.x+1 < imageIterationInfo.length)) {
        if (imageIterationInfo[currentPos.x+1][currentPos.y] == null)
            imageIterationInfo[currentPos.x+1][currentPos.y] = 1;
    }
    if ((currentPos.y-1 > 0)){
        if (imageIterationInfo[currentPos.x][currentPos.y-1] == null)
            imageIterationInfo[currentPos.x][currentPos.y-1] = 1;
    }
    if ((currentPos.y+1 < imageIterationInfo[currentPos.x].length)) {
        if (imageIterationInfo[currentPos.x][currentPos.y+1] == null)
            imageIterationInfo[currentPos.x][currentPos.y+1] = 1;
    }
}

function createWorkingImage(sampleInputImage) {
    return copyMatrixWithMiddleValue(sampleInputImage, 0);
}

function createIteratedImageInfo(sampleInputImage) {    
    return copyMatrixWithMiddleValue(sampleInputImage, null);
}

function copyMatrixWithMiddleValue(sampleInputImage, middleValue) {
    //* Keep the edges same, replace center as whitePixels
    var returnImage = sampleInputImage.map(arr => arr.slice());

    returnImage.forEach((row, rowIndex) => {
        row.forEach((pixel, pixelIndex) => {
            if ((rowIndex > 0) && (rowIndex < returnImage.length -1) && (pixelIndex > 0) && (pixelIndex < returnImage[rowIndex].length - 1))
                returnImage[rowIndex][pixelIndex] = middleValue;
        });
    });
    return returnImage;
}

console.time();
main();
console.timeEnd();