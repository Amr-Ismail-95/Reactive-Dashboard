import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter, Routes, route, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Button, Cart, ChartsHeader, Chat, Footer, Header, NavBar, Notification, SideBar, ThemeSettings, UserProfile} from './Components'
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Line,  Editor} from './Pages'
import { useStateContext } from "./Context/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: "1000"}}>
            <TooltipComponent content='Settings' position="top">
              <button type='button' className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: 'blue', borderRadius: '50%'}} >
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <SideBar />
          </div>
        ): 
        (<div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar />
        </div>)}


        <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <NavBar/>
          </div>
        </div>
        
        <div>
          <Routes>
            {/* Dashboards */}
            <Route path="/" element={<Ecommerce/>}/>
            <Route path="/ecommerce" element={<Ecommerce/>}/>
          
            {/* Pages */}
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/customers" element={<Customers/>}/>

            {/* Apps */}
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/kanban" element={<Kanban/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>

            {/* charts */}
            <Route path="/line" element={<Line/>}/>
            <Route path="/area" element={<Area/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/pie" element={<Pie/>}/>
            <Route path="/financial" element={<Financial/>}/>
            <Route path="/color-mapping" element={<ColorMapping/>}/>
            <Route path="/pyramid" element={<Pyramid/>}/>
            

          </Routes>
        </div>

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
