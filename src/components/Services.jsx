import plane from "../assets/noun-flight-7899186.png"; 
import satellite from "../assets/noun-satellite-7900163.png";
import mic from "../assets/noun-mic-3219272.png";
import settings from "../assets/noun-setting-5013898.png";
export default function Services(){
    const locations=[
        {
            title:"Calculated Weather",
            content:"Built Wicket longer admire do barton vanity itself do in it.",
            img:satellite
        },
        {
            title:"Best Flights",
            content:"Engrossed listening. Park gate sell they west hard for the.",
            img:plane
        },
        {
            title:"Customization",
            content:"We deliver outsorced aviation services for military customers",
            img:settings
        },
        {
            title:"Local Events",
            content:"Barton vanity itself do in it. Prefered to men it engrossed listening.",
            img:mic
        }
    ]
    return(
        <div className="categories">
            <h2 className="category-title">CATEGORY</h2>
            <h1 className="services-title">We Offer Best Services</h1>
            <div className="services">
                {locations.map(
                    (location,index)=> 
                        <div className="service" key={index}>
                            <img className="service-img" src={location.img} alt="" />
                            <h3 className="service-name">{location.title}</h3>
                            <p className="service-desc">{location.content}</p> 
                        </div>
                )}
            </div>
        </div>
    )
    
}