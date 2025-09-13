import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import AdditionalBelefits from "./components/AdditionalBenefits";
import Special from "./components/Special";
import AlternateOptions from "./components/AlternateOptions";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Courses />
      <AdditionalBelefits />
      <Special />
      <AlternateOptions />
    </div>
  );
}

export default App;
