import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Voter = props => (
    <tr>
        <td>{props.voter.name}</td>
        <td>{props.voter.subOrganization}</td>
        <td>{props.voter.registeredVoter}</td>

        <td>
            <Link to={"/edit/" + props.voter._id}>edit</Link> | <a href="/home" onClick={() => { props.deleteVoter(props.voter._id) }}>delete</a>
        </td>
    </tr>
)

export default class VotersList extends Component {
    constructor(props) {
        super(props);

        this.deleteVoter = this.deleteVoter.bind(this)

        this.state = { voters: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/voters/')
            .then(response => {
                this.setState({ voters: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteVoter(id) {
        axios.delete('http://localhost:5000/voters/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            voters: this.state.voters.filter(el => el._id !== id)
        })
    }

   voterList() {
        return this.state.voters.map(currentvoter => {
            return <Voter voter={currentvoter} deleteVoter={this.deleteVoter} key={currentvoter._id} />;
        })
    }

    render() {
        return (
            <div className='voters-list'>
                <h3>List of Voters</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>SubOrganization</th>
                            <th>Registered Voter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.voterList()}
                    </tbody>
                </table>
            </div>
        )
    }
}