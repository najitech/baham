import React from 'react'
import './BlogItemSlider.css'
function BlogItemSlider(props) {
  return (
    <div>
        <div className='topItemBlogPage'>
            <div className='imgTopItemBlog'><img alt='' src={props.image}/></div>
            <div className='infTopItemBlog'>
                <h4>{props.title}</h4>
                <div className='tagItemBlog'><div>{props.tag}</div></div>
                <div className='infoTimesBlogItem'><span>مطالعه {props.time} دقیقه </span><span>{props.date}</span></div>
            </div>
        </div>
    </div>
  )
}

export default BlogItemSlider