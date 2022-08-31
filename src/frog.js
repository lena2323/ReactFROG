import frogimage from './frogimage.svg';
import './frog.css';
import './Components/navbar.css';
import Navbar from './Components/Navbar';
import ButtonGet from './Components/ButtonGet';

function Frog() {
  return (
    <div className="FrogContainer">
      <header className="Frog-header">
        <Navbar title= 'navbar' />
        <img src={frogimage} className="Frog" alt="frog" />
        <p>
          I DON'T KNOW WHAT THE FUCK IS GOING ON
        </p>
        <a
          className="Frog-link"
          href="https://www.youtube.com/watch?v=JJbqbqobBaI&ab_channel=OrbeezNutzz"
          target="_blank"
          rel="noopener noreferrer">
          but the frog fucks good
        </a>
        <ButtonGet title= 'buttonGet' />
      </header>
    </div>
  );
}

export default Frog;
