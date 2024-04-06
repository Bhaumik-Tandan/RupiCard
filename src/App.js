import { MobileProvider } from "./MobileContext";
import MobilePhoneInput from "./components/MobilePhoneInput";
import AnimatedText from "./pages/AnimatedText";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <MobileProvider>
      <Welcome/>
      <MobilePhoneInput/>
      <AnimatedText/>
    </MobileProvider>
  );
}

export default App;
