const { convertTxtToArr } = require('../utils/textToArray')

const findCoords = (instructionArr) => {
    let forward = 0
    let depth = 0

    instructionArr.forEach((i) => {
        const instructionSet = i.split(" ")
        const amount = parseInt(instructionSet[1])

        switch (instructionSet[0]) {
            case 'forward':
                forward += amount
                break;
            case 'down':
                depth += amount
                break
            case 'up':
                depth -= amount
                break;
        }
    })

    return forward * depth
}

const testCase1 = convertTxtToArr('./q1Input.txt')
console.log('testCase1: ', findCoords(testCase1))

const demoCase = convertTxtToArr('./q1gimme.txt')
console.log('demoCase (should = 150): ', findCoords(demoCase))
