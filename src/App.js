import React, {Component} from 'react';
import Input from './Input.js'
import Output from './Output.js'
import './App.css';

class App extends Component{
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
        
      },
      amountOfInputs:12,
    }
  }
  resetInput=()=>{
        let {amountOfInputs} = this.state
        let name = "input"
        let val = "__________"
        for(let i=1;i<=amountOfInputs;i++){
        this.setState({    
            form: Object.assign(
                // {}, 
                this.state.form,
                { [`${name}${i}`]: val }
            )
        })}
  }
  
  updateInput = (form) => {
    this.setState({form})
  }
  
  render(){
    const {form}=this.state
    
    return(
      <div>
      <h1>Input</h1>
        < Input 
          newForm={form}
          updateInput={this.updateInput}
        />
      <h1>Output</h1>
      < Output 
      form={form}
      resetInput={this.resetInput}
      />
      
      </div>
    )
  }
  
}

export default App;
