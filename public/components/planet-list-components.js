'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.SW = window.SW || {};

(function () {
  var PlanetListItem = function (_React$Component) {
    _inherits(PlanetListItem, _React$Component);

    function PlanetListItem() {
      _classCallCheck(this, PlanetListItem);

      var _this = _possibleConstructorReturn(this, (PlanetListItem.__proto__ || Object.getPrototypeOf(PlanetListItem)).call(this));

      _this.state = {
        isSelected: false
      };
      return _this;
    }

    _createClass(PlanetListItem, [{
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

        var currentClass = 'planet';
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
              'Climate: ',
              this.props.planet.climate
            ),
            React.createElement(
              'div',
              null,
              'Diameter: ',
              this.props.planet.diameter
            ),
            React.createElement(
              'div',
              null,
              'Gravity: ',
              this.props.planet.gravity
            ),
            React.createElement(
              'div',
              null,
              'Orbital-Period: ',
              this.props.planet.orbital_period
            ),
            React.createElement(
              'div',
              null,
              'Population: ',
              this.props.planet.population
            ),
            React.createElement(
              'div',
              null,
              'Rotation-period: ',
              this.props.planet.rotation_period
            ),
            React.createElement(
              'div',
              null,
              'Surface-Water: ',
              this.props.planet.surface_water
            ),
            React.createElement(
              'div',
              null,
              'Terrain: ',
              this.props.planet.terrain
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'a',
                { target: '_blank', href: this.props.planet.url },
                this.props.planet.name,
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
            this.props.planet.name
          ),
          extraInfo
        );
      }
    }]);

    return PlanetListItem;
  }(React.Component);

  var PlanetListComponent = function (_React$Component2) {
    _inherits(PlanetListComponent, _React$Component2);

    function PlanetListComponent() {
      _classCallCheck(this, PlanetListComponent);

      return _possibleConstructorReturn(this, (PlanetListComponent.__proto__ || Object.getPrototypeOf(PlanetListComponent)).call(this));
    }

    _createClass(PlanetListComponent, [{
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
        console.log('load the planets');
      }
    }, {
      key: 'getTheData',
      value: function getTheData() {
        var _this4 = this;

        $.ajax({
          url: 'http://swapi.co/api/planets/'
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
            this.state.apiResult.results.map(function (planet, index) {
              return React.createElement(PlanetListItem, { key: index, planet: planet });
            })
          );
        }

        return React.createElement(
          'div',
          { className: 'planet-list' },
          React.createElement('div', { className: 'image-holder' }),
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'tabs' },
              'planets'
            ),
            React.createElement(
              'div',
              { className: 'tabs' },
              'starships'
            )
          ),
          React.createElement(
            'h1',
            null,
            'Planet List'
          ),
          theList,
          React.createElement(
            'div',
            { className: 'text' },
            React.createElement(
              'h1',
              null,
              'Star Wars Planets'
            ),
            React.createElement(
              'p',
              { className: 'paragraph' },
              'Tatooine, Alderaan, Hoth, Bespin, and Yavin are names of Star Wars planets that all fans are quite familiar with nowadays. With Star Wars Rebels and several new movies on their way, we\u2019ll soon get acquainted with new planets we might have never heard of before. Or perhaps the names of these planets will sound familiar after all.'
            ),
            React.createElement(
              'p',
              { className: 'paragraph' },
              'The Dark Horse Comics adaptation of The Star Wars brings to life the rough draft from 1974 by George Lucas, and the series enables us to get a better look at planets that appeared in the early imaginings of The Star Wars, such as Aquilae and Ophuchi. With the recent release of The Making of Return of the Jedi the circle of the classic \u201Cmaking of\u201D books by Jonathan Rinzler is complete. This trilogy offers a great amount of information about the different drafts that were written for the films.'
            )
          )
        );
      }
    }]);

    return PlanetListComponent;
  }(React.Component);

  SW.PlanetListComponent = PlanetListComponent;
})();
//# sourceMappingURL=planet-list-components.js.map
