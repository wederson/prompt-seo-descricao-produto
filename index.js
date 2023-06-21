import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Descrição do produto enviado pelo usuário
const texto = `​​`


const prompt = `
  <productDescription>${texto}</productDescription>
  `

async function getChatResponse(prompt) {
  // Nosso Modelo responsável por verificar a resposta do usuário com base 
  // em uma pergunta
  const model = ` Sua tarefa é se comportar como um analista de conteúdo focado em SEO.
  Com base em uma descrição de produto informado pela área usuária você deverá retornar
  um texto descritivo que será usado para SEO no google.
  A descrição do produto será enviada dentro da tag <productDescription></productDescription>
  `
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: model }, // atribuimos o modelo ao system content
    { role: 'user', content: prompt }]
  });

  const answer = response.data.choices[0].message.content;
  console.log('Resposta:', answer);
}

getChatResponse(prompt);