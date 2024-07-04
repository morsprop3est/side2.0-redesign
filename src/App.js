import './styles/globals/App.scss';

import Header from './components/Header/Header';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ReasonSection from "./components/ReasonSection/ReasonSection";
import StepsSlider from "./components/StepsSlider/StepsSlider";

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeSection/>
       <ReasonSection/>
        <StepsSlider/>
    </div>
  );
}

export default App;
