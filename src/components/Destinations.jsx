import Rome from "../assets/Rome.png";
import London from "../assets/London.jpg";
import Paris from "../assets/europe.png";
import Spain from "../assets/ibiza.jpg"
function Destinations(){
    const locations=[
        {
            img:London,
            days:12,
            location:"London, UK",
            price:4.2
        },
        {
            img: Rome,
            days:15,
            location:"Rome, Italy",
            price:4.5
        },
        {
            img: Paris,
            days:15,
            location:"Paris, France",
            price:6.5
        },
        {
            img:Spain,
            days:15,
            location:"Spain, Ibiza",
            price:3.8,
        }
    ]
    return(
        <div className="locations">
            <h3 className="desc-tagline">Top Selling</h3>
            <h1 className="desc-title">Top Destinations</h1>
            <div className="destinations-grid">
                {
                locations.map((loc,index)=> 
                    <div className="destination-card" key={index}>
                        <img src={loc.img} alt="" />
                        <div className="destination-header">
                            <h3>{loc.location}</h3>
                            <p>${loc.price}K</p>
                        </div>
                        <p>{loc.days} days trip</p>
                    </div>
                )
            }
            </div>  
        </div>
    )
}

export default Destinations