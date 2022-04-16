import React from 'react'
import './Comment.css'
import {HiReply} from 'react-icons/hi'
function Comment(props) {
  const Icon = props.Icon
  return (
   <div className={props.reply ? 'replyCommentMargin':'commentMarginBottom'}>
    <div className='commentBlog'>
            <div className='infoComment'>
                <div className='imageName'><div className='imageAvatar'><Icon style={{marginTop:'4px'}}/></div><h4>{props.name}</h4></div>
                <div className='infoCommentContainer'><span>{props.date}</span><span>{props.time}</span></div>
            </div>
            <div className='CommentSectionText'>
                <p>{props.text}</p>
            </div>
        </div>
        {props.children ? <div className='replySectionComment'>
            <div className='replyIconComment'><HiReply/></div>
            {props.children}
        </div>:''}
    </div>
  )
}

export default Comment