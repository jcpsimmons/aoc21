const { convertTxtToArr } = require("../utils/textToArray");

const formatData = (arr) => {
  return arr.map((item) => {
    const row = item.split("");
    return row.map((i) => parseInt(i));
  });
};

const findAdjacent = (arr, row, col) => {
  const curNumber = arr[row][col];
  const adjacents = [];

  if (arr[row - 1] !== undefined) {
    adjacents.push(arr[row - 1][col]);
  }

  if (arr[row + 1] !== undefined) {
    adjacents.push(arr[row + 1][col]);
  }

  if (arr[row][col - 1] !== undefined) {
    adjacents.push(arr[row][col - 1]);
  }

  if (arr[row][col + 1] !== undefined) {
    adjacents.push(arr[row][col + 1]);
  }

  if (adjacents.every((i) => i >= curNumber)) {
    // console.log("risk found: ", curNumber);
    // console.log("curNumber :>> ", curNumber);
    // console.log("adjacents :>> ", adjacents);
    return curNumber + 1;
  }

  return null;
};

const findRisk = (data) => {
  let risk = 0;
  const formattedData = formatData(data);

  for (let row = 0; row < formattedData.length; row++) {
    for (let col = 0; col < formattedData[row].length; col++) {
      const adjacentRisk = findAdjacent(formattedData, row, col);
      if (adjacentRisk !== null) {
        risk += adjacentRisk;
      }
    }
  }

  return risk;
};

const gimme = convertTxtToArr("./gimme.txt");
console.log(findRisk(gimme));

const test = convertTxtToArr("./test.txt");
console.log(findRisk(test));
