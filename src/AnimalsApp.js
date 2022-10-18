import './Components/navbar.css';
import Navbar from './Components/Navbar';
import DisplayAnimal from './Components/DisplayAnimal';
import './Components/DisplayAnimal.css';


function AnimalsApp() {
  return (
    <>
      <Navbar title= 'navbar' />
      <div className="content">
        <DisplayAnimal/>
      </div>
    </>
  );
}

export default AnimalsApp;
