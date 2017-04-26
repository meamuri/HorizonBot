
const TokenFile = require('./src/token.js');
const TelegramBot = require('node-telegram-bot-api');
const App = require('./src/app.js');

// replace the value below with the Telegram token you receive from @BotFather
const token = TokenFile.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    
    const answer = App.matcher(match[1])

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, answer);
});
