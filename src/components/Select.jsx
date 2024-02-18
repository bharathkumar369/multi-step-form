import { useContext,useState } from "react";
import { userContext } from "../MultiStep";
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link,useNavigate } from "react-router-dom";
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import month from '../assets/images/toggle-mo.svg'
import year from "../assets/images/toggle-ye.svg"



const Select = () => {

    const {toggleOn,toggle} = useContext(userContext);
    const [selectedPlan,setSelectedPlan] = useState([]);

    const navigate = useNavigate();

    const handleSelect = (plan) =>{
        setSelectedPlan(plan)
        
    }

    const handleNext = () => {
        navigate(`/add?selectedPlan=${selectedPlan}&billingCycle=${toggle ? "monthly" : "yearly"}`)
    }

    return (
        <main className="home">
            <div className="select--container"> 
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
                                    <div className="sidebar--number--container selected--number">2</div>
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

                <section className="select--right">
                    <section className="home--right--descrip"> 
                        <h1>Select your plan</h1>
                        <p>You have the option of monthly or yearly billing</p>
                    </section>

                    <section className="select--plan">
                        <section  className={`selected--box ${selectedPlan === "arcade" ? "selected" : ""}`}
                            onClick={()=>handleSelect("arcade")}
                        >
                            <div>
                                <img src={arcade} alt="arcade" className="select--arcade" />
                            </div>
                            <div>
                                <h4>Arcade</h4>
                                {toggle ?
                                    (<p>$9/mo</p>)
                                    :
                                    (<div className="select--box__year">
                                        <p>$90/year</p>
                                        <h6>2 months free</h6>
                                    </div>)
                                }
                            </div>
                        </section>

                        <section  className={`selected--box ${selectedPlan === "advanced" ? "selected" : ""}`}
                            onClick={()=>handleSelect("advanced")}
                        >
                            <div>
                                <img src={advanced} alt="arcade" className="select--arcade" />
                            </div>
                            <div>
                                <h4>Advanced</h4>
                                {toggle ?
                                    (<p>$12/mo</p>)
                                    :
                                    (<div className="select--box__year">
                                        <p>$120/year</p>
                                        <h6>2 months free</h6>
                                    </div>)
                                }
                            </div>
                        </section>

                        <section  className={`selected--box ${selectedPlan === "pro" ? "selected" : ""}`}
                            onClick={()=>handleSelect("pro")}
                        >
                            <div>
                                <img src={pro} alt="arcade" className="select--arcade" />
                            </div>
                            <div>
                                <h4>Pro</h4>
                                {toggle ?
                                    (<p>$15/mo</p>)
                                    :
                                    (<div className="select--box__year">
                                        <p>$150/year</p>
                                        <h6>2 months free</h6>
                                    </div>)
                                }
                            </div>
                        </section>

                    </section>

                    <section>
                        <div className="select--monthly">
                            <div className={toggle ? "color--change" : ""}>Monthly</div>
                            <div >
                                <img src={toggle ? month : year} alt="month" className="toggle" onClick={toggleOn}/>
                            </div>
                            <div className={toggle ? "" : "color--change"}>Yearly</div>
                        </div>
                    </section>
            
                    <div className="home--btn--container ">
                        <div>
                            <Link to="..">
                                <h4 >GO BACK</h4>
                            </Link>
                        </div>
                        <div>                          
                            <button onClick={()=>handleNext(selectedPlan)}>
                                Next Step
                            </button>                         
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Select;