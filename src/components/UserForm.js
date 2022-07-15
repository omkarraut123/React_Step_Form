import React, { Component } from 'react';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

class UserForm extends Component {
        state = {
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            occupation:'',
            city:'',
            bio:'',
        };     

    nextStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () =>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleOnChange = input => e => {
        e.preventDefault();
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
       
        const { step } = this.state;
        const { firstName,lastName,email,occupation,city,bio } = this.state;
        const values = { firstName,lastName,email,occupation,city,bio };

        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                     nextStep = { this.nextStep }
                     values = { values }
                     handleOnChange = { this.handleOnChange }
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails 
                    nextStep = { this.nextStep }
                    prevStep = { this.prevStep }
                    values = { values }
                    handleOnChange = { this.handleOnChange }
                    />
                );
            case 3:
                return (
                    <Confirm 
                    values ={values}
                    nextStep = { this.nextStep }
                    prevStep = { this.prevStep }
                    />
                );
            case 4:
                return (
                    <h1>your response has been submitted.Thank you..! </h1>
                );
        }

    }
}

export default UserForm;