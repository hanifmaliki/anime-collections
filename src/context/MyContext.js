import { createContext } from "react";

const MyContext = createContext({
    animeCol: [],
    setAnimeCol: (data) => { },
    bulkAdd: true,
    setBulkAdd: (data) => { }
});

export default MyContext;