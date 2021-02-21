import React, {Component} from 'react';
import {Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RequestRow extends Component{
    render(){
        const  { Row, Cell} =Table;
        const {id, request}=this.props; 

        //console.log("id"+this.props.id);
        return  (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value)}</Cell>
                <Cell>{request.receipent}</Cell>?
            </Row>
        );
        
    }

}

export default RequestRow;