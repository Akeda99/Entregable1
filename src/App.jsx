import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

const getRandomFromArray= (array1) => {
  const indexRandom= Math.floor(array1.length * Math.random())
  return array1[indexRandom]
}
const [colorandom, setColorandom] = useState(getRandomFromArray(colors))
const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

const handleClick=()=>{
  setQuoteRandom(getRandomFromArray(quotes))
  setColorandom(getRandomFromArray(colors))
}
const objStyle={
  backgroundColor: colorandom
}

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorandom={colorandom}
      />
    </div>
  )
}

export default App
