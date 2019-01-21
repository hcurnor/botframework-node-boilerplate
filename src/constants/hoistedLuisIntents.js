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
  {
    dialog: 'AttentionScheduleDialog',
    locale: 'soon_message',
    matches: 'AttentionSchedule',
  },
  {
    dialog: 'BotInfoDialog',
    locale: 'soon_message',
    matches: 'BotInfo',
  },
  {
    dialog: 'CreateIssueDialog',
    locale: 'soon_message',
    matches: 'CreateIssue',
  },
  {
    dialog: 'EventInformationDialog',
    locale: 'soon_message',
    matches: 'EventInformation',
  },
  {
    dialog: 'HowToDialog',
    locale: 'soon_message',
    matches: 'HowTo',
  },
  {
    dialog: 'ManageIssueDialog',
    locale: 'soon_message',
    matches: 'ManageIssue',
  },
  {
    dialog: 'PriceInfoDialog',
    locale: 'soon_message',
    matches: 'PriceInfo',
  },
  {
    dialog: 'ProductAvailabilityDialog',
    locale: 'soon_message',
    matches: 'ProductAvailability',
  },
  {
    dialog: 'PromotionsInfoDialog',
    locale: 'soon_message',
    matches: 'PromotionsInfo',
  },
  {
    dialog: 'leaveFeedbackDialog',
    locale: 'soon_message',
    matches: 'leaveFeedback',
  },
];
