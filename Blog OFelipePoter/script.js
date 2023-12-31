
const posts = [  // Aqui as postagens serão inseridas
    { id: 9, title: 'Arquitetura de Software e Estrutura de Sistemas', file: 'Arquitetura-de-software-e-estrutura-de-sistemas.html'},
    { id: 8, title: 'ChatGPT compreendendo as implicações e responsabilidades', file: 'Chatgpt-compreendendo-as-implicações-e-responsabilidades.html'},
    { id: 7, title: 'O ChatGPT como ferramenta etica', file: 'O-ChatGPT-como-ferramenta-etica.html'},
    { id: 6, title: 'Dicas que vão facilitar sua jornada aprendendo C#', file: 'Dicas-que-vao-facilitar-sua-jornada-aprendendo-CSharp.html'},
    { id: 5, title: 'Programacao Orientada a Objetos (POO)', file: 'Programacao-Orientada-a-Objetos(POO).html'},
    { id: 4, title: 'A Historia do C#', file: 'A-Historia-do-CSharp.html'},
    { id: 3, title: 'O Principio YAGNI', file: 'O-Principio-YAGNI.html'},
    { id: 2, title: 'Faculdade ou Estudo Autodidata', file: 'Faculdade-ou-Estudo-Autodidata.html' },
    { id: 1, title: 'Os Principios S.O.L.I.D', file: 'Os-Principios-S-O-L-I-D.html' },
];

// Função para exibir as postagens na página
function displayPosts() {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2>`;
        postsDiv.appendChild(postDiv);

        // Adicionamos um evento de clique em cada postagem para abrir a página dela
        postDiv.addEventListener('click', () => {
            // Redireciona para a página da postagem com base no arquivo HTML
            window.location.href = post.file;
        });
    });
}

// Chamando a função para exibir as postagens ao carregar a página
displayPosts();
