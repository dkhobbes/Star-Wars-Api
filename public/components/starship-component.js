'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  var StarshipListItem = function (_React$Component) {
    _inherits(StarshipListItem, _React$Component);

    function StarshipListItem() {
      _classCallCheck(this, StarshipListItem);

      var _this = _possibleConstructorReturn(this, (StarshipListItem.__proto__ || Object.getPrototypeOf(StarshipListItem)).call(this));

      _this.state = {
        isSelected: false
      };
      return _this;
    }

    _createClass(StarshipListItem, [{
      key: 'toggle',
      value: function toggle() {
        console.log('hi');
        this.setState({
          isSelected: !this.state.isSelected
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var currentClass = 'starship';
        var extraInfo;

        var selectedClass;
        if (this.state.isSelected) {
          currentClass += ' on';

          extraInfo = React.createElement(
            'div',
            null,
            React.createElement('img', { src: 'https://s-media-cache-ak0.pinimg.com/736x/58/19/d9/5819d950c07b93e41f314655838038dc.jpg', className: 'sw-logo' }),
            React.createElement(
              'div',
              { className: 'climate' },
              'Name: ',
              this.props.starship.name
            ),
            React.createElement(
              'div',
              null,
              'Model: ',
              this.props.starship.model
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'a',
                { target: '_blank', href: this.props.starship.url },
                this.props.starship.name,
                ' URL link'
              )
            )
          );
        }

        return React.createElement(
          'li',
          { className: currentClass, onClick: function onClick() {
              _this2.toggle();
            } },
          React.createElement(
            'div',
            { className: 'name' },
            this.props.starship.name
          ),
          extraInfo
        );
      }
    }]);

    return StarshipListItem;
  }(React.Component);

  var StarshipListComponent = function (_React$Component2) {
    _inherits(StarshipListComponent, _React$Component2);

    function StarshipListComponent() {
      _classCallCheck(this, StarshipListComponent);

      return _possibleConstructorReturn(this, (StarshipListComponent.__proto__ || Object.getPrototypeOf(StarshipListComponent)).call(this));
    }

    _createClass(StarshipListComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        this.getTheData();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        console.log('AppComponent.ComponentWillUnmount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        console.log('load the starships');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        var _this4 = this;

        $.ajax({
          url: 'http://swapi.co/api/starships/'
        }).done(function (data) {
          console.log('got data', data);

          _this4.setState({
            apiResult: data
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('render', this.state);
        var theList;

        if (this.state != null) {
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.results.map(function (starship, index) {
              return React.createElement(StarshipListItem, { key: index, starship: starship });
            })
          );
        }

        return React.createElement(
          'div',
          { className: 'planet-list' },
          React.createElement(
            'h1',
            null,
            'Starships List'
          ),
          theList,
          React.createElement(
            'div',
            { className: 'text' },
            React.createElement(
              'h1',
              null,
              'Star Wars Starships'
            ),
            React.createElement(
              'p',
              { className: 'paragraph' },
              'Starships ...'
            ),
            React.createElement(
              'p',
              { className: 'paragraph' },
              'The Dark Horse Comics adaptation...'
            )
          )
        );
      }
    }]);

    return StarshipListComponent;
  }(React.Component);

  SW.StarshipListComponent = StarshipListComponent;
})();
//# sourceMappingURL=starship-component.js.map
