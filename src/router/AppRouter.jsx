import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import AllenEStore from "../pages/AllenEStore";
import Classrooms from "../pages/Classrooms";
import More from "../pages/More";
import Results from "../pages/Results";
import Scholarships from "../pages/Scholarships";
import StudyMaterials from "../pages/StudyMaterials";
import TestSeries from "../pages/TestSeries";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/test-series" element={<TestSeries />} />
      <Route path="/classrooms" element={<Classrooms />} />
      <Route path="/results" element={<Results />} />
      <Route path="/study-material" element={<StudyMaterials />} />
      <Route path="/scholarships" element={<Scholarships />} />
      <Route path="/allen-e-store" element={<AllenEStore />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
};

export default AppRoutes;
