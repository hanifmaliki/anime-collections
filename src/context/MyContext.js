import { createContext } from "react";

const MyContext = createContext({
    animeCol: [],
    setAnimeCol: (data) => { },
    bulkAdd: true,
    setBulkAdd: (data) => { },
    loading: false,
    setLoading: (data) => { },
    currentPage: 1,
    setCurrentPage: (data) => { },
});

export default MyContext;