import { useState } from "react";
import SearchBar from "./assets/components/SearchBar";
import { searchPhotos } from "./utils/api.js";
import ImageList from "./assets/components/ImageList";
import Header from "./assets/components/Header";

function App() {
    const [images, setImages] = useState([]);
    const handleSearch = async (keyword) => {
        console.log('Search: '+ keyword);
        const response = await searchPhotos(keyword);
        setImages(response);
    }
    
    return (
        <>
            <Header />
            <SearchBar handleSearch={handleSearch}/>
            <ImageList images={images}/>
        </>
  )
}

export default App
