function delDuplicate(array) {
    array = array.sort((a, b) => a - b)
    return  array.filter((item, index) => array.indexOf(item) === index)
}
function result(array){
    console.log(delDuplicate(array))
}
export default result