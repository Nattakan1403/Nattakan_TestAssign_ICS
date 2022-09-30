import AttractionCard from './AttractionCard.js';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React ,{ useState } from 'react';
import "./App.css";
import Pagination from '@mui/material/Pagination' ;
import Stack from '@mui/material/Stack';
import NavBar from './Navbar.js';
import Sidebar from './sidebar.js';

var data = require('./example_data.json')
function App() {
  const [querysearch, setQuerySearch]=useState("");
  const [queryselect, setQuerySelect]=useState("restaurant");

  const [pageNumber, setPageNameber]=useState(1);
  const itemsPerPage = 9;
  const [pagesVisited, setPagesVisited]=useState(0);
/*   console.log("visit",pagesVisited);
  console.log("page",pageNumber); */

  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const nowday = days[ now.getDay() ];
  /* console.log(nowday); */

  const displayUsers = data
    .filter(item => item.name.toLocaleLowerCase().includes(querysearch))
    .filter(item => item.categories.includes(queryselect))
    .slice(pagesVisited,pagesVisited+itemsPerPage)
    .map((item) =>(
      <Grid className='App-grid' item xs={12} md={4}>
        <AttractionCard 
          key={item.id} 
          name = {item.name} 
          profile_image_url = {item.profile_image_url}
          images = {item.images} 
          rating = {item.rating}
          operation_time = {item.operation_time.find(({day}) => day === nowday)}
        />
      </Grid>
    ))

  const changePage = (event ,value) => {
    setPageNameber(value);
    setPagesVisited((value-1)*itemsPerPage)
    console.log("value",value); 
  };
  return (
    <div className="App">
      <NavBar className='App-Navbar'/>
      <Sidebar className='App-sidebar'/>
      <div className='App-fixed'>
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
          <Container maxWidth="xl">          
            <div className='App-basget'>
              <Grid container spacing={3} className='App-items'>
                {displayUsers}
              </Grid>
            </div>
            <Stack spacing={2} className="App-pagination">
              <Pagination variant="outlined" page={pageNumber} count={3} color="primary"
                onChange={changePage} 
              /> 
            </Stack>
          </Container>  
      </div> 
    </div>
  );
}

export default App;
