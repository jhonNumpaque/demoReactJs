import React, { Component } from 'react';

class PhotoList extends Component{
    render(){
        var id   = this.props.albumId;
        var text = this.props.title;
        var url  = this.props.url;
        var pre  = this.props.preview;
        return(
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <div className="card">
                    <img className="card-img-top" alt={text} src={pre} />
                    <div className="card-block">
                        <label className="card-text">{text}</label>
                        <a id={id} href={url} title={text} className="preview">Mostrar</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoList;