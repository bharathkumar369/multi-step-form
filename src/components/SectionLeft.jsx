import React from "react";
import sidepic from "../assets/images/bg-sidebar-desktop.svg"

const SectionLeft = () => {
    return(
        <section className="home--left">
        <div>      
            <div className="image--container">
                <img src={sidepic} alt="sidepic" className="sidepic"/>
            </div>
            <div className="image--description">
                <div className="sidebar">
    
                    <section className="sidebar--box">
                        <div className="sidebar--number--container selected--number">1</div>
                        <div className="sidebar--names">
                            <div>
                                <p>step 1</p>
                            </div>
                            <div>
                                <h3>STEP INFO</h3>
                            </div>
                        </div>
                    </section>

                    <section className="sidebar--box">
                        <div className="sidebar--number--container">2</div>
                        <div className="sidebar--names">
                            <div>
                                <p>step 2</p>
                            </div>
                            <div>
                                <h3>SELECT PLAN</h3>
                            </div>
                        </div>
                    </section>

                    <section className="sidebar--box">
                        <div className="sidebar--number--container">3</div>
                        <div className="sidebar--names">
                            <div>
                                <p>step 3</p>
                            </div>
                            <div>
                                <h3>ADD-ONS</h3>
                            </div>
                        </div>
                    </section>

                    <section className="sidebar--box">
                        <div className="sidebar--number--container">4</div>
                        <div className="sidebar--names">
                            <div>
                                <p>step 4</p>
                            </div>
                            <div>
                                <h3>FINISHING UP</h3>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>
    )
}
export default SectionLeft