import {Meals, Modal, Search} from "./components";
import { useGlobalContext } from "./context";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const {showModal} = useGlobalContext();

  return (
    <div className="App">
      <GlobalStyle/>
      <Search/>
      <Meals/>
      {showModal && <Modal/>}
    </div>
  );
}

export default App;