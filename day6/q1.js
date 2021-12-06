const { convertCSVToArr } = require('../utils/textToArray')

class LanternFish {
    constructor(days = 0) {
        this.days = days
        this.spawnNew = false;
    }

    increment() {
        this.spawn = false
        if (!this.days) {
            this.days = 6
            this.spawn = true
        } else {
            this.days--
        }
        return this
    }
}



const lanternFishSpawnSimultation = (fishArr, days = 80) => {
    const startTime = new Date()
    let totalLength = 0;

    for (let i = 0; i < fishArr.length; i++) {
        let runningArray = [fishArr[i]]

        for (let n = 0; n < days; n++) {
            const newSpawn = []
            runningArray = runningArray.map(f => {
                if (f === 0) {
                    newSpawn.push(8)
                    return 6
                }
                return f - 1
            })
            runningArray = [...runningArray, ...newSpawn]
        }
        totalLength += runningArray.length
    }

    console.log(new Date() - startTime, 'ms')
    return totalLength
}

const gimme = convertCSVToArr('q1gimme.txt');
console.log('test input (should be ): 5934', lanternFishSpawnSimultation(gimme))


const test = convertCSVToArr('q1TestInput.txt');
console.log('answer on real data: ', lanternFishSpawnSimultation(test))
// 349549
