import './App.css';
import './Component/TODOAPP'
import { TodoApp } from './Component/TODOAPP';
import { About } from './Component/About';
import { BrowserRouter,Route } from 'react-router-dom';
import { MenuNgang } from './Component/MenuNgang';
import { Home } from './Component/Home';
function App() {
  return (
    <>
    <div className="App">
          <BrowserRouter>
                <MenuNgang />
                    <Route path="/Home" component={Home}   />
                    <Route path="/To-Do-App" component={TodoApp}   />      
                    <Route path="/about" component={About}   />
          </BrowserRouter>
    </div>
    </>
  );
}

export default App;
