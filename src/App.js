import { MobileProvider } from "./MobileContext";
import AnimatedText from "./pages/AnimatedText";
import FixedBottom from "./pages/FixedBottom";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <MobileProvider>
      <Welcome/>
      <FixedBottom/>
      <AnimatedText/>
    </MobileProvider>
  );
}

export default App;
