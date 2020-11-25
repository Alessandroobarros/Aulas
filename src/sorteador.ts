const sortear = document.querySelector<HTMLButtonElement>('#sortear')!

sortear.addEventListener('click', () => {
    const nomes = [
        "Alessandro",
        "Aline",
        "Alef",
        "Amanda",
        "Bruno",
        "Brenda",
        "Carlos",
        "Camila",
        "Daniela",
        "Geovana",
        "Julia",
        "Kendiel",
        "Vinicius",
        "valquiria"
    ]
    //random soteia numero decimal de 0 a 1, e round arredonta numeros do random para inteiro
    const resultSorteio = Math.round(Math.random() * (nomes.length - 1))

    const p = document.createElement('p')
    document.body.append(p)

    p.innerText = nomes[resultSorteio]
})

