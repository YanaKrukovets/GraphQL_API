import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import DisplayData from "./DisplayData.js";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"});
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of Users</h1>
        <DisplayData />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
