import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
class Confirm extends Component {
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

        const {  values } = this.props;
        

        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Please Confirm your Details"/>
                <List>
                    <ListItem 
                    primaryText="First Name"
                    secondaryText= { values.firstName }
                    />
                     <ListItem 
                    primaryText="Last Name"
                    secondaryText= { values.lastName }
                    />
                     <ListItem 
                    primaryText="Email"
                    secondaryText= { values.email }
                    />
                     <ListItem 
                    primaryText="occupation"
                    secondaryText= { values.occupation }
                    />
                     <ListItem 
                    primaryText="city"
                    secondaryText= { values.city }
                    />
                </List>
                <RaisedButton 
                    label="Confirm & Submit"
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

export default Confirm;