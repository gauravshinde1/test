import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createName,
  getAllName,
  updateData,
  deleteData
} from "../store/actions/action";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", name: [], nameList: [], id: "", updateName: "" };
  }

  componentDidMount() {
    this.props.getAllName();
    console.log("connst", this.props.nameList);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextProps.nameList);
    return {
      nameList: nextProps.getAllName
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdate = event => {
    event.preventDefault();
    let updateDate = {
      id: this.state.id,
      name: this.state.updateName
    };
    console.log(updateDate);
    this.props.updateData(updateDate);
  };

  onDelete = event => {
    event.preventDefault();
    let deleteData = {
      id: this.state.id,
      name: this.state.updateName
    };
    this.props.deleteData(deleteData);
  };

  handleSubmit = event => {
    event.preventDefault();
    let formdata = {
      name: this.state.value
    };
    this.props.createName(formdata);
  };

  render() {
    console.log(this.props.nameList);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1 className="mt-4">Edit Field</h1>
        <form onSubmit={this.onUpdate}>
          <div className="col-12">
            <div className="row">
              <div className="form-group col-6">
                <input
                  type="text"
                  name="id"
                  onChange={this.handleChange}
                  value={this.state.id}
                  className="form-control"
                />
              </div>
              <div className="form-group col-6">
                <input
                  type="text"
                  name="updateName"
                  onChange={this.handleChange}
                  value={this.state.updateName}
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <button type="Submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  onClick={this.onDelete}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ nameList: state.getallname });

export default connect(
  mapStateToProps,
  { createName, getAllName, updateData, deleteData }
)(Demo);
