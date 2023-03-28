import { Navbar } from "./comp/navbar";
import { Route, Routes} from "react-router-dom";
import { Home } from "./comp/home";
import { About } from "./comp/about";
import Notestate from "./context/notes/noteState";
function App() {
  return (
    <>
    <Notestate>
      <Routes>
      <Route
            exact path="/"
            element={
              <>
                <Navbar />
                <h1>Welcome to noteMap</h1>
              </>
            }
          />

          <Route path="/about" element={<><Navbar/><About /></>} />
          <Route path="/home" element={<><Navbar/><Home /></>} />

      </Routes>
      </Notestate>
    </>
  );
}

export default App;
