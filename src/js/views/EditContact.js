import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
    const { idcontact } = useParams();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const params = useParams()
	// console.log(params)
	console.log(idcontact)
	useEffect(() => {
        const contact = store.contacts?.find(contact => contact.id === parseInt(idcontact)); 
        if (contact) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    }, [idcontact, store.contacts]);


	const handleSubmit = () => {
		const updateContact = { name, email, phone, address };
		actions.updateContacts(idcontact, updateContact)
		actions.createContacts(idcontact);
	};


	return (
		<div className="container">
			<h1 className="d-flex justify-content-center align-items-center">Edit your contact</h1>
			<div class="mb-3">
				<label for="nameUser" class="form-label">Full Name</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="nameUser" aria-describedby="nameHelp" placeholder="Full Name" />
			</div>
			<div class="mb-3">
				<label for="Email"  class="form-label">Email</label>
				<input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="Email" aria-describedby="emailHelp" placeholder="Enter Email" />
			</div>
			<div class="mb-3">
				<label for="Phone" class="form-label">Phone</label>
				<input type="text" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id="Phone" aria-describedby="phoneHelp" placeholder="Enter Phone" />
			</div>
			<div class="mb-3">
				<label for="address" class="form-label">Address</label>
				<input type="text" class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="address" aria-describedby="addressHelp" placeholder="Enter address" />
			</div>

			<br />
			<div class="mb-3 align-items-center justify-content-center">

				<button className="d-block p-2 btn btn-primary w-100" onClick={handleSubmit}>Save</button>

			</div>
			<div class="mb-3">
				<Link to="/">
					or get back to contact
				</Link>
			</div>
		</div>
	);
};