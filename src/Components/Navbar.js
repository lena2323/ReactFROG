import icon from './icon.jpg';
const navbar = () => {
  return (
    <nav className="navbar-container">
        <img src={icon} className="icon-in-navbar" alt="icon" />
        <ul>
            <li className='first-in-nav'><a href='https://www.youtube.com/watch?v=q-NKpDTwMms&ab_channel=DogwithBlog' alt='video of animals being friends' target="_blank">Being friends</a></li>
            <li className='first-in-nav'><a href='https://www.youtube.com/watch?v=kMSDD619o7o&ab_channel=AdsofBrands' alt="video of animals being friends for Christmas"  target="_blank">Helping friends</a></li>
            <li className='second-in-nav'><a href='https://www.youtube.com/results?search_query=animals+being+friends' alt="youtube search for animals being friends"  target="_blank">See more</a></li>
        </ul>
    </nav>
  )
}

export default navbar