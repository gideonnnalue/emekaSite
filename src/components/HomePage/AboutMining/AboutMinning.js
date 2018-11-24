import React from 'react';
import './AboutMinning.css';
import CryptoServer from '../../../assets/img/crypto_server.png';


const AboutMinning = ( props ) => {
    return (
        <div className="container-fluid px-0">
            <section id="work-info">
            <div class="container-fluid about-minning">
    <div class="row fill-60-viewport pt-5 px-5 align-items-center">
    <div class="col d-none d-md-block align-self-start">
       <img src={CryptoServer} width="500"/>
      </div>
      <div class="col ">
       <h6 class="text-uppercase text-black-40">
        million dollar info
      </h6>
       <h2>About Crypto.earn</h2>
       <p>Lorem ipsum dolor sit amet, error graeci fabellas has at, sed sumo meliore definitiones ad. Diam recusabo et nec, modo exerci ornatus nec ut. Per id libris impetus saperet, ea vis mutat albucius. Duo adhuc suscipit pericula in, aliquip eleifend quo eu.

Summo cetero consulatu est eu, wisi dolorum duo id. Usu an mazim soluta conclusionemque. Mei ei platonem intellegam. Debet mediocrem duo et.

Sea ei nemore principes efficiantur, has ad probo intellegam. Eam ad cetero periculis, no nobis labores vim, te dicam mucius phaedrum duo.</p>
      
    </div>
    
    </div>
  </div>
            </section>
        </div>
    )
}

export default AboutMinning;