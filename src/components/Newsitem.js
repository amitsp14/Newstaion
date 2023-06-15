import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Newsitem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;


        return (
            <div className="my-3 card-group">
            <div className="card" style={{ border: '1px solid #ccc', backgroundColor: '#111111' }}>
                <div>
                    <span className="badge rounded-pill" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '0', backgroundColor: '#23C4AE', color: '#ffffff' }}>
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://www.truepush.com/blog/wp-content/uploads/2021/03/read-more-plugin-featured-image.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body" style={{ padding: '10px' }}>
                    <h5 className="card-title" style={{ fontSize: '22px', color: '#96ffef' }}>{title}</h5>
                    <p className="card-text" style={{ fontSize: '18px', color: '#ffffff' }}>{description}</p>
                    <p className="card-text"><small style={{ color: '#1af2d1' }}>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target={"_blank"} className="btn btn-sm btn-info" style={{ backgroundColor: '#23C4AE', borderColor: '#23C4AE' }}>Read more..</a>
                </div>
            </div>
        </div>


        )
    }
}

export default Newsitem