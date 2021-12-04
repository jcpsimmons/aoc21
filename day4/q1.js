const fs = require('fs')

const bingoCheck = (fileText) => {
    const splitFileText = fileText.split('\n')
    const numbers = splitFileText[0].split(",").map(n => parseInt(n))

    const getNonNullBoardTotal = (board) => {
        let total = 0;

        for (let i = 0; i < board.length; i++) {
            for (let n = 0; n < board[i].length; n++) {
                total += board[i][n]
            }
        }

        return total
    }

    const checkUpdateRow = (board, number) => {
        for (let n = 0; n < board.length; n++) {
            const index = board[n].indexOf(number)
            if (index > -1) {
                board[n][index] = null;
                if (board[n].every(n => n === null)) {

                    return [true, getNonNullBoardTotal(board) * number]
                }
            }
        }

        return [false, null]
    }

    const checkColumnWin = (board, number) => {
        for (let i = 0; i < board[0].length; i++) {
            const column = board.map(r => r[i])
            if (column.every(n => n === null)) {
                return [true, getNonNullBoardTotal(board) * number]
            }
        }
        return [false, null]
    }

    const boards = []
    splitFileText.splice(0, 2)
    const chunkSize = 6
    for (i = 0; i < splitFileText.length / chunkSize; i++) {
        const board = splitFileText.slice(i * chunkSize, i * chunkSize + chunkSize)
        const filterBoard = board.filter(i => i).map(r => {
            const newRow = r.match(/.{1,3}/g)
            const ints = newRow.map(i => parseInt(i))
            return ints
        })
        boards.push(filterBoard)
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let n = 0; n < boards.length; n++) {
            let [rowWin, rowTotal] = checkUpdateRow(boards[n], numbers[i])
            if (rowWin) return rowTotal
            let [win, total] = checkColumnWin(boards[n], numbers[i])
            if (win) return total
        }
    }
}

const gimme = fs.readFileSync('./gimme.txt', { encoding: 'utf-8' })
const testInput = fs.readFileSync('./testInput.txt', { encoding: 'utf-8' })



console.log(bingoCheck(gimme))
console.log(bingoCheck(testInput))
