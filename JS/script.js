const $ = document
const D = (p) => $.getElementById(`${p}`)
const selectType = (e, player2 = $.getElementById('p2')) => {
    e.target.value == "2" ? player2.style.display = 'none' : player2.style.display = 'inline-block'
}
const startGame = () => {
    if (D('p2').style.display === 'none' && D('p1').value.trim() != '') {
        D('selectTypeDiv').style.animationPlayState = 'running'
        D('selectTypeDiv').style.display = 'none';
        D('Game').style.animationPlayState = 'running'
        D('Game').style.display = 'flex';
    } else if (D('p1').value.trim() != '' && D('p2').value.trim() != '') {
        D('selectTypeDiv').style.animationPlayState = 'running'
        D('selectTypeDiv').style.display = 'none';
        D('Game').style.animationPlayState = 'running'
        D('Game').style.display = 'flex';
    } else {
        alert("inputs can't be empty")
    }
}