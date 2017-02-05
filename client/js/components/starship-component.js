if (window.SWRouter === undefined) {window.SWRouter = {}; }

(function() {

  class StarshipListItem extends React.Component {

    constructor(){
      super();
      this.state= {
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
      var currentClass = 'starship';
      var extraInfo;

      var selectedClass;
      if (this.state.isSelected) {
        currentClass += ' on';

        extraInfo = <div>
          <img src= "https://s-media-cache-ak0.pinimg.com/736x/58/19/d9/5819d950c07b93e41f314655838038dc.jpg" className="sw-logo"/>
          <div className="climate">Name: {this.props.starship.name}</div>
          <div>Model: {this.props.starship.model}</div>
          <div><a target="_blank" href={this.props.starship.url}>{this.props.starship.name} URL link</a></div>
        </div>
      }

      return <li className={currentClass} onClick={() => {this.toggle(); }}>
      <div className="name">{this.props.starship.name}</div>
      {extraInfo}
      </li>
    }
  }

  class StarshipListComponent extends React.Component {

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
      console.log('load the starships');
    }

    getTheData() {
      $.ajax({
        url: 'http://swapi.co/api/starships/'
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
        {this.state.apiResult.results.map((starship, index) => { return <StarshipListItem key={index} starship={starship}/>; })}
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
      <h1>Starships List</h1>

          {theList}
          <div className="text">
          <h1>Star Wars Starships</h1>
          <p className="paragraph">Starships info here.</p>
          <p className="paragraph">The Dark Horse Comics adaptation...</p>
          </div>
      </div>
    }
  }

  SWRouter.StarshipListComponent = StarshipListComponent;

})();
