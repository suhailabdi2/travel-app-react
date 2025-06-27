import traveller from "../assets/traveller.png"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-content">
                <h3 className="hero-tagline">Best Destinations around the world</h3>
                <h1 className="hero-title">Travel, enjoy and live a new and full life</h1>
                <p className="hero-desc">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="hero-btns">
                    <button className="find-more">Find Out More</button>
                    
                </div>
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src={traveller} alt="image of a female traveller"  />
            </div>
    </div>
    )   
}
export default Hero;