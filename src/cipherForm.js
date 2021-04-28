import React from 'react';

class CipherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            outputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) {
        this.setState({outputValue: this.state.inputValue})
    }

    render() {
        return (
            <div style={{width: "75%"}}>
                <form>
                    <label>Input:</label>
                    <br/>
                    <textarea value={this.state.inputValue} onChange={this.handleChange} rows="8" cols="50"/>
                </form>
                <label>Output:</label>
                <br/>
                <textarea value={this.state.outputValue} rows="8" cols="50"/>
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default CipherForm;