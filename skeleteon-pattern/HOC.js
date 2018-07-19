import {React,Component} from 'React';
import {withRouter} from 'react-router-dom';

//A higher order component is a function that takes a component as an argument and returns a new component.

class App extends Component{
    constructor(){
        super();
        this.state ={
            path:'',
        }
    }

    componentDidMount(){
        let pathName = this.props.location.pathname; //because of wrapping
        this.setState(()=>{
            return{
                path:this.pathName,
            }
        })
    }

    render(){
        return(
            <div>
                <h1>The path is {this.state.path}</h1>
            </div>
        )
    }
}

//taking component as an argument,by wrapping App withRouter App has router v4 methods and props
export default withRouter(App);