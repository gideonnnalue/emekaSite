import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";
import Topbar from '../Topbar/Topbar';

const overview = ( props ) => {
    return (
        <div className="wrapper" style={{backgroundColor: "white", opacity: "1"}}>
            <div className="main-panel">
            <Topbar />
        <div className="content">
          <div className="container-fluid">
            
            <div className="row">
            <div className="col-md-10">
                <MDBContainer>
                  <MDBCard style={{ width: "80%", marginTop: "1rem" }}>
                    <MDBCardHeader color="primary-color" tag="h3">
                      User profile
                    </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">FirstName</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">Nnalue Gideon Emeka</p>
                      </MDBCardText>

                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Email</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">gideonnnalue@yahoo.com</p>
                      </MDBCardText>

                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Bank Name</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">Uba Bank</p>
                      </MDBCardText>

                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Account Name:</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">Nnalue Gideon Emeka</p>
                      </MDBCardText>

                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Account Number:</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">8977779890</p>
                      </MDBCardText>

                      <MDBCardTitle className="text-left font-weight-bold"><h4 className="display-5">Bitcoin Account</h4></MDBCardTitle>
                      <MDBCardText>
                        <p className="">lkfd8489djf98ruejnf</p>
                      </MDBCardText>
                      
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

export default overview;