import React, { Component} from "react";
import Table from "../components/Table";

class User extends Component{
    render(){
        let columns = [
            {
                name: "ID",
                selector: row => row.id,
                sortable: true,
            },
            {
                name: "Name",
                selector: row => row.name,
                sortable: true,
            },
            {
                name: "Email",
                selector: row => row.email,
                sortable: true,
            },
            {
                name: "Phone",
                selector: row => row.phone,
                sortable: true,
            },
        ];
        let apiUrl = process.env.REACT_APP_API_URL + "/users";
        return(
            <div>
                <Table title={"Users"} columns={columns} apiUrl={apiUrl} searchColumn="name" searchPlaceholder="Filter by Name"/>
            </div>
        )
    }
}

export default User;