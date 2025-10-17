import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { fetchAllContacts, deleteContact } from "../lib/fetch";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer();
    const [deletingId, setDeletingId] = useState(null);
    
    useEffect(() => {
        fetchAllContacts(dispatch);
    }, [dispatch]);
    
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this contact?')) {
            return;
        }
        
        setDeletingId(id);
        const success = await deleteContact(id, dispatch);
        setDeletingId(null);
        
        if (success) {
            console.log('Contact deleted successfully');
        }
    };
    
    // Loading state
    if (!store || !store.contacts || store.contacts.length === 0) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }
    
    // Contacts list (simple version matching your structure)
    return (
        <div className="container">
            {store.contacts.map(contact => (
                <div className="card d-inline-flex flex-row" key={contact.id}>
                    <ContactCard 
                        name={contact.name}
                        address={contact.address}
                        phone={contact.phone}
                        email={contact.email} 
                    />
                    <div className="btn-group">
                        <Link 
                            to={`/edit-contact/${contact.id}`}
                            className="btn btn-outline-primary"
                        >
                            <i className="fas fa-edit"></i> Edit
                        </Link>
                        <button 
                            className="btn btn-outline-danger"
                            onClick={() => handleDelete(contact.id)}
                            disabled={deletingId === contact.id}
                        >
                            {deletingId === contact.id ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-1"></span>
                                    Deleting...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-trash"></i> Delete
                                </>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};