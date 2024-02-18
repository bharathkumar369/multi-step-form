import React from "react";
//import * as stylex from "@stylexjs/stylex"
import "./home.css"
import sidepic from "../assets/images/bg-sidebar-desktop.svg"
import { Link } from "react-router-dom";


const Home = () => {


    return (
        <main className="home">
            <div className="home--container"> 
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

                <section className="home--right">
                    <section className="home--right--descrip">
                        <h1> Personal Info</h1>
                        <p>Please provide your name,email address, and phone number.</p>
                    </section>

                    <section>
                        <div className="select--box">
                            <label className="home--label" htmlFor="name">Name</label>
                            <br/>
                            <input
                                placeholder="e.g.Stephen King"
                                type="text"
                                id="name"
                                className="home--input"
                            />
                        </div>
                        <div className="select--box">
                            <label className="home--label" htmlFor="email">Email Adress</label>
                            <br/>
                            <input
                                placeholder="e.g.Stephen_king@gmail.com"
                                type="email"
                                id="email"
                                className="home--input"
                            />
                        </div>
                        <div className="select--box">
                            <label className="home--label" htmlFor="number">Phone Number</label>
                            <br/>
                            <input
                                placeholder="e.g.+918855623389"
                                type="number"
                                id="number"
                                className="home--input"
                            />
                        </div>
                    </section>

                    <div className="home--btn--container">
                        <div></div>
                        <div>
                            <Link to="/select">
                                <button >
                                    Next Step
                                </button>
                            </Link>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}
export default Home;