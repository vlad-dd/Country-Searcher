import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Home from './Home'
import Search from './Search'

const App = () => {
  const client =  new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com/'
  })
  console.log(client)
  return (
    <ApolloProvider client={client} >
    <div>1
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
    </ApolloProvider>
  )
}

export default App
