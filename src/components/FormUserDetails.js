import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class FormUserDetails extends Component {
    constructor(props){
        super(props);
    }

 continue = e => {
   e.preventDefault();
   this.props.nextStep();
 }
 back = () => {
    this.props.prevStep();
 }
    render() {

        const {  values, handleOnChange } = this.props;
        

        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details"/>
                <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="First Name"
                    onChange={handleOnChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br />
                <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="Last Name"
                    onChange={handleOnChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br />
                <TextField 
                    hintText="Enter your email"
                    floatingLabelText="email"
                    onChange={handleOnChange('email')}
                    defaultValue={values.email}
                    
                />
                <br />
                <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                   />


            </React.Fragment>
        </MuiThemeProvider>
        );
    }
}

const style = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;