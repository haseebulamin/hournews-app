import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);



 
  
  
  
  
const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  const newsUpdate = async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }

  useEffect(() => {
    document.title =  `${capitalizeFirstLetter(props.category)} - HourNews`;
    newsUpdate();
    // eslint-disable-next-line
  }, [])

// const prevPage = async ()=>{
//   setPage(page-1);
//   newsUpdate();
//    }

// const nextPage = async ()=>{
//   setPage(page+1);
//   newsUpdate();
//   }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };


    return (
        <>
        <div className='text-center mt-3 pt-1'>
      <h1 className='my-2 mt-5'>Hour<span className='text-danger'>News</span> - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      </div>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner/>}>
      <div className="container my-2">
      <div className="row">
      {articles?.map((element)=>{
        return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
      })}
      </div>
      </div>
      </InfiniteScroll>

      {/* <div className='container my-5 d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.prevPage}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)}  type="button" className="btn btn-danger" onClick={this.nextPage}>Next &rarr;</button>
      </div> */}
    </>
    )
}

// PropTypes 
News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News