import React, { Component } from "react";
import axios from "axios";

export default class CreateVoter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      subOrganization: "",
      registeredVoter: "",
    };
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const voter = {
      name: this.state.name,
      subOrganization: this.state.subOrganization,
      registeredVoter: this.state.registeredVoter
    }

    console.log(voter);

    axios.post('http://localhost:3001/voters/add', voter)
      .then(res => console.log(res.data))
      .then(() => this.props.history.push('/home'));
  }


  render() {
    return (
      <div>
        <h3>Create New Voter</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              name='name'
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>SubOrganization: </label>
            <input
              name='subOrganization'
              type="text"
              required
              className="form-control"
              value={this.state.subOrganization}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>RegisteredVoter: </label>
            <input
              name="registeredVoter"
              type="text"
              className="form-control"
              value={this.state.registeredVoter}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Voter"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
