import React from 'react';
import Avatar from '@mui/material/Avatar';
import {Container,Typography,ListItemButton} from '@mui/material';

export const  Reviews = ({list,deleteTask}) => {
  const styleContainer = { 
    marginTop:'50px',
    bgcolor: 'white', 
    border:'1px solid rgba(0, 0, 0, 0.1)',
    padding:'20px',
  }
  return (
    <Container sx={styleContainer}>  
      <Typography variant="h4" component="div" sx={{textAlign:'left'}}>
        Отзывы:
      </Typography>
        {list.map((el)=>{return(
        <ListItemButton onClick={()=>deleteTask(el.createdAt)} key={el.createdAt} component="div">
          <Avatar alt="Remy Sharp" src={el.img}
            sx={{ width: '55px', height:'55px', m:'20px' }}
          />
          <Typography variant="h6" component="div" sx={{marginRight:'40px'}}>
            {el.fullName}       
          </Typography>
            <Typography variant="p" sx={{display:'block'}}>
              {el.text}       
            </Typography>
        </ListItemButton>
        )})}
     
      
    
    </Container>
  )
}
