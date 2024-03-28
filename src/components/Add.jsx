import React from "react";
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link,useNavigate,useLocation } from "react-router-dom";
import SectionLeft from "./SectionLeft";

const Add = () => {

    const [selectAdd,setSelectAdd] = React.useState([]);

    const navigate = useNavigate();

    const location = useLocation();
    const params = new URLSearchParams(location.search)

    const selectedPlan = params.get("selectedPlan");
    const billingCycle = params.get("billingCycle");

    const handleAdd = (addon) =>{
        if (selectAdd.includes(addon)){
            setSelectAdd(selectAdd.filter((item)=> item !==addon));
        } else{
            setSelectAdd([...selectAdd,addon]) 
        }
    }

    const handleNext = () => {
        const queryParams = selectAdd.join(",")
        navigate(`/finish?selectedPlan=${selectedPlan}&billingCycle=${billingCycle}&addons=${queryParams}`)
    }

    return (
        <main className="home">
            <div className="add--container"> 
                <SectionLeft/>

                <section className="add--right">

                    <section>
                        
                        <section className="add--right--descrip">
                            <h1>Pick add-ons</h1>
                            <p>Add-ons help enhance your gaming experience</p>
                        </section>

                        <section className="add--check--container">

                            <section className="add--checks">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="add--checkbox"
                                        id="online"
                                        checked={selectAdd.includes("online")}
                                        onChange={()=> handleAdd("online")}
                                    />
                                    <label htmlFor="online"></label>
                                </div>
                                <div>
                                    <h5>Online service</h5>
                                    <p>Access to multiplayer games</p>
                                </div>
                                <div>
                                    <p>+$2/mo</p>
                                </div>
                            </section>

                            <section className="add--checks">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="add--checkbox"
                                        id="larger"
                                        checked={selectAdd.includes("larger")}
                                        onChange={()=>handleAdd("larger")}
                                    />
                                    <label htmlFor="larger"></label>
                                </div>
                                <div>
                                    <h5>Larger storage</h5>
                                    <p>Extra 1TB of cloud service</p>
                                </div>
                                <div>
                                    <p>+$1/mo</p>
                                </div>
                            </section>

                            <section className="add--checks">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="add--checkbox"
                                        id="profile"
                                        checked={selectAdd.includes('profile')}
                                        onChange={()=>handleAdd("profile")}
                                    />
                                    <label htmlFor="profile"></label>
                                </div>
                                <div>
                                    <h5>Customizable Profile</h5>
                                    <p>Custom theme on your profile</p>
                                </div>
                                <div>
                                    <p>+$2/mo</p>
                                </div>
                            </section>

                        </section>

                    </section>
            
                    <div className="home--btn--container ">
                        <div>
                            <Link to="/select">
                                <h4 >GO BACK</h4>
                            </Link>
                        </div>
                        <div>
                            <button onClick={handleNext}>
                                Next Step
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Add;