import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import Topbar from '../Topbar/Topbar';


const MainDashboard = ( props ) => {
    return (
        <div className="wrapper" style={{backgroundColor: "white", opacity: "1"}}>
            <div className="main-panel">
            <Topbar />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <MDBContainer>
                  <MDBCard style={{ width: "15rem", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      Total Deposit
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center font-weight-bold"><h1 className="display-5">0.00$</h1></MDBCardTitle>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
              <div className="col-md-3">
                <MDBContainer>
                  <MDBCard style={{ width: "15rem", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      Total Deposit
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center font-weight-bold"><h1 className="display-5">0.00$</h1></MDBCardTitle>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
              <div className="col-md-3">
                <MDBContainer>
                  <MDBCard style={{ width: "15rem", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      Total Deposit
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center font-weight-bold"><h1 className="display-5">0.00$</h1></MDBCardTitle>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
              <div className="col-md-3">
                <MDBContainer>
                  <MDBCard style={{ width: "15rem", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      Total Deposit
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center font-weight-bold"><h1 className="display-5">0.00$</h1></MDBCardTitle>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
            </div>
            <div className="row">
            <div className="col-md-10">
                <MDBContainer>
                  <MDBCard style={{ width: "80%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      Total Deposit
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-center font-weight-bold"><h1 className="display-5">0.00$</h1></MDBCardTitle>
                      
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
              
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <p className="copyright pull-right">
              ©  <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
            </p>
          </div>
        </footer>
      </div>
        </div>
    )
}

export default MainDashboard;