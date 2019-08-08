import React, { Component } from 'react';
import { connect } from "react-redux";
import { createName } from '../store/actions/action';


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formdata = {
            name: this.state.value
        }
        this.props.createName( formdata );
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default connect( null, { createName } )( Demo )