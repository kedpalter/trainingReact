
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
import DemoFormLogin from './Form/DemoFormLogin'
import DemoFormik from './Form/DemoFormik'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomeIndex from './Pages/HomeIndex'
import Login from './Pages/Login'
import HomeTemplate from './template/HomeTemplate'
import Register from './Pages/Register'
import DemoUseNavigate from './Pages/ReactRouterDom/DemoUseNavigate'
import ForgotPass from './Pages/ReactRouterDom/ForgotPass'
import DemoUseParam from './Pages/ReactRouterDom/DemoUseParam'
import HeaderHome from './template/HeaderHome'
import DemoUseSearchParam from './Pages/ReactRouterDom/DemoUseSearchParam'
import AntdDemo from './Pages/AntdDemo/AntdDemo'
// import CSS

// import "./css/index.css";

// setup dedux
import { Provider } from 'react-redux';
import { store } from './redux/Store'
import ChangeNumberRedux from './Pages/ReduxDemo/ChangeNumberRedux'



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
    {/* <ToDoListApi /> */}
    {/* <DemoFormLogin /> */}
    {/* <DemoFormik /> */}
    {/*
      Phân biệt State và Props:
      ∙ State: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị (state, setState)
      ∙ Props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (read-only)
    */}
    {/* REACT ROUTER DOM ------------------------------------------------ */}
    <BrowserRouter>
      <Provider store={store}>
        <Routes>


          <Route path='' element={<HomeTemplate />}>


            <Route index element={<HomeIndex />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='antd' element={<AntdDemo />}></Route>
            <Route path='redux-change-number' element={<ChangeNumberRedux />}></Route>
          </Route>

          <Route path='api' element={
            <div>

              <header className='bg-dark text-white p-3'>Header</header>
              <Outlet />
              <footer className='bg-dark text-white p-3'>Footer</footer>

            </div>}>
            <Route path='todolist' element={<ToDoListApi />} />
            <Route path='productpage' element={<ProductsPage />}></Route>
          </Route>

          <Route path='react-router-dom' element={<HomeTemplate />}>
            <Route path='demo-use-navigate' element={<DemoUseNavigate />}></Route>
            <Route path='forgot-pass' element={<ForgotPass />}></Route>
            <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
          </Route>

          <Route path='demo-use-param'>
            <Route path=':id' element={
              <div>
                <HeaderHome ></HeaderHome>
                <DemoUseParam />
              </div>}>
            </Route>
          </Route>


        </Routes>
      </Provider>
    </BrowserRouter>
  </>

)
