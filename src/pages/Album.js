import React, { Component} from "react";
import Table from "../components/Table";

class Album extends Component{
    render(){
        let columns = [
            {
                name: "User Id",
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
        ];
        let apiUrl = process.env.REACT_APP_API_URL + "/albums";
        return(
            <div>
                <Table title={"Albums"} columns={columns} apiUrl={apiUrl} searchColumn="title" searchPlaceholder="Filter by Title"/>
            </div>
        )
    }
}

export default Album;