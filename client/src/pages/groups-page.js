import React, { Component } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"
import '../css/sidebar.css';
import SideBar from '../components/sidebar-component';
import Piechart from '../components/piechart';
import server from '../apis/server';

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      id: "",
      data: []
    }
  }

  async componentDidMount() {
    const email = (await server.get('/users/')).data.email;
    const groups = await server.post('/groups/', {email});
    const mainGroup = groups.data[0];
    let data = [];
    let i = 0;
    await mainGroup.users.forEach(async (email) => {
      let user = (await server.get(`/users/${email}`)).data[0];
      data.push({index: i, value: user.carbonLog.total});
      i++;
    });
    this.setState({id: mainGroup._id, data: data});
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let email = this.state.email
      await server.put(`/groups/${this.state.id}/user/`, {
        email : email
      });
      let user = (await server.get(`/users/${email}`)).data[0];
      let data = this.state.data.slice(0);
      data.push({index: data.length, value: user.carbonLog.total})
      this.setState({data: data});
    } catch (exception) {
      console.log(exception)
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SideBar/>
        <div>
        <Piechart
        data={/*[{index: 0, value: 400},{index: 1, value: 80},{index:2 , value: 20}]*/
          this.state.data
        }
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
      </div>

      <label className="label_Info">Email: </label>
      <input type="text" name = "email" onChange={this.handleChange}/><br></br>
      <button type="submit" className="dashboard_Button" onClick={this.handleSubmit}>Add Member</button>


      </div>
    );
  }
}
