const { depths } = require('./data')


const numIncresed = (arr) => {
    let increased = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] > arr[i - 1]) increased++
    }

    return increased
}

console.log(numIncresed(depths))
