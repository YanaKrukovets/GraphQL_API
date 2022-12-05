import React, { useReducer, useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
        }
    }
`;

const QUERY_ALL_Movies = gql`
    query GetAllMovies {
        movies {
            name
        }
    }
`;

const GET_MOVIE_BY_NAME = gql`
    query GetMovieByNAme($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
        } 
    }
`;

function DisplayData () {
    const [movieSearched, setMovieSearched] = useState("");

    const { data, loading, error } = useQuery(QUERY_ALL_USERS);
    const { data: movieData } = useQuery(QUERY_ALL_Movies);

    const [fetchMovie, {data: movieSearchData}] = useLazyQuery(GET_MOVIE_BY_NAME);

    if (loading) {
        <h1>Data is loading...</h1>
    }

    if (error) {
        console.log(error);
    }
    
    return (
            <div>
                {data && 
                    data.users.map((user) => {
                        return (<div>
                            <h1>Name: {user.name}</h1>
                            <h2>UserName: {user.username}</h2>
                            <h2>Age: {user.age}</h2>
                        </div>);
                })}

                {movieData && movieData.movies.map((movie) => {
                    return <h1>Movie Name: {movie.name}</h1>
                })}

                <div>
                    <input type="text" placeholder="Interstellar..." onChange={(event) => {
                        setMovieSearched(event.target.value);
                        }}/>
                    <button onClick={() => {
                        fetchMovie({
                            variables: {
                                name: movieSearched,
                            },
                        })
                        }}>Fetch Data</button>
                    <div>
                        {movieSearchData && <div>
                                <h1>Movie name: {movieSearchData.movie.name}</h1>
                                <h2>Date published: {movieSearchData.movie.yearOfPublication}</h2>
                            </div>}
                    </div>
                </div>
            </div>);
}

export default DisplayData;