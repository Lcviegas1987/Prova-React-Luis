import React from 'react';
import Image from '../../assets/images/logo'
import {nav, Section,Div,ListItem,ListGroup,span,Col,Button} from '../../react-bootstrap'
import Input from "../../components/micro/Forms/Input"




function Blocks (props) {

  return (

    <>
    <div>Home</div>
    <Title>Collective Admin Panel a Flat Bootstrap Responsive Website Template | Content Blocks :: W3Layouts</Title>

    <Body className="sidebar-menu-collapsed"></Body>
    <Div className="se-pre-con"></Div>
    <Section className="section 1"></Section>
 
     <Div className="sidebar-menu sticky-sidebar-menu"></Div>
 
       
       <Div className="logo">
         <h1><a href="index.html">Collective</a></h1>
       </Div>
    
       <Div className="logo-icon text-center">
       {/* <Image source={require('../../assets/images/logo.png')}></Image> */}
       </Div>
        
       <Div className="sidebar-menu-inner"></Div>
       <ListGroup as = "ul" className="nav nav-pills nav-stacked custom-nav"></ListGroup>
       <ListItem>
       <a href="index.html"><Item className="fa fa-tachometer"></Item><span> Dashboard</span></a>
       </ListItem>
          <ListGroup as ="ul">
          <ListItem><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></ListItem>
          <ListItem><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></ListItem>
          <ListItem><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></ListItem>
          <ListItem><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></ListItem>
        </ListGroup>
        <a class="toggle-btn" onclick="toggleMenu()">
          <ListItem className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></ListItem>
          <ListItem class="fa fa-angle-double-right menu-collapsed__right"></ListItem>
        </a>
      
      <Div className="header sticky-header">

    
      <Div className="menu-right">
        <Div classNam="navbar user-panel-top">
          <Div class="search-box">
            <FormDefault title ="#search-results.html" method="get">
              <Button label="search-input" placeholder="Search Here..." type="search" id="search">
              <Button label="search-submit" value=""><span class="fa fa-search"></span></Button>
            </FormDefault>
          </Div>
          <Div class="profile_details">
            <ListGroup as = "ul">
              <ListItem class="dropdown profile_details_drop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <Div class="profile_img">
                    <Image source={require("../assets/images/profileimg.jpg")} />
                    <Div class="user-active">
                      <Span></Span>
                    </Div>
                  </Div>
                </a>
                <ListGroup as ="ul" className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <ListItem class="user-info">
                    <h5 class="user-name">John Deo</h5>
                    <Span class="status ml-2">Available</Span>
                  </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </ListItem>
                  <ListItem class="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </ListItem>
                </ListGroup>
              </ListItem>
            </ListGroup>
          </Div>
        </Div>
      </Div>
    </Div>
    
    
   
    <Div className="main-content"></Div>

      
      <Div className =" container-fluid content-top-gap"></Div>

        
        <nav aria-label="breadcrumb" class="mb-4">
          <ListGroup as = "ul" class="breadcrumb my-breadcrumb">
            <ListItem class="breadcrumb-item"><a href="index.html">Home</a></ListItem>
            <ListItem class="breadcrumb-item"><a href="#">Elements</a></ListItem>
            <ListItem class="breadcrumb-item active" aria-current="page">Content Blocks</ListItem>
          </ListGroup>
        </nav>
        

        
        <Div className="cards__heading">
          <h3>Content Blocks</h3>
        </Div>
      

        
        <Div className="card card_border p-lg-5 p-3 mb-4">
          <Div className="card-body py-3 p-0">
            <Row>
              <Col lg={6} align-self pr={lg-4}>
                <h3 class="block__title mb-lg-4">About Content Block</h3>
                <p class="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis. </p>
                <p class="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                <a href="#read" class="btn btn-style btn-primary"> Read More</a>
              </Col>
              <Col lg={6} pl lg={4} mt-lg={0} mt={4}>
                <img src="assets/images/template2.jpg" alt="" class="img-fluid rounded" />
              </Col>
            </Row>
          </Div>
        </Div>
        

        <Div className="card card_border p-lg-5 p-3 mb-4">
          <Div className="card-body py-3 p-0">
            <Row>
              <Col lg={6} pr lg={4}>
                <img src="assets/images/template1.jpg" alt="" class="img-fluid rounded" />
              </Col>
              <Col lg={6 } align-self pl lg={4} mt lg={0} mt={4}>
                <h3 className="block__title mb-lg-4">Content Block with 2 buttons</h3>
                <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti neque
                  sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?</p>
                <p className="mb-lg-5 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis.</p>
                <a href="#read" className="btn btn-style btn-primary mr-2"> Read More</a>
                <a href="#more" className="btn btn-style border-btn"> Contact Us</a>
              </Col>
            </Row>
          </Div>
        </Div>
        

        
        <Div className="card card_border p-lg-5 p-3 mb-4">
          <Div className="card-body py-3 p-0">
            <h3 className="block__title mb-lg-4">Content Block Features</h3>
            <Div className="row feature-3 text-center">
              <Div className="col-md-4 three-grids-columns mt-5">
                <Span className="fa fa-laptop icon-fea" aria-hidden="true"></Span>
                <a href="#">

                  <h4>Web Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                <a href="#" className="actionbg">Read More</a>
              </Div>
              <Div className="col-md-4 three-grids-columns mt-5">
                <Span className="fa fa-paint-brush icon-fea" aria-hidden="true"></Span>
                <a href="#">

                  <h4>Graphic Design</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </Div>
              <Col md={4} three-grids-columns mt={5}>
                <span class="fa fa-signal icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>Web Development</h4>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                <a href="#" class="actionbg">Read More</a>
              </Col>
            </Div>
          </Div>
        </Div>
       

        
        <Div className="w3l-about1 card card_border p-lg-5 p-3 mb-4">
          <Div className="card-body py-3 p-0">
            <h3 className="block__title mb-lg-4">Content Block Features with photo</h3>
            <Row className = "cwp23-content"></Row>
              <Col md={6} className ="cwp23-text">
                <Row className = "row cwp23-text-cols">
                  <Col md={6} mt={4}>
                    <Span className="fa fa-laptop icon-fea" aria-hidden="true"></Span>
                    <a href="#url">Web design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </Col>
                  <Col md={6} mt={4}>
                    <span class="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                    <a href="#url">Graphic design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </Col>
                  <Div className="col-md-6 column mt-4">
                    <Span className="fa fa-signal icon-fea" aria-hidden="true"></Span>
                    <a href="#url">Web development</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </Div>
                  <Div className ="col-md-6 column mt-4">
                    <Span className="fa fa-laptop icon-fea" aria-hidden="true"></Span>
                    <a href="#url">Webdesign</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </Div>
                </Row>
              </Col>
              <Col md ={6} mt md={0} mt={5} className = "cwp23-img">
                {/* <Image source={require('../../assets/images/template2.jpg')} class="img-fluid rounded" alt=""/> */}
              </Col>
            </Div>
          </Div>
        
             </>
    
         )

}
export default Blocks




      