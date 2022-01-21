import "../styles/App/App.css";
import Home from '../components/Home';
import AddNewItem from '../components/AddNewItem';
import EditItem from '../components/EditItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from "../components/context/GlobalState";

function App() {
    return (
        <div className="wrapper">
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/add" component={AddNewItem}  />
                        <Route path="/edit/:id" component={EditItem}  />
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
