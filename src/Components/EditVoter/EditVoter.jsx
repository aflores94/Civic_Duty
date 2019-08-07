import React, { Component } from 'react';
import axios from 'axios';

export default class EditVoter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            subOrganization: '',
            registeredVoter: '',
        }
    }

    async componentDidMount() {
        await axios.get('https://civicdutyapp.herokuapp.com/voters/' + this.props.match.params.id)
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

        axios.get('https://civicdutyapp.herokuapp.com/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        const voter = {
            name: this.state.name,
            subOrganization: this.state.subOrganization,
            registeredVoter: this.state.registeredVoter,
        }

        axios.post('https://civicdutyapp.herokuapp.com/voters/update/' + this.props.match.params.id, voter)
            .then(res => this.props.getUpdatedVoter(res.data))
            .then(() => this.props.history.push('/home'));
    }

    render() {
        return (
            <div>
                <h3>Edit Voters</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            name="name"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>SubOrganization: </label>
                        <input type="text"
                            name="subOrganization"
                            required
                            className="form-control"
                            value={this.state.subOrganization}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Registered Voter: </label>
                        <input
                            type="text"
                            name="registeredVoter"
                            required
                            className="form-control"
                            value={this.state.registeredVoter}
                            onChange={this.handleChange}
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