import React, {Component} from 'react';
import './App.css';
import Title from './Title'
import style from './style'
import Form from './Form'


class App extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
            error: ''
        }

    }

    handleChange(event) {
        let name = event.target.value

        if (name.length <= 10) {
            this.setState({text: name})
        }
        else {
            this.setState({error: 'Limit Exceeded.'})
        }
    }

    render() {
        return (
            <div>
                <Title title={this.state.pageTitle}/>
                <h1 style={style.title}>Hello World</h1><br/>

                Name:<input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
                <p>{this.state.text}</p>
                <p style={style.errorMsg}>{this.state.error}</p>

                <Form />


            </div>
        );
    }
}

export default App;
