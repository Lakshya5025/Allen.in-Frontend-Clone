import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Courses from "./components/Courses";
import AdditionalBelefits from "./components/AdditionalBenefits";
import Special from "./components/Special";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Courses />
      <AdditionalBelefits />
      <Special />
    </div>
  );
}

export default App;
