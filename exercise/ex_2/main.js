const getNumbers = () => {
    return document.querySelector('input').value.split(' ')
}
let s = document.querySelector('span').innerHTML
const findMax = () => {
    let max = 0
    for (const numb of getNumbers()) {
        if (Number(numb) > max) {
            max = numb
        }
    }
    s = `max : ${Number(max)}`
}

const findMin = () => {
    let numbers = getNumbers()
    numbers.sort((a, b) => {
        return a - b
    })
    s = `min : ${Number(numbers[0])}`
}
const findDuplicates = () => {
    let numbers = getNumbers();
    let res = numbers.filter((item, index) => numbers.indexOf(item) !== index)
    s = `duplicates : ${res}`
}

const removeDuplicate = () => {
    let numbers = getNumbers();
    let res = numbers.filter((item, index) => numbers.indexOf(item) === index)
    s = `without duplicate : ${res}`
}
