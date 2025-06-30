import plane from "../assets/noun-flight-7899186.png"; 
import satellite from "../assets/noun-satellite-7900163.png";
import mic from "../assets/noun-mic-3219272.png";
import settings from "../assets/noun-setting-5013898.png";
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services(){
    const locations=[
        {
            title:"Calculated Weather",
            content:"Built Wicket longer admire do barton vanity itself do in it.",
            icon:faSatellite
        },
        {
            title:"Best Flights",
            content:"Engrossed listening. Park gate sell they west hard for the.",
            icon:faSatellite
        },
        {
            title:"Customization",
            content:"We deliver outsorced aviation services for military customers",
            icon:faSatellite
        },
        {
            title:"Local Events",
            content:"Barton vanity itself do in it. Prefered to men it engrossed listening.",
            icon:faSatellite
        }
    ]
    return(
        <div className="services">
            <h2 className="category-title">CATEGORY</h2>
            <h1 className="services-title">We Offer Best Services</h1>
            <div className="services-grid">
                {locations.map(
                    (location,index)=> 
                        <div className="service-card" key={index}>
                            <FontAwesomeIcon icon={location.icon}/>
                            <h3 className="service-name">{location.title}</h3>
                            <p className="service-desc">{location.content}</p> 
                        </div>
                )}
            </div>
        </div>
    )
    
}