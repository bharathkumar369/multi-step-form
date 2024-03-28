
import React,{ useContext } from "react";
import { userContext } from "../MultiStep";
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link,useLocation } from "react-router-dom";
import SectionLeft from "./SectionLeft";

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
                <SectionLeft />

                <section className="finish--right">
                    <section className="finish--right--descrip">
                        <h1>Finishin up</h1>
                        <p>Double-check everything looks OK before confirming.</p>
                    </section>

                    <section className="finish--plan">

                        <section className="finish--box">
                            <div className="finish--box--left">
                                <p className="finish--box--p">
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
                               <p>+${extraPrice}/{billingCycle}</p>
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
                                <h5 className="finish--total">${finalPrice}/{billingCycle}</h5>
                            </div>
                        </section>
                    </section>

                    <div className="home--btn--container ">
                        <div></div>
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