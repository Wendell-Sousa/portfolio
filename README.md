# Wendell Sousa · Portfólio de desenvolvedor

Portfólio pessoal com visual escuro e verde, responsivo, voltado à busca de estágio ou primeira oportunidade em desenvolvimento.

O próprio portfólio foi construído com **HTML, CSS e JavaScript puros**. Os arquivos estão prontos para abrir no navegador, editar no VS Code e hospedar no GitHub Pages. Não há dependências a instalar nem etapa de compilação.

## O que está incluído

- Apresentação, objetivo profissional e formação em ADS na UniCesumar.
- Quatro projetos: sistema de assistência técnica, login PHP com verificação por e-mail, PRDownloader e Flappy Bird em Python.
- Filtros por área, janelas de detalhes e abas de aprendizado.
- Tecnologias em estudo, links para GitHub e LinkedIn.
- Menu para celular, navegação por teclado e suporte à preferência por movimento reduzido.

As imagens dos cards são prévias ilustrativas feitas com HTML, CSS e SVG; estão identificadas na página. Os números do dashboard ilustrativo não representam métricas reais. Este pacote contém o código do portfólio; os códigos dos projetos apresentados ficam em seus respectivos repositórios.

## Arquivos

| Arquivo | O que editar |
| --- | --- |
| `index.html` | Textos da página, cards, formação, tecnologias, navegação e links profissionais. |
| `styles.css` | Cores, fontes, espaçamentos, aparência dos cards e adaptação ao celular. |
| `app.js` | Descrições detalhadas, links dos projetos, filtros, abas e menu. |
| `favicon.svg` | Ícone da aba do navegador. |
| `robots.txt` | Orientação de indexação para mecanismos de busca. |
| `.nojekyll` | Sinaliza que o GitHub Pages pode servir diretamente os arquivos estáticos. |
| `.gitignore` | Evita incluir arquivos temporários no Git. |

## Rodar no seu computador

Extraia o ZIP e abra a pasta `portfolio-wendell` no VS Code. Você pode abrir o `index.html` diretamente no navegador.

Para usar um endereço local no Ubuntu, abra o terminal **dentro dessa pasta** e execute:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Acesse **http://localhost:8000**. Use `Ctrl+C` no terminal para encerrar o servidor. Quando editar um arquivo, salve e atualize a página.

## Colocar o código no GitHub

Crie um repositório vazio chamado `portfolio` na sua conta, sem inicializá-lo com README. Para guardar o código sem disponibilizá-lo publicamente, escolha um repositório privado e mantenha o Pages desativado.

No terminal, dentro da pasta extraída, execute:

```bash
git init
git add .
git commit -m "Adiciona meu portfolio de desenvolvedor"
git branch -M main
git remote add origin https://github.com/Wendell-Sousa/portfolio.git
git push -u origin main
```

Se você escolher outro nome para o repositório, ajuste o endereço do comando `git remote add origin`. O GitHub pode solicitar autenticação.

Também é possível usar **Add file → Upload files** no repositório. Envie o conteúdo da pasta, com `index.html` na raiz do repositório; não envie apenas o ZIP nem mantenha uma pasta extra entre a raiz e o `index.html`.

## Publicar no GitHub Pages — quando você decidir

**Ativar o GitHub Pages normalmente torna o site público.** A proteção por login da versão privada hospedada anteriormente não está embutida nesses arquivos. O pacote não inclui publicação automática nem altera a hospedagem existente. No GitHub Free, o Pages exige um repositório público.

Quando quiser publicar:

1. Abra o repositório e entre em **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Selecione a branch **main** e a pasta **/(root)**.
4. Clique em **Save** e aguarde a publicação.
5. Use o endereço exibido em **Settings → Pages → Visit site**.

Se usar o nome `portfolio`, o endereço esperado será `https://wendell-sousa.github.io/portfolio/`. Esse é apenas o endereço esperado; nenhum site foi publicado no GitHub durante a preparação deste pacote.

Os caminhos dos arquivos são relativos, para funcionar tanto em um site na raiz quanto em `/portfolio/`.

### Indexação no Google

O pacote mantém a configuração `noindex, nofollow` em `index.html` e `Disallow: /` em `robots.txt`, como na versão original. Isso **não protege o acesso** a um site: apenas orienta buscadores.

Se decidir publicar e permitir a indexação, remova a meta tag `robots` em `index.html` e substitua `Disallow: /` por `Allow: /` em `robots.txt`.

## Personalizar

- **Nome, apresentação e contatos:** procure os textos e endereços atuais em `index.html`.
- **Cor principal:** altere `--green` no bloco `:root` de `styles.css`.
- **Descrição dos projetos:** edite o objeto `projects` no início de `app.js`.
- **Link do sistema de assistência:** quando houver repositório, atualize `projects.assistencia.repo`, `repoLabel` e `note` em `app.js`. Hoje o botão aponta para sua lista de repositórios e informa que o link específico ainda não está disponível.

## Referências

Orientações do GitHub consultadas em 22/09/2026:

- [Criar um site no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configurar a origem da publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

GitHub: https://github.com/Wendell-Sousa  
LinkedIn: https://www.linkedin.com/in/wendellsousadev
