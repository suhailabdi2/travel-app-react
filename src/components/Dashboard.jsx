function Dashboard(){
    return(
        <div className="nav">
            <h1>travel</h1>
            <button className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className="nav-links">
                <li>Services</li>
                <li>Destinations</li>
                <li>Newsletter</li>
                <li>SiteMap</li>
            </ul>
            <button className="signUp"><a href="contact.html">Sign Up</a></button>
        </div>
    )
}
export default Dashboard;