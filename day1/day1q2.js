const { depths } = require('./data')

const slideCompare = (arr) => {
    let increased = 0;
    let currentSum = 0;
    let lastSum;
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]

        if (windowEnd - windowStart === 2) {
            if (windowEnd > 2) {
                if (currentSum > lastSum) increased++
            }
            lastSum = currentSum
            currentSum -= arr[windowStart]
            windowStart++
        }
    }

    return increased
}


console.log(slideCompare(depths))
