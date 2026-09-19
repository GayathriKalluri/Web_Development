import 'dotenv/config'
import OpenAI from 'openai'

/*const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1'
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'openai/gpt-oss-20b',
    messages: messages
})

//openai models will not give same answer for same question all the time
console.log(response.choices[0].message.content)*/


//check whether ai can explain to us like as beginner and can it control length
/*const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1'
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful assistant that explains things in language a 10-years-old understand. your answers are always less than 100 words.'
    },
    {
        role: 'user',
        content: 'what is quantum computing'
    }
]

const response = await openai.chat.completions.create({ //endpoint
    model: 'openai/gpt-oss-20b', 
    messages: messages
})

//openai models will not give same answer for same question all the time
console.log(response.choices[0].message.content)*/

import {dates} from '/utils/dates'
