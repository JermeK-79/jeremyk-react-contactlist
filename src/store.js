export const initialStore = () => {
  return {
    message: null,
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type) {
    case 'fetchedContacts':
      {
        const contactList = action.payload;

        return {
          ...store, 
          contacts: [...contactList],
        }
      }
    case 'createdContact':
      {
        const newContact = action.payload;

        return {
          ...store,
          contacts: [...store.contacts, newContact],
        }
      }
    case 'updatedContact':
      {
        const updatedContact = action.payload;
        
        return {
          ...store,
          contacts: store.contacts.map(contact => 
            contact.id === updatedContact.id ? updatedContact : contact
          )
        }
      }
    case 'deletedContact':
      {
        const deletedId = action.payload;
        
        return {
          ...store,
          contacts: store.contacts.filter(contact => contact.id !== deletedId)
        }
      }
    default:
      throw Error('Unknown action.');  
  }
}