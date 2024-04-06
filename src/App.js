import { MobileProvider } from "./MobileContext";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <MobileProvider>
    <div className="App">
      <Welcome/>
    </div>
    </MobileProvider>
  );
}

export default App;
