

import React from 'react';
import './VideoBanner.css';
import { Card } from '@mui/material';
import YT from 'react-youtube';

function VideoBanner() {
  return (
    <div>
      <Card className="banner-div">
        {/* <YT
          videoId="LvZfiqR1GVo"
          opts={{
            height: '300',
            width: '450',
            playerVars: {
              autoplay: 1
            }
          }}
        /> */}
        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qq3SPIpu174OwWrXmt1Tsc8SG4AMyjzbAA&usqp=CAU`} style={{width:'450px', height: '200px'}}/>
      </Card>
    </div>
  );
}

export default VideoBanner;