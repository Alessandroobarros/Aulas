import Gender from "./entities/Gender.js"
import Student from "./entities/Student.js"


const number = document.querySelector<HTMLInputElement>('#number')!
const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const course = document.querySelector<HTMLInputElement>('#course')!
const loading = document.querySelector<SVGAElement>('#loading')!
const message = document.querySelector<HTMLParagraphElement>('#message')!
const form = document.querySelector('form')!


const students: Student[] = []


showStudents()
number.focus()

const intervalId = setInterval(() =>{
    if (document.body.style.background === 'magenta'){
        document.body.style.background = 'white'
    }else{
        document.body.style.background = 'magenta'
    }
}, 2000)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    //TODO: Construir  validações dos campos

    clearInterval(intervalId)

    loading.style.display = 'block'

    setTimeout(() => {
        try {
            const student = new Student(
                parseInt(number.value, 10),
                name.value,
                gender.value === 'f' ? Gender.Female : Gender.Male,
                course.value
            )

            students.push(student)

            //Necessidade de serealização

            localStorage.setItem('students', JSON.stringify(students))

            showStudents()
        } catch (error: any) {
            console.error(error)
            message.innerText = "Opa, deu pau."
            const table = document.querySelector('table')
            if(table) table.remove()
        } finally {
            loading.style.display = 'none'
        }
    }, 3000);
})





function showStudents() {
    if (localStorage.getItem('students')) {
        const data = JSON.parse(localStorage.getItem('students')!)

        students.splice(0)

        for (const item of data) {
            students.push(new Student(
                item._ra,
                item.name,
                item.gender,
                item.course
            ))
        }
    }

    let table = document.querySelector('table')

    if (!table) {
        table = document.createElement('table')
        document.body.append(table)
    }

    let lines = ''

    for (const student of students) {
        lines += `
        <tr>
        <td>${student.ra}</td>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.gender}</td>
        </tr>
        `
    }

    table.innerHTML = `
    <thead>
        <tr>
            <th>Ra</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Sexo</th>
        </tr>
    </thead>
    <tbody>
     ${lines}
    </tbody>
    `

}