import Designs from "./components/design/Designs";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Quote from "./components/quote/Quote";
import Services from "./components/services/Services";
import Container from "./components/styles/Container.style";
import GlobalStyle from "./components/styles/GlobalStyle";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
      <Container>
        <Navbar/>
        <Hero/>
        <Services/>
        <Designs/>
        <Team/>
        <Quote/>
      </Container>
        <Footer/>
    </div>
  );
}

export default App;
