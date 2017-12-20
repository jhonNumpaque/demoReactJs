import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import PhotoList from './photo.js';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {photos: []};
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) =>{
                return response.json();
            })
            .then((photos) => {
                this.setState({photos: photos});
            });
    }

    render() {
        if(this.state.photos.length > 0){
            return (
                <div className="album text-muted">
                    <div className="container">
                        <div className="row">
                            <h1 className="text-center col-sm-12 col-lg-12 col-xl-12">Galeria de Imagenes</h1>
                            {this.state.photos.map(function(obj, index){
                                return <PhotoList key={obj.id} title={obj.title} url={obj.url} preview={obj.thumbnailUrl} albumId={obj.albumId} id="obj.id"/>
                            })}
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="content">
                    <div className="row">
                        <h1 className="text-center col-sm-12 col-lg-12 col-xl-12">Cargando Información...</h1>
                    </div>
                </div>
            );
        }

    }
}

export default App;
