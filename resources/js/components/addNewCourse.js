import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router";

export default class AddNewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", description: "", path: "" };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e) {
        this.setState({
            productTitle: e.target.value
        });
    }
    handleChange2(e) {
        this.setState({
            productBody: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const products = {
            title: this.state.productTitle,
            body: this.state.productBody
        };
        let uri = "127.0.0.1:8000/api/products";
        axios.post(uri, products).then(response => {
            browserHistory.push("/display-item");
        });
    }
    render() {
        return (
            <div>
                <h1 align="center">Add new Course</h1>
                <form onSubmit={this.handleSubmit} style={{ margin: "10%" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Course Name :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleChange1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Course Description :</label>
                                <textarea
                                    className="form-control col-md-6"
                                    onChange={this.handleChange2}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile02"
                                aria-describedby="inputGroupFileAddon02"
                            >
                                Choose file
                            </label>
                        </div>
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                id="inputGroupFileAddon02"
                            >
                                Upload
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary center">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
