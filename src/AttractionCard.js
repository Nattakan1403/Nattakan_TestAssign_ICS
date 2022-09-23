import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle'; 
import './AttractionCard.css';
import Typography from '@mui/material/Typography';


export default function AttractionCard(props) {
  return (
      <Card style={{borderRadius: "10px"}} className='Att-card'>
        <CardActionArea>
          <div className='Att-cardheader'>
            <CardMedia className='Att-profile'
              component="img"
              height="194"
              image={props.profile_image_url} 
              alt={props.name}
            />
            <div className='Att-textheader'>
              <Typography  variant="h6" className='Att-name'>
                <strong>{props.name}</strong>
              </Typography>
              <div className='Att-subhead'>
                    <p className='Att-date'>{props.name}</p>
                    <div className='Att-rating'>
                      <CircleIcon className='Att-ratingicon'/>
                      <p className='Att-ratingnumber'><strong>{props.rating}</strong></p>
                    </div>
              </div>
            </div>
          </div>
          <div className='Att-cardimages'>
              <CardMedia className='Att-imageone'
                  component="img"
                  height="194"
                  image={props.images[0]} 
                  alt={props.id}
              />
              <CardMedia className='Att-imagetwo'
                component="img"
                height="194"
                image={props.images[1]} 
                alt={props.id}
              />
              <CardMedia className='Att-imagetree'
                component="img"
                height="194"
                image={props.images[2]} 
                alt={props.id}
              />
          </div>
        </CardActionArea>
    </Card>  
  );
}
