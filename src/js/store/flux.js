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
			updateContacts: (contactId) => {

				fetch("https://playground.4geeks.com/contact/agendas/pdavila/contacts/" + contactId, { method: "PUT" }).then(response => response.json()).then(data => setStore({ "contacts": data.contacts }))

			},
			deleteContacts: (contactId) => {

				fetch("https://playground.4geeks.com/contact/agendas/pdavila/contacts/" + contactId, { method: "DELETE" }).then(response => response.json()).then(data => setStore({ "contacts": data.contacts }))

			},

		}
	};
};

export default getState;
