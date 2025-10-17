
export const fetchAllContacts = async(dispatch) => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/jeremyk');
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        dispatch({
            type: 'fetchedContacts',
            payload: data.contacts,
        });
        return data;
    }
    catch (error) {
        console.error("Error getting agenda. Check if URL is correct or if agenda exists.", error);
        dispatch({
            type: 'fetchError',
            payload: error.message,
        });
        return null;
    }
}

export const addContact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }
    
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
    }
    
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/jeremyk/contacts', options);
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        dispatch({
            type: 'createdContact',
            payload: data, // Use the data from API which includes the ID
        });
        return data;
    }
    catch (error) {
        console.error("Error creating new contact in agenda.", error);
        dispatch({
            type: 'createError',
            payload: error.message,
        });
        return null;
    }
}

export const updateContact = async(id, name, address, phone, email, dispatch) => {
    const updatedContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }
    
    const options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedContact),
    }
    
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/jeremyk/contacts/${id}`, options);
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        dispatch({
            type: 'updatedContact',
            payload: data,
        });
        return data;
    }
    catch (error) {
        console.error("Error updating contact.", error);
        dispatch({
            type: 'updateError',
            payload: error.message,
        });
        return null;
    }
}

export const deleteContact = async(id, dispatch) => {
    const options = {
        method: "DELETE",
    }
    
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/jeremyk/contacts/${id}`, options);
        
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        dispatch({
            type: 'deletedContact',
            payload: id,
        });
        return true;
    }
    catch (error) {
        console.error("Error deleting contact.", error);
        dispatch({
            type: 'deleteError',
            payload: error.message,
        });
        return false;
    }
}