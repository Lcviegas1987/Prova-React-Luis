import React from 'react'
import reactDom from 'react-dom';
import {Col, ListItem, ListGroup, Row, Col, Body, Form} from 'react-bootstrap'


function Cards(props){
    <div>Cards</div>
  
    return(
        <>
        <Body className="sidebar-menu-collapsed">
        <Div className="se-pre-con"></Div> 
            
   
        <Div className="sidebar-menu sticky-sidebar-menu">

     
      <Div className="logo">
        <h1><a href="index.html">Collective</a></h1>
      </Div>

     
    <Div className="logo">
      <a href="index.html">
        <img src="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
      </a>
    </Div>
      

      <Div className="logo-icon text-center">
        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"> </a>
      </Div>

      <Div className="sidebar-menu-inner">

        
        <ListGroup as = "ul" className="nav nav-pills nav-stacked custom-nav">
          <ListItem><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
          </ListItem>
          <ListItem><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></ListItem>
          <LisItem>a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></ListItem><</li>
          <ListItem><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></ListItem>
          <ListItem><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></ListItem>
        </ListGroup>
        
        <a class="toggle-btn" onclick="toggleMenu()">
          <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i class="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
        
      </Div>
    </Div>
  
    <Div className="header sticky-header">

      <
      <Div className="menu-right">
        <Div className="navbar user-panel-top">
          <Div className="search-box">
            <Form action="#search-results.html" method="get">
              <Input className="search-input" placeholder="Search Here..." type="search" id="search">
              <Button className="search-submit" value=""><span class="fa fa-search"></span></Button>
            </Form>
          </Div>
          <Div className="profile_details">
            <ListGroup as "ul">
              <ListItem className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <Div className="profile_img">
                    <img src="assets/images/profileimg.jpg" class="rounded-circle" alt="" />
                    <Div className="user-active">
                      <Span></Span>
                    </Div>
                  </Div>
                </a>
                <ListGroup as = "ul" className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <ListItem className="user-info">
                    <h5 class="user-name">John Deo</h5>
                    <Span className="status ml-2">Available</span>
                  </ListItem>
                  <ListItem><a href="#"><i class="lnr lnr-user"></i>My Profile</a></ListItem> 
                  <ListItem> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </ListItem>
                  <ListItem className="logout"> <a href="#sign-up.html"><i class="fa fa-power-off"></i> Logout</a> </ListItem>
                </ListGroup>
              </ListItem>
            </ListGrup>
          </Div>
        </Div>
      </Div>
    </Div>
    
    </Div>
    
    <Div className="main-content">
      
      <Div className="container-fluid content-top-gap">
        
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Elements</a></li>
            <li class="breadcrumb-item active" aria-current="page">Cards</li>
          </ol>
        </nav>
        
        <section class="template-cards">
          
          <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Card Columns</h3>
            </div>
            <div class="card-body">
              <div class="card-columns">
                <div class="card">
                  <img src="assets/images/cart.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title that wraps to a new line</h5>
                    <p class="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                  </div>
                </Div>
                <Div className="card p-3">
                  <blockquote className ="blockquote mb-0 card-body">
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante.
                    </p>
                    <footer class="blockquote-footer">
                      <small class="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Div>
                <Div className="card">
                  <Image source={required("assets/images/template2.jpg")}/>
                  <Div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </Div>
                </Div>
                <Div className="card bg-primary text-white text-center p-3">
                  <blockquote className="blockquote mb-0">
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat.
                    </p>
                    <footer class="blockquote-footer text-white">
                      <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Div>
                <Div className="card text-center">
                  <Div className="card-body">
                    <h5 className= "card-title">Card title</h5>
                    <p className="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </Div>
                </Div>
                <Div className="card">
                  <Image source={required("assets/images/dashboard.jpg")}/>
                </div>
                <Div className="card p-3 text-right">
                  <blockquote className="blockquote mb-0">
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante.
                    </p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </Div>>
                <Div className="card">
                  <Div className ="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text  mb-4">This is another card with title and supporting text below. This card has
                      some
                      additional content to make it slightly taller overall.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
          

          
          <Div className ="card card_border mb-5">
            <Div className ="cards__heading">
              <h3>Grid Columns</h3>
            </Div>
            <Div className="card-body">
              <Row className="cols-1 row-cols-md-2"></Row>
                <Col mb={4}>
                  <Div className="card">
                    <Image source={required("./assets/images/template2.jpg")}/>
                    <Div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                    </Div>
                </Div>
                </Col>
                <Col mb={4}>
                  <Div className="card">
                    <Image source={required("./assets/images/desk.jpg")}/>
                    <Div className="card-body">
                      <h5 classame="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                    </Div>
                  </Div>
                </Col>
                <Col mb={4}>
                  <Div className="card">
                        <Image source={required("./assets/images/cart.jpg")}>
                        <Div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content.</p>
                    </Div>
                  </Div>
                </Col>
                <Col mb={4}>
                  <Div className="card">
                    <Image source={"required('./assets/images/dashboard.jpg")}/>
                    <Div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                    </Div>
                  </Div>
                </Col>
              </Div>
            </Div>
          </Div>
          

        </Section>
        

      </Div>
      
    </Div>
    
  </Section>


    
  



</>

    )
}


