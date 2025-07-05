
import { createRoot } from 'react-dom/client'
import BT1_HomeComponent from './components/BT1_HomeComponent'
import DataBinding from './databinding/DataBinding'
import HandleEvent from './HandleEvent/HandleEvent'
// import CSS

// import "./css/index.css";


createRoot(document.getElementById('root')).render(
  <>
    <BT1_HomeComponent />
    <hr />
    <DataBinding />
    <hr />
    <HandleEvent />
  </>

)
