import { MobileProvider } from "./MobileContext";
import MobilePhoneInput from "./components/MobilePhoneInput";
import AnimatedText from "./pages/AnimatedText";
import Welcome from "./pages/Welcome";
import CashbackText from "./pages/CashbackText";
import UnitStoreText from "./pages/UnitStoreText";
import ForexText from "./pages/ForexText";
function App() {
  return (
    <MobileProvider>
      <Welcome/>
      <MobilePhoneInput/>
      <AnimatedText/>
      <CashbackText/>
      <UnitStoreText/>
      <ForexText/>
    </MobileProvider>
  );
}

export default App;
