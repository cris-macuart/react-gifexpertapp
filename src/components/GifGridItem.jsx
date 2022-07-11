import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="ui card animate__animated animate__fadeIn">
      <div className="image">
        <img src={url} alt={title} />
      </div>
      <div className='content'>
        <a className="header">{title}</a>
      </div>
    </div>
  );
};
