import React from 'react'
import { useMobile } from '../MobileContext'

function UnitStoreText() {
    const {mobile}=useMobile();
  return (
    <div className="card" style={mobile?{
        
    }:{
        flexDirection:"row",
        justifyContent:"center",
        gap:"50px",
        margin:"200px"
    }}>
      <img className="card-image" src="https://www.uni.cards/images/five_x_rewards.png" alt="Avatar" />
      <div className="card-content">
      <strong>5x more value than your cashback,</strong>only at the Uni Store.
      </div>
    </div>
  )
}

export default UnitStoreText