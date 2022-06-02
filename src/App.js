import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import CollectionList from './pages/CollectionList';
import CollectionDetail from './pages/CollectionDetail';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/ApiSettings';
import MyContext from './context/MyContext';
import { useState } from 'react';

function App() {
  const [animeCol, setAnimeCol] = useState([]);
  const [bulkAdd, setBulkAdd] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <ApolloProvider client={client}>
      <MyContext.Provider value={{
        animeCol, setAnimeCol, bulkAdd, setBulkAdd,
        loading, setLoading, currentPage, setCurrentPage
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AnimeList />} />
              <Route path="anime-detail/:id" element={<AnimeDetail />} />
              <Route path="collection-list" element={<CollectionList />} />
              <Route path="collection-detail/:idx" element={<CollectionDetail />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </ApolloProvider>
  );
}

export default App;
