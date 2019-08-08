import React, { Component } from "react";
import { connect } from "react-redux";
import { createName } from "../store/actions/action";

export class ComponentData extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name
    };
    this.props.createName(formData);
    alert("A name was submitted: " + this.state.name);
    console.log(this.state.name);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
              aria-describedby="helpId"
              placeholder="enter text"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { createName }
)(ComponentData);
