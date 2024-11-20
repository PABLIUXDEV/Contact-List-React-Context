import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ContactCard = ({contact}) => {
    const { actions } = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        actions.deleteContacts(contact.id);
        setShowModal(false);
        console.log(handleConfirmDelete)
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
    <div className="mastercontainer">
        <div >
            <img className="profile" src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-gerente-oficina-mujer-profesional-sonriente-ceo-empresa-comercio-electronico-mirando-camara-complacida-fondo-blanco_1258-59171.jpg?t=st=1731376116~exp=1731379716~hmac=5eaa31e0301d2afa4701cc497f0806cc271eddf279ee845f3adf6c9bc05471a3&w=1800" />
        </div>
        <div >
            <div className="information">
                <p>{contact.name}</p>
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            <div >
                <Link to={`/edit-contact/${contact.id}`}>
                <button className="btn btn-success">EditContact</button>
                </Link>
                <span onClick={handleDeleteClick}>
    
                <button className="btn btn-danger mx-2">Delete Contact</button>
                </span>
            </div>
            </div>
        </div>
       {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h4>Are you sure you want to delete this contact?</h4>
                        <div className="modalButtons">
                            <button className="btn btn-success" onClick={handleConfirmDelete}>Yes, Delete</button>
                            <button className="btn btn-danger" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
    </div>
    );
};