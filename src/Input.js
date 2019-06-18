import React, {Component} from 'react';

import './App.css';

class Input extends Component{
  constructor(props){
    super(props)
    this.state={
      form:{
        input1:"___________(adjective)",
        input2:"_____________(Noun)",
        input3:"_____________(verb, past tense)",
        input4:"__________(adverb)",
        input5:" _______(adjective) ",
        input6:"__________(noun).",
        input7:" _______(noun)",
        input8:" __________(adjective) ",
        input9:"__________(verb) ",
        input10:" __________ (adverb) ",
        input11:" __________(verb, past tense)",
        input12:" __________(adjective) ",
        
      }
    }
  }
    setChange=(event)=>{
        let name = event.target.name
        let val = ` ${event.target.value} `
        this.setState({    
            form: Object.assign(
                // {}, 
                this.state.form,
                { [name]: val }
            )
        })
        console.log(this.state.form)
    }
    
    inputChange = () => {
        let obForm = this.state.form
        this.props.updateInput(obForm)
    }
  
  render(){
    return(
      <div>
      <form>
      adjective:<br></br>
      <input type='text' name='input1'
        onChange={this.setChange}
      /><br></br>
      noun:<br></br>
      <input type='text' name='input2'
        onChange={this.setChange}
      /><br></br>
      verb:<br></br>
      <input type='text' name='input3'
        onChange={this.setChange}
      /><br></br>
      adverb:<br></br>
      <input type='text' name='input4'
        onChange={this.setChange}
      /><br></br>
      adjective:<br></br>
            <input type='text' name='input5'
        onChange={this.setChange}
      /><br></br>
      noun:<br></br>
            <input type='text' name='input6'
        onChange={this.setChange}
      /><br></br>
      noun:<br></br>
            <input type='text' name='input7'
        onChange={this.setChange}
      /><br></br>
      adjective:<br></br>
            <input type='text' name='input8'
        onChange={this.setChange}
      /><br></br>
      verb:<br></br>
            <input type='text' name='input9'
        onChange={this.setChange}
      /><br></br>
      adverb:<br></br>
            <input type='text' name='input10'
        onChange={this.setChange}
      /><br></br>
      verb:<br></br>
            <input type='text' name='input11'
        onChange={this.setChange}
      /><br></br>
      adjective:<br></br>
            <input type='text' name='input12'
        onChange={this.setChange}
      /><br></br>
      </form>
      <button onClick={this.inputChange}>Click to see</button>
      </div>
    )
  }
  
}

export default Input;
