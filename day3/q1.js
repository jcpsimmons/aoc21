const { convertTxtToArr } = require('../utils/textToArray')

const getPowerConsumption = (arr) => {
    const moreThanHalf = Math.round(arr.length / 2)
    const totals = new Array(arr[0].length).fill(0)

    for (let i = 0; i < arr.length; i++) {
        const curStr = arr[i]
        for (let c = 0; c < curStr.length; c++) {
            const curInt = parseInt(curStr[c])
            totals[c] += curInt
        }
    }

    const gamma = []
    const epsilon = []

    for (let i = 0; i < totals.length; i++) {
        if (totals[i] >= moreThanHalf) {
            gamma.push(1)
            epsilon.push(0)
        } else {
            gamma.push(0)
            epsilon.push(1)
        }
    }

    const gammaStr = gamma.map(n => n + "").join('')
    const epsilonStr = epsilon.map(n => n + "").join('')

    return parseInt(gammaStr, 2) * parseInt(epsilonStr, 2)
}

const gimme = convertTxtToArr('./q1gimme.txt')
console.log('should be 198: ', getPowerConsumption(gimme))

const testInput = convertTxtToArr('./q1Input.txt')
console.log(getPowerConsumption(testInput))
