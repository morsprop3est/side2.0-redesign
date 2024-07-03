import './styles/globals/App.scss';

import Header from './components/Header/Header';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

function App() {
  return (
    <div className="App">
      <Header/>
        <WelcomeSection/>
    </div>
  );
}

export default App;
