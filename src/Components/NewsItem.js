import React from "react";

const NewsItem =(props)=> {

    let { title, description, imageurl, newsurl, author, date,source } = props;
    return (
      <div className="mt-4 ">
        <div className="card ">
          <div style={{display: "flex",justifyContent: "flex-start",position: "absolute", left: "0", marginTop: "-10px", marginLeft: '-7px' }}>
          <span className=" badge rounded-pill bg-danger " >{source}</span>
          </div>
          <img
            src={!imageurl? "https://insert.gr/storage/2019/02/insert-logo.png"
                : imageurl } className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger fw-light font-monospace">By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn  btn-sm btn-outline-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
