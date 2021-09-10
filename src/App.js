import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import GameView from './components/game-view';
import GameForm from './components/game-form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <GameView/>
      <GameForm/>
    </div>
  );
}

export default App;
