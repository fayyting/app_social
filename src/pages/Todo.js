import React, { Component} from "react";
import Table from "../components/Table";

class Todo extends Component{
    render(){
        let columns = [
            {
                name: "User ID",
                selector: row => row.userId,
                sortable: true,
            },
            {
                name: "ID",
                selector: row => row.id,
                sortable: true,
            },
            {
                name: "Title",
                selector: row => row.title,
                sortable: true,
            },
            {
                name: "Completed",
                selector: row => (row.completed ? "Yes" : "No"),
                sortable: true,
            },
        ];
        let apiUrl = process.env.REACT_APP_API_URL + "/todos";
        return(
            <div>
                <Table title={"Todos"} columns={columns} apiUrl={apiUrl} />
            </div>
        )
    }
}

export default Todo;