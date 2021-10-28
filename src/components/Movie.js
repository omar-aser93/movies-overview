import React, { useState } from 'react';
import {Modal, Box}from '@mui/material';

const Movie =({title , poster_path , overview , vote_average,release_date}) =>{ 

  const imageApi =   'https://image.tmdb.org/t/p/w1280' ;         // from the API website

  //Modal styling
  const style = { position: 'absolute', top: '50%',left: '50%', transform: 'translate(-50%, -50%)',
                width: 600, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };  
  
    const [open, setOpen] = useState(false); //store if modal is open or closed    
   
  return (                             //show the data for each item from API & show modal onclick
    <div className="Movie">

     <div className='contain' onClick={() => setOpen(true)}> 
        <img src={imageApi+poster_path}   alt='poster' />
        <div className='overview'>{overview}</div>
     </div>
     <h1>{title}</h1>
    <div className='rate'><span>{vote_average}</span>  <p>{release_date}</p></div> 

      <Modal open={open} onClose={() => setOpen(false)}  >
        <Box sx={style}>        
          <div className='modalData'>
             <img src={imageApi+poster_path}   alt='poster' />
             <div className='modalText'>
                <div>{overview}</div>
             </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Movie;
