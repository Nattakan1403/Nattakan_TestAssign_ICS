import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle'; 
import './AttractionCard.css';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';

export default function AttractionCard(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 899, min: 0 },
      items: 1
    },
  };
  let Timeopen 
  if (props.operation_time.time_open === 'closed'){
    Timeopen = <p className='Att-date' style={{color:'red'}}>{props.operation_time.time_close}</p>
  }else{
    Timeopen = <p className='Att-date'>{props.operation_time.time_open} AM - {props.operation_time.time_close} AM</p>
  }

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
                <Box sx={[{ display: 'flex' },{flexDirection: 'row'}]}>
                  <CalendarMonthIcon className='Att-dateicon'/>
                  {Timeopen}
                </Box>
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
                  height="200"
                  image={props.images[0]} 
                  alt={props.id}
              />
              <CardMedia className='Att-imagetwo'
                component="img"
                height="200"
                image={props.images[1]} 
                alt={props.id}
              />
              <CardMedia className='Att-imagetree'
                component="img"
                height="200"
                image={props.images[2]} 
                alt={props.id}
              />
          </div>
        </CardActionArea>
          {/* image slide */}
          <CardContent className='Att-content'>
            <Carousel responsive={responsive}>
              <CardMedia className='Att-imgslide'
                component="img"
                height="200"
                image={props.images[0]} 
                alt={props.id}
              />
              <CardMedia className='Att-imgslide'
                component="img"
                height="200"
                image={props.images[1]} 
                alt={props.id}
              />
              <CardMedia className='Att-imgslide'
                component="img"
                height="200"
                image={props.images[2]} 
                alt={props.id}
              />
            </Carousel>
          </CardContent>
    </Card>
  );
}
