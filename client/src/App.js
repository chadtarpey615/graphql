import Header from "./components/Header";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
     <Header />
      <div className="container">
       <h1>hello world</h1>
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
