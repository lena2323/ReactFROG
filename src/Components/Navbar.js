import frogimage from './frogimage.svg';
const navbar = () => {
  return (
    <nav className="navbar-container">
        <img src={frogimage} className="frog-in-navbar" alt="frog" />
        <ul>
            <li>See more frogs</li>
            <li>See even more frogs</li>
        </ul>
    </nav>
  )
}

export default navbar