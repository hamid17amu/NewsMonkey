import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalres, setTotalres] = useState(0)

    const capitalizeFirstLetter=(string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    // constructor(props){
    //     super(props);
    //     console.log("constructor");
    //     this.state= {articles: [], page:1, loading:true}

    //     document.title=`NewsMonkey | ${capitalizeFirstLetter(props.category)}`
    // }

    const update=async()=>{
      props.setProg(10);
        // this.setState({loading: true})
        setLoading(true);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
        let data=await fetch(url);
        props.setProg(30);
        let parsedata= await data.json()
        props.setProg(70);
        console.log(parsedata);
        setArticle(parsedata.articles);
        setLoading(false);
        setTotalres(parsedata.totalResults);
        
        // this.setState({articles: parsedata.articles, totalres: parsedata.totalResults, loading: false}, ()=>{console.log("updated");});
        props.setProg(100);
    }

    // async componentDidMount(){
    //     // this.setState({loading: true})
    //     // console.log("start");
    //     // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     // let data=await fetch(url);
    //     // let parsedata= await data.json()
    //     // console.log(parsedata);
    //     // this.setState({articles: parsedata.articles, totalres: parsedata.totalResults, loading: false}, ()=>{console.log("updated");});
    //     this.update();
    // }

    useEffect(() => {
      update();
      //eslint-disable-next-line
    }, [])
    
    


    // handleNext=async()=>{
    //   this.setState({page:this.state.page +1});
    //   this.update();

    // }

    // handlePrev=async()=>{
    //   this.setState({page:this.state.page -1});
    //   this.update();
    // }

    const fetchMoreData = async() => {
      // this.setState({page:this.state.page+1});
      // this.update();
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
      let data=await fetch(url);
      setPage(page+1);
      let parsedata= await data.json()
      console.log(parsedata);
      setArticle(articles.concat(parsedata.articles));
      setTotalres(parsedata.totalResults);

      // this.setState({articles: this.state.articles.concat(parsedata.articles), totalres: parsedata.totalResults}, ()=>{console.log("updated");});

        

    };

    return (
      <div>
        <h2 className='text-center' style={{margin: '90px 0px 10px'}}>NewsMonkey | Top Headlines | {capitalizeFirstLetter(props.category)}</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalres}
          loader={<h4>Loading...</h4>}
        >
        <div className='container my-3'>
        <div className="row">
        {articles?.map((element)=>{
            // console.log(element);
            return <div className="col-md-4 my-2" key={element.url}>
            <NewsItem title={element.title.length>45?element.title.slice(0,45):element.title} description={element.description&&element.description.length>88?element.description.slice(0,88):element.description} 
            img={element.urlToImage?element.urlToImage:'./favicon.ico'} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}     
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr; Prev</button>
        <button  disabled={this.state.page+1>Math.ceil(this.state.totalres/props.pageSize)}  type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
        </div>
    )
  }

News.defaultProps = {
  country: 'in',
  category: 'general',
  totalres: 0
}
News.defaultPropTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News