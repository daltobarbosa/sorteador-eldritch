// LISTA DE PERSONAGENS

const personagens = [
   {
    nome: "Akachi Onyele",
    imagem: "imagens/01-akachi.png",
   },

   {
    nome: "Charlie Kane",
    imagem: "imagens/02-charlie.png"
   },

   {
    nome: "Diana Stanley",
    imagem:"imagens/03-diana.png",
   },

   {
    nome: "Jacqueline Fine",
    imagem: "imagens/04-jacqueline.png",
   },

   {
    nome: "Jim Culver",
    imagem: "imagens/05-jim.png",
   },

   {
    nome: "Leo Anderson",
    imagem: "imagens/06-leo.png",
   },

   {
    nome: "Lily Chen",
    imagem: "imagens/07-lily.png",
   },

   {
    nome: "Lola Hayes",
    imagem: "imagens/08-lola.png",
   },

   {
    nome: "Mark Harrigan",
    imagem: "imagens/09-mark.png",
   },

   {
    nome: "Norman Withers",
    imagem: "imagens/10-norman.png",
   },

   {
    nome: "Silas Marsh",
    imagem: "imagens/11-silas.png",
   },

   {
    nome: "Trish Scarborough",
    imagem: "imagens/12-trish.png",
   },

   // Montanhas da Loucura //
   {
    nome: "Agnes Baker",
    imagem: "imagens/13-agnes.png",
   },

   {
    nome: "Daisy Walker",
    imagem: "imagens/14-daisy.png",
   },

   {
    nome: "Finn Edwards",
    imagem: "imagens/15-finn.png",
   },

   {
    nome: "George Barnaby",
    imagem: "imagens/16-george.png",
   },

   {
    nome: "Patrice Hathaway",
    imagem: "imagens/17-patrice.png",
   },

   {
    nome: "Tommy Muldoon",
    imagem: "imagens/18-tommy.png",
   },

   {
    nome: "Ursula Downs",
    imagem: "imagens/19-ursula.png",
   },

   {
    nome: "Wilson Richards",
    imagem: "imagens/20-wilson.png",
   },

   // Vestígios Estranhos //
   {
    nome: "Marie Lambeau",
    imagem: "imagens/21-marie.png",
   },

   {
    nome: "'Liso' O'Toole",
    imagem: "imagens/22-liso.png",
   },

   {
    nome: "Tony Morgan",
    imagem: "imagens/23-tony.png",
   },

   {
    nome: "Zoey Samaras",
    imagem: "imagens/24-zoey.png",
   },

   // Sob as Piramides //
   {
    nome:"Hank Samson",
    imagem: "imagens/25-hank.png",
   },

   {
    nome: "Harvey Walters",
    imagem: "imagens/26-harvey.png",
   },

   {
    nome: "Joe Diamond",
    imagem: "imagens/27-joe.png",
   },

   {
    nome: "Mandy Thompson",
    imagem: "imagens/28-mandy.png",
   },

   {
    nome: "Minh Thi Phan",
    imagem: "imagens/29-minh.png",
   },

   {
    nome: "Irmã Mary",
    imagem: "imagens/30-mary.png",
   },

   {
    nome: "Monterey Jack",
    imagem: "imagens/31-monterey.png",
   },

   {
    nome: "Rex Murphy",
    imagem: "imagens/32-rex.png",
   },

   // Sinais de Carcosa //
   {
    nome: "Dexter Drake",
    imagem: "imagens/33-dexter.png",
   },

   {
    nome: "Jenny Barnes",
    imagem: "imagens/34-jenny.png",
   },

   {
    nome: "Michael McGlen",
    imagem: "imagens/35-michael.png",
   },

   {
    nome: "Wendy Adams",
    imagem: "imagens/36-wendy.png",
   },

   // As Terras Oníricas //
   {
    nome: "Amanda Sharpe",
    imagem: "imagens/37-amanda.png",
   },

   {
    nome: "Carolyn Fern",
    imagem: "imagens/38-carolyn.png",
   },
   
   {
    nome: "Darrell Simmons",
    imagem: "imagens/39-darrell.png",
   },

   {
    nome: "Gloria Goldberg",
    imagem: "imagens/40-gloria.png",
   },

   {
    nome: "Kate Winthrop",
    imagem: "imagens/41-kate.png",
   },

   {
    nome: "Luke Robinson",
    imagem: "imagens/42-luke.png",
   },

   {
    nome: "Vincent Lee",
    imagem: "imagens/43-vincent.png",
   },

   {
    nome: "William Yorick",
    imagem: "imagens/44-william.png",
   },

   // Cidades em Ruinas //
   {
    nome: "Peter 'Chaminé'",
    imagem: "imagens/45-peter.png",
   },

   {
    nome: "Bob Jenkins",
    imagem: "imagens/46-bob.png",
   },

   {
    nome: "Rita Young",
    imagem: "imagens/47-rita.png",
   },

   {
    nome: "Roland Banks",
    imagem: "imagens/48-roland.png",
   },

   // Máscaras de Nyarlathotep //
   {
    nome: "Agatha Crane",
    imagem: "imagens/49-agatha.png",
   },

   {
    nome: "Calvin Wright",
    imagem: "imagens/50-calvin.png",
   },

   {
    nome: "Carson Sinclair",
    imagem: "imagens/51-carson.png",
   },

   {
    nome: "Daniela Reyes",
    imagem: "imagens/52-daniela.png",
   },

   {
    nome: "Padre Mateo",
    imagem: "imagens/53-mateo.png",
   },

   {
    nome: "Preston Fairmont",
    imagem: "imagens/54-preston.png",
   },
    
   {
    nome: "Sefina Rousseau",
    imagem: "imagens/55-sefina.png",
   }
];


// ELEMENTOS HTML

const quantidade = document.getElementById("quantidade");

const btnSortear = document.getElementById("btnSortear");

const btnLimpar = document.getElementById("btnLimpar");

const resultado = document.getElementById("resultadoPersonagens");


// FUNÇÃO DE SORTEIO

/*function sortear() {

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
*/

function sortear() {

    const quantidadeEscolhida = Number(quantidade.value);

    // Copia a lista
    const listaEmbaralhada = [...personagens];

    // Embaralha
    listaEmbaralhada.sort(() => Math.random() - 0.5);

    // Seleciona a quantidade desejada
    const personagensSorteados =
        listaEmbaralhada.slice(0, quantidadeEscolhida);

    // Limpa resultado
    resultado.innerHTML = "";

    // Define o layout de acordo com a quantidade
    resultado.className = `personagens quantidade-${quantidadeEscolhida}`;

    // Cria as molduras
    personagensSorteados.forEach(personagem => {

        const card = document.createElement("div");

        card.classList.add("personagem");

        card.innerHTML = `
            <div class="moldura">
                <img 
                    src="${personagem.imagem}" 
                    alt="${personagem.nome}"
                >

                <div class="nome-personagem">
                    ${personagem.nome}
                </div>
            </div>
        `;

        resultado.appendChild(card);
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