import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
    </div>
  );
};

export default App;
