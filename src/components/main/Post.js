import React from 'react'
import formatISO9075 from 'date-fns/formatISO9075'
import { Link } from 'react-router-dom'


export default function Post(props) {
  
  return (
    <div className="Card">
      <div className="card-image"><Link to={`postPage/${props._id}`} target='_blank' style={{ cursor: 'pointer' }}><img src={props.file} alt="" /></Link></div>
      <div className="card-info">
        <Link to={`postPage/${props._id}`} target='_blank' style={{ cursor: 'pointer',textDecoration:'none',color:'black' }}><div className="card-title">{props.title}</div></Link>
        <div>{props.authorName}</div>
        <div>
          <time>{formatISO9075(new Date(props.createdAt), 'MM/dd/yyyy')}</time>
        </div>
      </div>
    </div>
  )
}
