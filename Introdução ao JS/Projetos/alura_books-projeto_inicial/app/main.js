let livros = []
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBucarLivrosDaAPI()

async function getBucarLivrosDaAPI() {
    const res = await fetch(endpointAPI)
    livros = await res.json()
}