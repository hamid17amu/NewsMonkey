import React from 'react'

const NewsItem = (props) => {

    let {title, description, img, url, author, date, source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display: 'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span class="badge text-bg-dark">{source}</span>
          </div>
        
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p class="card-text"><small className="text-body-secondary">By {author?author: "Unknown"} on {new Date(date).toGMTString()}.</small></p>
        <p className="card-text">{description}...</p>
        <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
      </div>
      </div>
    </div>
    )
  }

export default NewsItem