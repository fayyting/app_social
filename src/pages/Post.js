import React, { Component} from "react";
import Table from "../components/Table";

class Post extends Component{
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
                name: "Body",
                selector: row => row.body,
                sortable: true,
            },
        ];
        let apiUrl = process.env.REACT_APP_API_URL + "/posts";
        return(
            <div>
                <Table title={"Posts"} columns={columns} apiUrl={apiUrl} />
            </div>
        )
    }
}

export default Post;