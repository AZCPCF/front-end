const getNumbers = () => {
    return document.querySelector('input').value.split(' ')
}
let h2 = document.querySelector('h2')
let p = document.querySelector('p')
const findMax = () => {
    let max = 0
    for (const numb of getNumbers()) {
        if (Number(numb) > max) {
            max = numb
        }
    }
    h2.innerHTML = 'max : '
    p.innerHTML = max
}

const findMin = () => {
    let numbers = getNumbers()
    let min = Math.min(...numbers)
    h2.innerHTML = 'min : '
    p.innerHTML = min
}
const findDuplicates = () => {
    let numbers = getNumbers();
    let res = numbers.filter((item, index) => numbers.indexOf(item) !== index)
    res = res.filter((item, index) => numbers.indexOf(item) === index)
    h2.innerHTML = 'found Duplicates : '
    p.innerHTML = res
}

const removeDuplicate = () => {
    let numbers = getNumbers();
    let res = numbers.filter((item, index) => numbers.indexOf(item) === index)
    h2.innerHTML = 'without duplicate : '
    p.innerHTML = res
}
