import {React,Component} from 'React';

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            count:0,
        }
    }

    increment = () =>{
        this.setState((prevState)=>{
            return{
                count:prevState.count+1,
            }
        });
    }

    render(){
        return(
            <div onClick={this.increment}>{this.props.children(this.state)}</div>
        );
    }
}

class App extends Component{
    render(){
        return(
            <Counter>
                {state=>(
                    <div>
                        <h1>Count : {state.count}</h1>
                    </div>
                )}
                </Counter>
        );
    }
}