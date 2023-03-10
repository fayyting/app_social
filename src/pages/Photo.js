import React, { Component} from "react";
import Table from "../components/Table";

class Photo extends Component{
    render(){
        let columns = [
            {
                name: "Image",
                selector: row => <a href={row.url} target="_blank" rel="noreferrer">
                    <img src={row.thumbnailUrl} alt={row.title}/>
                </a>,
            },
            {
                name: "Album ID",
                selector: row => row.albumId,
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
        let apiUrl = process.env.REACT_APP_API_URL + "/photos";
        return(
            <div>
                <Table title={"Photos"} columns={columns} apiUrl={apiUrl} searchColumn="title" searchPlaceholder="Filter by Title" />
            </div>
        )
    }
}

export default Photo;