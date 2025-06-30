
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Dashboard from './components/Dashboard';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Services from './components/Services';
import Newsletter from './components/Newsletter';

function App() {
  return (
  <>
        <Dashboard/>
        <Hero />
        <Services/>
        <Destinations />
        <Newsletter/>
    </>
  );
}

export default App;
