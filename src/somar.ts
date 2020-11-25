//Generics
const numero1 = document.querySelector<HTMLInputElement>('#num1')!
const numero2 = document.querySelector<HTMLInputElement>('#num2')!
const formulario = document.querySelector<HTMLFormElement>('form')!


formulario.addEventListener('submit', (event: Event) => {
    event.preventDefault()

    let p = document.querySelector<HTMLParagraphElement>('#mensagem')

    if (!p) {
        p = document.createElement('p')
        p.id = 'mensagem'
        formulario.append(p)
    }

    if (numero1.value && numero2.value) {
        let soma = Number(numero1.value) + Number(numero2.value)
        p.innerText = `A soma dos numeros é de ${soma}`
    } else {
        p.innerText = `Favor informar os dois numero`
    }
})
