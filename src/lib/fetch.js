
export const fetchAllContacts = async(dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/jeremyk')
        try{
            if(!response.ok){
                throw new Error(response.status);
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
        }
}
export const addcontact = async(name, address, phone, email, dispatch) => {
    const newContact = {
        name: name,
        address: address,
        phone: phone,
        email: email,
    }

    const options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newContact),
    }
    const response = await fetch ('https://playground.4geeks.com/contact/agendas/jeremyk/contacts', options);

    try{
            if(!response.ok){
                throw new Error(response.status);
            }
            const data = await response.json();
            dispatch({
                type: 'createdContact',
                payload: newContact,
            });
            return data;
        }
        catch (error) {
            console.error("Error creating new contact in agenda.", error);
        }
}
export const updateContact = async() => {}

export const deleteContact = async() => {}