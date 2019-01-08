import botConfig from './botConfig';

export default [
  {
    dialog: 'GreetingsDialog',
    locale: 'hello_messages_generic',
    matches: 'Greetings',
  },
  {
    dialog: 'GoodbyeDialog',
    locale: 'bye_messages_generic',
    matches: 'Goodbye',
  },
  {
    dialog: 'AttentionScheduleDialog',
    locale: 'bye_messages_generic',
    matches: 'AttentionSchedule',
  },
  {
    dialog: 'ThanksDialog',
    locale: 'thanks_message',
    matches: 'Thanks',
  },
  {
    dialog: 'HelpDialog',
    locale: 'help_message',
    matches: 'Help',
  },
  {
    dialog: 'PaymentInfoDialog',
    locale: botConfig.paymentText,
    matches: 'PaymentInfo',
  },
];
