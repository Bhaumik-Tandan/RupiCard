import { MobileProvider } from "./MobileContext";
import MobilePhoneInput from "./components/MobilePhoneInput";
import AnimatedText from "./pages/AnimatedText";
import Welcome from "./pages/Welcome";
import CashbackText from "./pages/CashbackText";
function App() {
  return (
    <MobileProvider>
      <Welcome/>
      <MobilePhoneInput/>
      <AnimatedText/>
      <CashbackText/>
    </MobileProvider>
  );
}

export default App;
