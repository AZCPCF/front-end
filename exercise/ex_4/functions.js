const functions = {

    delDuplicate(array) {
        return array.sort((a, b) => a - b).filter((item, index) => array.indexOf(item) === index)
    }
    , result(array) {
        console.log(array)
    }
}
export default functions