import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'react';
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {



    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        name: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {


        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {

        super(props);
        

        this.state = {

            articles: [],
            loading: true,

            page: 1, 
            totalResults: 0

        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewStation`
    };



    async updateNews() {

        this.props.setProgress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3aca45fe66a546378a56c15957a4a40b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
       

        this.setState({

            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false, 
            
        })
        this.props.setProgress(100);

    }

    
    async componentDidMount() {

        this.updateNews()
    };


    fetchMoreData= async()=>{
        this.setState({page :this.state.page +1})
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3aca45fe66a546378a56c15957a4a40b&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({

            articles: this.state.articles.concat(parsedData.articles),
        
            totalResults: parsedData.totalResults,

        })

    }


    render() {
        return (
            <div style={{backgroundColor: 'black'}}>

                <h2 className='text-center'   style= {{ backgroundColor: 'black', paddingTop : '20px', paddingBottom: '10px' , color : '#23C4AE'}}>Top headlines : {this.capitalizeFirstLetter(this.props.category)} </h2>
                {this.state.loading && <Spinner />}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >

                    <div className="container">
                    <div className='row'>

                        {this.state.articles.map((element) => {

                            return (

                                <div className='col-md-3' key={element.url}>
                                    <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                                </div>
                            )

                        })}
                    </div>
                    </div>
                    </InfiniteScroll>


            </div>
        )
    }
}

export default News