import './styles/globals/App.scss';

import Header from './components/Header/Header';
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ReasonSection from "./components/ReasonSection/ReasonSection";
import StepsSlider from "./components/StepsSlider/StepsSlider";
import Technologies from "./components/Technologies/Technologies";
import AdvantageSection from "./components/AdvantageSection/AdvantageSection";
import PhoneForm from "./components/PhoneForm/PhoneForm";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeSection/>
       <ReasonSection/>
        <StepsSlider/>
        <Technologies/>
        <AdvantageSection/>
        <Portfolio/>
        <PhoneForm/>
        <Footer/>
    </div>
  );
}

export default App;
