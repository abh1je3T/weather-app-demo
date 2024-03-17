import React from 'react'

function InfoCard({Icon,InfoTitle,InfoDetail}) {
  return (
    <div className='info-card-container'>
        <div className='info-card-icon'>{<Icon/>}</div>
        <div className='info-card-detail-container'>
            <div>{InfoTitle}</div>
            <div>{InfoDetail}</div>
        </div>
    </div>
  )
}

export default InfoCard