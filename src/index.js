// Bot-framework
import restify from 'restify';
import * as builder from 'botbuilder';
// local Redux
import loadStore from './loadStore';
import * as DialogActions from './redux/actions/dialogActions';
import * as ProductActions from './redux/actions/productActions';
// DEV
require('dotenv').config();

// Setup in memory storage
const inMemoryStorage = new builder.MemoryBotStorage();
// Create chat bot
const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID || '',
  appPassword: process.env.MICROSOFT_APP_PASSWORD || '',
});

const bot = new builder.UniversalBot(connector, {
  localizerSettings: {
    defaultLocale: 'es',
  },
});

bot.set('storage', inMemoryStorage); // Register in memory storage

// Setting up the server
const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
  console.log(`Server listening to ${process.env.PORT || 3978}`);
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

// General
bot.dialog('GreetingDialog',
  (session) => {
    session.send('hello_messages_generic');
  }).triggerAction({
  matches: 'Greetings',
});

bot.dialog('GoodbyeDialog',
  (session) => {
    session.endDialog('bye_messages_generic');
  }).triggerAction({
  matches: 'Goodbye',
});

// Product Information
bot.dialog('ProductInfoDialog',
  (session, args) => {
    const store = loadStore(session);
    const { attachments, text } = session.message || {}; // What user sends
    const { entities } = args.intent;
    if (attachments || text) {
      store.dispatch(ProductActions.requestInfo(text, entities));
    }
  }).triggerAction({
  matches: 'ProductInformation',
});
