const { convertTxtToArr } = require('../utils/textToArray')

const findCoordsWithAim = (instructionArr) => {
    let horiz = 0
    let depth = 0
    let aim = 0

    instructionArr.forEach((i) => {
        console.log(i)
        const instructionSet = i.split(" ")
        const amount = parseInt(instructionSet[1])

        switch (instructionSet[0]) {
            case 'forward':
                horiz += amount
                const depthAmount = aim * amount
                depth += depthAmount
                break;
            case 'down':
                aim += amount
                break
            case 'up':
                aim -= amount
                break;
        }

    })

    console.log(`horiz`, horiz)
    console.log('depth :>> ', depth);
    console.log('aim :>> ', aim);
    console.log('\n')

    return horiz * depth
}

const testCase1 = convertTxtToArr('./q1Input.txt')
console.log('testCase1: ', findCoordsWithAim(testCase1))

const demoCase = convertTxtToArr('./q2gimme.txt')
console.log('demoCase (should = 900): ', findCoordsWithAim(demoCase))
