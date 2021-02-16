import { Router } from 'next/router';
import React, {Component} from 'react';
import { Form ,Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign.js';
import web3 from '../ethereum/web3.js';

class ContributeForm extends Component{
    state={
        value: ' '
    };

    onSubmit =async (event)=>{
        event.preventDefault();
        const campaign=Campaign(this.props.address);
        this.setState({ loading: true, errorMessage: '' });
 
        try{
            const accounts=await web3.eth.getAccounts();
            console.log("this.state.value"+this.state.value.trim());
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value.trim(),'ether')
            })
            .once('confirmation', (num, receipt) => {
                this.setState({ loading: false, value: '' });
                Router.replaceRoute(`/campaigns/${this.props.address}`);
            });
            //Router.pushRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        
    };

    render(){
        return (
            <Form onSubmit={this.onSubmit}  error={!! this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input 
                        value={this.state.value.trim()}
                        onChange={event=> this.setState({value: event.target.value.trim()})}
                        label="ether" 
                        labelPosition="right" 
                    />
                </Form.Field>
                <Message error header="Oops" content={this.state.errorMessage} />
                <Button primary>Contribute!</Button>
            </Form>
            
        );

    }



}

export default ContributeForm;