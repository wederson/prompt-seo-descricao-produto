# Criando um Prompt para Descrições de produto com foco em SEO
tarefa de criar uma descrição voltada para SEO para um site de venda de cursos técnicos com base em um documento sobre o curso. 

### 📋 Pré-requisitos

* [Nodejs](https://nodejs.org/en)
* [ChatGPT](https://platform.openai.com/docs/introduction)
* [API Key ChatGPT](https://platform.openai.com/account/api-keys)
* 
## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Você precisará de uma [chave](https://platform.openai.com/account/api-keys) do chatgpt para conseguir rodar o projeto local. Acesse a URL - https://platform.openai.com/account/api-keys e crie a sua chave.

### 🔧 Instalação

Realize os passos abaixo:
1. Clonar o projeto
2. Acessar a pasta
3. copie o arquivo .env.local para .env
4. Instalar dependências

```
git clone https://github.com/wederson/prompt-seo-descricao-produto.git

cd prompt-seo-descricao-produto

cp .env.local .env

npm install
```

Acesse o arquivo .env em um editor de texto e coloque a sua chave do chatgpt.
```
OPENAI_API_KEY="sk-******"
```

Acesse o arquivo index.js e mude a variável texto com a descrição desejada.
```
// Descrição do produto enviado pelo usuário
const texto = `DESCRIÇÃO DESEJADA​​`
```

Após, rode o comando ```npm start```

---
⌨️ com ❤️ por [Wederson Machado](https://github.com/wederson) 😊