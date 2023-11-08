let firstPlayer = Math.round(Math.random() + 1)
let X = []
let O = []
firstPlayer === 1 ? firstPlayer = 'X' : firstPlayer = 'O'
alert(`first player : ${firstPlayer}`)
const gameFunc = (e) => {
    e.target.innerHTML = firstPlayer
    e.target.disabled = true;
    if (firstPlayer === 'X') {
        firstPlayer = 'O'
        X.push(e.target.id)
    } else {
        firstPlayer = 'X'
        O.push(e.target.id)
    }
    if (isWin(X)) {
        document.getElementById('parent').innerHTML = 'X is winner'
    } else if (isWin(O)) {
        document.getElementById('parent').innerHTML = 'O is winner'
    } else if ((O.length + X.length) == 9) {
        document.getElementById('parent').innerHTML = 'draw'
    }
}
const isWin = (params) => {
    if (params.includes('1') && params.includes('2') && params.includes('3')) {
        return true
    } else if (params.includes('3') && params.includes('6') && params.includes('9')) {
        return true
    } else if (params.includes('2') && params.includes('5') && params.includes('8')) {
        return true
    } else if (params.includes('3') && params.includes('6') && params.includes('9')) {
        return true
    } else if (params.includes('1') && params.includes('4') && params.includes('7')) {
        return true
    } else if (params.includes('4') && params.includes('5') && params.includes('6')) {
        return true
    } else if (params.includes('7') && params.includes('8') && params.includes('9')) {
        return true
    }else if (params.includes('1') && params.includes('5') && params.includes('9')) {
        return true
    } else {
        return false
    }
}