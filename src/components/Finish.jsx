
import React from "react";
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link,useLocation } from "react-router-dom";

const Finish = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const selectedPlan = queryParams.get("plan");
    const billingCycle = queryParams.get("billingCycle");
    const selectedAddons = queryParams.get("addons")?.split(',');


    return (
        <main className="home">
            <div className="finish--container">
                <section className="home--left">
                    <div>      
                        <div className="image--container">
                            <img src={sidepic} alt="sidepic" className="sidepic"/>
                        </div>
                        <div className="image--description">
                            <div className="sidebar">
                
                                <section className="sidebar--box">
                                    <div className="sidebar--number--container ">1</div>
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
                                    <div className="sidebar--number--container selected--number">4</div>
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

                <section className="finish--right">
                    <section className="finish--right--descrip">
                        <h1>Finishin up</h1>
                        <p>Double-check everything looks OK before confirming.</p>
                    </section>

                    <section className="finish--plan">

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p>
                                    {selectedPlan}
                                </p>
                                <Link to="/select">
                                    <p>
                                        hello bharath
                                    </p>
                                </Link>
                            </div>
                            <div className="finish--box--right">
                                <h5>{billingCycle}</h5>
                            </div>
                            
                        </section>
                        <div className="line">
                            <hr/>
                        </div>

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--gray" >
                                    Online service
                                </p>
                            </div>
                            <div className="finish--box--right">
                                <p>$1/mo</p>
                            </div>
                        </section>

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--gray">
                                    Larger storage
                                </p>
                            </div>
                            <div className="finish--box--right">
                                <p>$2/mo</p>
                            </div>
                        </section>

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--gray">
                                    Total (per month)
                                </p>
                            </div>
                            <div className="finish--box--right">
                                <h5 className="finish--total">$12/mo</h5>
                            </div>
                        </section>
                    </section>

                    <div className="home--btn--container ">
                        <div>
                            <Link to="/add">
                                <h4 >GO BACK</h4>
                            </Link>
                        </div>
                        <div>
                            <Link>
                                <button >
                                    Confirm
                                </button>
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Finish;