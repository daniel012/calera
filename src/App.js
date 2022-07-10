import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Menu from './Menu';
function App() {
  return (
    <div className="App">
      <ToastContainer />  
      <Menu />
    </div>
  );
}

export default App;
