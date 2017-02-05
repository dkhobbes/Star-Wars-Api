if (window.SWRouter === undefined) {window.SWRouter = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={SWRouter.AppComponent} />
    <Route path="/planets" component={SWRouter.PlanetListComponent} />
    <Route path="/starships" component={SWRouter.StarshipListComponent} />
    <Route path="/species" component={SWRouter.SpeciesComponent} />
    <Route path="/people" component={SWRouter.PeopleComponent} />
    <Route path="/vehicles" component={SWRouter.VehiclesComponent} />
    <Route path="/films" component={SWRouter.FilmComponent} />
  </Router>;

ReactDOM.render(router, mountNode);
})();
