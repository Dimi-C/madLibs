import React, {Component} from 'react';

import './App.css';

class Output extends Component{
    render(){
        const {
            form
        }=this.props
        return(
        <div>
                <p>Today I went to the zoo. I saw a(n)
{form.input1}
{form.input2} jumping up and down in its tree.
He {form.input3} {form.input4}
through the large tunnel that led to its {form.input5}
{form.input6}. I got some peanuts and passed
them through the cage to a gigantic gray {form.input7}
towering above my head. Feeding that animal made
me hungry. I went to get a {form.input8} scoop
of ice cream. It filled my stomach. Afterwards I had to
{form.input9} {form.input10} to catch our bus.
When I got home I {form.input11} my
mom for a {form.input12} day at the zoo. </p>
<button onClick={this.props.resetInput}>reset</button>
      
        </div>
        )
    }
}

export default Output;