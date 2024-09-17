// Array de comentários (simulados)
const comments = [
    {
      name: 'Lucas Silva',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'O projeto ITECH realmente facilitou a minha vida! Pude agendar um técnico rapidamente e resolver o problema do meu celular.',
      date: '2024-09-10',
    },
    {
      name: 'Maria Oliveira',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Achei o sistema muito intuitivo e a equipe técnica é extremamente competente. Recomendo a todos!',
      date: '2024-09-12',
    },
    {
      name: 'João Costa',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      comment: 'A praticidade de agendar um técnico pela internet sem sair de casa é incrível. O ITECH é o futuro da assistência técnica!',
      date: '2024-09-15',
    },
    {
      name: 'Carla Mendes',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      comment: 'Excelente atendimento, rápido e fácil de usar. Resolvi meu problema com poucos cliques. Parabéns à equipe ITECH!',
      date: '2024-09-08',
    }
  ];
  
  // Seleciona o contêiner de comentários
  const commentsContainer = document.getElementById('comments-container');
  
  // Função para criar o HTML dos comentários
  function renderComments() {
    comments.forEach(comment => {
      // Cria o elemento HTML de cada comentário
      const commentCard = document.createElement('div');
      commentCard.classList.add('comment-card');
  
      commentCard.innerHTML = `
        <div class="comment-header">
          <img src="${comment.image}" alt="Foto de ${comment.name}">
          <h3>${comment.name}</h3>
        </div>
        <div class="comment-body">
          <p>${comment.comment}</p>
          <time>${comment.date}</time>
        </div>
      `;
  
      // Adiciona o comentário ao contêiner
      commentsContainer.appendChild(commentCard);
    });
  }
  
  // Renderiza os comentários na página
  renderComments();
  