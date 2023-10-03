const delDuplicate = (array) => array.sort((a, b) => a - b).filter((item, index) => array.indexOf(item) === index)
export default result = (array) =>  {console.log(delDuplicate(array))}