const { convertCSVToArr } = require('../utils/textToArray')


const calcFuelSpend = (arr) => {
    arr = arr.map(f => parseInt(f))
    const max = Math.max(...arr)

    let distances = new Array(max + 1).fill(0)

    distances = distances.map((d, idx) => {
        arr.forEach(f => {
            const diff = Math.abs(f - idx)
            const totalArr = new Array(diff).fill(0).map((_, idx) => idx + 1)
            const sum = totalArr.reduce((a, b) => a + b, 0)

            d += sum
        })

        return d
    })

    const min = Math.min(...distances)

    return min
}

const gimme = convertCSVToArr('q1gimme.txt');
console.log('test input (should be ): 168', calcFuelSpend(gimme))


const test = convertCSVToArr('q1test.txt');
console.log('final input: ', calcFuelSpend(test))
