import React from "react";
import CardList from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, users } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search placeholder={"Peka"} onSearchChange={this.onSearchChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
