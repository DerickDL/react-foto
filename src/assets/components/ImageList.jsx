import PropTypes from "prop-types"
import Image from "./Image";
import "./image.css";

export default function ImageList({ images }) {
    console.log(images)
    const renderedImages = images.map((image) => {
        return (
            <div className="masonry-item" key={image.id}>
                <Image image={image}/>
            </div>
        );
    })
    return (
        <>
            <div className="container">
                <div className="masonry-container">
                    {renderedImages}
                </div>
            </div>
        </>
    )
}

ImageList.propTypes = {
    images: PropTypes.array,
}