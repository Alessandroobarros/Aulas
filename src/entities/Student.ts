import Gender from "./Gender.js"
import Person from "./Person.js"

export class Student extends Person {
    #ra: number
    course: string

    constructor(ra: number, name: string, gender: Gender, course: string) {
        super(name, gender)
        if (!name){
            throw new ReferenceError('name')
        }

        if (!gender){
            throw new ReferenceError('gender')
        }

        if (!course){
            throw new ReferenceError('course')
        }
        
        if (ra == 1234 || ra == 5678 || ra == 9012) {
            this.#ra = ra
        } else {
            throw new Error('Formato de RA invalido')
        }
        this.course = course
    }

    //Acessors 
    get ra() {
        return this.#ra
    }

    set ra(value: number) {
        if (value == 1234 || value == 5678 || value == 9012) {
            this.#ra = value
        } else {
            throw new Error('Formato invalido')
        }
    }

}

export default Student