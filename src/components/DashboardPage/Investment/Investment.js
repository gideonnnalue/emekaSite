import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import Topbar from '../Topbar/Topbar';

const investment = ( props ) => {
    return (
        <div className="wrapper" style={{backgroundColor: "white", opacity: "1"}}>
            <div className="main-panel">
            <Topbar />
        <div className="content">
          <div className="container-fluid">
            
            <div className="row">
            <div className="col-md-12">
                <MDBContainer>
                  <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      User profile
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Choose  your plan</h4></MDBCardTitle>

                        <div className="row">
                            <div className="col">
                                {/* single investments */}
                                <MDBCard style={{ width: "200px", marginTop: "1rem" }}>
                                    <MDBCardHeader color="primary-color" tag="h5" className="text-center text-uppercase font-weight-bold">
                                    Starter
                                    </MDBCardHeader>
                                    <MDBCardBody >
                                    <MDBCardTitle className="text-center font-weight-bold"><h4 className="display-4">50$</h4></MDBCardTitle>
                                    
                                    </MDBCardBody>
                                </MDBCard>
                                {/* single investments */}
                            </div>
                            <div className="col">
                                {/* single investments */}
                                <MDBCard style={{ width: "200px", marginTop: "1rem" }}>
                                    <MDBCardHeader color="danger-color" tag="h5" className="text-center text-uppercase font-weight-bold">
                                    Starter
                                    </MDBCardHeader>
                                    <MDBCardBody >
                                    <MDBCardTitle className="text-center font-weight-bold"><h4 className="display-4">100$</h4></MDBCardTitle>
                                    
                                    </MDBCardBody>
                                </MDBCard>
                                {/* single investments */}
                            </div>
                            <div className="col">
                                {/* single investments */}
                                <MDBCard style={{ width: "200px", marginTop: "1rem" }}>
                                    <MDBCardHeader color="warning-color" tag="h5" className="text-center text-uppercase font-weight-bold">
                                    Starter
                                    </MDBCardHeader>
                                    <MDBCardBody >
                                    <MDBCardTitle className="text-center font-weight-bold"><h4 className="display-4">500$</h4></MDBCardTitle>
                                    
                                    </MDBCardBody>
                                </MDBCard>
                                {/* single investments */}
                            </div>
                            <div className="col">
                                {/* single investments */}
                                <MDBCard style={{ width: "200px", marginTop: "1rem" }}>
                                    <MDBCardHeader color="success-color" tag="h5" className="text-center text-uppercase font-weight-bold">
                                    Starter
                                    </MDBCardHeader>
                                    <MDBCardBody >
                                    <MDBCardTitle className="text-center font-weight-bold"><h4 className="display-4">1000$</h4></MDBCardTitle>
                                    
                                    </MDBCardBody>
                                </MDBCard>
                                {/* single investments */}
                            </div>
                        </div>  
                        <MDBCardTitle className="font-weight-normal">Choose a custom plan</MDBCardTitle> 
                        <div className="row">
                            <div className="col">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                        </div>  
                        <MDBBtn>Invest</MDBBtn>                
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

export default investment;