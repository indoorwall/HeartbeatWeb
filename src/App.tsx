import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StrategyLayout from './components/StrategyLayout';
import SitemapView from './views/SitemapView';
import LogicView from './views/LogicView';
import FlowsView from './views/FlowsView';
import CopySystemView from './views/CopySystemView';

import PrototypeLayout from './prototype/PrototypeLayout';
import ProtoHome from './prototype/pages/ProtoHome';
import ProtoIntro from './prototype/pages/ProtoIntro';
import { ProtoSportsList, ProtoSportDetail } from './prototype/pages/ProtoSports.tsx';
import ProtoSportPage from './prototype/pages/ProtoSportPage.tsx';
import ProtoSportDetail from './prototype/pages/ProtoSportDetail';
import { ProtoLocationsList, ProtoLocationDetail } from './prototype/pages/ProtoLocations.tsx';
import { ProtoEcosystemList, ProtoEcosystemDetail } from './prototype/pages/ProtoHeartbeatTypes.tsx'; // RENAMED
import ProtoStories from './prototype/pages/ProtoStories.tsx';
import ProtoAgenda from './prototype/pages/ProtoAgenda.tsx';
import ProtoCentros from './prototype/pages/ProtoCentros';
import ProtoCentroDetail from './prototype/pages/ProtoCentroDetail';
import ProtoInvertir from './prototype/pages/ProtoInvertir';
import ProtoInvertirDetail from './prototype/pages/ProtoInvertirDetail';
import ProtoAlojamiento from './prototype/pages/ProtoAlojamiento';
import ProtoAlojamientoHoteles from './prototype/pages/ProtoAlojamientoHoteles';
import ProtoAlojamientoSocial from './prototype/pages/ProtoAlojamientoSocial';
import ProtoAlojamientoHome from './prototype/pages/ProtoAlojamientoHome';
import ProtoHeartbeatLife from './prototype/pages/ProtoHeartbeatLife';
import ProtoLifeReserve from './prototype/pages/ProtoLifeReserve';
import ProtoLifeResort from './prototype/pages/ProtoLifeResort';
import ProtoAlimentacion from './prototype/pages/ProtoAlimentacion';
import ProtoAlimentacionDetail from './prototype/pages/ProtoAlimentacionDetail';

// MAGAZINE IMPORTS
import MagazineLayout from './prototype/magazine/MagazineLayout';
import MagHome from './prototype/magazine/MagHome';
import MagArticle from './prototype/magazine/MagArticle';
import { MagSeriesList, MagSeriesDetail } from './prototype/magazine/MagSeries';
import MagSubscribe from './prototype/magazine/MagSubscribe';

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
        <Route path="/prototype/intro" element={<ProtoIntro />} />

        {/* MAGAZINE ROUTES (Independent Layout) */}
        <Route path="/prototype/magazine" element={<MagazineLayout />}>
          <Route index element={<MagHome />} />
          <Route path="article/:slug" element={<MagArticle />} />
          
          {/* Nuevas rutas de estructura editorial */}
          <Route path="series" element={<MagSeriesList />} />
          <Route path="series/:id" element={<MagSeriesDetail />} />
          
          <Route path="dossiers" element={<div className="p-20 text-center font-serif text-2xl">Dossiers (WIP)</div>} />
          <Route path="dossiers/:id" element={<div className="p-20 text-center font-serif text-2xl">Detalle Dossier (WIP)</div>} />
          
          <Route path="guides" element={<div className="p-20 text-center font-serif text-2xl">Guías SEO (WIP)</div>} />
          
          <Route path="subscribe" element={<MagSubscribe />} />
          <Route path="archive" element={<div className="p-20 text-center font-serif">Archivo completo (WIP)</div>} />
          <Route path="newsletter" element={<div className="p-20 text-center font-serif">Preferencias Newsletter (WIP)</div>} />
        </Route>

        {/* Main App Routes */}
        <Route path="/prototype" element={<PrototypeLayout />}>
          <Route index element={<ProtoHome />} />

          <Route path="centros" element={<ProtoCentros />} />
          <Route path="centros/:slug" element={<ProtoCentroDetail />} />

          <Route path="invertir" element={<ProtoInvertir />} />
          <Route path="invertir/:slug" element={<ProtoInvertirDetail />} />

          <Route path="alojamiento" element={<ProtoAlojamiento />} />
          <Route path="alojamiento/hoteles" element={<ProtoAlojamientoHoteles />} />
          <Route path="alojamiento/social" element={<ProtoAlojamientoSocial />} />
          <Route path="alojamiento/home" element={<ProtoAlojamientoHome />} />

          <Route path="heartbeat-life" element={<ProtoHeartbeatLife />} />
          <Route path="heartbeat-life/reserve" element={<ProtoLifeReserve />} />
          <Route path="heartbeat-life/resort" element={<ProtoLifeResort />} />

          <Route path="alimentacion" element={<ProtoAlimentacion />} />
          <Route path="alimentacion/:slug" element={<ProtoAlimentacionDetail />} />

          <Route path="deportes" element={<ProtoSportsList />} />
          <Route path="deportes/:slug" element={<ProtoSportDetail />} />

          <Route path="lugares" element={<ProtoLocationsList />} />
          <Route path="lugares/:id" element={<ProtoLocationDetail />} />

          {/* CAMBIO: Ruta actualizada a Ecosistema y componentes renombrados */}
          <Route path="ecosistema" element={<ProtoEcosystemList />} />
          <Route path="ecosistema/:id" element={<ProtoEcosystemDetail />} />

          <Route path="historias" element={<ProtoStories />} />
          <Route path="agenda" element={<ProtoAgenda />} />
          <Route path="eventos" element={<ProtoAgenda />} />

          <Route path="*" element={<div className="p-10">Página en construcción (Wireframe)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
