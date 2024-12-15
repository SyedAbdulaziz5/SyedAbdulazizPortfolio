import "./App.css";
import AppRoutes from "./routes";
import Header from "./components/Header";
import CircleWidget from "./components/CircleWidget";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <CircleWidget />
    </div>
  );
}

export default App;
