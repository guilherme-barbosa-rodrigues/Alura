async function buscaEndereco() {

    var consultaCEP = await fetch('viacep.com.br/ws/01001000/json/')
    var consultaCEPConvertida = await consultaCEP.jason();
    console.log(consultaCEP)    
}

buscaEndereco();


// Assincrono
/*   .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse CEP não exite!')
        } else {
            console.log(r)
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluido'))
console.log(consultaCep) */