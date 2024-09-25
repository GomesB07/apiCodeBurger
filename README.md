# apiCodeBurger

CodeBurger é uma aplicação FullStack com o propósito de facilitar as vendas de uma lanchonete/restaurante, onde é possível fazer pedidos com base no cardápio disponibilizado pelo administrador do site, ao qual também pode adicionar, excluir e editar produtos/preços.

# Como executar o projeto
Pré-requisitos: Npm / Yarn, Docker, PostBird / Semelhante, MongoDd Compass / Semelhante, Insomnia / Semelhante

## Clone o repositório
```bash
git clone https://github.com/GomesB07/apiCodeBurger
```

## Ports

```bash
# Se necessário, é possível alterar as portas dos bancos de dados e da aplicação nos seguintes arquivos

Aplicação: server.js, DockerFile
Banco de dados: Docker-compose.yml, database/index.js, config/database.js
```

## Instale as imagens do Docker

```bash
docker-compose up -d
```
# Conexão
## Conecte com bancos de dados usando as informações apresentadas no docker-compose
```bash
# (Substitua-os por informações de sua configuração docker-compose)

# Postgres
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_DB

OU

postgresql://nome_do_serviço:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB

# MongoDB
mongodb://MONGO_INITDB_ROOT_USERNAME:MONGO_INITDB_ROOT_PASSWORD@localhost:27017
```

# Migrations
## Para executar as migrations, utilize o seguinte comando
```bash
npx sequelize-cli db:migrate
```

# Execução do projeto
```bash
# Para executar o projeto
docker-compose start

# Para parar o projeto
docker-compose stop
```

## 🛠️ Construído com

* [Node](https://nodejs.org/pt)
* [Docker](https://www.docker.com/) 
* [PostgreSQL](https://www.postgresql.org/) - Banco de dados utilizado via Docker para hospedar os dados de usuários, categorias e produtos
* [MongoDB](https://www.mongodb.com/pt-br) - Banco de dados utilizado via Docker para hospedar os pedidos do restaurante
* [Mongoose](https://mongoosejs.com/) - Criar a conexão entre o banco de dados e a aplicação
* [BcryptJs](https://www.npmjs.com/package/bcryptjs) - Biblioteca de Hash utilizada para criptografar a senha do usuário 
* [JsonWebToken](https://jwt.io/) - Biblioteca para autenticar o usuário
* [Multer](https://www.npmjs.com/package/multer) - Middleware utilizado para upload de arquivos
* [Sequelize](https://sequelize.org/) - ORM
* [Uuid](https://www.npmjs.com/package/uuid) - Biblioteca utilizada para gerar id de usuário,
* [Yup](https://github.com/jquense/yup) - Utilizado para validação de schema

## Acesse o repositório do Front end

## 🔗[Clique aqui para acessar o Front end](https://github.com/GomesB07/FrontCodeBurger)

## ✒️ Autores

* **GomesB07** - *Desenvolvimento* - [GomesB07](https://github.com/GomesB07)
---
⌨️ com ❤️ por [GomesB07](https://github.com/GomesB07) 😊
