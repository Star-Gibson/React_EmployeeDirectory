import React, { Component} from "react";
import Search from "./Search/Search";

class App extends Component {
  //State 
  state = {
    search: "",
    people: [ ]
  };

  //handleChange Functionality
  handleChange = (event) => { this.setState({ search: event.target.value})}

//Render 
  render () {
    return (
      <Search
      placeholder = "Search for employee" 
      handleChange={this.handleChange}
      />
    )
  } 
}

export default App;
