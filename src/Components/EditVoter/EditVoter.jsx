import React, { Component } from 'react';
import axios from 'axios';

export default class EditVoter extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSubOrganization = this.onChangeSubOrganization.bind(this);
        this.onChangeRegisteredVoter = this.onChangeRegisteredVoter.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            subOrganization: '',
            registeredVoter: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/voters/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    subOrganization: response.data.subOrganization,
                    registeredVoter: response.data.registeredVoter,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeSubOrganization(e) {
        this.setState({
            subOrganization: e.target.value
        })
    }

    onChangeRegisteredVoter(e) {
        this.setState({
            registeredVoter: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const voter = {
            name: this.state.name,
            subOrganization: this.state.subOrganization,
            registeredVoter: this.state.registeredVoter,
        }

        console.log(voter);

        axios.post('http://localhost:5000/voters/update/' + this.props.match.params.id, voter)
            .then(res => console.log(res.data));

        window.location = '/home';
    }

    render() {
        return (
            <div>
                <h3>Edit Voters</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>SubOrganization: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.subOrganization}
                            onChange={this.onChangeSubOrganization}
                        />
                    </div>
                    <div className="form-group">
                        <label>Registered Voter: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.registeredVoter}
                            onChange={this.onChangeRegisteredVoter}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Voters" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}