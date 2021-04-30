import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const WordsNinja = new (require('wordsninja'))();
const bruteForceCaesar = require('./scripts/bruteForceCaesar');
const bruteForceMultiplicative = require('./scripts/bruteForceMultiplicative');
const bruteForceAffine = require('./scripts/bruteForceAffine');

class CipherForm extends React.Component {
    constructor(props) {
        super(props);
        WordsNinja.loadDictionary();
        this.state = {
            inputValue: '',
            casear: [],
            multiplicative: [],
            affine: [],
            loading: false
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) {
        this.setState({loading: true});
        this.setState({casear: bruteForceCaesar(this.state.inputValue.replace(/ /g, ""), WordsNinja)});
        this.setState({multiplicative: bruteForceMultiplicative(this.state.inputValue.replace(/ /g, ""), WordsNinja)});
        this.setState({affine: bruteForceAffine(this.state.inputValue.replace(/ /g, ""), WordsNinja)});
        this.setState({loading: false});
    }

    render() {
        
        return (
            <div style={{width: "75%"}}>
                <form>
                    <label>Input:</label>
                    <br/>
                    <textarea value={this.state.inputValue} onChange={this.handleChange} rows="8" cols="50"/>
                </form>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
                {this.state.loading === true &&
                    <div>
                        <ClipLoader />
                    </div>
                }
                {this.state.casear.length !== 0 &&
                    <div>
                        <br />
                        <label>Caesar:</label>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Deciphered String</th>
                                    <th>Shift Value</th>
                                </tr>
                                {this.state.casear.map(out => {
                                    return (
                                        <tr>
                                            <td>{out.joined}</td>
                                            <td>{out.shiftVal}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                }
                {this.state.multiplicative.length !== 0 &&
                    <div>
                        <br />
                        <label>Multiplicative:</label>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Deciphered String</th>
                                    <th>Shift Value</th>
                                </tr>
                                {this.state.multiplicative.map(out => {
                                    return (
                                        <tr>
                                            <td>{out.joined}</td>
                                            <td>{out.multiVal}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <br />
                    </div>
                }
                {this.state.affine.length !== 0 &&
                    <div>
                        <br />
                        <label>Affine:</label>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Deciphered String</th>
                                    <th>Shift Value</th>
                                    <th>Multiplicative Value</th>
                                </tr>
                                {this.state.affine.map(out => {
                                    return (
                                        <tr>
                                            <td>{out.joined}</td>
                                            <td>{out.shiftVal}</td>
                                            <td>{out.multiVal}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <br />
                    </div>
                }
            </div>
        )
    }
}

export default CipherForm;