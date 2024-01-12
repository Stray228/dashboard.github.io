import "./scss/app.scss"
import { Aside, Table } from './components';
import { burger, hand } from "./assets/img";
import { User } from "./components/user";

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <div className='App__wrapper'>
        <Aside isOpen={isOpen} />
        <div className='App__content'>
          <header>
            <h2>
              Hello Evano&nbsp;
              <img src={hand} alt="hand" />
              ,
            </h2>
            <User />
            <img className='App__burger' src={burger} alt="burger" onClick={toogleMenu} />
          </header>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
