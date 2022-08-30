import frogimage from './frogimage.svg';
const navbar = () => {
  return (
    <nav className="navbar-container">
        <img src={frogimage} className="frog-in-navbar" alt="frog" />
        <ul>
            <li className='first-in-nav'><a>See more frogs</a></li>
            <li className='second-in-nav'><a>See even more frogs</a></li>
        </ul>
    </nav>
  )
}

export default navbar