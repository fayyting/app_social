import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts:[],
            comments:[],
            albums:[],
            photos:[],
            todos:[],
            users:[]
        };
    }

    componentDidMount(){
        this.fetchPosts();
        this.fetchComments();
        this.fetchAlbums();
        this.fetchPhotos();
        this.fetchTodos();
        this.fetchUsers();
    }
    
    fetchPosts(){
        let apiUrl = process.env.REACT_APP_API_URL + "/posts";
        axios.get(apiUrl).then((response) => {
            this.setState({
                posts: response.data
            });
        })
    }

    fetchComments(){
        let apiUrl = process.env.REACT_APP_API_URL + "/comments";
        axios.get(apiUrl).then((response) => {
            this.setState({
                comments: response.data
            });
        })
    }

    fetchAlbums(){
        let apiUrl = process.env.REACT_APP_API_URL + "/albums";
        axios.get(apiUrl).then((response) => {
            this.setState({
                albums: response.data
            });
        })
    }

    fetchPhotos(){
        let apiUrl = process.env.REACT_APP_API_URL + "/photos";
        axios.get(apiUrl).then((response) => {
            this.setState({
                photos: response.data
            });
        })
    }
    fetchTodos(){
        let apiUrl = process.env.REACT_APP_API_URL + "/todos";
        axios.get(apiUrl).then((response) => {
            this.setState({
                todos: response.data
            });
        })
    }
    fetchUsers(){
        let apiUrl = process.env.REACT_APP_API_URL + "/users";
        axios.get(apiUrl).then((response) => {
            this.setState({
                users: response.data
            });
        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-paste fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.posts.length}</div>
                            <div className="fw-bolder">
                                Posts</div>
                            <Link to={"/post"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-comment fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.comments.length}</div>
                            <div className="fw-bolder">
                                Comments</div>
                            <Link to={"/comment"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-images fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.albums.length}</div>
                            <div className="fw-bolder">
                                Albums</div>
                            <Link to={"/album"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-camera-retro fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.photos.length}</div>
                            <div className="fw-bolder">
                                Photos</div>
                            <Link to={"/photo"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-check fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.todos.length}</div>
                            <div className="fw-bolder">
                                Todos</div>
                            <Link to={"/todo"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark mb-3">
                        <div className="card-body text-light">
                            <i className="fa fa-users fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">{this.state.users.length}</div>
                            <div className="fw-bolder">
                                Users</div>
                            <Link to={"/user"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;