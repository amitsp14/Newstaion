import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Newsitem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;


        return (
            <div className="my-3 card-group ">

                <div className="card" style={{backgroundColor: '#111111' , color : 'white', border : ' 1px solid #00a388' }} >

                    <div>

                        <span className="badge rounded-pill " style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '0', backgroundColor: '#23C4AE', color: 'white' }}>
                            {source}

                        </span>

                    </div>

                    <img src={!imageUrl ? "https://www.truepush.com/blog/wp-content/uploads/2021/03/read-more-plugin-featured-image.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small style={{ color: '#23C4AE' }} >By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target={"_blank"} className="btn btn-sm btn-dark">Read more..</a>
                    </div>
                </div>

            </div >


        )
    }
}

export default Newsitem