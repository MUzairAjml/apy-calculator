import React from 'react'
import { Card } from 'antd';
import './AnnouncementCard.css'
import { AlertFilled } from '@ant-design/icons';

const AnnouncementCard = () => {
    return (
        <div>
             <Card style={{width:600}}className="ann-card">
    <p>
      <h1 style={{color:'red'}}><AlertFilled />We are still in BETA.</h1>
      <h2 style={{color:'white'}}>
      Everyone will get rewarded there are some glitches on frontend which we are fixing right now.
      We are improving and your feedback is very important for us.
      Feel free to inform us about the improvements needed on telegram.
      </h2>
    </p>
  </Card>
            
        </div>
    )
}

export default AnnouncementCard
