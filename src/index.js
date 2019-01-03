// Bot-framework
import restify from 'restify';
import * as builder from 'botbuilder';
// local Redux
import loadStore from './loadStore';
import * as DialogActions from './redux/actions/dialogActions';
// DEV
require('dotenv').config();

// Setup in memory storage
const inMemoryStorage = new builder.MemoryBotStorage();
// Create chat bot
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID || '',
  appPassword: process.env.MICROSOFT_APP_PASSWORD || '',
});

const bot = new builder.UniversalBot(connector);

bot.set('storage', inMemoryStorage); // Register in memory storage

bot.set('localizerSettings', { // Configure bots default locale and locale folder path.
  defaultLocale: 'es',
});

// Setting up the server
const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
  console.log(`Server listening to 3978 ${process.env.PORT || 3978}`);
});

server.post('/api/messages', connector.listen());

// =========================================================
// Bot Recognizers
// =========================================================

// Your-LUIS-App-ID
const LuisAppID = process.env.LUIS_APP_ID;
// Your-LUIS-Key
const LuisKey = process.env.LUIS_APP_KEY;
const LuisModel = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/${LuisAppID}?subscription-key=${LuisKey}`;
const recognizer = new builder.LuisRecognizer(LuisModel);

bot.recognizer(recognizer);

// =========================================================
// Dialogs
// =========================================================

// Default
bot.dialog('/', new builder.SimpleDialog((session, result) => {
  // Redux store setup
  const store = loadStore(session);
  const { attachments, text } = session.message || {}; // What user sends
  if (attachments || result || text) {
    store.dispatch(DialogActions.receiveMessage(text, attachments, result));
  }
}));

bot.dialog('GreetingDialog',
  (session) => {
    session.send('You reached the Greeting intent. You said \'%s\'.', session.message.text);
    session.endDialog();
  }).triggerAction({
  matches: 'Greetings',
});
