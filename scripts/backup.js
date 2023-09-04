const dados = [];

document.getElementById("btn-cadastrar").addEventListener("click", coletarDados);

function coletarDados() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome === "" || email === "" || telefone === "") {
        exibirErro();
    } else {
        adicionarDados(nome, email, telefone);
        limparCampos();
    }
}

function exibirErro() {
    document.getElementById("erro").classList.add("mostraavisoErro");
}

function adicionarDados(nome, email, telefone) {
    const novoDado = {
        nome,
        email,
        telefone
    };
    dados.push(novoDado);
    exibirDados();
}

function exibirDados() {
    const dadosCadastrados = document.getElementById("caixa-de-cadastro");
    dadosCadastrados.innerHTML = ""; // Limpar o conteúdo para recriar os dados

    dados.forEach((dado, index) => {
        const caixaDeCadastro = criarCaixaDeCadastro(dado, index);
        dadosCadastrados.appendChild(caixaDeCadastro);
    });
}

function criarCaixaDeCadastro(dado, index) {
    const caixaDeCadastro = document.createElement("div");
    caixaDeCadastro.classList.add("class-cadastro");

    caixaDeCadastro.innerHTML = `
        <div class="container dados-contatos row mx-auto ">
            <!-- Conteúdo dos dados aqui -->
            <div class="dados-icone-group col-1">
                <i class="fas fa-edit dados-icon"></i> 
                <i class="fas fa-trash-alt dados-icon delete-icon" onclick="apagardados(${index})"></i> 
                <i class="fas fa-check dados-icon"></i> 
            </div>
        </div>
    `;

    return caixaDeCadastro;
}

function apagardados(index) {
    dados.splice(index, 1);
    exibirDados();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}
