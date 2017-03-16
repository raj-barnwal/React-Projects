import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            userName:'',
            password:'',
            cnfPass:'',
            message:''

        }
    }
    componentDidMount() {
        this.refs.name.focus();
    }
    handlechange(e){
        let state= this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }
    handleSubmit(event){
        event.preventDefault()
        if(!this.state.userName|| !this.state.password||!this.state.cnfPass){
            this.setState({message:'All Fields are required.'})
        }
        else if(this.state.password!==this.state.cnfPass){
            this.setState({message:'Confirm Password is not same.'})
        }
        else {
                this.setState({message:`You are registered Successfully.`})
        }
    }

    render() {
        return (
            <div>
                <center>
                    <p id="info">
                        {this.state.message}
                    </p>

               <form onSubmit={this.handleSubmit.bind(this)}>
                   <input type="text" name='userName' ref="name" placeholder="Enter User Name" value={this.state.userName} onChange={this.handlechange.bind(this)}/><br/><br/>
                   <input type="password" name='password' placeholder="Enter Password" value={this.state.password} onChange={this.handlechange.bind(this)}/><br/><br/>
                   <input type="password" name='cnfPass' placeholder="Enter confirm Password" value={this.state.cnfPass} onChange={this.handlechange.bind(this)}/><br/><br/>
                   <input type="submit" value="Signup" style={{marginLeft:'100px'}}/>
               </form>
                </center>
            </div>
        );
    }
}



/*Form.propTypes={
    name:React.PropTypes.number

}*/

export default Form;
