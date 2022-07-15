import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class FormPersonalDetails extends Component {
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

        const {  values  } = this.props;
        const { handleOnChange } = this.props;

        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details"/>
                <TextField 
                    hintText="Enter your occupation"
                    floatingLabelText="occupation"
                    onChange={handleOnChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br />
                <TextField 
                    hintText="Enter your bio"
                    floatingLabelText="bio"
                    onChange={handleOnChange('bio')}
                    defaultValue={values.bio}
                />
                 <br />
                <TextField 
                    hintText="Enter your City"
                    floatingLabelText="City"
                    onChange={handleOnChange('city')}
                    defaultValue={values.city}
                />
                <br />
                <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                   />
                   <RaisedButton 
                    label="Back"
                    primary={false}
                    style={style.button}
                    onClick={this.back}
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

export default FormPersonalDetails;