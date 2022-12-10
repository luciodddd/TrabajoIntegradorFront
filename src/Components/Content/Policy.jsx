import React from 'react'

const Policy = ({pol}) => {
  return (
    <div>
    <h5>{pol.title}</h5>
    <p key={pol.id} className="policies">{pol.description}</p>
    </div>
  )
}

export default Policy