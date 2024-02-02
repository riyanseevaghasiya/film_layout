
import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from './img/logo.png';
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlinePlayArrow } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa6";

function App() {
  return (
    <>
      <div>
        {/* header */}
        <div className='back_img'>
          <div className='layer'></div>
        </div>
        <header className='navbar'>
          <Navbar expand="lg" className="main_header text-center" fixed="top" >
            <Container>
              <Navbar.Brand><img src={logo}></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu_name">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#story">Story</Nav.Link>
                  <Nav.Link href="#our cast">Our Cast</Nav.Link>
                  <Nav.Link href="#movie work">Movie Work</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div className='background'>
          <p>Film-Series in Brooklyn,New York</p>
          <h1>Dream Scalpes</h1>
          <p className='text'>Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem, conse ctetur adipiscing nu elit sed do eiusmod tem..</p>
          <div>
            <span className='btntheme'>Watch Trailer</span>
          </div>
        </div>

        {/* basic info */}
        <Container className='spacer'>
          <Row>
            <Col className='d-flex col-12 col-lg-6'>
              <div className='info'>
                <h6>Basic Info About Shop</h6>
                <h2>About Us Story</h2>
                <p>There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                <div>
                  <span className='btntheme'>Read more</span>
                </div>
              </div>
            </Col>
    
          </Row>
        </Container>

        {/* our production */}
        <Container className='spacer'>
          <Row>
            <Col className='col-12 col-md-8 offset-md-2'>
              <div className='title'>
                <h1>our production</h1>
              </div>
            </Col>
          </Row>

          <Row className='d-flex'>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className='box'>
                <i><PiTelevisionSimpleFill /></i>
                <h3>TV SHOWS.</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem.</p>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3" >
              <div className='box'>
                <i><PiTelevisionSimpleFill /></i>
                <h3>TV SHOWS.</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem.</p>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className='box'>
                <i><PiTelevisionSimpleFill /></i>
                <h3>TV SHOWS.</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem.</p>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className='box'>
                <i><PiTelevisionSimpleFill /></i>
                <h3>TV SHOWS.</h3>
                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing nu elit sed do eiusmod tem.</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* cinema-img */}
        <Row>
          <Col>
            <div className='cinema_img'>
              <img src={require(`./img/cinema.jpeg`)}></img>
              <div className='play_icon'>
                <i><MdOutlinePlayArrow /></i>
              </div>
            </div>
          </Col>
        </Row>

        {/* our cast */}
        <Container className='spacer our-cast'>
          <Row>
            <Col>
              <div className='title'>
                <h1>our cast</h1>
              </div>
            </Col>
            <Row>
              <Row>
                <Col>
                  <OwlCarousel className='owl-theme testimonial-cast' loop margin={0} dots={false} items={4} autoplay={1000}>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_1.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_2.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_3.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_4.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_1.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_2.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_3.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_4.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_1.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_2.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='p_img'><img src={require(`./img/cast_3.jpeg`)}></img></div>
                            <div className='align-items-center cast_detail d-flex'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className='item'>
                      <Row>
                        <Col className='col-12'>
                          <div className='main-item'>
                            <div className='align-items-center cast_detail'>
                              <div className='cast-content'>
                                <h4 className='cast_name'>Lopez Joshe</h4>
                                <span className='cast-designation'>Dribble Actor</span>
                                <p className='cast-des'>Lorem ipsum dolor sit amet conset sed tem  sit amet, conset sed tem.</p>
                                <ul className='cast-social d-flex'>
                                  <li><a><i><FaFacebookF /> </i></a></li>
                                  <li><a><i><FaTwitter /></i></a></li>
                                  <li><a><i><FaDribbble /></i></a></li>
                                  <li><a><i><FaInstagram /></i></a></li>
                                </ul>
                              </div>
                              <div className='overlay-cast'></div>
                            </div>
                            <div className='p_img'><img src={require(`./img/cast_4.jpeg`)}></img></div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </OwlCarousel >
                </Col>
              </Row>
            </Row>
          </Row >
        </Container>

        {/* movie gallery */}
        <Container>
          <Row>
            <Col>
              <div className='title'>
                <h1>Movie Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row className='text-center'>
            <Col>
              <ul>
                <li className='gallery-name'>All</li>
                <li className='gallery-name'>Concerts</li>
                <li className='gallery-name'>Festivals</li>
                <li className='gallery-name'>Sufi</li>
                <li className='gallery-name'>Movies</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g1.png`)} ></img><div className='mage-overlay'></div></div></Col>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g2.png`)} ></img></div></Col>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g3.png`)} ></img></div></Col>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g4.png`)} ></img></div></Col>
          </Row>
          <Row>
            <Col xs={6} className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g5.png`)} ></img></div></Col>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g6.png`)} ></img></div></Col>
            <Col className='m-2 p-0'><div className='gallery-img'><img src={require(`./img/g7.png`)} ></img></div></Col>
          </Row>
        </Container>

        {/* let's get in touch */}
        <Container className='spacer'>
          <Row>
            <Col>
              <div className='title'>
                <h1>let's in touch</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='f_title'>
                <h4 className='contact-heading'>megaone
                  <strong>office</strong>
                </h4>
                <p class="contact-address">123 Stree New York City , United States Of America.</p>
                <ul className='contact-list'>
                  <li><span>Office Telephone :</span> 001 01085379709</li>
                  <li><span>Mobile :</span> 001 63165370895</li>
                  <li><span>Email :</span> admin@website.com</li>
                  <li><span>Inquiries :</span> email@website.com</li>
                  <li><li><span>Mon-Fri:</span> 9am to 6pm</li> 9am to 6pm</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <form className='contact-form'>
                  <Row>
                    <Col className='col-6'>
                      <div><input className='form-control' type="text" placeholder='first name'></input></div>
                    </Col>
                    <Col className='col-6'>
                      <div><input className='form-control' type="text" placeholder='last name'></input></div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='col-6'>
                      <div><input className='form-control' type="text" placeholder='Email'></input></div>
                    </Col>
                    <Col className='col-6'>
                      <div><input className='form-control' type="text" placeholder='Phone'></input></div>
                    </Col>
                    <Col>
                      <div><textarea className='form-control' type="text" placeholder='message'></textarea></div>
                    </Col>
                  </Row>
                </form>
                <div className='form-btn'>
                  <span className='btntheme'>contact now</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >

    </>
  );
}

export default App;