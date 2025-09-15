# Notícias

- Site `noticias` com foco apresentar um crud.

# Extenssões

- Material Icon Theme - Tema dos arquivos de das pastas.
- Live Server - Hospedar o projeto no localhost.
- Live Preview - Possibilita a pré-visualização do arquivo HTML.
- Code Runner - Executa o arquivo js no terminal.
- Ligar o auto-save.

# Atalhos

- .<nome> - Cria uma div genérica com a classe "nome".
- section.<nome> - Cria uma section com a classe "nome".
- section#<nome> - Cria uma section com o id "nome".
- section.<nome1>#<nome2> - Cria uma section com classe "nome1" e id "nome2".

- (Alt + Shift + i) - Habilita edição em todas as linhas selecionadas.
- (Ctrl + F2) - Seleciona e habilita edição em todas as ocorrências de mesma sequência do conteudo selecionado.
- (Ctrl + ;) - Comenta o conteúdo selecionado.
- (Alt + Z) - Quebra de linha

# Referências

- https://developer.mozilla.org/pt-BR/ - MDN Web Docs
- https://www.w3schools.com/html/ - W3 Html


# Run

```
    cd ./backend
    node --require dotenv/config js/server.js

    npm run start
```

# Config

- git config --global user.email "you@example.com"
- git config --global user.name "Your Name"

# Environment

Criar um arquivo `.env` dentro do `backend`.

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=''
DB_DATABASE=jornal
SV_PORT=3000
```