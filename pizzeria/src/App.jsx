import { useState } from 'react'

import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Register } from './component/Register'
import { Login } from './component/Login' 
import { Cart } from './component/Cart'
import { Footer } from './component/Footer'
import { Pizza } from './component/Pizza'

function App() {

  const[allPizzas, setAllPizzas] = useState([]);
  const[total,setTotal]=useState(0);
  const[countPizzas,setCountPizzas]=useState(0);

  return (
    <>
      <Navbar
        total={total}
      ></Navbar>
      {/* <Home 
        allPizzas={allPizzas}
        setAllPizzas={setAllPizzas}
        total={total}
        setTotal={setTotal}
        countPizzas={countPizzas}
        setCountPizzas={setCountPizzas}
      ></Home> */}
      <Pizza></Pizza>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Cart
        allPizzas={allPizzas}
        setAllPizzas={setAllPizzas}
        total={total}
        setTotal={setTotal}
        countPizzas={countPizzas}
        setCountPizzas={setCountPizzas}
        ></Cart> */}
      <Footer></Footer> 
    </>
  )
}

export default App
