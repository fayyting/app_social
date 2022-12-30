import React, { Component} from "react";
import Table from "../components/Table";

class Comment extends Component{
    render(){
        let columns = [
            {
                name: "Post ID",
                selector: row => row.postId,
                sortable: true,
            },
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
                name: "Body",
                selector: row => row.body,
                sortable: true,
            },
        ];
        let apiUrl = process.env.REACT_APP_API_URL + "/comments";
        return(
            <div>
                <Table title={"Comments"} columns={columns} apiUrl={apiUrl} searchColumn="name" searchPlaceholder="Filter by Name" />
            </div>
        )
    }
}

export default Comment;