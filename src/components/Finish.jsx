
import React,{ useContext } from "react";
import { userContext } from "../MultiStep";
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link,useLocation } from "react-router-dom";

const Finish = () => {

    const { toggle } = useContext(userContext);

    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const selectedPlan = params.get("selectedPlan");
    const billingCycle = params.get("billingCycle");
    const addon = params.get("addons");
    const selectAdd = params.get("selectAdd")

    const addonList = addon ? addon.split(",") : [];

    const [totalPrice,setTotalPrice] = React.useState(0);
    const [extraPrice,setExtraPrice] = React.useState(0)
    
   
    React.useEffect(()=>{
        console.log(selectedPlan);
        console.log(toggle);
        console.log(addon);
        let price = 0;
        let extra = 0;
        if(selectedPlan === "arcade" && toggle ){
            price += 9;
        }else if(selectedPlan === "arcade" && !toggle){
            price += 90
        }
        if(selectedPlan === "advanced"  && toggle){
            price += 12;
        }else if(selectedPlan === "advanced" && !toggle){
            price += 120
        }
        
        if(selectedPlan === "pro" && toggle){
            price += 15;
        } else if (selectedPlan === "pro" && !toggle){
            price += 150;
        }

        // if(addon === "online" || addon === "profile" && toggle){
        //     extra +=2
        // } else if(addon === "online" || addon === "profile" && !toggle){
        //     extra += 20
        // }
        // if(addon === "larger" && toggle){
        //     extra += 1
        // } else if(addon === "larger" && !toggle){
        //     extra += 10
        // }

        if(addonList.includes("online")){
            extra += toggle ? 2: 20;
        }
        if(addonList.includes("profile")){
            extra += toggle ? 2:20;
        }
        if (addonList.includes("larger")){
            extra += toggle ?1 : 10;
        }

        setExtraPrice(extra)
        setTotalPrice(price);
        
    },[selectedPlan,toggle,addonList])

    const finalPrice = extraPrice + totalPrice
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
                                    {selectedPlan.toUpperCase()}                         
                                </p>
                                <Link to="/select">
                                    <p>
                                        change
                                    </p>
                                </Link>
                            </div>
                            <div className="finish--box--right">
                                <h5>${totalPrice}/{billingCycle}</h5>
                            </div>
                            
                        </section>

                        <div className="line">
                            <hr/>
                        </div>

                        <section className="finish--box">
                            
                            <div className="finish--box--left">
                                {/* <p className="finish--gray" >
                                    
                                </p> */}
                                {addonList.map((addon,index)=> (
                                    <div>
                                        <p key={index}>
                                            {addon}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="finish--box--right">
                               <p>${extraPrice}/{billingCycle}</p>
                            </div>
                        </section>

                        {/* <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--gray">
                                    Larger storage
                                </p>
                            </div>
                            <div className="finish--box--right">
                                <p>$2/mo</p>
                            </div>
                        </section> */}

                        

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--gray">
                                    Total (per month)
                                </p>
                            </div>
                            <div className="finish--box--right">
                                <h5 className="finish--total">${finalPrice}/mo</h5>
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