import { MobileProvider } from "./MobileContext";
import AnimatedText from "./pages/AnimatedText";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <MobileProvider>
      <Welcome/>
      <AnimatedText/>
    </MobileProvider>
  );
}

export default App;
