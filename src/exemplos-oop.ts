let nome1 = 'Erick'
let nome2 = String('Erick')



enum Sexo {
    Feminino = 'f',
    Masculino = 'm'
}

type professor = {
    nome: string,
    sexo: Sexo,
}

// type aluno = {
//     ra: number | number,
//     nome: string,
//     sexo: Sexo,
//     curso: string,
// }

// type alunoComMetodos = aluno &{
//     dizerNome(): String,
//     mudarSexo(): void

// }

class Aluno {
    ra: string | number
    nome: string
    sexo: Sexo
    curso: string

    constructor(ra: string | number, nome: string, sexo: Sexo, curso: string) {
        this.ra = ra
        this.nome = nome
        this.sexo = sexo
        this.curso = curso
    }

    dizerNome() {
        return `Olá eu sou ${this.nome}`
    }

    mudarSexo() {
        if (this.sexo == Sexo.Masculino) {
            this.sexo = Sexo.Feminino
        } else {
            this.sexo = Sexo.Masculino
        }
    }
}

const aluno1 = new Aluno(1234, 'Alessandro', Sexo.Masculino, 'Curso Aspira')

const aluno2 = new Aluno(4567, 'Vitória', Sexo.Feminino, 'Curso Aspira')

const aluno3 = new Aluno(7890, 'Bruna', Sexo.Feminino, 'Curso Aspira')

const aluno4 = new Aluno(3955, 'Cidcleison', Sexo.Masculino, 'Curso Aspira')


// const aluno1: alunoComMetodos = {
//     ra: 3955,
//     nome: 'Alessandro',
//     sexo: Sexo.Masculino,
//     curso: 'Aspira',

//     dizerNome(){
//         return `Olá eu sou ${this.nome}`
//     },

//     mudarSexo(){
//         if(this.sexo == Sexo.Masculino) {
//             this.sexo = Sexo.Feminino
//         }else{
//             this.sexo = Sexo.Masculino
//         }
//     }
// }

// const aluno2: alunoComMetodos = {
//     ra: 1234,
//     nome: 'Maisa',
//     sexo: Sexo.Feminino,
//     curso: 'Aspira',

//     dizerNome(){
//         return `Olá eu sou ${this.nome}`
//     },

//     mudarSexo(){
//         if(this.sexo == Sexo.Masculino) {
//             this.sexo = Sexo.Feminino
//         }else{
//             this.sexo = Sexo.Masculino
//         }
//     }
// }

// const aluno3: aluno = {
//     ra: 5678,
//     nome: 'teste',
//     sexo: Sexo.Masculino,
//     curso: 'fora',
// }

// const aluno4: aluno = {
//     ra: 9012,
//     nome: 'joao',
//     sexo: Sexo.Masculino,
//     curso: 'fora',
// }
const alunos = [aluno1, aluno2, aluno3, aluno4]
console.log(alunos)

console.log(aluno1.dizerNome())
console.log(aluno2.dizerNome())

// const prof: professor = {
//     nome: 'Erick',
//     sexo: Sexo.Masculino
// }


declare global{
    
}
String.prototype.removeDuplicateChars = function (){
    return this.replace(/ +/g, ' ')
}

let nome = 'Erick          teste'
console.log(nome.removeDuplicateChars())


