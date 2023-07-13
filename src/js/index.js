

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado'
        )
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        
        const idPersonagem = personagem.attributes.id.value

        

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.jpg`
        
        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText

        console.log(imagemPersonagemGrande.src)
    })    
    })
    
