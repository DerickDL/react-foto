import PropTypes from "prop-types";

export default function Image({ image }) {
    return (
        <>
            <img src={image.urls.small} alt={image.alt_description} />
        </>
    )
}

Image.propTypes = {
    image: PropTypes.object.isRequired,
}