'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =


















































































root;var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);var _botbuilder = require('botbuilder');var builder = _interopRequireWildcard(_botbuilder);var _effects = require('redux-saga/effects');var _actionTypes = require('../../constants/actionTypes');var _dialogActions = require('../actions/dialogActions');var _products = require('../../constants/products.json');var localProducts = _interopRequireWildcard(_products);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _marked = /*#__PURE__*/regeneratorRuntime.mark(productInfoAction),_marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchProductInfoAction),_marked3 = /*#__PURE__*/regeneratorRuntime.mark(root); // static data about products & bot info
// IMPORTANT: Arly phase 2.0
// TODO: change local products to the GraphQL JS online store products & Inventory
// Using constants/products.js file instead.
// Actions
function productInfoAction(session, action) {var entities, expectedEntities, query, product, infoRequested, value, productObj, optionsArray, productValue, valueExist, attachment;return regeneratorRuntime.wrap(function productInfoAction$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: // LUIS entities
          entities = action.payload.entities;expectedEntities = ['product', 'infoRequested', 'value']; // Format Luis response (entety.value)
          if (!(entities && entities.length > 0)) {_context.next = 42;break;}query = new Object();expectedEntities.forEach(function (expectedEntity) {var objectEntity = _lodash2.default.find(entities, function (entity) {return entity.type === expectedEntity;});if (objectEntity) {query[expectedEntity] = objectEntity.entity.toLowerCase();}});product = query.product, infoRequested = query.infoRequested, value = query.value; // Final object from store
          productObj = product ? localProducts[product] : null;if (!productObj) {_context.next = 38;break;}optionsArray = infoRequested ? productObj[infoRequested] : null;productValue = value && optionsArray ? optionsArray.find(function (property) {return property === value;}) : null;if (!(Array.isArray(optionsArray) && productValue)) {_context.next = 24;break;} // The property exist in optionsArray and is array like "colors, size"
          valueExist = _lodash2.default.find(optionsArray, function (objectValues) {return objectValues === productValue;});if (!valueExist) {_context.next = 20;break;} // Add image as attachment if exist
          attachment = [new builder.HeroCard(session).title(productObj.title || '').subtitle(productObj.subTitle || '').text(productObj.description || '').images([builder.CardImage.create(session, productObj.image || '')]).buttons([builder.CardAction.imBack(session, 'Si, quiero comprar.', 'Comprar')])];_context.next = 16;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_property_found', [product, infoRequested, value], attachment));case 16:_context.next = 18;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_call_to_action'));case 18:_context.next = 22;break;case 20:_context.next = 22;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_property_not_found', [product, infoRequested, value]));case 22:_context.next = 36;break;case 24:if (!(optionsArray && !productValue)) {_context.next = 29;break;}_context.next = 27;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_value_missing', [infoRequested]));case 27:_context.next = 36;break;case 29:if (!(!optionsArray && productValue)) {_context.next = 34;break;}_context.next = 32;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_missing_info', [product, value]));case 32:_context.next = 36;break;case 34:_context.next = 36;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_error', [product]));case 36:_context.next = 40;break;case 38:_context.next = 40;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_entities_error'));case 40:_context.next = 44;break;case 42:_context.next = 44;return (0, _effects.put)((0, _dialogActions.sendMessage)('product_missing'));case 44:case 'end':return _context.stop();}}}, _marked, this);} // Action watcher
function watchProductInfoAction(session) {return regeneratorRuntime.wrap(function watchProductInfoAction$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (0, _effects.takeEvery)(_actionTypes.PRODUCT_INFO, productInfoAction, session);case 2:case 'end':return _context2.stop();}}}, _marked2, this);} // Export sagas
function root(session) {return regeneratorRuntime.wrap(function root$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return [(0, _effects.fork)(watchProductInfoAction, session)];case 2:case 'end':return _context3.stop();}}}, _marked3, this);}
//# sourceMappingURL=product.js.map