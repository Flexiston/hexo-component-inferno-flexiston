"use strict";

var _inferno = require("inferno");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * DisqusJS comment JSX component.
 * @module view/comment/disqusjs
 */
var _require = require('inferno'),
    Component = _require.Component,
    Fragment = _require.Fragment;

var _require2 = require('../../util/cache'),
    cacheComponent = _require2.cacheComponent;
/**
 * DisqusJS comment JSX component.
 *
 * @see https://github.com/SukkaW/DisqusJS
 * @example
 * <DisqusJs
 *     shortname="******"
 *     apiKey="******"
 *     api="******"
 *     admin="******"
 *     adminLabel={false}
 *     nesting={4}
 *     disqusId="******"
 *     path="/path/to/page"
 *     permalink="/page/permanent/path"
 *     pageTitle="******"
 *     siteTitle="******"
 *     jsUrl="/path/to/disqus.js"
 *     cssUrl="/path/to/disqusjs.css" />
 */


var DisqusJs = /*#__PURE__*/function (_Component) {
  _inherits(DisqusJs, _Component);

  var _super = _createSuper(DisqusJs);

  function DisqusJs() {
    _classCallCheck(this, DisqusJs);

    return _super.apply(this, arguments);
  }

  _createClass(DisqusJs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          shortname = _this$props.shortname,
          apiKey = _this$props.apiKey,
          api = _this$props.api,
          admin = _this$props.admin,
          _this$props$adminLabe = _this$props.adminLabel,
          adminLabel = _this$props$adminLabe === void 0 ? false : _this$props$adminLabe,
          _this$props$nesting = _this$props.nesting,
          nesting = _this$props$nesting === void 0 ? 4 : _this$props$nesting,
          disqusId = _this$props.disqusId,
          path = _this$props.path,
          permalink = _this$props.permalink,
          pageTitle = _this$props.pageTitle,
          siteTitle = _this$props.siteTitle,
          jsUrl = _this$props.jsUrl,
          cssUrl = _this$props.cssUrl;

      if (!shortname) {
        return (0, _inferno.createVNode)(1, "div", "notification is-danger", [(0, _inferno.createTextVNode)("You forgot to set the "), (0, _inferno.createVNode)(1, "code", null, "shortname", 16), (0, _inferno.createTextVNode)(" or "), (0, _inferno.createVNode)(1, "code", null, "api_key", 16), (0, _inferno.createTextVNode)(" for Disqus. Please set it in "), (0, _inferno.createVNode)(1, "code", null, "_config.yml", 16), (0, _inferno.createTextVNode)(".")], 4);
      }

      var js = "new DisqusJS({\n            shortname: '".concat(shortname, "',\n            apikey: ").concat(JSON.stringify(apiKey), ",\n            siteName: ").concat(JSON.stringify(siteTitle), ",\n            identifier: '").concat(disqusId || path, "',\n            url: '").concat(permalink || path, "',\n            title: ").concat(JSON.stringify(pageTitle), ",\n            api: '").concat(api, "',\n            admin: ").concat(JSON.stringify(admin), ",\n            adminLabel: ").concat(JSON.stringify(adminLabel), ",\n            nesting: ").concat(nesting, "\n        });");
      return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "link", null, null, 1, {
        "rel": "stylesheet",
        "href": cssUrl
      }), (0, _inferno.createVNode)(1, "div", null, (0, _inferno.createVNode)(1, "noscript", null, [(0, _inferno.createTextVNode)("Please enable JavaScript to view the "), (0, _inferno.createVNode)(1, "a", null, "comments powered by Disqus.", 16, {
        "href": "//disqus.com/?ref_noscript"
      })], 4), 2, {
        "id": "disqus_thread"
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "src": jsUrl
      }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
        "dangerouslySetInnerHTML": {
          __html: js
        }
      })], 4);
    }
  }]);

  return DisqusJs;
}(Component);
/**
 * Cacheable DisqusJS comment JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <DisqusJs.Cacheable
 *     comment={{
 *         shortname: '******',
 *         api_key: '******',
 *         api: '******',
 *         admin: '******',
 *         admin_label: false,
 *         nesting: 4
 *     }}
 *     page={{
 *         path: '/path/to/page',
 *         disqusId: '******',
 *         permalink: '******'
 *         title: '******'
 *     }}
 *     config={{ title: '******' }}
 *     helper={{ cdn: function() { ... } }} />
 */


DisqusJs.Cacheable = cacheComponent(DisqusJs, 'comment.disqusjs', function (props) {
  var config = props.config,
      page = props.page,
      helper = props.helper,
      comment = props.comment;
  return {
    path: page.path,
    shortname: comment.shortname,
    apiKey: comment.api_key,
    api: comment.api,
    admin: comment.admin,
    adminLabel: comment.admin_label,
    nesting: comment.nesting,
    disqusId: page.disqusId,
    permalink: page.permalink,
    pageTitle: page.title,
    siteTitle: config.title,
    jsUrl: helper.cdn('disqusjs', '1.2.5', 'dist/disqus.js'),
    cssUrl: helper.cdn('disqusjs', '1.2.5', 'dist/disqusjs.css')
  };
});
module.exports = DisqusJs;