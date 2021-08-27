import './assets/styles.css';
import { DefinitionModal } from './Components/Modals/DefinitionModal/DefinitionModal';
import { EditModal } from './Components/Modals/EditModal/EditModal';



function App() {
  return (
    <div className="App">
      <DefinitionModal/>
      <EditModal/>
    </div>
  );
}

export default App;
