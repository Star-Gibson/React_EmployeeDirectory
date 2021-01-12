import React from "react";
import API from "../../util/api";
import Search from "../../components/Search/Search";

class EmployeeTable extends React.Component {
    //State
    state = {
        search: "",
        results: [],
        employeeList: "",
    }

    // Call randomuser API
    componentDidMount() {
        API.apiSearch()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
            }).catch(err => console.log(err))
    };

    //handleInputChange for Search
    handleInputChange = event => {
        if (event.target.name === "search") {
            const lookUp = event.target.value.toLowerCase();
            this.setState({
                search: lookUp
            })
        }
    }

    //Option 1 - Sort by First Name
    sortFirstName = () => {
        const filteredEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1;
            }
            if (a.name.first > b.name.first) {
                return 1;
            }
            else {
                return 0;
            }
        });
        if (this.state.EmployeeList === "DESC") {
            filteredEmployees.reverse();
            this.setState({ EmployeeList: "ASC" });
        } else {
            this.setState({ EmployeeList: "DESC" })
        }
        this.setState({ results: filteredEmployees })
    };

    // --------------------Breaking up Code For Readability-----------------------------------------

    //Option 2 - Sort by Last Name
    sortLastName = () => {
        const filteredEmployees = this.state.results.sort((a, b) => {
            if (b.name.last > a.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            else {
                return 0;
            }
        });
        if (this.state.EmployeeList === "DESC") {
            filteredEmployees.reverse();
            this.setState({ EmployeeList: "ASC" });
        } else {
            this.setState({ EmployeeList: "DESC" })
        }
        this.setState({ results: filteredEmployees })
    }

    // --------------------Breaking up Code For Readability-----------------------------------------


    //RENDER - Implementing Ternary Operator (Test First)
    render() {
        return (
            <div>
<div className="container mx-auto">
                <Search handleInputChange={this.handleInputChange} search={this.state.search} />
                <div className="table">
                    <table className="table-responsive table-dark text-centered">
                        <thead>
                            <tr>
                                <th>Employee Badge</th>
                               <th>First <button className="" onClick={this.sortFirstName}>SORT</button></th>
                                <th>Last <button className="btn-small " onClick={this.sortLastName}>SORT</button></th>
                                <th>Location</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>


                        { //Option 1 - Be sure to include this.state.results, then map otherwise sticking of button occurs
                            this.state.results && this.state.results.map(employeeDirectory => employeeDirectory.name.first.toLowerCase().includes(this.state.search) ?
                                < tbody key={employeeDirectory.login.username}>
                                    <tr>
                                        <td><img src={employeeDirectory.picture.medium} alt="employeeBadge" /></td>
                                        <td>{employeeDirectory.name.first}</td>
                                        <td>{employeeDirectory.name.last}</td>
                                        <td>{employeeDirectory.location.city}, {employeeDirectory.location.state}</td>
                                        <td>{employeeDirectory.email}</td>
                                        <td>{employeeDirectory.phone}</td>
                                    </tr>
                                </tbody>

                                :
                                // Option 2
                                employeeDirectory.name.last.toLowerCase().includes(this.state.search) ?
                                    < tbody key={employeeDirectory.login.username}>
                                       <tr>
                                        <td><img src={employeeDirectory.picture.medium} alt="employeeBadge" /></td>
                                        <td>{employeeDirectory.name.first}</td>
                                        <td>{employeeDirectory.name.last}</td>
                                        <td>{employeeDirectory.location.city}, {employeeDirectory.location.state}</td>
                                        <td>{employeeDirectory.email}</td>
                                        <td>{employeeDirectory.phone}</td>
                                    </tr>
                                </tbody>
                                    :
                                    null
                            )}
                    </table>
                    </div>
                </div>
            </div >
        )
    }
};

export default EmployeeTable;