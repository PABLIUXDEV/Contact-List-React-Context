import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getAgendaContacts() }, [])


	return (
		<div className="text-center mt-5 background">
			<div>
				<h1>Welcome to your contact list!</h1>
				



				{Array.isArray(store.contacts) && store.contacts.map((singleContact, index) => (
					<ContactCard contact={singleContact} key={index} />
				))}
			</div>
				
				<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-success me-5">Add new contact</button>
				</Link>
				</div>

		</div>
	)
};