type sexo = 'f' | 'm'

type aluno = {
    ra: number | number,
    nome: string,
    sexo: sexo,
    curso: string
}

type professor = {
    nome: string,
    sexo: sexo
}

const aluno1: aluno = {
    ra: 3955,
    nome: 'Alessandro',
    sexo: 'm',
    curso: 'Aspira'
}

const aluno2: aluno = {
    ra: 1234,
    nome: 'Maisa',
    sexo: 'f',
    curso: 'Aspira'
}

const aluno3: aluno = {
    ra: 5678,
    nome: 'teste',
    sexo: 'f',
    curso: 'fora'
}

const aluno4: aluno = {
    ra: 9012,
    nome: 'joao',
    sexo: 'm',
    curso: 'fora'
}
const alunos = [aluno1, aluno2, aluno3, aluno4]

console.log(alunos)

const prof: professor = {
    nome: 'jooao',
    sexo: 'm'
}