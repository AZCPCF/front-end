const inp = (id) => {
    return document.querySelector(`#${id}`)
}
const userInfo = () => {
    let user = {
        name: inp('name').value,
        lname: inp('lname').value,
        password: inp('password').value
    }
    let { password, ...userInfo } = user
    inp('one').innerHTML += userInfo.name
    inp('two').innerHTML += userInfo.lname
}