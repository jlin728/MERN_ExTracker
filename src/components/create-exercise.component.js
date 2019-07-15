import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class CreateExercise extends Component {
    
    
    constructor(props){
    // @1:01:32
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    
componentDidMount(){
    // react lifecycle method that will run right before the page loads
    this.setState({
        users: ['Me'],
        username: 'Me'
    });
}

    onChangeUserName(e){
    //update method - changes only username and not the rest of the attributes
        this.setState({
            username: e.target.value
        }); //target is the text box in the form, value is value
    }

    onChangeDescription(e){
        this.setState({
                description: e.target.value
            }); //target is the text box in the form, value is value
        }
    onChangeDuration(e){
        this.setState({
                duration: e.target.value
            }); //target is the text box in the form, value is value
        }
 
    onChangeDate(date){
        this.setState({
                date: date
            });
        }

    onSubmit(e){
        e.preventDefault();
        
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

        // window.location = '/';
        // Where to take users after acation is completed. In this case, it's back to the home page
    }


// 1:11:33
    render (){
        return (
            <div>
                
                <h3>Create a New Ex Log</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <div className='form-group'>
                        <select ref="userInput"
                            required
                            className='form-control'                    
                            value={this.state.username}
                            onChange={this.onChangeUserName}>
                                {
                                    this.state.users.map( (user) => {
                                        return <option
                                            key={user}
                                            value={user}>{user}
                                            </option>;
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description (in minutes):</label>
                            <input type='text'
                                required
                                className='form-control'                    
                                defaultValue={this.state.description}
                                onChange={this.onChangeDescripiton}
                                    />
                        </div>
                        <div className='form-group'>
                             <label>Duration:</label>
                             <input type='text'
                             className='form-control'
                             defaultValue={this.state.duration}
                             onChange={this.state.onChangeDuration}
                             />
                        </div>
                        <div className='form-group'>
                             <label>Date:</label>
                             <div>
                             <DatePicker        
                             selected={this.state.date}   
                             onChange={this.state.onChangeDate}
                             />
                             </div>
                        </div>

                        <div className='form-group'>
                            <input type="submit" value="Create Ex Log" className="btn btn-primary"
                            />
                        </div>
                </form>
            </div>
        )
    }
}