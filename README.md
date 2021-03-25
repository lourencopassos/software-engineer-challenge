![PicPay](https://user-images.githubusercontent.com/1765696/26998603-711fcf30-4d5c-11e7-9281-0d9eb20337ad.png)

# Teste Software Engineer Pic Pay

O desafio é criar uma API REST que busca usuarios pelo nome e username a partir de uma palavra chave. Faça o download do arquivo [users.csv.gz](https://s3.amazonaws.com/careers-picpay/users.csv.gz) que contém o banco de dados que deve ser usado na busca. Ele contém os IDs, nomes e usernames dos usuários.

## 👨🏽‍💻 Tech Stack

- Node.js
- Typescript
- Express
- Docker
- MySQL
- Knex

## 📝 Functional Requirements

- Get users by search term
- Paginate results by 15 each time
- Authenticate the endpoint

## 🚙 How to run this application

1. `git clone` to download the repository;
2. `npm install` to install the dependencies;
3. `touch .env && cp .env.example .env` to create a .env file;
4. `docker-compose up` to run the application;

## 🛤 Endpoints

### 🛒 Base URL: http://localhost/

### 🔐 Routes

<br>

**`POST /auth/login`** This endpoint returns the authentication `token`
<br>

Use this request body (this user is automatically created in Docker Startup ) to obtain the token.

```
{
    "email": "challenge@picpay.com.br",
    "password": "senhasenha"
}
```

**`POST /users`** This endpoint returns the user list with the priority users. You must use the **query params** `search` for the search term and page for pagination (not required). You have also the `Authorization` header with the token provided in the login endpoint.

**`EXAMPLE`** http://localhost/users?search=heitor&page=1

<br>

### Diferenciais Realizados

- Criar uma solução de autenticação entre o frontend e o backend ✅
- Ter um desempenho elevado num conjunto de dados muito grande ✅


#### 👋🏽 How to reach me

Lourenço Passos | Software Engineer | lo.passos93@gmail.com | 55-51-996106010
