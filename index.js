import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Descrição do produto enviado pelo usuário
const texto = `​
Descrição:
O curso de Engenharia de Prompt combina teoria e prática, com ênfase na 
aplicação prática dos conhecimentos adquiridos. Os alunos têm a 
oportunidade de trabalhar em projetos práticos, desenvolvendo 
prompts e interagindo com modelos de linguagem para obter resultados 
desejados. Além disso, são incentivados a participar de discussões e 
análises críticas sobre o uso ético e responsável da 
tecnologia de linguagem natural.

Duração:
O curso técnico de Engenharia de Prompt tem uma duração média de dois anos, 
divididos em quatro semestres. Essa duração pode variar de acordo com a 
instituição de ensino e o programa específico do curso.

Professor:
O curso é ministrado por professores qualificados e experientes na área de 
linguagem natural e processamento de dados. Os professores são especialistas 
em técnicas de desenvolvimento de prompts eficazes, com amplo conhecimento em 
inteligência artificial e modelos de linguagem.

Grade Curricular:
A grade curricular do curso técnico de Engenharia de Prompt abrange uma 
variedade de disciplinas relevantes para o desenvolvimento e otimização 
de prompts. Alguns exemplos de disciplinas incluídas no curso são:

Fundamentos de Linguagem Natural
Processamento de Dados e Análise
Modelos de Linguagem e Inteligência Artificial
Estratégias de Desenvolvimento de Prompts
Técnicas de Refinamento e Ajuste de Instruções
Avaliação de Resultados e Métricas de Desempenho
Uso de APIs e Plataformas de IA
Design de Interação Humano-Computador
Ética e Responsabilidade no Desenvolvimento de Modelos de Linguagem
Periodicidade:
O curso é geralmente oferecido em período integral ou parcial, dependendo 
da instituição de ensino. As aulas podem ocorrer diariamente, em dias 
alternados ou em determinados dias da semana, de acordo com a programação 
da instituição.

Modelo de Ensino:
O modelo de ensino é Online, onde todas as aulas e todos os conteúdos são 
digitais. Você irá assistir aulas e interagir com os outros alunos através
da nossa plataforma de streaming.
​`


const prompt = `
  <productDescription>${texto}</productDescription>
  `

async function getChatResponse(prompt) {
  // Nosso Modelo responsável por verificar a resposta do usuário com base 
  // em uma pergunta
  const model = `Sua tarefa é se comportar como um analista de conteúdo focado em SEO.
  Com base em uma descrição de produto informado pela área usuária 
  você deverá retornar um texto descritivo que será usado para SEO no google.
  A descrição do produto será enviada dentro da tag <productDescription></productDescription>

  Sua resposta deverá cumprir os seguintes critérios:
  O nome do curso deverá ser sempre usado mais de uma vez;
  O nome da instituição que fornecerá o curso é “WM”, precisamos que ela seja inserida na descrição do curso;
  Todos os números escritos por extenso deverão ser reescritos para o formato numérico quando o número tiver
  relação a tempo/duração. Exemplo:
  1. "seis anos" deverá ser escrito como "6 anos"
  2. "dois semestres" deverá ser escrito como "4 semestres"


  Gerar uma meta tag title para a nossa página com 55-60 caracteres;
  Gerar uma meta tag description para a nossa página com no máximo 155 caracteres;

  Retorne as informações em um json no seguinte formato:
  resumo: retornar um HTML, usando apenas as tags disponíveis dentro da tag body
  metaTitle: retornar um string
  metaDescription: retornar uma string
  `
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: model }, // atribuimos o modelo ao system content
    { role: 'user', content: prompt }]
  });

  const answer = response.data.choices[0].message.content;
  console.log('Resposta ChatGPT:', answer);
}

getChatResponse(prompt);