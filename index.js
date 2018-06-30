const TelegramBot = require('node-telegram-bot-api');

// Substitua pelo Token criado pelo @BotFather
const token = '441362777:AAEP_9a_IUioMQw2mMVJX9KuidQoJ5RtKiw';

// Crie o bot usando polling, para receber atualizações
const bot = new TelegramBot(token, {polling: true});

// Printa o objeto msg enviado para o BOT
bot.on( 'message', ( msg ) => console.log( 'msg', msg ) )

// Envia uma mensaem quando um novo membro entra no grupo
bot.on('new_chat_members', (msg) => {
    bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem vindo ao GDG Brasilia!`)
 })

//bot.onText( /\/echo (.*)/, ( msg, match ) => {
//  console.log( `echo msg: `, msg ) 
//  console.log( `echo match: `, match ) 
//})

// Match e o resultado do teste da RegEx  
const sendEcho = ( msg, match ) => 
bot.sendMessage( msg.chat.id, match[ 1 ] )
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

bot.onText( /\/echo (.*)/, sendEcho )

// Echo
const logErrorEcho = ( msg ) => ( err ) => 
console.log( msg, err )

const logSuccessEcho = ( msg, match ) => ( data ) => 
console.log( `Success: `, data )
