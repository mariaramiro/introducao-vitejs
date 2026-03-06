
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo02 from './pages/exemplos/ex-02';

function App(){
  return(
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="/exemplo01" element={<Exemplo01 />} />
       <Route path="/exemplo02" element={<Exemplo02 />} />
    </Routes>
  )
}

export default App;
