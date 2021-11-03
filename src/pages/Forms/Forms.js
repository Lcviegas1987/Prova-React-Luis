import React from 'react';
import {Body, Col, Row, ListItem, ListGroup, Section, navbar, Container,Forms} from "react-bootstrap"
import Image from './assets/images/'
import FormDefault from '../../components/macros/Foms/FormDefault';
import Input from '../../components/micro/Forms/Input/Input';


function Forms (props){

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
        <Image source="image-path" alt="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
      </a>
    </Div>
      

      <Div className="logo-icon text-center">
        <a href="index.html" title="logo"><Image source={required("./assets/images/logo.png")}/> </a>
      </Div>
      

      <Div className="sidebar-menu-inner">

        
        <ListGroup as = "ul" className="nav nav-pills nav-stacked custom-nav">
          <ListItem><a href="index.html"><i class="fa fa-tachometer"></i><span> Dashboard</span></a>
          </ListItem>
          <ListItem><a href="cards.html"><i class="fa fa-cogs"></i> <span>Default cards</span></a></ListItem>
          <ListItem><a href="pricing.html"><i class="fa fa-table"></i> <span>Pricing tables</span></a></ListItem>
          <ListItem><a href="blocks.html"><i class="fa fa-th"></i> <span>Content blocks</span></a></ListItem>
          <ListItem><a href="forms.html"><i class="fa fa-file-text"></i> <span>Forms</span></a></ListItem>
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
              <Input label="search-input" placeholder="Search Here..." type="search" id="search"/>
              <Buton label="search-submit" value=""><Span className="fa fa-search"></Span></Button>
            </FormDefault>
          </Div>
          <Div className="profile_details">
            <ListGroup as = "ul"> 
              <ListItem className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <Div className="profile_img">
                    <Image source= {required("assets/images/profileimg.jpg")}/> 
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
                  <ListItem> <a href="#"><i class="lnr lnr-user"></i>My Profile</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-users"></i>1k Followers</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-cog"></i>Setting</a> </ListItem>
                  <ListItem> <a href="#"><i class="lnr lnr-heart"></i>100 Likes</a> </ListItem>
                  <ListItem className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </ListItem>
                </ListGroup>
              </ListItem>
            </ListGroup>
          </Div>
        </Div>
      </Div>
    </Div>
    
    
   
    <Div className="main-content"></Div>

      
      <Div className="container-fluid content-top-gap"></Div>

        
        <nav aria-label="breadcrumb" class="mb-4">
          <ListGroup className="breadcrumb my-breadcrumb">
            <ListItem className="breadcrumb-item"><a href="index.html">Home</a></ListItem>
            <ListItem className="breadcrumb-item active" aria-current="page">Forms</ListItem>
          </ListGroup>
        </nav>
       
        <Section className="forms"></Section>
          
          <Div className="card card_border py-2 mb-4">
            <Div className="cards__heading">
              <h3>Forms <Span></Span></h3>
            </Div>
            <Div className="card-body">
              <FormDefautl title="#">
                <Div className="form-group">
                  <Label for="exampleInputEmail1" className="input__label">Email address</Label>
                  <Input type="email" className="form-control input-style" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with
                    anyone else.</small>
                </Div>
                <Div className="form-group">
                  <Label for="exampleInputPassword1" className="input__label">Password</Label>
                  <Input label="password" type = "password"/>
                
                </Div>
                <Div className="form-check check-remember check-me-out">
                  <Input label="checkbox" className="form-check-input checkbox" id="exampleCheck1"/>
                  <Label className="form-check-label checkmark" for="exampleCheck1">Check me out</Label>
                </Div>
                <Button type="submit" className= "btn btn-primary btn-style mt-4">Submit</Button>
              </FormDefault>
            </Div>
          </Div>
         
          <Div className ="card card_border py-2 mb-4">
            <Div className="card-body">
              <FormDefault title="#" method="post">
                <Div className="form-row">
                  <Div className="form-group col-md-6">
                    <Label for="inputEmail4" className="input__label">Email</Label>
                    <Input label="email" type = "text" placeholder="Email"/>
                  </Div>
                  <Div className="form-group col-md-6">
                    <Label for="inputPassword4" className="input__label">Password</Label>
                    <Input label="password" type="password"/>
                  </Div>
                </Div>
                <Div className="form-group">
                  <Label for="inputAddress" className="form-control input-input__label">Address</Label>
                  <Input label="endereco" type="text"placeholder="1234 Main St"/>
                </Div>
                <Div className="form-group">
                  <Label for="inputAddress2" className="input__label">Address 2</Label>
                  <Input label = "adrres2" type="text" className="form-control input-style" id="inputAddress2"
                    placeholder="Apartment, studio, or floor"/>
                </Div>
                <Row>
                  <Col md={6}>
                    <Label for="inputCity" className="input__label">City</Label>
                    <Input label = "city" type="text" className="form-control input-style" id="inputCity"/>
                  </Col>
                  <Col md={4}>
                    <Label for="inputState" className="input__label">State</Label>
                    <Select id="inputState" className="form-control input-style">
                      <Option selected>Choose...</Option>
                      <Option>...</Option>
                    </Select>
                  </Col>
                  <Col md={2}>
                    <Label for="inputZip" className="input__label">Zip</Label>
                    <Input label = "zipcode" type="text" className="form-control input-style" id="inputZip"/>
                  </Col>
                </Row>
                <Div className="form-check check-remember check-me-out">
                  <Input label ="form-check-input checkbox" type="checkbox" id="gridCheck"/>
                  <Label className="form-check-label checkmark" for="gridCheck">
                    Check me out
                  </Label>
                </Div>
                <Button type="submit" className="btn btn-primary btn-style mt-4">Sign in</Button>
              </FormDefault>
            </Div>
          </Div>
         



        </Section>
       
        
    </React.Fragment>
    )
}

export default Forms
