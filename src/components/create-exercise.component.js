import React, { Component } from 'react';

export default class CreateExercise extends Component {
    
    
    constructor(props){
    {/* @1:01:32*/}
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date:   new Date(),
            users: []
        }
    }
    
    onChangeUserName(e){
    {/*methods*/}
        this.setState({
            username: e.target.value
            {/*target is the text box in the form, value is value*/}
        });
    }


    
    
    render (){
        return (
            <div>
                <p>Create New Exes Here (Create-Exercise List Component)</p>
                
            </div>
        )
    }
}