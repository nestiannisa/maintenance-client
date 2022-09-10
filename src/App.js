import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dashbord, Casting,  Ladle, Dispenser, Housing, AddData, CastingView, HousingDetail, AddCasting} from "./page"
import ViewBreakdown from './page/component/ViewBreakdown';
import ViewAsset from './page/component/ViewAsset';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Dashbord />} />
     <Route path="/viewBreakdown" element={<ViewBreakdown />} />
     <Route path="/viewAsset" element={<ViewAsset />} />
     <Route path="/add" element={<AddData />} />
     <Route path="/casting/:id" element={<Casting />} />
     <Route path="/casting/part/ladle" element={<Ladle />} />
     <Route path="/viewAsset/casting" element={<CastingView />} />
     <Route path="/viewAsset/casting/addCasting" element={<AddCasting />} />
     <Route path="/viewAsset/casting/dispenser" element={<Dispenser />} />
     <Route path="/viewAsset/casting/dispenser/housing" element={<Housing />} />
     <Route path="/viewAsset/casting/dispenser/housing/detail/:id" element={<HousingDetail />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
