import React from 'react';
import { Movies } from '../Components/Movies';
import './Home.css'


function Home() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isMovies, setIsMovies] = React.useState([]);
    const [isData, setIsData] = React.useState([]);
    
    React.useEffect(() => {
      setIsLoading(true);
      fetch('https://yts.mx/api/v2/list_movies.json').then(data => data.json()).then((json) => {
        setIsData(json);
        setIsMovies(json.data.movies);
      }).catch(err => {
        console.log(err);
        alert('Error with data')
      }).finally(() => {
        setIsLoading(false);
      })
    }, [])
  
    return <div>
      <div className='navigation'>
        <div>
          <h1>Film's collection</h1>
        </div>
        
      </div>
      <section className='container'>
        {isLoading ?
          (<div className='loader'><span className='loader_text'>Is loading</span></div>) :
          (
            <div key={isMovies.id} className='movies'>
              {isMovies.map((obj, index) =>
              (<Movies key={index} title={obj.title} poster={obj.medium_cover_image} summary={obj.summary} year={obj.year} genres={obj.genres} />
              ))}
            </div>
          )
        }
      </section>
    </div>
  }
  
  export default Home;