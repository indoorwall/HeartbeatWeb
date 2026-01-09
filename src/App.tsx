import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StrategyLayout from './components/StrategyLayout';
import SitemapView from './views/SitemapView';
import LogicView from './views/LogicView';
import FlowsView from './views/FlowsView';
import CopySystemView from './views/CopySystemView';

import PrototypeLayout from './prototype/PrototypeLayout';
import ProtoHome from './prototype/pages/ProtoHome';
import ProtoIntro from './prototype/pages/ProtoIntro'; // Importar nueva página
import { ProtoSportsList, ProtoSportDetail } from './prototype/pages/ProtoSports.tsx';
import { ProtoLocationsList, ProtoLocationDetail } from './prototype/pages/ProtoLocations.tsx';
import { ProtoUniverseList, ProtoUniverseDetail } from './prototype/pages/ProtoHeartbeatTypes.tsx';
import ProtoStories from './prototype/pages/ProtoStories.tsx';
import ProtoAgenda from './prototype/pages/ProtoAgenda.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Strategy Tool Routes */}
        <Route path="/" element={<StrategyLayout />}>
          <Route index element={<SitemapView />} />
          <Route path="logic" element={<LogicView />} />
          <Route path="flows" element={<FlowsView />} />
          <Route path="copy" element={<CopySystemView />} />
        </Route>

        {/* Functional Prototype Routes */}
        {/* NOTA: Hemos movido ProtoHome a /prototype/home y ProtoIntro a /prototype/intro */}
        {/* Para efectos de la demo, mantengo el layout pero añado la intro como ruta independiente o dentro del layout si se desea header (el prompt dice SIN MENU) */}
        
        {/* Ruta Intro (Sin Layout estándar, es una página umbral) */}
        <Route path="/prototype/intro" element={<ProtoIntro />} />

        <Route path="/prototype" element={<PrototypeLayout />}>
          <Route index element={<ProtoHome />} />
          
          <Route path="deportes" element={<ProtoSportsList />} />
          <Route path="deportes/:id" element={<ProtoSportDetail />} />
          
          <Route path="lugares" element={<ProtoLocationsList />} />
          <Route path="lugares/:id" element={<ProtoLocationDetail />} />
          
          <Route path="universo" element={<ProtoUniverseList />} />
          <Route path="universo/:id" element={<ProtoUniverseDetail />} />

          <Route path="historias" element={<ProtoStories />} />
          <Route path="agenda" element={<ProtoAgenda />} />

          <Route path="*" element={<div className="p-10">Página en construcción (Wireframe)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
