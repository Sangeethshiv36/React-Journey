/*This doesn't contain any React project, it just showcases the Container/Presentational design pattern for my understanding
Don't mind the syntax errors and import errors,if any*/

import {React,Component} from 'react';

//Presentational Component -- Props,render,context(stateless API's)
const NameCard = (props) => {
    return(
        <div>
            <p>{props.name}</p>
        </div>
    )
}

//Container Component -- state,class,render ("A container does data fetching and renders its subcomponent" -Someguy on the ineternet)
class Greeting extends Component{
    constructor(){
        super();
         this.state ={
             name:'',
         };
    }

    componentDidMount(){
        //AJAX Calls
        this.setState(()=>{
            return {name:'Sangeeth'};
        });
    }

    render(){
        return(
        <div>
            <NameCard name={this.state.name}/>
        </div>
        );
    }
}