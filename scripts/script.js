const dados = {}; // Objeto para armazenar os dados

const dadosCadastrados = document.getElementById("caixa-de-cadastro");
const iconesRed = document.getElementById("iconeEmail");
const inputRed = document.getElementById("email");

const profile = [
    "assets/perfil1.png",
    "assets/perfil2.png",
    "assets/perfil3.png",
    "assets/perfil1.png",
    "assets/perfil2.png",
    "assets/perfil3.png",
    "assets/perfil1.png",
    "assets/perfil2.png"
];

document.getElementById("btn-cadastrar").addEventListener("click", coletarDados);
// Adiciona um ouvinte de clique para o botão de cadastrar

function coletarDados(e) { // Função que coleta os dados do formulário
    e.preventDefault(); // Impede o comportamento padrão do formulário
    
    // Coleta os valores dos campos e os armazena no objeto 'dados'
    dados.nome = document.getElementById("nome").value;
    dados.email = document.getElementById("email").value;
    dados.telefone = document.getElementById("telefone").value;

    validardados(); // Chama a função para validar os dados
}

const validardados = () => {
    if (dados.nome === "" || dados.telefone === "") {
        exibirErro(); // Chama a função para exibir uma mensagem de erro
    } else if (!dados.email.includes("@")) {
        exibirMensagemErroEmail(); // Chama a função para exibir uma mensagem de erro de e-mail inválido
    } else {
        exibirDados(); // Chama a função para exibir os dados cadastrados
    }
}

const msgErro = document.querySelector(".avisoErro");

const exibirErro = () => {
    // Exibe uma mensagem de erro e adiciona classes para realçar os campos
    msgErro.classList.toggle("mostraavisoErro");
    document.getElementById("ErroInput").textContent = "Não pode ficar em branco!";
    setTimeout(recolherErro, 3000);
}

const recolherErro = () => {
    // Esconde a mensagem de erro e remove as classes de realce dos campos
    msgErro.classList.toggle("mostraavisoErro");
    iconesRed.classList.toggle("iconEmailRed");
    inputRed.classList.toggle("inputEmailRed");
}

const exibirMensagemErroEmail = () => {
    // Exibe uma mensagem de erro de e-mail inválido e adiciona classes para realçar o campo de e-mail
    msgErro.classList.toggle("mostraavisoErro");
    document.getElementById("ErroInput").textContent = "Email inválido";
    setTimeout(recolherErro, 2000);
    iconesRed.classList.toggle("iconEmailRed");
    inputRed.classList.toggle("inputEmailRed");
}

const removerErro = () => {
    // Remove a mensagem de erro e as classes de realce dos campos
    msgErro.classList.remove("mostraavisoErro");
    iconesRed.classList.remove("iconEmailRed");
    inputRed.classList.remove("inputEmailRed");
}

let nextId = 1;

function exibirDados() {
    const caixaDeCadastro = document.createElement("div");
    caixaDeCadastro.id = `divDados${nextId}`;
    nextId++;
    caixaDeCadastro.classList.add("class-cadastro");

    // Cria uma estrutura HTML para exibir os dados cadastrados
    caixaDeCadastro.innerHTML = `
        <div class="container dados-contatos row mx-auto">
            <div class="perfil col-2">
                <img src="${profile[nextId]}" style="position: relative; width: 100%;">
            </div>
            <div class="dados col-8">
                <span id="nomedados">${dados.nome}</span>
                <span id="emaildados">${dados.email}</span>
                <span id="telefonedados">${dados.telefone}</span>
            </div>
          
           <div class="dados-icone-group d-flex flex-column col-1 row">
                <i class="fas fa-edit dados-icon mb-2"></i>
                <i class="fas fa-trash-alt dados-icon delete-icon mb-2"></i>
                <i class="fas fa-check dados-icon mb-2"></i>
           </div>
        </div>
    `;

    dadosCadastrados.appendChild(caixaDeCadastro); // Adiciona a estrutura HTML à caixa de cadastro
    limparCampos(); // Chama a função para limpar os campos do formulário
}

function limparCampos() {
    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}

// Delegação de eventos para lidar com a exclusão de dados
dadosCadastrados.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-icon")) {
        event.target.closest(".dados-contatos").remove();
    }
});
