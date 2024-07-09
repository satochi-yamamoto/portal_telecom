# Portal Telecom

Este é o repositório do sistema Portal Telecom, reescrito em Node.js com Express, mantendo a mesma estrutura de API da versão original em ASP.NET.

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O Portal Telecom é um sistema de gerenciamento de telecomunicações que permite autenticação de usuários, controle de acesso baseado em funções, e administração de usuários. Este projeto foi migrado de uma implementação em ASP.NET para Node.js utilizando o framework Express.

## Instalação

Para instalar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/ydsoftware1979/portal_telecom.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd portal_telecom
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

Antes de iniciar a aplicação, configure a conexão com o banco de dados no arquivo `config/database.js`:
```javascript
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'database '
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

module.exports = db;
