import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-paste fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
                                Posts</div>
                            <Link to={"/post"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-comment fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
                                Comments</div>
                            <Link to={"/comment"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-images fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
                                Albums</div>
                            <Link to={"/album"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-camera-retro fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
                                Photos</div>
                            <Link to={"/photo"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-check fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
                                Todos</div>
                            <Link to={"/todo"} className="stretched-link text-light float-end"> View</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card bg-dark mb-3">
                        <div class="card-body text-light">
                            <i className="fa fa-users fs-3 mb-2"></i>
                            <div className="fw-bolder fs-3 mb-2">5</div>
                            <div class="fw-bolder">
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