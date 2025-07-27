
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
import BT_ProductList from './Props/BTProps/BT_ProductList'
import BT_ProductItem from './Props/BTProps/BT_ProductItem'
import BT_StateProps from './Props/BT_StateProps/BT_StateProps'
import BT_ChonXe from './Props/BT_ChonXe/BT_ChonXe'
import BT_MonAn from './Props/BT_MonAn/BT_MonAn'
import ProductsPage from './api/ProductsPage'
import ToDoListApi from './api/ToDoListApi'
// import CSS

// import "./css/index.css";


createRoot(document.getElementById('root')).render(
  <>
    {/* <BT1_HomeComponent /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <RenderCondition /> */}
    {/* <RenderStatement /> */}
    {/* <DemoChangeNumber /> */}
    {/* <ChangeColorCar /> */}
    {/* <TinkerApp /> */}
    {/* <ChangeFontSize /> */}
    {/* <DemoStyle /> */}

    {/* <BT_ProductList /> */}
    {/* <BT_StateProps /> */}
    {/* <BT_ChonXe /> */}
    {/* <BT_MonAn /> */}
    {/* <ProductsPage /> */}
    <ToDoListApi />
    {/*
      Phân biệt State và Props:
      ∙ State: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị (state, setState)
      ∙ Props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (read-only)
    */}
  </>

)
