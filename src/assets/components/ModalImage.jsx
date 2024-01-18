import { useEffect, useState } from 'react';
import {
    Modal,
    Button,
    Image,
    Col,
    Row,
    Container,
    ButtonGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import PropTypes from "prop-types";

export default function ModalImage({ image, show, onCloseModal }) {
    const [dropdownDirection, setDropdownDirection] = useState('down');

    const handleClose = (e) => {
        onCloseModal();
    }

    const onToggleDropdown = (e) => {
        setDropdownDirection(prev => prev === 'down' ? 'up' : 'down');
    }

    function downloadImageUsingFetch(imageUrl, fileName) {
        fetch(imageUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          })
          .catch(error => console.error('Error downloading image:', error));
      }

    const onDownload = (e) => {
        const selectedSize = e.target.value;
        console.log(image.urls[selectedSize]);
        downloadImageUsingFetch(image.urls[selectedSize], `${image.slug}-${selectedSize}.jpg`);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    <Container className="p-4">
                        <Row className="text-end pb-5">
                            <Col>
                                <p className='text-start'>{image.description}</p>
                            </Col>  
                            <Col>
                                <ButtonGroup>
                                    <Button variant="outline-dark" size="sm" className='text-end' value="raw" onClick={onDownload}>Download</Button>
                                    <DropdownButton variant="outline-dark" title="" as={ButtonGroup} id="bg-nested-dropdown" autoClose={false} drop={dropdownDirection} onToggle={onToggleDropdown}>
                                        <Dropdown.Item value="raw" as="button" onClick={onDownload}>Raw</Dropdown.Item>
                                        <Dropdown.Item value="full" as="button" onClick={onDownload}>Full</Dropdown.Item>
                                        <Dropdown.Item value="regular" as="button" onClick={onDownload}>Regular</Dropdown.Item>
                                        <Dropdown.Item value="small" as="button" onClick={onDownload}>Small</Dropdown.Item>
                                        <Dropdown.Item value="thumb" as="button" onClick={onDownload}>Thumb</Dropdown.Item>
                                </DropdownButton>
                                </ButtonGroup>
                            </Col>  
                        </Row>

                        <Row className="justify-content-center">
                            <Image 
                                src={image.urls.full}  
                                // style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                // style={{backkgroundPosition: 'center', backgroundSize: 'cover'}}
                                style={{ height: '500px', width: 'auto', maxWidth: '100%' }}
                                alt={image.alt_description}
                                fluid
                            />
                        </Row>
                        
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )

    
}

ModalImage.propTypes = {
    image: PropTypes.object,
    show: PropTypes.bool,
    onCloseModal: PropTypes.func
}