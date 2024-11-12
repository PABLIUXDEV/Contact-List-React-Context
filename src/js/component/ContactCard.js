import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ContactCard = ({contact}) => (
    <div className="mastercontainer">
        <div >
            <img className="profile" src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-gerente-oficina-mujer-profesional-sonriente-ceo-empresa-comercio-electronico-mirando-camara-complacida-fondo-blanco_1258-59171.jpg?t=st=1731376116~exp=1731379716~hmac=5eaa31e0301d2afa4701cc497f0806cc271eddf279ee845f3adf6c9bc05471a3&w=1800" />
        </div>
        <div className="information">
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
       
    </div>
);