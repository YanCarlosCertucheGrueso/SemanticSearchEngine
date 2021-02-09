import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
//import { Card, CardContent } from '@material-ui/core';

export class CardResult extends Component{

    _renderConcurrencies() {
        const {crd} =this.props
        
        if(crd){
            console.log("dentro de la card" ,crd.length, typeof(crd),  JSON.stringify(crd))
            console.log("cero", crd[0].x)
            crd.map(currency => (console.log(currency)))
            

            return  crd.map(currency => (
                <div key={currency}> 
                <Card>
                        <Card.Text> {JSON.stringify(currency.x.value)}</Card.Text>
                        <Card.Text>{JSON.stringify(currency.label.value)}</Card.Text>
                </Card>
                </div>
            ))
        
        }
        else{
            return(
                <div>Nada</div>
            )
        }
    }

    render(){
        return (
            <div>
                {this._renderConcurrencies()}
            </div>
        )
    }
}
export default CardResult;