import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { Link } from 'react-router-dom'

const Home = () => {

    const QUERY_LIST_OF_COUNTRIES = gql`
    {
        countries{
          name,
          emoji,
          capital,
          code
        }
      }
    `

    const {data, loading, error} = useQuery(QUERY_LIST_OF_COUNTRIES)
    
    return (
        <div>
            <div className="search">
                <Link to='/search'>Search for country</Link>
            </div>
            <div className="countries">
                {loading && <p>Data is loading...</p>}
                {data?.countries?.map((country, key) => {
                    return (<div key={key}>{country.name} {country.emoji} {country.capital} {country.code}</div>)
                })}
                {error && <p>Error: {error}</p>}
               
            </div>
        </div>
    )
}

export default Home
