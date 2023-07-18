import React from "react";
import "./Styles/RecentUpdate.css"
import battery from "../Images/battery 1.png"
import temp from "../Images/image 8.png"
import humidity from "../Images/image 4.png"
import soilMoisture from "../Images/image 1.png"
import soilTemp from "../Images/image 5.png"
import lightIn from "../Images/image 2.png"
import ph from "../Images/image 3.png"
import ec from "../Images/image 7.png"
export default function RecentUpdates() {
    return (
        <div className="recent-update">
            <div >
                <h1 className="recent-update-text">Recent Updates</h1>
            </div>
            <div className="recent-update-cards">
                <div className="recent-update-uppercards">
                    <div className="cards">
                        <div className="card-image">
                            <img src={battery} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>100%</h1></div>
                            <div className="card-text-inner2"><h6>Battery</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={temp} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>30°</h1></div>
                            <div className="card-text-inner2"><h6>Amb. Temperature</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={humidity} alt="" ></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>51</h1></div>
                            <div className="card-text-inner2"><h6>Amb. Humidity</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={soilMoisture} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>29</h1></div>
                            <div className="card-text-inner2"><h6>Soil Moisture</h6></div>
                        </div>
                    </div>
                </div>
                <div className="recent-update-lowercards">
                    <div className="cards">
                        <div className="card-image">
                            <img src={soilTemp} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>30°</h1></div>
                            <div className="card-text-inner2"><h6>Soil Temperature</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={lightIn} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>65%</h1></div>
                            <div className="card-text-inner2"><h6>Light Intensity</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={ph} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>NA</h1></div>
                            <div className="card-text-inner2"><h6>pH</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={ec} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1>NA</h1></div>
                            <div className="card-text-inner2"><h6>EC</h6></div>
                        </div>
                    </div>
                </div>
                {/* <div className="cards">

                </div>
                <div className="cards">

                </div>
                <div className="cards">

                </div>
                <div className="cards">

                </div> */}
            </div>
        </div>
    )
}