// LISTA DE PERSONAGENS

const personagens = [
   {
    nome: "Akachi",
    imagem: "imagens/01-akachi.png",
   },

   {
    nome: "Charlie",
    imagem: "imagens/02-charlie.png"
   },

   {
    nome: "Diana",
    imagem:"imagens/03-diana.png",
   },

   {
    nome: "Jacqueline",
    imagem: "imagens/04-jacqueline.png",
   },

   {
    nome: "Jim",
    imagem: "imagens/05-jim.png",
   },

   {
    nome: "Leo",
    imagem: "imagens/06-leo.png",
   },

   {
    nome: "Lily",
    imagem: "imagens/07-lily.png",
   },

   {
    nome: "Lola",
    imagem: "imagens/08-lola.png",
   },

   {
    nome: "Mark",
    imagem: "imagens/09-mark.png",
   },

   {
    nome: "Norman",
    imagem: "imagens/10-norman.png",
   },

   {
    nome: "Silas",
    imagem: "imagens/11-silas.png",
   },

   {
    nome: "Trish",
    imagem: "imagens/12-trish.png",
   },

   // Montanhas da Loucura //
   {
    nome: "Agnes",
    imagem: "imagens/13-agnes.png",
   },

   {
    nome: "Daisy",
    imagem: "imagens/14-daisy.png",
   },

   {
    nome: "Finn",
    imagem: "imagens/15-finn.png",
   },

   {
    nome: "George",
    imagem: "imagens/16-george.png",
   },

   {
    nome: "Patrice",
    imagem: "imagens/17-patrice.png",
   },

   {
    nome: "Tommy",
    imagem: "imagens/18-tommy.png",
   },

   {
    nome: "Ursula",
    imagem: "imagens/19-ursula.png",
   },

   {
    nome: "Wilson",
    imagem: "imagens/20-wilson.png",
   },

   // Vestígios Estranhos //
   {
    nome: "Marie",
    imagem: "imagens/21-marie.png",
   },

   {
    nome: "Liso",
    imagem: "imagens/22-liso.png",
   },

   {
    nome: "Tony",
    imagem: "imagens/23-tony.png",
   },

   {
    nome: "Zoey",
    imagem: "imagens/24-zoey.png",
   },

   // Sob as Piramides //
   {
    nome:"Hank",
    imagem: "imagens/25-hank.png",
   },

   {
    nome: "Harvey",
    imagem: "imagens/26-harvey.png",
   },

   {
    nome: "Joe",
    imagem: "imagens/27-joe.png",
   },

   {
    nome: "Mandy",
    imagem: "imagens/28-mandy.png",
   },

   {
    nome: "Minh",
    imagem: "imagens/29-minh.png",
   },

   {
    nome: "Mary",
    imagem: "imagens/30-mary.png",
   },

   {
    nome: "Monterey",
    imagem: "imagens/31-monterey.png",
   },

   {
    nome: "Rex",
    imagem: "imagens/32-rex.png",
   },

   // Sinais de Carcosa //
   

   // As Terras Oníricas //

   // Cidades em Ruinas //

   // Máscaras de Nyarlathotep //
    
];


// ELEMENTOS HTML

const quantidade = document.getElementById("quantidade");

const btnSortear = document.getElementById("btnSortear");

const btnLimpar = document.getElementById("btnLimpar");

const resultado = document.getElementById("resultadoPersonagens");


// FUNÇÃO DE SORTEIO

function sortear() {

    // Quantidade escolhida pelo usuário
    const quantidadeEscolhida = Number(quantidade.value);


    // Cria uma cópia da lista original
    const listaEmbaralhada = [...personagens];


    // Embaralha a lista
    listaEmbaralhada.sort(() => Math.random() - 0.5);


    // Pega somente a quantidade escolhida
    const personagensSorteados =
        listaEmbaralhada.slice(0, quantidadeEscolhida);


    // Limpa o resultado anterior
    resultado.innerHTML = "";


    // Exibe os personagens sorteados
    personagensSorteados.forEach(personagem => {

    const div = document.createElement("div");

    div.classList.add("personagem");

    div.innerHTML = `
        <img src="${personagem.imagem}" alt="${personagem.nome}">
        <h3>${personagem.nome}</h3>
    `;

    resultado.appendChild(div);

    });

}


// FUNÇÃO PARA LIMPAR

function limpar() {

    resultado.innerHTML = `
        <p class="mensagem">
            Clique em "Sortear" para começar.
        </p>
    `;

}


// EVENTOS

btnSortear.addEventListener("click", sortear);

btnLimpar.addEventListener("click", limpar);