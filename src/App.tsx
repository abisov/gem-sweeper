import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import GameView from './components/game-view';
import GameForm from './components/game-form';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Footer/>
        <div className='gameBorder'>
          <div className="Game">
            <GameView/>
            <GameForm/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
