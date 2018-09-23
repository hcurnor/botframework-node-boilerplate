// Bot-framework
import restify from 'restify';
import * as builder from 'botbuilder';
// local Redux
import loadStore from './loadStore';
import * as DialogActions from './redux/actions/dialogActions';

// Setup in memory storage
const inMemoryStorage = new builder.MemoryBotStorage();
// Create chat bot
const connector = new builder.ChatConnector({
  appId: '',
  appPassword: '',
});

const bot = new builder.UniversalBot(connector).set('storage', inMemoryStorage); // Register in memory storage

// Setting up the server
const server = restify.createServer();
server.listen(3978, () => {
  console.log('Server listening to 3978');
});

server.post('/api/messages', connector.listen());

// =========================================================
// Bot Recognizers
// =========================================================

// const LuisAppID = process.env.LUIS_APP_ID; // Your-LUIS-App-ID
// const LuisKey = process.env.LUIS_APP_KEY;  // Your-LUIS-Key
// const LuisModel = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/${ LuisAppID }?subscription-key=${ LuisKey }`;
// const recognizer = new builder.LuisRecognizer(LuisModel);

// Dialogs
bot.dialog('/', new builder.SimpleDialog((session, result) => {
  // Edit more dialog here ❺
  // session.send(`You said ${session.message.text}`);
  // Redux store setup
  const store = loadStore(session);
  const { attachments, text } = session.message || {}; // What user sends
  if (attachments || result || text) {
    store.dispatch(DialogActions.receiveMessage(text, attachments, result));
  }
}));
