import {Favorites, Meals, Modal, Search} from "./components";
import { useGlobalContext } from "./context";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  const {showModal, favorites} = useGlobalContext();

  return (
    <div className="App">
      <GlobalStyle/>
      <Search/>
      {favorites.length > 0 && <Favorites/>}
      <Meals/>
      {showModal && <Modal/>}
    </div>
  );
}

export default App;