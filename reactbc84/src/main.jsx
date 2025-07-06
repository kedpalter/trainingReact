
import { createRoot } from 'react-dom/client'
import BT1_HomeComponent from './components/BT1_HomeComponent'
import DataBinding from './databinding/DataBinding'
import HandleEvent from './HandleEvent/HandleEvent'
import RenderCondition from './render_condition/RenderCondition'
import RenderStatement from './RenderStatement/RenderStatement'
import DemoChangeNumber from './RenderStatement/DemoChangeNumber'
import ChangeColorCar from './RenderStatement/ChangeColorCar'
import TinkerApp from './RenderStatement/TinkerApp'
import ChangeFontSize from './StyleComponent/ChangeFontSize'
import DemoStyle from './StyleComponent/DemoStyle'
import DemoProps from './Props/DemoProps'
// import CSS

// import "./css/index.css";


createRoot(document.getElementById('root')).render(
  <>
    {/* <BT1_HomeComponent /> */}
    <hr />
    {/* <DataBinding /> */}
    <hr />
    {/* <HandleEvent /> */}
    <hr />
    {/* <RenderCondition /> */}
    <hr />
    {/* <RenderStatement /> */}
    <hr />
    {/* <DemoChangeNumber /> */}
    <hr />
    {/* <ChangeColorCar /> */}
    <hr />
    {/* <TinkerApp /> */}
    <hr />
    {/* <ChangeFontSize /> */}
    <hr />
    {/* <DemoStyle /> */}
    <hr />
    <DemoProps />
  </>

)
