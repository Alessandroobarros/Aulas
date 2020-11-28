namespace Escola {
    export enum Sexo {
        Masculino = 'm',
        Feminino = ''
    }

    export class Pessoa {
        nome: string
        sexo: Sexo

        constructor(nome: string, sexo: Sexo){
            this.nome = nome
            this.sexo = sexo
        }

        apresentarSe () {
            const artigo = this.sexo === Sexo.Masculino ? 'o' : 'a'
            return `Olá, eu sou ${artigo} ${this.nome}`
        }
    }

    export class Aluno extends Pessoa {
        #ra: number
        curso: string

        constructor(ra: number, nome: string, sexo: Sexo, curso: string) {
            super(nome, sexo)
            if (ra == 1234 || ra == 5678 || ra == 9012) {
                this.#ra = ra
            } else {
                throw new Error('Formato invalido')
            }
            this.curso = curso
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

    export class professor extends Pessoa{ }
}

{
    const aluno1 = new Escola.Aluno(1234, 'Alessandro', Escola.Sexo.Masculino, 'Aspira')
    const aluno2 = new Escola.Aluno(5678, 'Yasmin', Escola.Sexo.Feminino, 'Aspira')
    const aluno3 = new Escola.Aluno(9012, 'Mikaely', Escola.Sexo.Feminino, 'Aspira')
    //const aluno4 = new Escola.Aluno(3955, 'jorge', Escola.Sexo.Masculino, 'Aspira')


    const alunos = [aluno1, aluno2, aluno3]
    console.log(alunos)

    console.log(aluno1.apresentarSe())
    console.log(aluno2.apresentarSe())
    console.log(aluno3.apresentarSe())

    const prof = new Escola.professor('Erick', Escola.Sexo.Masculino)
    
    console.log(prof)

    console.log(prof.apresentarSe())
}