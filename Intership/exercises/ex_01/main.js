
const addInput = (keyValue) => {
    let lastInputs = document.querySelectorAll('.form')[keyValue].querySelectorAll('.keyValue-box')
    for (let i = 0; i < lastInputs.length; i++) {
        if (lastInputs[i].querySelectorAll('.q-input')[1].value.trim() == '') {

            return alert('last name is empty')
        }
    }
    let newElem_1 = document.createElement('input')
    let newElem_2 = document.createElement('input')
    let newDivElem = document.createElement('div')
    newElem_1.classList.add('q-input')
    newDivElem.classList.add('keyValue-box')
    newElem_1.setAttribute('placeholder', 'name')
    newElem_2.setAttribute('placeholder', 'lastname')
    newElem_1.setAttribute('type', 'text')
    newElem_2.setAttribute('type', 'text')
    newElem_2.setAttribute('class', 'last')
    newElem_2.classList.add('q-input')
    newElem_2.style.marginLeft = '4px'//s
    newDivElem.style.marginTop = '10px'
    newDivElem.appendChild(newElem_1)
    newDivElem.appendChild(newElem_2)
    document.querySelectorAll('.form')[keyValue].insertBefore(newDivElem, 
    document.querySelector(!keyValue ? '.add-teacher' : '.add-student'))
}


const Print = () => {
    let res = document.querySelector('.res')
    let teacher = document.createElement('p')
    let student = document.createElement('p')
    res.innerHTML = ''
    teacher.style.color = 'red'
    student.style.color = 'red'
    teacher.innerHTML = 'teachers'
    student.innerHTML = 'students'
    student.setAttribute('class', 'student')
    res.appendChild(teacher)
    res.innerHTML += `______________________________ <br>`
    res.appendChild(student)
    res.innerHTML += `______________________________ <br>`

    let teachers = document.querySelector('.form').querySelectorAll('.keyValue-box')
    let students = document.querySelectorAll('.form')[1].querySelectorAll('.keyValue-box')
    console.log(teachers);
    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].querySelectorAll('.q-input')[1].value.trim() == '') {
            break
        } else {
            console.log(teachers[i].querySelectorAll('.q-input'));
            let p = document.createElement('p')
            p.style.color = 'green'
            p.innerHTML += `${i + 1} ) <br> name : ${teachers[i].querySelectorAll('.q-input')[0].value} <br>`
            p.innerHTML += `last name : ${teachers[i].querySelectorAll('.q-input')[1].value} <br>`
            if (i != (teachers.length - 1)) {
                p.innerHTML += "<br><br> --------------------------------"
            }
            res.insertBefore(p, document.querySelector('.student'))
        }

    }
    for (let i = 0; i < students.length; i++) {
        if (students[i].querySelectorAll('.q-input')[1].value.trim() == '') {
            break
        } else {
            console.log(students[i].querySelectorAll('.q-input'));
            let p = document.createElement('p')
            p.style.color = 'green'
            p.innerHTML += `${i + 1} ) <br> name : ${students[i].querySelectorAll('.q-input')[0].value} <br>`
            p.innerHTML += `last name : ${students[i].querySelectorAll('.q-input')[1].value} <br>`
            if (i != (students.length - 1)) {
                p.innerHTML += "<br><br> --------------------------------"
            }
            res.appendChild(p)
        }
    }
}
