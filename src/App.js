import React from 'react';
import { Titles } from './components/atoms/modals/title';
import { TitleIcon } from './components/atoms/modals/titleicon';
import titleIcon from './assets/icons/slideon.png';
import { ModalButtons } from './components/molecules/modals/modalbuttons';
import { ModalActive } from './components/organism/modals/Active';
import './assets/css/styles.css';

function App() {
  return (
    <div className="App">
      <Titles title="¿Activar sección?"/>
      <TitleIcon titleIcon={titleIcon}/>
      <ModalButtons/>
      <ModalActive/>
    </div>
  );
}

export default App;
