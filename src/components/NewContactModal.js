import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useRef } from 'react'

export default function NewContactModal({ closeModal }) {
	const idRef = useRef()
	const nameRef = useRef()
	function handleSubmit(e) {
		e.preventDefault()
	}

	return (
		<>
			<Modal.Header closeButton>Create Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Id</Form.Label>
						<Form.Control type="text" ref={idRef} required />
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" ref={nameRef} required />
					</Form.Group>
				</Form>
			</Modal.Body>
		</>
	)
}
