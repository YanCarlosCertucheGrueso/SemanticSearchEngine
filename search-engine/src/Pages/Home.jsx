import React, {Component} from 'react';
import '../App.css';

import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate'
import { MDBBtn, MDBIcon } from "mdbreact";


export class Home extends Component {
  state = {
    query : ""
  }


  _handleClick =() =>{
    //console.log(this.state.query)
    this.props.history.push(`/result`);
    //this.props.history.push(`/q/${this.state.query}`);
  }

  /*_handleChange = (e) =>{
    this.setState({
      query: e.target.value
    }); 
  }*/
  
  render(){
    return (
      <I18nProvider locale={LOCALES.ESPAÑOL}>
      <div className="App">
              <br></br>
              <div className="Search">
                <h2 className="Title">
                  {translate('nombre')}
                </h2>
                <br></br>
                  <div>
                      {/*<div>
                        <input className = "Input-home" type="text" onChange={this._handleChange}>
                        </input>
                      </div> */}
                      <br></br>
                        <MDBBtn color="elegant" size="lg" type="submit" onClick={this._handleClick}>
                            {translate('entrar')} 
                            <br></br>
                            <MDBIcon icon="arrow-right" className="mr-1" />
                        </MDBBtn>
                  </div>
                <br></br>
                <h2> {translate('por')} Yan Carlos Certuche Grueso </h2>
              </div>
      </div>
      </I18nProvider>
    );
  }
}
export default Home;