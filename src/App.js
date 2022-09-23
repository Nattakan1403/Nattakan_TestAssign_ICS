import AttractionCard from './AttractionCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React ,{ useState } from 'react';
import "./App.css";
import Pagination from '@mui/material/Pagination' ;
import Stack from '@mui/material/Stack';
/* import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */

var data = require('./example_data.json')
function App() {
  const [querysearch, setQuerySearch]=useState("");
  const [queryselect, setQuerySelect]=useState("restaurant");

  const [pageNumber, setPageNameber]=useState(0);
  const usersPerPage = 9
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers = data
    .filter(item => item.name.toLocaleLowerCase().includes(querysearch))
    .filter(item => item.categories.includes(queryselect))
    .slice(pagesVisited,pagesVisited+usersPerPage)
    .map((item) => (
      <Grid className='App-grid' item xs={12} md={4}>
        <AttractionCard 
          key={item.id} 
          name = {item.name} 
          profile_image_url = {item.profile_image_url}
          images = {item.images} 
          rating = {item.rating}
          operation_time = {item.operation_time}
        />
      </Grid>
    ))
  
  const changePage = (e) => {
    if (pageNumber === 0) {
      setPageNameber(1);
    }
    else if (pageNumber === 1) {
      setPageNameber(2);
    }
    else {
      setPageNameber(0);
    }
  }

  return (
    <div className="App">
      <Container maxWidth="xl">
        <div>
          <Typography className='App-place-List' variant="h5">
            <strong>Place List</strong>
          </Typography>
          <div className='App-ss'>
            <select className='App-select' onChange={e=>setQuerySelect(e.target.value)} >
              <option value="restaurant">Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="cafe">Cafe</option>
            </select>
            <p className='App-between'>  </p>
            <input className='App-search' type="text" placeholder="Search name..." onChange={e=>setQuerySearch(e.target.value)}/>
          </div>
        </div> 
        <Grid container spacing={3} >{displayUsers}</Grid>
          <Stack spacing={2} className="App-pagination">
            <Pagination variant="outlined" count={3} color="primary"
              onChange={changePage} 
              /> 
          </Stack>
      </Container>
    </div>
  );
}

export default App;
