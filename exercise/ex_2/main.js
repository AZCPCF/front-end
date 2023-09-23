const getNumbers = () => {
    return document.querySelector('input').value.split(' ')
}

const findMax = () => {
    let max = 0
    for (const numb of getNumbers()) {
        if (Number(numb) > max) {
            max = numb
        }
    }
    document.querySelector('span').innerText = `max : ${Number(max)}`
}

const findMin = () => {
    let numbers = getNumbers()
    numbers.sort((a, b) => {
        return a - b
    })
    document.querySelector('span').innerText = `min : ${Number(numbers[0])}`
}
// const findDuplicates = () => {
// }
// /*method 3 */const removeDuplicate = () => { }
