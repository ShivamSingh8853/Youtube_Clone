import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoChannelTitle,demoVideoTitle,demoThumbnailUrl,demoVideoUrl,demoChannelUrl} from '../utils/constants';
const VideoCard = ({video:{id:{videoId}, snippet}}) => {
  console.log(snippet?.thumbnails?.high?.url);
  return (
   <card>
    <Link>
      <CardMedia 
          component="img"
          alt={snippet?.title}
          height="140"
          src={snippet?.thumbnails?.high?.url}
      />
    </Link>
   </card>
  )
}

export default VideoCard