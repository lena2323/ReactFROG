import frogimage from './frogimage.svg';
const navbar = () => {
  return (
    <nav className="navbar-container">
        <ul>
            <li>See more frogs</li>
            <li>See even more frogs</li>
            <li><img src={frogimage} className="Frog" alt="frog" /></li>
        </ul>
    </nav>
  )
}

export default navbar