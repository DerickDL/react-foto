import PropTypes from "prop-types"
import Image from "./Image";
import "./image.css";

export default function ImageList({ images, searched, onOpenModal }) {
    const renderedImages = images.map((image) => {
        return (
            <div className="masonry-item" key={image.id}>
                <Image image={image} onOpenModal={onOpenModal}/>
                <div className="item">
                </div>
            </div>
        );
    })
    return (
        <>
            <div className="container">
                {searched ? (
                    <div className="mb-4">
                        <h1 className="display-6">Free {searched} Photos</h1>
                    </div>
                ): ''}
                
                <div className="masonry-container">
                    {renderedImages}
                </div>
            </div>
        </>
    )
}

ImageList.propTypes = {
    images: PropTypes.array,
    searched: PropTypes.string,
    onOpenModal: PropTypes.func,
}