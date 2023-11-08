# Biblioteca-Pessoal
Este projeto é uma aplicação web para gerenciar uma biblioteca pessoal. Foi desenvolvido utilizando Node.js para o backend, com MySQL como banco de dados, e HTML, CSS e JavaScript puro para o frontend.

Este projeto voltado aos alunos do curso técnico de informática para a disciplina de Banco de dados, para demonstrar o uso prático de comandos DQL e DML em uma aplicação.



## Estrutura de Pastas

A organização das pastas é como segue:

dados.
- `/public`: Contém todos os arquivos estáticos que serão servidos diretamente ao cliente.
  - `/css`: Folhas de estilo para a aplicação.
  - `/js`: Scripts frontend para a aplicação.
  - `/images`: Imagens e outros recursos gráficos usados.
- `/src`: Contém os arquivos principais do servidor, incluindo o `app.js`.
  - `/config`: Contém arquivos de configuração, como o `db.js` para configuração do banco de dados
  - `/routes`: Contém os arquivos que definem as rotas da aplicação.
  - `/services`: Contém os serviços, como o `LivroService.js`, que gerenciam a lógica de negócios e a interação com o banco de dados.
- `/bd`: Contém os scripts para executar no banco de dados para utilizar junto da aplicação.

## Instalação e Uso

### Pré-requisitos:

- Node.js
- MySQL

### Instruções:

1. **Clone o repositório**:
```
git clone https://github.com/profmayck/Biblioteca-Pessoal.git
```

2. **Navegue até a pasta do projeto**:
```
cd Biblioteca-Pessoal
```

3. **Instale as dependências**:
Usando npm:
```
npm install
```

4. **Configuração do banco de dados**:
- Crie um banco de dados MySQL para a aplicação.
- Atualize o arquivo `/config/db.js` com as credenciais do seu banco de dados.

5. **Inicie o servidor**:
```
npm run dev
```

6. **Acesse a aplicação**:
Abra o navegador e vá para `http://localhost:3000`.
