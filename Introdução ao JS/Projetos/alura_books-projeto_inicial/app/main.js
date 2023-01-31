let livros = []
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBucarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotal = document.getElementById('valor_total_livros_disponiveis')

async function getBucarLivrosDaAPI() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotal.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidadeDoLivro(livro)]
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel'
        elementoParaInserirLivros.innerHTML+= `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
    });
}
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livros => {
        return {...livros, preco: livros.preco - (livros.preco * desconto)}
    })
    return livrosComDesconto
}

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtraLivros))

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotalDisponivel(valorTotal)
    }
}

let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function ordenarLivrosPorPreco() {
     let livrosOrdenados = livros.sort((a , b) => a.preco - b.preco)
     exibirOsLivrosNaTela(livrosOrdenados)
}

function exibirValorTotalDisponivel(valorTotal){
    elementoComValorTotal.innerHTML = `
    <div class="livros__disponiveis">
     <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
   `
}
function calcularValorTotal (livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}
//function verificarDisponibilidadeDoLivro(livro){
//    if (livro.quantidade > 0) {
//        return 'livro__imagem'
//    } else {
//        return 'livro__imagem indisponivel'
//    }
//}