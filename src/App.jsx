import { useCallback, useEffect, useState } from "react";
import SearchBar from "./assets/components/SearchBar";
import { searchPhotos } from "./utils/api.js";
import ImageList from "./assets/components/ImageList";
import Header from "./assets/components/Header";
import ModalImage from "./assets/components/ModalImage";

function App() {
    const [images, setImages] = useState([]);
    const [searched, setSearched] = useState('');
    const [image, setImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchDefaultImages = useCallback(async () => {
        const response = await searchPhotos('random');
        setImages(response);
    }, []);

    useEffect(() => {
        fetchDefaultImages();
    }, [fetchDefaultImages])

    const handleSearch = async (keyword) => {
        const response = await searchPhotos(keyword);
        setImages(response);
        setSearched(keyword);
    }

    const handleOpenModal = (image) => {
        setShowModal(true);
        setImage(image);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    
    
    return (
        <>
        <Header />
        { showModal && (<ModalImage image={image} show={showModal} onCloseModal={handleCloseModal}/>)}
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto">
                    <SearchBar handleSearch={handleSearch} />
                    <ImageList images={images} searched={searched} onOpenModal={handleOpenModal}/>
                </div>
            </div>
        </div>
            
        </>
  )
}

export default App
