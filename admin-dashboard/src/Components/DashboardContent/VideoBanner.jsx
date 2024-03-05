

import React from 'react';
import './VideoBanner.css';
import { Card } from '@mui/material';
import YT from 'react-youtube';

function VideoBanner() {

 
  return (
    <div>
      <Card className="banner-div">
        <div className="overlay"></div>
        <YT
          videoId="vAVosufhvk8"
          opts={{
            height: '200',
            width: '450',
            playerVars: {
              autoplay: 1
            }
          }}
        />
      </Card>
    </div>
  );
}

export default VideoBanner;