import React from 'react';
import './index.css'; 

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src="https://www.uni.cards/images/one_percent_cashback.png" alt="Avatar" />
      <div className="card-content">
      <strong>1% assured cashback on your spends.</strong>The more you spend, the more you earn.
      <p style={{
        fontSize: '12px',
        marginTop: '50px'
      }}>Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.</p>
      </div>
    </div>
  );
};

export default Card;
