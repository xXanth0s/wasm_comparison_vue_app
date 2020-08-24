export function rotateMatrix(matrix) {

  const newGrid = [];
  const rowLength = Math.sqrt(matrix.length);
  newGrid.length = matrix.length;

  for (let i = 0; i < matrix.length; i++)
  {
    //convert to x/y
    const x = i % rowLength;
    const y = Math.floor(i / rowLength);

    //find new x/y
    const newX = rowLength - y - 1;
    const newY = x;

    //convert back to index
    const newPosition = newY * rowLength + newX;
    newGrid[newPosition] = matrix[i];
  }
}
