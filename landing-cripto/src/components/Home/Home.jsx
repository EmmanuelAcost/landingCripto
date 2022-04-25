import React from "react";
import Control from "../../assets/img/inicio.png";
import Cup from "../../assets/img/cup.png";
import Send from "../../assets/img/Send.svg";
import House from "../../assets/img/knight.svg";

function Home(props) {
    return (
        <div className="">
            {/* navigation */}
            <section className="smart-scroll mx-5">
                <div className="mx-5">
                    <nav className="navbar navbar-expand-md navbar-dark py-3">
                        <a className=" hero-title navbar-brand heading-black" href="home">
                            InovaTK
                        </a>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">Lorem Impsu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#pricing">Lorem Impsu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#faq">Lorem Impsu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-orange fw-bold mt-2 text-white" >
                                Lorem Impsu
                            </button>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="hero">
                <div className="vh-100">
                    <div className="hero-inner h-75">
                        <div className="hero-copy">
                            <h1 className="hero-title display-4 mt-0 text-white"><span className="text-orange">Lorem ipsum dolor sit</span> amet, consectetuer  </h1>
                            <p className="hero-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore </p>
                            <div className="hero-cta">
                                <button className="btn btn-orange fw-bold text-white" >
                                    Lorem Impsu
                                </button>
                            </div>
                        </div>
                        <div className="hero-figure anime-element">
                            <img src={Control} alt="" srcset="" width="600" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 my-5 mt-0">
                <div className="px-5 my-5 mt-0 d-flex">
                    <div className="d-flex col-6">
                        <div className="row">
                            <div class="col-5 my-3 mx-3 cards">
                                <div class="">
                                    <img src={House} alt="" srcset="" width="70" />
                                </div>
                                <span className="">Lorem ipsum</span>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer  </p>
                            </div>
                            <div class="col-5 mx-3 cardsBlack cardsTop">
                                <div class="">
                                    <img src={House} alt="" srcset="" width="70" />
                                </div>
                                <span className="text-orangeDark">Lorem ipsum</span>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer  </p>
                            </div>
                            <div class="col-5 my-3 mx-3 cardsBlack">
                                <div class="">
                                    <img src={House} alt="" srcset="" width="70" />
                                </div>
                                <span className="text-orangeDark">Lorem ipsum</span>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer  </p>
                            </div>
                            <div class="col-5 mx-3 cardsBlack cardsTop">
                                <div class="">
                                    <img src={House} alt="" srcset="" width="70" />
                                </div>
                                <span className="text-orangeDark">Lorem ipsum</span>
                                <p class="">Lorem ipsum dolor sit amet, consectetuer  </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex col-6">
                        <div className="row">
                            <div className="align-self-center">
                                <h2 className="hero-title ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </h2>
                                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 pb-5">
                <div className="text-center">
                    <h2 className="hero-title w-75 mx-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </h2>
                </div>
                <div className="px-5 py-5 pt-0">
                    <div className="row">
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                        <div class="col-3 my-3 px-3">
                            <div class="">
                                <img src={House} alt="" srcset="" width="70" />
                            </div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 mb-5" >
                <div className="bg-img d-flex">
                    <div className="row h-100 d-flex">
                        <div className="col-6 px-5 align-self-center">
                            <h3 className="px-5 hero-title text-orange">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </h3>
                            <p className="px-5 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
                        </div>
                        <div className="col-6 px-5 align-self-center text-center">
                            <button className="btn btn-orange fw-bold mt-2 text-white" >
                                Lorem Impsu
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="">
                    <div className="hero-inner ">
                        <div className="hero-copy">
                            <h1 className="hero-title display-6 mt-0 text-white">inovaTk <span className="display-7">token</span></h1>
                            <p className="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis  </p>
                        </div>
                        <div className="">
                            <img src={Cup} alt="" srcset="" width="600" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 mb-5">
                <div className="row">
                    <div class="col-6 my-3 px-3 d-flex">
                        <div class="">
                            <img src={House} alt="" srcset="" width="230" />
                        </div>
                        <div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                    </div>
                    <div class="col-6 my-3 px-3 d-flex">
                        <div class="">
                            <img src={House} alt="" srcset="" width="230" />
                        </div>
                        <div>
                            <h5 className="hero-title">Lorem ipsum</h5>
                            <p class="fs-14">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="site-footer py-6">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-4 col-md-3 d-block">
                            <label className="text-white mb-3">
                                Get the Latest update
                            </label>
                            <div className="d-flex">
                                <input type="text" placeholder="Enter Your Email" className="px-2" />
                                <img className="vertical-align-start" src={Send} width="31" alt="" srcset="" />

                            </div>
                        </div>
                        <div class="col-xs-2 col-md-3">
                            <h6>Marketplace</h6>
                            <ul class="footer-links">
                                <li>All NFT’s</li>
                                <li>Virtual World</li>
                                <li>Collectibles</li>
                                <li>Domain Names</li>
                            </ul>
                        </div>
                        <div class="col-xs-2 col-md-3">
                            <h6>Community</h6>
                            <ul class="footer-links">
                                <li>Become a Partners</li>
                                <li>FAQ</li>
                                <li>Support</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div class="col-xs-4 col-md-3">
                            <label className="text-white mb-3">
                                Language
                            </label>
                            <div className="d-flex">
                                <input type="text" placeholder="English" className="px-2" />

                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}
export default Home;


