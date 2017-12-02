const TelegramBot = require('node-telegram-bot-api');

// Subistitua pelo Token criado pelo @BotFather
const token = '441362777:AAEP_9a_IUioMQw2mMVJX9KuidQoJ5RtKiw';

// Crie o ot usando pollin, para receber atualizaçoes
const bot = new TelegramBot(token, {polling: true});