import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  axios from 'axios';

export default class FileUpload  extends Component{

    constructor(props){
        super(props)

        this.state = {
            image:''
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.fileUpload = this.fileUpload.bind(this);

        this.onChange = this.onChange.bind(this);
    }


    /**
     * Send image
     * @param event
     */
    onFormSubmit(event){
        event.preventDefault();

        this.fileUpload(this.state.image);

    }

    /**
     * Get file
     * @param {*} e
     */
    onChange(e){
        let files = e.target.files || e.dataTransfer.files;
        if(!files.length)
            return;
        this.createImage(files[0]);
    }


    /**
     * Read file
     * @param {*} file
     */
    createImage(file){
        let reader = new FileReader();

        reader.onload = (e) => {
            this.setState({
                image: e.target.result
            })
        }
        reader.readAsDataURL(file);
    }


    /**
     * Upload file
     * @param {*} image
     */
    fileUpload(image){

        let url     = 'http://localhost:8000/api/fileupload';
        let data    = { file: this.state.image};

        axios.post(url, data)
            .then( res => {
                console.log(res)
            });

    }

    render(){

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1>File Upload</h1>
                        <form onSubmit={this.onFormSubmit}>
                            <div className="input-group">
                                <input type="file" className="form-control" onChange={ this.onChange } name="file" id="file" />
                            </div>
                            <br />
                            <div className="input-group">
                                <button className="btn btn-success" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )

    }
}
