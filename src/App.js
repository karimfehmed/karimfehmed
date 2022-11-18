import "./App.css";
import Header from "./components/header";
import CardSection from "./components/cards";
import Herosection from "./components/herosection";
import Newsection from "./components/Offersection";
import FooterSection from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <CardSection />
      <Newsection />
      <FooterSection />
    </div>
  );
}

export default App;
