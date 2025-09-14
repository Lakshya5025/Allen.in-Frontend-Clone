import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import AdditionalBelefits from "./components/AdditionalBenefits";
import Special from "./components/Special";
import AlternateOptions from "./components/AlternateOptions";
import Footer from "./components/Footer";
import CopyrightAndSocials from "./components/CopyrightAndSocials";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Courses />
      <AdditionalBelefits />
      <Special />
      <AlternateOptions />
      <Footer />
      <CopyrightAndSocials />
    </div>
  );
}

export default App;
