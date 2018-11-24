import React, { Component } from 'react';
import General from './General/General';
import Deposit from './Deposit/Deposit';
import Withdrawl from './Withdrawal/Withdrawal';
import Team from './Team/Team';
import './Faq.css';

class Faq extends Component {

    state = {
        docChanged: ""
    }

    onDocChanged = (doc) => {
        this.setState({docChanged: doc})
    }

    render () {
        let faq_section = <General />;
        if(this.state.docChanged === "general") {
            faq_section = <General />
        } else if (this.state.docChanged === "deposit") {
            faq_section = <Deposit />
        } else if (this.state.docChanged === "withdraw") {
            faq_section = <Withdrawl />
        } else if ( this.state.docChanged === "team") {
            faq_section = <Team />
        }

        return (
            <div className="container-fluid">
                <section className="faq">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <p><button className="btn btn-primary px-5 py-3 custom-faq-btn" onClick={(doc) => this.onDocChanged("general")}>General</button></p>
                                <p><button className="btn btn-primary px-5 py-3 custom-faq-btn" onClick={(doc) => this.onDocChanged("deposit")}>Deposit</button></p>
                                <p><button className="btn btn-primary px-5 py-3 custom-faq-btn" onClick={(doc) => this.onDocChanged("withdraw")}>Withdrawl</button></p>
                                <p><button className="btn btn-primary px-5 py-3 custom-faq-btn" onClick={(doc) => this.onDocChanged("team")}>>About Team</button></p>
                            </div>
    
                            <div className="col-12 col-md-8 faq-section">
                                {faq_section}
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
    
}

export default Faq;