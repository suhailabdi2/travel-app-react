import traveller from "../assets/traveller.png"

function Hero(){
    return(
        <div className="hero">
            <img src={traveller} alt="A traveller with a backpack smiling"/>
            <div className="description">
                <p className="tagline">Best Destinations around the world</p>
                <h1>Travel, enjoy and live a new and full life</h1>
                <p className="desc"> Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className="buttons">
                    <button className="additional-info">Find Out More</button>
                    <button className="play"></button>
                    <p>Get Cat Facts</p>
                </div>
                
            </div>
        </div>
    )   
}
export default Hero;