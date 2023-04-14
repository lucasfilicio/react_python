import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import ResponsiveGrid from './screens/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ResponsiveAppBar> </ResponsiveAppBar>
     <ResponsiveGrid> </ResponsiveGrid>
    </div>
    </Provider>
  );
}

export default App;
