
import './App.css'
import requests from './Request'
import Banner from './components/Banner'
import Card from './components/Card'
import Nav from './components/Nav'


function App() {
  
  return (
    <>
    <Nav/>
    <Banner fetchUrl={requests.fetchTrending}/>
    <Card isPoster = 'true' title ='Trending' fetchUrl={requests.fetchTrending}/>
    <Card title ='netflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
    <Card title = 'Top Rated' fetchUrl={requests.fetchTopRated}/>
    <Card title='Action' fetchUrl={requests.fetchActionMovies}/>
    <Card title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
    <Card title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
    <Card title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
    <Card title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
   
    </>
  )
}

export default App
