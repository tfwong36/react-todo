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
import { Menu } from 'antd';
import Title from 'antd/lib/typography/Title';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        <div>
          <Menu mode="horizontal" theme="dark" className='menu'>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/done">Done</Link>
            </Menu.Item> 
            <Menu.Item key="3">
              <Link to="/undone">Undone</Link>
            </Menu.Item >
          </Menu>
          <Switch>
            <Route exact path="/done">
              <Done />
            </Route>
            <Route exact path="/undone">
              <Undone />
            </Route>
            <Route exact path="/">
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
    <div>
    <Title level={1} type="warning">✔️ Todo List ✔️</Title>
    <TodoList></TodoList>

    </div>
  );  
}
function Done() {
  return (
  <div>
  <Title level={1} type="warning">💖Done List💖</Title>
    <TodoGroupStatus status={true}></TodoGroupStatus>
  </div>
  );
}

function Undone() {
  return (
  <div>
  <Title level={1} type="warning">📅Undone List📅</Title>
    <TodoGroupStatus status={false}></TodoGroupStatus>
  </div>
  );
}
export default App;
