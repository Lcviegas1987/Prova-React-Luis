import React from 'react'
import {Link} from 'react-router-dom'
import {Col, ListItem, ListGroup, Row, Col, Body, Form, Section} from 'react-bootstrap'
import FormDefault from "../../components/macros/Foms/FormDefault"
import Input from "../../components/micro/Forms/Input"


function Cards(props){
    
    <div>Cards</div>
  
    return(
        <React.Fragment>
        <Body className="sidebar-menu-collapsed"></Body>
        <Div className="se-pre-con"></Div> 
            
   
        <Div className="sidebar-menu sticky-sidebar-menu"></Div>

     
      <Div className="logo">
        <h1><a href="index.js">Collective</a></h1>
      </Div>

     
        <Div className="logo"></Div>
        <Link to ="index.js"></Link>
        <Image source={required("./images/logo.png")}/>
        
        
      

      < Div className="logo-icon text-center"></Div>
        <Link to ="index.js"/><Image source={required("./assets/images/logo.png)"}/>
      

      <Div className="sidebar-menu-inner"></Div>

        
        <ListGroup as = "ul" className="nav nav-pills nav-stacked custom-nav"></ListGroup>
          <ListItem><Link to ="index.js"/><i className="fa fa-tachometer"></i><span> Dashboard</span>
          </ListItem>
          <ListItem><Link to ="cards.js"/><i className="fa fa-cogs"></i> <span>Default cards</span></ListItem>
          <LisItem><Link to ="pricing.js"/><i className="fa fa-table"></i> <span>Pricing tables</span></ListItem>
          <ListItem><Link to ="blocks.js"/><i className="fa fa-th"></i> <span>Content blocks</span></ListItem>
          <ListItem><Link to ="forms.js"/><i className="fa fa-file-text"></i> <span>Forms</span></ListItem>
       
        
        <Button type="toggle-btn" onclick="toggleMenu()">
          <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i className="fa fa-angle-double-right menu-collapsedcollapsed__right"></i>
        </Button>
        
    
    
  
    <Div className="header sticky-header"></Div>

      
      <Div className="menu-right"></Div>
        <Div className="navbar user-panel-top"></Div>
          <Div className="search-box"><Div>
            <FormDefault title="#search-results.html" method="get">
              <Input className="search-input" placeholder="Search Here..." type="search" id="search"/>
              <Button className="search-submit" value=""><span class="fa fa-search"></span></Button>
            </FormDefault>
          
          <Div className="profile_details"></Div>
            <ListGroup as "ul">
              <ListItem className="dropdown profile_details_drop"></ListItem>
                <Link to ="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false"></Link>
                  <Div className="profile_img"></Div>
                    <Image source = {required('../assets/images')}/>
                    <Div className="user-active">
                      <Span></Span>
                    </Div>
                  </Div>
                
                <ListGroup as = "ul" className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3"></ListGroup>
                  <ListItem className="user-info"></ListItem>
                    <h5 className="user-name">John Deo</h5>
                    <Span className="status ml-2">Available</Span>
                    <ListItem><Link to ="#"/><i className="lnr lnr-user"></i>My Profile</ListItem> 
                  <ListItem> <Link to ="#"><i className="lnr lnr-users"></i>1k Followers </ListItem>
                  <ListItem> <a href="#"><i className="lnr lnr-cog"></i>Setting </ListItem>
                  <ListItem> <a href="#"><i className="lnr lnr-heart"></i>100 Likes </ListItem>
                  <ListItem className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </ListItem>
                
           
        
      
    
    

    
    <Div className="main-content"></Div>
      
      <Div className="container-fluid content-top-gap"></Div>
        
        
        <nav aria-label="breadcrumb" class="mb-4"></nav>
          <ListGroup as = "ul" className="breadcrumb my-breadcrumb"></ListGroup>
            <ListItem className="breadcrumb-item"><a href="index.html">Home</a></ListItem>
            <ListItem className="breadcrumb-item"><a href="#">Elements</a></ListItem>
            <ListItem className="breadcrumb-item active" aria-current="page">Cards</ListItem>
            
        
        <Section className="template-cards"></Section>
          
          <Div className="card card_border mb-5"></Div>
            <Div className="cards__heading"> <h3>Card Columns</h3></Div>
             
            
            <Div className="card-body"></Div>
              <Div className="card-columns"></Div>
                <Div className="card"></Div>
                  <Image source={required("assets/images/cart.jpg")}/>
                  <Div className="card-body"></Div>
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                  
                
                <Div className="card p-3"></Div>
                  <blockquote className ="blockquote mb-0 card-body">
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante.
                    </p>
                    <Footer className="blockquote-footer">
                      <Small className="text-muted"></Small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </Footer>
                  </blockquote>
                
               
                <Div className="card"></Div>
                  <Image source={required("assets/images/template2.jpg")}/>
                  <Div className="card-body"></Div>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text  mb-4">This card has supporting text below as a natural lead-in to additional
                      content.
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  
                <Div className="card bg-primary text-white text-center p-3"></Div>
                  <blockquote className="blockquote mb-0">
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat.
                    </p>
                    <Footer className="blockquote-footer text-white">
                      <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </Footer>
                  </blockquote>
                
                <Div className="card text-center"></Div>
                  <Div className="card-body"></Div>
                    <h5 className= "card-title">Card title</h5>
                    <p className="card-text  mb-4">This card has a regular title and short paragraphy of text below it.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  
                
                <Div className="card"></Div>
                  <Image source={required("assets/images/dashboard.jpg")}/>
                
                <Div className="card p-3 text-right"></Div>
                  <blockquote className="blockquote mb-0">
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante.
                    </p>
                    <Footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                
                <Div className="card"></Div>
                  <Div className ="card-body"></Div>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text  mb-4">This is another card with title and supporting text below. This card has
                      some
                      additional content to make it slightly taller overall.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                
          

          
          <Div className ="card card_border mb-5"></Div>
            <Div className ="cards__heading"> <h3>Grid Columns</h3></Div>
             
            
            <Div className="card-body"></Div>
              <Row className="cols-1 row-cols-md-2"></Row>
                <Col mb={4}></Col>
                  <Div className="card"></Div>
                    <Image source={required("./assets/images/template2.jpg")}/>
                    <Div className="card-body"></Div>
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                   
                <Col mb={4}></Col>
                  <Div className="card"></Div>
                    <Image source={required("./assets/images/desk.jpg")}/>
                    <Div className="card-body"></Div>
                      <h5 classame="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                    
                
                <Col mb={4}></Col>
                  <Div className="card"></Div>
                        <Image source={required("./assets/images/cart.jpg")}>
                        <Div className="card-body"></Div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content.</p>
                    
                
            
                <Col mb={4}></Col>
                  <Div className="card"></Div>
                    <Image source={"required('./assets/images/dashboard.jpg")}/>
                    <Div className="card-body"></Div>
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                    
                
                
            
          

        
    </React.Fragment>
    
 );
}
export default Cards


