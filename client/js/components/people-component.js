if (window.SWRouter === undefined) {window.SWRouter = {}; }

(function() {

  class PeopleComponentItem extends React.Component {

    constructor() {
      super();
      this.state = {
        isSelected: false
      };
    }

    toggle() {
      console.log('hi');
      this.setState({
        isSelected: !this.state.isSelected
      })
    }

    render() {
      var currentClass = 'planet';
      var extraInfo;

      var selectedClass;
      if (this.state.isSelected) {
        currentClass += ' on';

        extraInfo = <div>
          <img src= "https://s-media-cache-ak0.pinimg.com/736x/58/19/d9/5819d950c07b93e41f314655838038dc.jpg" className="sw-logo"/>
          <div className="climate">Climate: {this.props.planet.climate}</div>
          <div>Diameter: {this.props.planet.diameter}</div>
          <div>Gravity: {this.props.planet.gravity}</div>
          <div>Orbital-Period: {this.props.planet.orbital_period}</div>
          <div>Population: {this.props.planet.population}</div>
          <div>Rotation-period: {this.props.planet.rotation_period}</div>
          <div>Surface-Water: {this.props.planet.surface_water}</div>
          <div>Terrain: {this.props.planet.terrain}</div>
          <div><a target="_blank" href={this.props.planet.url}>{this.props.planet.name} URL link</a></div>

        </div>
      }

      return <li className={currentClass} onClick={() => {this.toggle(); }}>
      <div className="name">{this.props.planet.name}</div>
      {extraInfo}
      </li>
    }
  }

  class PeopleComponent extends React.Component {

    constructor() {
      super();
    }

    componentDidMount() {
      console.log('AppComponent.ComponentDidMount');
      this.getTheData();
    }

    componentWillUnmount() {
      console.log('AppComponent.ComponentWillUnmount');
    }

    getTheData() {
      console.log('load the planets');
    }

    getTheData() {
      $.ajax({
        url: 'http://swapi.co/api/planets/'
      })
      .done((data) => {
        console.log('got data', data);

        this.setState({
          apiResult: data
        });
      });
    }

    render() {
      console.log('render', this.state);
      var theList;

      if (this.state != null) {
        theList = <ul className="theList">
        {this.state.apiResult.results.map((planet, index) => { return <PlanetListItem key={index} planet={planet}/>; })}
        </ul>;
      }

      return <div className="planet-list">
        <div className="image-holder"></div>
        <header>
          <div className="tabs"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/planets'}>planets</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/starships'}>starships</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/films'}>films</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/people'}>people</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/vehicles'}>vehicles</ReactRouter.Link></div>
          <div className="tabs"><ReactRouter.Link to={'/species'}>species</ReactRouter.Link></div>
        </header>

        <h1>Planet List</h1>

          {theList}
          <div className="text">
          <h1>Star Wars Planets</h1>
          <p className="paragraph">Tatooine, Alderaan, Hoth, Bespin, and Yavin are names of Star Wars planets that all fans are quite familiar with nowadays. With Star Wars Rebels and several new movies on their way, we’ll soon get acquainted with new planets we might have never heard of before. Or perhaps the names of these planets will sound familiar after all.</p>
          <p className="paragraph">The Dark Horse Comics adaptation of The Star Wars brings to life the rough draft from 1974 by George Lucas, and the series enables us to get a better look at planets that appeared in the early imaginings of The Star Wars, such as Aquilae and Ophuchi. With the recent release of The Making of Return of the Jedi the circle of the classic “making of” books by Jonathan Rinzler is complete. This trilogy offers a great amount of information about the different drafts that were written for the films.</p>
          </div>
      </div>
    }
  }

  SWRouter.PeopleComponent = PeopleComponent;

})();
