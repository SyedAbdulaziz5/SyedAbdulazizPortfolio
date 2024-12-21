import "./App.css";
import AppRoutes from "./routes";
import Header from "./components/Header";
import CircleWidget from "./components/CircleWidget";
import Expertise from "./components/Expertise";
import Practice from "./components/Practice";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      {/* <CircleWidget />   */}
      {/* <Practice /> */}
    </div>
  );
}

export default App;
