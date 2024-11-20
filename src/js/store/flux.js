const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			createAgenda: () => {

				fetch("https://playground.4geeks.com/contact/agendas/pdavila", { method: "POST" }).then(response => response.json()).then(data => setStore({ "foo": data.bar }))

			},
			getAgendaContacts: () => {

				fetch("https://playground.4geeks.com/contact/agendas/pdavila/contacts").then(response => response.json()).then(data => setStore({ "contacts": data.contacts }))

			},
			createContacts: (newContact) => {
				fetch("https://playground.4geeks.com/contact/agendas/pdavila/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContact)
				})
					.then(response => response.json())
					.then(data => setStore({ "contacts": data.contacts }));
			},
			updateContacts: async (contactId, updatedContact) => {
				console.log(updatedContact)
				console.log(contactId)
				fetch(`https://playground.4geeks.com/contact/agendas/pdavila/contacts/${contactId}`, { 
					method: "PUT", 
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updatedContact)
				})
					.then(response => response.json())
					.then(data => setStore({ "contacts": data.contacts }));
			},
			
			deleteContacts: (contactId) => {
				fetch(`https://playground.4geeks.com/contact/agendas/pdavila/contacts/${contactId}`, {
					method: "DELETE",
				})
					.then(response => {
						if (response.ok) {
							const currentContacts = getStore().contacts;
							const updatedContacts = currentContacts.filter(contact => contact.id !== contactId);
							setStore({ contacts: updatedContacts });
						}
					})
					.catch(error => console.error("Error deleting contact:", error));
			}

		}
	};
};

export default getState;
