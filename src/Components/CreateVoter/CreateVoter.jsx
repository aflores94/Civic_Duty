import React, { Component } from 'react';
import axios from 'axios';

export default class CreateVoter extends Component {
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
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.name),
                        name: response.data[0].name
                    })
                }
            })
            .catch((error) => {
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

        axios.post('http://localhost:5000/voters/add', voter)
            .then(res => console.log(res.data));

        window.location = '/home';
    }

    render() {
        return (
            <div>
                <h3>Create New Voter</h3>
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
                        <label>RegisteredVoter: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.registeredVoter}
                            onChange={this.onChangeRegisteredVoter}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Voter" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}