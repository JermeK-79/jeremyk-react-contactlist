import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { fetchAllContacts } from "../lib/fetch";

export const Contact = () => {
    const {store, dispatch} = useGlobalReducer();
    
    useEffect(() => {
        fetchAllContacts(dispatch);
    }, [dispatch]);
    
    return(
        <>
            <div className="container">
            {
                !store || !store.contacts || store.contacts.length === 0
                ?
                <h1>Loading...</h1>
                :
                store.contacts.map(contact => {
                    return(
                        <div className="card d-inline-flex flex-row" key={contact.id}>
                            <ContactCard 
                                name={contact.name}
                                address={contact.address}
                                phone={contact.phone}
                                email={contact.email} 
                            />
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
            </div>
        </>
    );
};