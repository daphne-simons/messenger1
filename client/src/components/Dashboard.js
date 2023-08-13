import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationsProvider'
import Header from './Header'


export default function Dashboard({ id }) {
	const { selectedConversation } = useConversations()

	return (
		<div className="dashboard">
			<div className="headContainer">
				<Header />
			</div>
			<div className="d-flex bg" style={{ height: '100vh' }}>
				<Sidebar id={id} />

				{selectedConversation && <OpenConversation />}
			</div>
		</div>
	)
}
