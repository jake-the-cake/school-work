import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    users: [],
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async deleteAllUsers() {
    await axios.get(apiUrl + '/users-delete');
    this.setState({
      users: [],
    });
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data,
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Row className="App-buttons">
            <Button
              className="App-button"
              variant="dark"
              onClick={() => this.createUser()}
            >
              Create User
            </Button>

            <Button
              className="App-button"
              variant="dark"
              onClick={() => this.deleteAllUsers()}
            >
              Delete All Users
            </Button>
          </Row>

          <div className="App-body">
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email Address</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td key={user.username}>{user.username}</td>
                    <td key={user.email}>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
