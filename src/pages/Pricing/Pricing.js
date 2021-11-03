import React from 'react';
import {Col, Row, ListGroup, ListItem, Body, Container} from "react-bootstrap"
import Image from "../../assets/images/images"
 


function Pricing(props){
    return(
        <React.Fragment>
        <Body className="sidebar-menu-collapsed"></Body>
        <Div className="se-pre-con"></Div> 
    <Section>
    
    <Div className="sidebar-menu sticky-sidebar-menu">

      
      <Div className="logo">
        <h1><a href="index.html">Collective</a></h1>
      </Div>

     
    <Div className="logo">
      <a href="index.html">
        <Image source={required("image-path")} />
      </a>
    </Div>
      

      <Div className="logo-icon text-center">
        <a href="index.html" title="logo"><Image source={required("assets/images/logo.png")} /> </a>
      </Div>
      

      <Div className="sidebar-menu-inner">

        
        <ListGroup as = "ul" className="nav nav-pills nav-stacked custom-nav">
          <ListItem><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
          </ListItem>
          <ListItem><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></ListItem>
          <ListItem><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></ListItem>
          <ListItem><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></ListItem>
          <ListItem><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></ListItem>
        </ListGroup>
        
        <a className="toggle-btn" onclick="toggleMenu()">
          <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i className="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
        
      </Div>
    </Div>
    
    <Div className="header sticky-header">

      
      <Div className="menu-right">
        <Div className="navbar user-panel-top">
          <Div className="search-box">
            <FormDefault title ="#search-results.html">
              <Input label ="search-input" type="search"/>
              <Button label="search-submit" value=""><span class="fa fa-search"></span></Button>
            </FormDefault>
          </Div>
          <Div className="profile_details">
            <ListGroup as = "ul">
              <ListItem className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <Div className="profile_img">
                    <Image source={required("assets/images/profileimg.jpg")}/>
                    <Div className="user-active">
                      <Span></Span>
                    </Div>
                  </Div>
                </a>
                <ListGroup as ="ul" className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <ListItem className="user-info">
                    <h5 className="user-name">John Deo</h5>
                    <Span className="status ml-2">Available</Span>
                  </ListItem>
                  <ListItem><a href="#"><i className="lnr lnr-user"></i>My Profile</a> </ListItem> 
                  <ListItem> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </ListItem>
                  <ListItem> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </ListItem>
                  <ListItem> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </ListItem>
                  <ListItem className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </ListItem>
                </ListGroup>
              </ListItem>
            </ListGroup>
          </Div>
        </Div>
      </Div>
    </Div>
    
    </Div>
    
    <Div className="main-content">

      
      <Div className="container-fluid content-top-gap">

        
        <nav aria-label="breadcrumb" className="mb-4">
          <ListGroup as ="ol" className="breadcrumb my-breadcrumb">
            <ListItem className="breadcrumb-item"><a href="index.html">Home</a></ListItem>
            <ListItem className="breadcrumb-item active" aria-current="page">Pricing Tables</ListItem>
          </ListGroup>
        </nav>
        

        
        <Section className="pricing">
          <Div className="card card_border mb-5">
            <Div className="cards__heading">
              <h3>Pricing Tables -<span> Version 1</span></h3>
            </Div>
            <Div className="card-body">
              

              <Section className="w3l-pricing1">
                <Row>
                  <Col md={4} px={2}>
                    <Div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                      <Div className="card-header p-0 card-heading">
                        <h4 className="mb-4">Free</h4>
                      </Div>
                      <Div className="card-body p-0">
                        <h1 className="card-title pricing-card-title my-price-title">$0<small
                            className="text-dull">/month</small>
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <ListGroup as ="ul" className="list-unstyled list-pricing mt-3 mb-4">
                          <ListItem>1 Domain</ListItem>
                          <ListItem>10 users included</ListItem>
                          <ListItem>2 GB of storage</ListItem>
                          <ListItem>Email support</ListItem>
                          <ListItem>Help center access</ListItem>
                        </ListGroup>
                        <Div className="mt-4">
                          <a href="signup.html" class="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                            free</a>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                  <Col md={4} px={2}>
                    <Div className="mb-4 price-card price-card2 p-lg-4 p-md-3 p-4 recomemded-price">
                      <Div className="card-header p-0 card-heading">
                        <h4 className="mb-4">Regular <Span className="label label-popular">Popular</Span></h4>
                      </Div>
                      <Div className="card-body p-0">
                        <h1 className="card-title pricing-card-title my-price-title">$49<small
                            className="text-dull">/month</small>
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <ListGroup as = "ul" className="list-unstyled list-pricing mt-3 mb-4">
                          <ListItem>10 Domain</ListItem>
                          <ListItem>20 users included</ListItem>
                          <ListItem>10 GB of storage</ListItem>
                          <ListItem>Priority email support</ListItem>
                          <ListItem>Help center access</ListItem>
                        </ListGroup>
                        <Div className="mt-4">
                          <a href="#" class="btn btn-lg btn-primary btn-style">Get started</a>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                  <Col md={4} px={2}>
                    <Div className="mb-4 price-card price-card3 p-lg-4 p-md-3 p-4">
                      <Div className="card-header p-0 card-heading">
                        <h4 className="mb-4">Premium</h4>
                      </Div>
                      <Div className="card-body p-0">
                        <h1 className="card-title pricing-card-title my-price-title">$199<small
                            className="text-dull">/month</small>
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <ListGroup as ="ul" className="list-unstyled list-pricing mt-3 mb-4">
                          <ListItem>30 Domain</ListItem>
                          <ListItem>30 users included</ListItem>
                          <ListItem>15 GB of storage</ListItem>
                          <ListItem>Phone and email support</ListItem>
                          <ListItem>Help center access</ListItem>
                        </ListGroup>
                        <Div className="mt-4">
                          <a href="#" className="btn btn-lg btn-outline-primary btn-style border-btn">Contact us</a>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
            </Div>
          </Div>
        </Section>



        
        <Div className="pricing-version-2">
          <Div className="card card_border mb-5">
            <Div className="cards__heading">
              <h3>Pricing Tables -<span> Version 2</span></h3>
            </Div>
            <Div classame="card-body">
              <Row>

                
                <Col lg={4}  md={6} px={2} mb={4}>
                  <Div className="card text-center card__hover">
                    <Div classame="card-header">
                      <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                    </Div>
                    <Div className="card-block">
                      <h4 className="card-title">
                        Basic Plan
                      </h4>
                      <ListGroup as = "ul" className="list-group">
                        <ListItem className="list-group-item">1 Domain</ListItem>
                        <ListItem className="list-group-item">Ultimate Features</ListItem>
                        <ListItem className="list-group-item">Responsive Ready</ListItem>
                        <ListItem className="list-group-item">Editor Ready Builder</ListItem>
                        <ListItem className="list-group-item">Limited UI Blocks</ListItem>
                        <ListItem className="list-group-item">24/7 Support System</ListItem>
                      </ListGroup>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </Div>
                  </Div>
                </Div>

               
                <Col lg={4}  md={6} px={2 }mb={4}>
                  <Div className="card text-center card__hover">
                    <Div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                    </Div>
                    <Div className="card-block">
                      <h4 className="card-title">
                        Regular Plan
                      </h4>
                      <ListGroup as ="ul" className="list-group">
                        <ListItem className="list-group-item">10 Domain</ListItem>
                        <ListItem className="list-group-item">Ultimate Features</ListItem>
                        <ListItem className="list-group-item">Responsive Ready</ListItem>
                        <ListItem className="list-group-item">Editor Ready Builder</ListItem>
                        <ListItem className="list-group-item">Unlimited UI Blocks</ListItem>
                        <ListItem className="list-group-item">24/7 Support System</ListItem>
                      </ListGroup>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </Div>
                  </Div>
                </Div>

                
                <Col lg={4} md={6} px={2} mb={4}>
                  <Div className="card text-center card__hover">
                    <Div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                    </Div>
                    <Div className="card-block">
                      <h4 className="card-title">
                        Premium Plan
                      </h4>
                      <ListGroup as = "ul" className="list-group">
                        <ListItem className="list-itemgroup-item">15 Domain</ListItem>
                        <ListItem className="list-itemgroup-item">Ultimate Features</ListItem>
                        <ListItem className="list-group-item">Responsive Ready</ListItem>
                        <ListItem className="list-group-item">Editor Ready Builder</ListItem>
                        <ListItem className="list-group-item">Unlimited UI Blocks</ListItem>
                        <ListItem className="list-group-item">24/7 Support System</LitItem>
                      </ListGroup>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </Div>
                  </Div>
                </Div>

              </Div>
            </Div>
          </Div>
        </Div>
    
  </Section>
  

  </Div>


  </Div>

 </React.Fragment>
    )

}
export default Pricing