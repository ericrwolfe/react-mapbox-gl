'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx = _interopRequireDefault(_jsx2).default;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck = _interopRequireDefault(_classCallCheck2).default;

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn = _interopRequireDefault(_possibleConstructorReturn2).default;

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits = _interopRequireDefault(_inherits2).default;

var _class, _temp2;

var _react = require('react');

var React = _interopRequireDefault(_react).default;

var PropTypes = _react.PropTypes;
var Component = _react.Component;

var _supercluster = require('supercluster');

var supercluster = _interopRequireDefault(_supercluster).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cluster = (_temp2 = _class = function (_Component) {
  _inherits(Cluster, _Component);

  function Cluster() {
    var _temp, _this, _ret;

    _classCallCheck(this, Cluster);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      clusterIndex: supercluster({
        radius: _this.props.radius,
        maxZoom: _this.props.maxZoom
      }),
      clusterPoints: []
    }, _this.mapChange = function () {
      var map = _this.context.map;
      var _this$state = _this.state,
          clusterIndex = _this$state.clusterIndex,
          clusterPoints = _this$state.clusterPoints;

      var _map$getBounds = map.getBounds(),
          _sw = _map$getBounds._sw,
          _ne = _map$getBounds._ne;

      var zoom = map.getZoom();
      var newPoints = clusterIndex.getClusters([_sw.lng, _sw.lat, _ne.lng, _ne.lat], Math.round(zoom));

      if (newPoints.length !== clusterPoints.length) {
        _this.setState({ clusterPoints: newPoints });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Cluster.prototype.componentWillMount = function componentWillMount() {
    var map = this.context.map;
    var clusterIndex = this.state.clusterIndex;


    var features = this.childrenToFeatures(this.props.children);
    clusterIndex.load(features);

    // TODO: Debounce ?
    map.on('move', this.mapChange);
    map.on('zoom', this.mapChange);
    this.mapChange();
  };

  Cluster.prototype.feature = function feature(coordinates) {
    return {
      type: 'Feature',
      geometry: {
        type: 'point',
        coordinates: coordinates
      },
      properties: {
        point_count: 1
      }
    };
  };

  Cluster.prototype.childrenToFeatures = function childrenToFeatures(children) {
    var _this2 = this;

    return children.map(function (child) {
      return _this2.feature(child.props.coordinates);
    });
  };

  Cluster.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        ClusterMarkerFactory = _props.ClusterMarkerFactory,
        clusterThreshold = _props.clusterThreshold;
    var clusterPoints = this.state.clusterPoints;


    return _jsx('div', {}, void 0, clusterPoints.length <= clusterThreshold ? children : clusterPoints.map(function (_ref) {
      var geometry = _ref.geometry,
          properties = _ref.properties;
      return ClusterMarkerFactory(geometry.coordinates, properties.point_count);
    }));
  };

  return Cluster;
}(Component), _class.propTypes = {
  ClusterMarkerFactory: PropTypes.func.isRequired,
  clusterThreshold: PropTypes.number,
  radius: PropTypes.number,
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  extent: PropTypes.number,
  nodeSize: PropTypes.number,
  log: PropTypes.bool
}, _class.contextTypes = {
  map: PropTypes.object
}, _class.defaultProps = {
  clusterThreshold: 1,
  radius: 60,
  minZoom: 0,
  maxZoom: 16,
  extent: 512,
  nodeSize: 64,
  log: false
}, _temp2);
exports.default = Cluster;
module.exports = exports['default'];