import {Meals, Search} from "./components";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Search/>
      <Meals/>
    </div>
  );
}

export default App;
