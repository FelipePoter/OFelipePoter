// Exemplo de dados de postagens (pode vir de um servidor backend)
const posts = [
    { id: 1, title: 'Primeira postagem', content: 'Conteúdo da primeira postagem.' },
    { id: 2, title: 'Segunda postagem', content: 'Conteúdo da segunda postagem.' },
];

// Função para obter o ID da postagem da URL
function getPostIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return parseInt(urlParams.get('id'));
}

// Função para encontrar a postagem selecionada com base no ID da URL
function findSelectedPost() {
    const postId = getPostIdFromUrl();
    return posts.find(post => post.id === postId);
}

// Função para exibir a postagem selecionada na página
function displaySelectedPost() {
    const postDiv = document.getElementById('post');
    postDiv.innerHTML = '';

    const selectedPost = findSelectedPost();
    if (selectedPost) {
        const postContent = document.createElement('div');
        postContent.classList.add('post');
        postContent.innerHTML = `<h2>${selectedPost.title}</h2><p>${selectedPost.content}</p>`;
        postDiv.appendChild(postContent);
    } else {
        postDiv.innerHTML = '<p>Postagem não encontrada.</p>';
    }
}

// Chamando a função para exibir a postagem selecionada ao carregar a página
displaySelectedPost();
