function SowApi (url, opts) {
  this._url = url
  this._opts = opts
}

SowApi.prototype.classes = require('./classes')
SowApi.prototype.classesOngoing = require('./classes-ongoing')
SowApi.prototype.classAttendees = require('./class-attendees')
SowApi.prototype.classAttendee = require('./class-attendee').get
SowApi.prototype.createClassAttendee = require('./class-attendee').post
SowApi.prototype.updateClassAttendee = require('./class-attendee').patch
SowApi.prototype.removeClassAttendee = require('./class-attendee').delete
SowApi.prototype.moveClassAttendee = require('./class-attendee-move')
SowApi.prototype.classMenu = require('./class-menu')
SowApi.prototype.classTemplates = require('./class-templates')
SowApi.prototype.classTemplateNames = require('./class-template-names')
SowApi.prototype.classTags = require('./class-tags')
SowApi.prototype.classTag = require('./class-tag').get
SowApi.prototype.createClassTag = require('./class-tag').post
SowApi.prototype.updateClassTag = require('./class-tag').patch
SowApi.prototype.removeClassTag = require('./class-tag').delete
SowApi.prototype.classDurations = require('./class-durations')
SowApi.prototype.classTemplate = require('./class-template').get
SowApi.prototype.createClassTemplate = require('./class-template').post
SowApi.prototype.updateClassTemplate = require('./class-template').patch
SowApi.prototype.removeClassTemplate = require('./class-template').delete
SowApi.prototype.class = require('./class').get
SowApi.prototype.classBySlug = require('./class').getBySlug
SowApi.prototype.classAlternatives = require('./class-alternatives')
SowApi.prototype.createClass = require('./class').post
SowApi.prototype.updateClass = require('./class').patch
SowApi.prototype.removeClass = require('./class').delete
SowApi.prototype.copyClass = require('./class-copy')
SowApi.prototype.corporateEvents = require('./corporate-events')
SowApi.prototype.corporateEvent = require('./corporate-event').get
SowApi.prototype.createCorporateEvent = require('./corporate-event').post
SowApi.prototype.updateCorporateEvent = require('./corporate-event').patch
SowApi.prototype.removeCorporateEvent = require('./corporate-event').delete
SowApi.prototype.products = require('./products')
SowApi.prototype.product = require('./product').get
SowApi.prototype.productBySlug = require('./product').getBySlug
SowApi.prototype.productAlternatives = require('./product-alternatives')
SowApi.prototype.createProduct = require('./product').post
SowApi.prototype.updateProduct = require('./product').patch
SowApi.prototype.removeProduct = require('./product').delete
SowApi.prototype.productTags = require('./product-tags')
SowApi.prototype.productTag = require('./product-tag').get
SowApi.prototype.productTagBySlug = require('./product-tag').getBySlug
SowApi.prototype.createProductTag = require('./product-tag').post
SowApi.prototype.updateProductTag = require('./product-tag').patch
SowApi.prototype.removeProductTag = require('./product-tag').delete
SowApi.prototype.menus = require('./menus')
SowApi.prototype.menu = require('./menu').get
SowApi.prototype.createMenu = require('./menu').post
SowApi.prototype.updateMenu = require('./menu').patch
SowApi.prototype.removeMenu = require('./menu').delete
SowApi.prototype.recipes = require('./recipes')
SowApi.prototype.recipe = require('./recipe').get
SowApi.prototype.createRecipe = require('./recipe').post
SowApi.prototype.updateRecipe = require('./recipe').patch
SowApi.prototype.removeRecipe = require('./recipe').delete
SowApi.prototype.voucherTemplates = require('./voucher-templates')
SowApi.prototype.voucherTemplate = require('./voucher-template').get
SowApi.prototype.voucherTemplateBySlug = require('./voucher-template').getBySlug
SowApi.prototype.voucherTemplateValidities = require('./voucher-template-validities')
SowApi.prototype.voucherTemplateAlternatives = require('./voucher-template-alternatives')
SowApi.prototype.createVoucherTemplate = require('./voucher-template').post
SowApi.prototype.updateVoucherTemplate = require('./voucher-template').patch
SowApi.prototype.removeVoucherTemplate = require('./voucher-template').delete
SowApi.prototype.promoTypes = require('./promo-types')
SowApi.prototype.promos = require('./promos')
SowApi.prototype.promo = require('./promo').get
SowApi.prototype.getPromoByCode = require('./promo').getByCode
SowApi.prototype.createPromo = require('./promo').post
SowApi.prototype.updatePromo = require('./promo').patch
SowApi.prototype.removePromo = require('./promo').delete
SowApi.prototype.summary = require('./summary')
SowApi.prototype.price = require('./price')
SowApi.prototype.orders = require('./orders')
SowApi.prototype.order = require('./order').get
SowApi.prototype.createOrder = require('./order').post
SowApi.prototype.settle = require('./settle')

module.exports = SowApi
