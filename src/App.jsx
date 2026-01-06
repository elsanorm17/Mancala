import './App.css'
import Board from "./components/GameBoard/Board"
import GameProvider from './context/GameProvider'
import Header from './components/Header/Header'
import Footer from './components/Header/Footer'

function App() {
  return (
    <GameProvider>
      <Header></Header>
      <Board />
      <Footer></Footer>
    </GameProvider>
  );
}

export default App
