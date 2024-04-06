import { MobileProvider } from "./MobileContext";
import FixedBottom from "./pages/FixedBottom";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <MobileProvider>
    <div className="App">
      <Welcome/>
      <FixedBottom/>
    </div>
    </MobileProvider>
  );
}

export default App;
