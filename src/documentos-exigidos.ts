{
    const nome = document.querySelector<HTMLInputElement>('#nome')!
    const email = document.querySelector<HTMLInputElement>('#email')!
    const nascimento = document.querySelector<HTMLInputElement>('#nascimento')!
    const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
    const termosAceitos = document.querySelector<HTMLInputElement>('#termosAceitos')!
    const formulario = document.querySelector<HTMLFormElement>('form')!
    const resposta = document.querySelector<HTMLDivElement>('#resposta')!

    formulario.noValidate = true

    formulario.addEventListener('submit', (e: Event) =>{
        e.preventDefault()

        let valorNome = nome.value.trim()

        if (!valorNome){
            resposta.innerText = 'O campo nome é obrigatório'
            resposta.className = 'negative'
            nome.focus()
            return
        }

        const regexNome = /\w+\s\w/g

        
        if (!regexNome.test(valorNome)){
            resposta.innerText = 'Informe seu nome completo !'
            resposta.className = 'negative'
            nome.focus()
            return
        }

        if (!email.value){
            resposta.innerText = 'O campo e-mail é obrigatório'
            resposta.className = 'negative'
            email.focus()
            return
        }

        const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

        if(!regexEmail.test(email.value)){
            resposta.innerText = 'Formato de e-mail invalido'
            resposta.className = 'negative'
            email.focus()
            return
        }

        if (!nascimento.value){
            resposta.innerText = 'O campo nascimento é obrigatório'
            resposta.className = 'negative'
            nascimento.focus()
            return
        }

        if (!nascimento.value){
            resposta.innerText = 'O campo nascimento é obrigatório'
            resposta.className = 'negative'
            nascimento.focus()
            return
        }

        const dataNascimento = new Date(`${nascimento.value}T00:00:00`)

        if (Date.now() - Number(dataNascimento) <= 0){
            resposta.innerText = 'A data de nascimento tem quer ser anterior a data atual !'
            resposta.className = 'negative'
            sexo.focus()
            return
        }

        if (!termosAceitos.checked){
            resposta.innerText = 'É necessario aceitar os termos antes de prosseguir'
            resposta.className = 'negative'
            termosAceitos.focus()
            return
        }

        resposta.innerText = 'Uhuuulll!!'
        resposta.className = 'positive'
    })
    
}