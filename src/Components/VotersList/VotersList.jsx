import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./VotersList.css";

const Voter = props => {
  console.log('props', props)
  return (
    <tr>
      <td>{props.voter.name}</td>
      <td>{props.voter.subOrganization}</td>
      <td>{props.voter.registeredVoter}</td>

      <td>
        <Link
          to={"/edit/" + props.voter._id}
        >
          edit |
        </Link>
        <span 
          onClick={() => { props.deleteVoter(props.voter._id); }}
        >
          &nbsp; delete
        </span>
      </td>
    </tr>
  );


}

export default class VotersList extends Component {
  constructor(props) {
    super(props);
    this.state = { voters: [] };

    this.deleteVoter = this.deleteVoter.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
    axios.get('https://civicdutyapp.herokuapp.com/voters/')
      .then(response => {
          console.log(response)
        this.setState({ voters: response.data })
        // this.props.getUpdatedVoter()
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentWillUnmount() {
    console.log('unmount')
  }

  deleteVoter(id) {
    axios.delete('https://civicdutyapp.herokuapp.com/voters/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      voters: this.state.voters.filter(el => el._id !== id)
    })
  }

  getUpdatedVoter = (voter) => {
    const newList = [...this.state.voters, voter]
    this.setState({
      voters: newList
    })
  }

  render() {
    return (
      <div className="voters-list">
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
            {this.state.voters.map(currentVoter =>
              <Voter getVoterId={this.props.getVoterId} voter={currentVoter} deleteVoter={this.deleteVoter} key={currentVoter._id} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
