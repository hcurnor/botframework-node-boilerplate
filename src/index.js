// Bot-framework
import restify from 'restify';
import * as builder from 'botbuilder';
// local Redux
import loadStore from './loadStore';
import * as DialogActions from './redux/actions/conversationalActions';

// Setup in memory storage
const inMemoryStorage = new builder.MemoryBotStorage();

// Setting up the server
const server = restify.createServer();
server.listen(3978, () => {
  console.log('Server listening to 3978');
});
// Create chat bot
const connector = new builder.ChatConnector({
  appId: '',
  appPassword: '',
});
const bot = new builder.UniversalBot(connector).set('storage', inMemoryStorage);

server.post('/api/messages', connector.listen());

// Dialogs
bot.dialog('/', (session, result) => {
  // Edit more dialog here ❺
  session.send(`You said ${session.message.text}`);
  // Redux setup
  const store = loadStore(session);
  const { attachments, text } = session.message || {}; // What user sends
  if (attachments || result || text) {
    store.dispatch(DialogActions.receiveMessage(text, attachments, result));
  }
});
