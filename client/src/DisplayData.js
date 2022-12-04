import React from "react";
import { useQuery, gql } from "@apollo/client";

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

function DisplayData () {
    const { data } = useQuery(QUERY_ALL_USERS);

    console.log(data);
    
    return <div>Data</div>;
}

export default DisplayData;