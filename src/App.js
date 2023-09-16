import './App.css';
//! CONNECTED FILES
import { MainBox } from './Components/MainBox';

//!Discovered a ERROR FROM CO6 .NEEDS A ATTENTION 16 September
import { LeftBox } from './Components/LeftBox';
import {RightNavBar} from './Components/RightNavBar';

function App() {
  return (
  <div className="App">
  <MainBox/>;
  <LeftBox/>
  <RightNavBar/>

//? FOR THE BACKGROUND
  <div className="background"></div>
    </div>
    
  );
}

export default App;