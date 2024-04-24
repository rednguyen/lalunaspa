import "./Services.css"
import Spa from '../asset/spa1.png'
import SpaPackages from "../config/spa-packages"
import Child from "../asset/child.png"
const baseImg = "../asset/child.png"

const Services = () => {
    return (
        <div>
            <section>
                <div className="container">
                    {
                        SpaPackages.packages.map(result => (
                            <>
                                <div className="spa-package">
                                    {/* <div className="spa-package-container"> */}
                                        <div className="spa-package-border" />
                                        <h2 className="spa-package-content">
                                            {result.packageName}
                                        </h2>
                                        <div className="spa-package-border" />
                                    {/* </div>     */}
                                </div>
                                <div className="cards">
                                    {
                                        result.packageDetail.map(resultDetail => (
                                            <div className="card">
                                            <img className="spa-img" src={require(`../asset/${resultDetail.img}`)}/>
                                            <h3>{resultDetail.title}</h3>
                                            <p>
                                                {resultDetail.content}
                                            </p>
                                            <hr></hr>
                                            <p>{resultDetail.time}</p>
                                            <p>{resultDetail.price}</p>
                                            <button className="btn">BOOK NOW</button>
                                    </div>  
                                        ))
                                    }
                                    
                                </div>
                               
                            </>
                        ))
                    }
                    

                </div>    
            </section>                
        </div>
    )
}

export default Services