const { convertCSVToArr } = require('../utils/textToArray')


const calcFuelSpend = (arr) => {
    arr = arr.map(f => parseInt(f))
    const max = Math.max(...arr)

    let distances = new Array(max + 1).fill(0)

    distances = distances.map((d, idx) => {
        arr.forEach(f => {
            const diff = Math.abs(f - idx)
            d += diff
        })

        return d
    })

    const min = Math.min(...distances)

    return min
}

const gimme = convertCSVToArr('q1gimme.txt');
console.log('test input (should be ): 37', calcFuelSpend(gimme))


const test = convertCSVToArr('q1test.txt');
console.log('final input (should be ): 37', calcFuelSpend(test))
