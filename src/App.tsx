// import './App.css'

import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Service from "./components/Service"
import Home from "./components/Home"
import About from "./components/About"
import Team from "./components/Team"



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/team" element={<Team />} /> */}
          </Route>
        </Routes>
      </div>
      {/* <Header /> */}
    </>
  )
}

export default App
