import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
