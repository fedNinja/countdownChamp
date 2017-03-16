import React, {Component} from 'react';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

let startTime;
class StopWatch extends Component{
    constructor(props){
      super(props);
      this.state={
          seconds:1
      }
    }

    componentDidMount(){
     startTime = setInterval(() => this.startStopWatch(this.state.seconds), 1000);
    }

    startStopWatch(seconds){
        if(seconds>0){
          console.log(`if ${seconds}`);
          seconds--;
           this.setState({seconds:seconds});
           console.log(this.state.seconds);
        }
    }

  render(){
    return(
      <div>
      <div>
        Starting stopWatch {this.state.seconds} seconds
      </div>
        <Form inline>
          <FormControl placeholder="enter the time for stop watch" value={this.state.seconds} onChange={event => this.setState({seconds:event.target.value})}/>
          <Button onClick={(this.startStopWatch)}>Submit</Button>
        </Form>
      </div>
      )
  }
}

export default StopWatch;
