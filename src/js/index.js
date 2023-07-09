/*
O que é preciso fazer?
- Quando passar o mouse em cima do personagem na lista, temos que adicionar a borda azul de seleção na imagem 
pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

Objetivo 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.

1º Passo - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles;

2º Passo - adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse;

3º Passo - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele.

Objetivo 2: quando passar o mouse em cima do personagem da listagem, trocar a imagem, o nome e a descrição do
personagem grande.

1º Passo - pegar o elemento do personagem grande pra adicionar as informações nele;

2º Passo - alterar a imagem do personagem grande;

3º Passo - alterar o nome do personagem grande;

4º Passo - alterar a descrição do personagem grande.
*/

const personagens = document.querySelectorAll('.personagem'); // Busca todos os elementos que possuem a classe personagem. //

personagens.forEach((personagem) => { // O forEach cria um laço entre todos os elementos que se deseja aplicar uma função. //
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } // Se a janela onde o site abrir for menor que 450px (tela de um celular, por exemplo), teremos um scroll até o topo e conseguiremos rolar este suavemente (smooth).
        
        removerSelecaoDoPersonagem(); // Remove a classe "selecionado" do ciclope (passo 3). //
        
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem); // Não tem como colocar o nome de um card específico para todos os personagens diferentes, portanto foi necessário criar uma variável idPersonagem com o valor de cada id dos personagens separadamente. Posteriormente, essa variável foi interpolada junto da função para trocar a imagem grande, como se fosse um "card", porém seria a variável com o valor específico para cada personagem de acordo com a mudança de seu id. //
    
        alterarNomePersonagemSelecionado(personagem); // O data-*atributo nos dá a capacidade de incorporar atributos de dados personalizados em todos os elementos HTML. //
    
        alterarDescricaoPersonagem(personagem);
    })
})

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value; // Pega o atributo id do personagem que o mouse está passando em cima e salva a variável idPersonagem. //
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}