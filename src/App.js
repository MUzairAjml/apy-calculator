import './App.css';
import "antd/dist/antd.css";
import ApyForm from './Components/Form/ApyForm';
import ApyHeader from './Components/Header/ApyHeader';
import DashBoard from './Components/DashBoard';


function App() {
  return (
    <div>
      <ApyHeader/>
      <DashBoard/>
    </div>
  )
}

export default App;
