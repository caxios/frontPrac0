import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { useState } from "react"

const ModalComponent = ({text, variant})=>{
    
    const [show, setShow] = useState(false)

    const handleShow = ()=>{setShow(true)}
    const handleClose = ()=>{setShow(false)}
    return(
        <>
            <Button onClick={handleShow} varaint={variant}>{text}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl type="email"/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <FormControl type="password"/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger">
                        {text}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent