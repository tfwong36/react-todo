import './App.css';
import TodoList from './components/TodoList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import TodoGroupStatus from './components/TodoGroupStatus';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="bg"></div>
            <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
        <div>
          <ul className='menu'>
            <span class="btn">
              <Link to="/">Home</Link>
            </span>
            <span class="btn">
              <Link to="/done">Done</Link>
            </span> 
            <span class="btn">
              <Link to="/undone">Undone</Link>
            </span >
          </ul>
          <Switch>
            <Route path="/done">
              <Done />
            </Route>
            <Route path="/undone">
              <Undone />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <TodoList></TodoList>
  );  
}
function Done() {
  return (
  <div>
    <p className='title'>💖Done List💖</p>
    <TodoGroupStatus status={true}></TodoGroupStatus>
  </div>
  );
}

function Undone() {
  return (
  <div>
    <p className='title'>📅Undone List📅</p>
    <TodoGroupStatus status={false}></TodoGroupStatus>
  </div>
  );
}
export default App;
