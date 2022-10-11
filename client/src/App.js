import Header from "./components/Header";
import Clients from "./components/Clients";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AddClientModal from "./components/AddClientModal";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }

      },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }

        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
     <Header />
     <AddClientModal />
     <Clients />
      <div className="container">
      </div>
    </ApolloProvider>
    </>
  );
}

export default App;
