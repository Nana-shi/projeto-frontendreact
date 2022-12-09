import { HomePage } from './components/HomePage/HomePage'
import { useState } from 'react'
import { AppStyled } from './AppStyled'

function App() {
  const [cart, setCart] = useState([])
  return (
    <AppStyled>
      <HomePage cart={cart} setCart={setCart}/>;
    </AppStyled>
  )
}

export default App
