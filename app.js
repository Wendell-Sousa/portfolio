'use strict';

const projects = {
  assistencia: {
    category: '01 / FULL STACK', title: 'Sistema de assistência técnica',
    intro: 'Uma aplicação de gestão para organizar a rotina de assistências técnicas, conectando atendimento, serviços e controle do negócio.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    objective: 'Centralizar informações que uma assistência precisa acompanhar no dia a dia: quem é o cliente, quais serviços estão em andamento e como estão estoque e vendas.',
    features: ['Cadastro, consulta, edição e exclusão de clientes.', 'Criação e acompanhamento de ordens de serviço.', 'Controle de estoque, vendas e financeiro.', 'Emissão de garantias e indicadores no dashboard.'],
    learning: ['Construção de interfaces e componentes com Next.js e TypeScript.', 'Rotas dinâmicas e APIs para operações de cadastro, leitura, atualização e exclusão.', 'Modelagem e acesso a dados com PostgreSQL e Prisma.', 'Integração entre telas, regras de negócio e indicadores do dashboard.'],
    result: 'Um projeto para exercitar o desenvolvimento de uma aplicação de gestão, conectando funcionalidades que fazem parte da rotina de uma assistência.',
    note: 'O link deste repositório ainda não está disponível. Você pode conhecer meus outros códigos no GitHub.',
    repo: 'https://github.com/Wendell-Sousa?tab=repositories', repoLabel: 'Conhecer meu GitHub'
  },
  login: {
    category: '02 / BACK-END', title: 'Login com verificação de e-mail',
    intro: 'Cadastro e autenticação com PHP e MySQL. A conta só pode acessar o sistema depois de confirmar o e-mail com um código de seis dígitos.',
    tags: ['PHP', 'MySQL', 'PDO', 'PHPMailer', 'HTML & CSS', 'Composer'],
    objective: 'Entender o fluxo completo de autenticação, do recebimento dos dados do formulário à verificação da conta e à criação da sessão de acesso.',
    features: ['Cadastro com validação no back-end e senhas armazenadas com hash.', 'Código de seis dígitos enviado por e-mail com PHPMailer e SMTP.', 'Validação do código e de seu prazo de expiração.', 'Login liberado após verificação, com sessões PHP e páginas protegidas.'],
    learning: ['Comunicação entre formulários HTML, PHP e banco de dados MySQL.', 'Consultas com PDO e prepared statements.', 'Geração, armazenamento e validação de códigos de confirmação.', 'Gerenciamento de dependências com Composer e envio de e-mails por SMTP.'],
    result: 'Fluxo de cadastro, confirmação por e-mail e login concluído. O CSS é simples porque o foco do estudo foi PHP, banco de dados e verificação de e-mail.',
    note: 'O repositório apresenta o código e a documentação do projeto.',
    repo: 'https://github.com/Wendell-Sousa/sistema-de-login', repoLabel: 'Ver código no GitHub'
  },
  downloader: {
    category: '03 / FULL STACK', title: 'PRDownloader',
    intro: 'Uma interface para baixar vídeos autorizados do YouTube ou apenas o áudio em MP3, conectando Next.js ao processamento no servidor.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'yt-dlp', 'FFmpeg', 'CSS'],
    objective: 'Praticar a integração entre front-end e back-end, recebendo um link na interface e acompanhando o processo de download até sua conclusão.',
    features: ['Entrada de link e opção de baixar vídeo ou áudio em MP3.', 'Processamento no servidor com yt-dlp e FFmpeg.', 'Interface responsiva e mensagem de download concluído.', 'Termos de uso orientando o download de conteúdo autorizado.'],
    learning: ['Criação de rotas de API e tratamento de requisições HTTP.', 'Integração com ferramentas de processamento de mídia no servidor.', 'Tratamento de estados de carregamento, conclusão e erro.', 'Ajustes de comportamento e testes de download em navegadores.'],
    result: 'Uma aplicação de estudo com o fluxo de download funcionando localmente e uma interface personalizada. O código está disponível para consulta no GitHub.',
    note: 'Projeto educacional. O uso pressupõe autorização para baixar o conteúdo.',
    repo: 'https://github.com/Wendell-Sousa/Youtube-Downloader', repoLabel: 'Ver código no GitHub'
  },
  flappy: {
    category: '04 / PYTHON · GAME DEV', title: 'Flappy Bird em Python',
    intro: 'Uma recriação do clássico Flappy Bird com Python e Pygame, feita no tempo livre para explorar programação de jogos na prática.',
    tags: ['Python', 'Pygame', 'Orientação a objetos', 'Lógica de jogos'],
    objective: 'Praticar lógica e orientação a objetos em um projeto visual, onde movimentação, obstáculos e colisões se combinam a cada quadro do jogo.',
    features: ['Pulo, gravidade e animação do pássaro.', 'Canos com alturas aleatórias e cenário em movimento contínuo.', 'Detecção de colisões com máscaras e sistema de pontuação.', 'Controle pelo teclado usando a tecla espaço.'],
    learning: ['Organização do jogo em classes, métodos e atributos.', 'Laço principal, eventos do teclado e controle de quadros.', 'Animação de sprites e manipulação de imagens.', 'Física básica, geração aleatória de obstáculos e detecção de colisões.'],
    result: 'Um jogo executável localmente, criado para consolidar fundamentos de Python enquanto me divirto construindo.',
    note: 'Jogo em Python para execução local. As instruções estão no repositório.',
    repo: 'https://github.com/Wendell-Sousa/Flappy-Bird', repoLabel: 'Ver código no GitHub'
  }
};

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  cards.forEach(card => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.hidden = !visible;
    card.classList.remove('enter');
    if (visible) { count++; void card.offsetWidth; card.classList.add('enter'); }
  });
  document.querySelector('#project-count').textContent = `${count} ${count === 1 ? 'projeto para explorar' : 'projetos para explorar'}`;
}));

const dialog = document.querySelector('#project-dialog');
const tabs = [...dialog.querySelectorAll('[role="tab"]')];
let previousFocus;
function activateTab(index, focus = false) {
  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index;
  });
  if (focus) tabs[index].focus();
}
function paragraph(text) { const p = document.createElement('p'); p.textContent = text; return p; }
function heading(text) { const h = document.createElement('h3'); h.textContent = text; return h; }
function list(items) { const ul = document.createElement('ul'); items.forEach(text => { const li = document.createElement('li'); li.textContent = text; ul.append(li); }); return ul; }
function openProject(id, opener) {
  const project = projects[id];
  if (!project) return;
  previousFocus = opener;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-intro').textContent = project.intro;
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
  document.querySelector('#overview-panel').replaceChildren(heading('O objetivo'), paragraph(project.objective), heading('O que a aplicação faz'), list(project.features));
  document.querySelector('#learning-panel').replaceChildren(heading('Conceitos que coloquei em prática'), list(project.learning), heading('Resultado do aprendizado'), paragraph(project.result));
  document.querySelector('#dialog-note').textContent = project.note;
  const repo = document.querySelector('#dialog-repo');
  repo.href = project.repo;
  repo.replaceChildren(document.createTextNode(project.repoLabel + ' '));
  const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); repo.append(arrow);
  activateTab(0);
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  document.querySelector('#dialog-close').focus({ preventScroll: true });
}
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.open, button)));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); previousFocus?.focus({ preventScroll: true }); });
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    activateTab(next, true);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Abrir menu'); }
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuToggle.focus(); } });
window.matchMedia('(min-width: 521px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('current', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section));
}
