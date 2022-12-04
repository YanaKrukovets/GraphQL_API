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
    if (data)
    console.log(data);
    
    return <></>;
}

export default DisplayData;