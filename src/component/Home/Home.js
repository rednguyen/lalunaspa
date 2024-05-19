import "./Home.css"
import Booking from "../Booking/Booking";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <>
            <div className="home-wrapper">
                <div className="introduction">
                    <div className="intro-left">
                        <h1 style={{color: "#271616"}}>
                         Luna Spa Hoi An Overview
                        </h1>
                        <p className="intro-content">
                        A Fusion of Tradition and Modernity on Sustainability La Luna Spa is a place where tradition meets contemporary, 
                        creating a unique and lasting experience. The spa uses only 100% natural herbs, bought from the village elders 
                        who have been cultivating and harvesting medicinal plants and herbs for generations. 
                        By relying on nature and respecting ancient traditions,
                        La Luna Spa creates a special atmosphere of healing and relaxation. 
                        The standout product at La Luna Spa is Ashiatsu, a healing touch treatment that combines traditional 
                        techniques with modernity. The spa's dedication to preserving and promoting traditional elements of 
                        medicinal materials and massage techniques ensures that guests leave feeling refreshed and rejuvenated. 
                        But La Luna Spa is more than just a spa - it's a sustainable community .The spa values the community and the surrounding environment, 
                        making it a lasting presence in the area. With its unique blend of tradition and modernity, La Luna Spa provides a truly special and 
                        unforgettable experience.
                        </p>
                    </div>
                    <p>
                    </p>
                    <div className="intro-right">
                        <img className="img-overview" src={require("../asset/intro.jpg")}/>
                    </div>
                </div>
                <div className="overview"></div>
                <Services/>
                <Contact/>
            </div>
            
        </>
       
    )
}

export default Home;