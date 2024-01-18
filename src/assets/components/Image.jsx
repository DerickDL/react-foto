import PropTypes from "prop-types";
import "./image.css";

export default function Image({ image, onOpenModal }) {
    const handleClickImage = () => {
        onOpenModal(image);
    }
    return (
        <>
            <img src={image.urls.small} alt={image.alt_description} className="img-fluid" onClick={handleClickImage}/>
        </>
    )
}

Image.propTypes = {
    image: PropTypes.object.isRequired,
    onOpenModal: PropTypes.func,
}