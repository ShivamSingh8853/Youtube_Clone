import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{background:"#fff"}}>
      <Navbar/>
       <Routes>
           <Route path="/" exact element={< Feed/>}/>
           <Route path="/video/:id" element={<VideoDetail/>} />
           <Route path="/channel/:id" element={<ChannelDetail/>}/>
           <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
   
       </Routes>
    </Box>
    </BrowserRouter>
    // <div>Hello</div>
  )
}

export default App