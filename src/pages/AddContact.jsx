import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addContact } from "../lib/fetch";

export const AddContact = () => {
    const [contactName, setContactName] = useState('');
    const [contactAddress, setContactAddress] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const {dispatch} = useGlobalReducer();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addContact(contactName, contactAddress, contactPhone, contactEmail, dispatch);
        setContactName('');
        setContactAddress('');
        setContactPhone('');
        setContactEmail('');
    };

    return(
        <>
            <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1 className="contact-header mx-auto">Add New Contact</h1>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row add-contact-row">
                <div className="col-2"></div>
                <div className="col-8">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="contactName"
                                className="form-label"
                            >Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactName"
                                value={contactName}
                                onChange={e => setContactName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contactAddress"
                                className="form-label"
                            >Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactAddress"
                                value={contactAddress}
                                onChange={e => setContactAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contactPhone"
                                className="form-label"
                            >Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="contactPhone"
                                value={contactPhone}
                                onChange={e => setContactPhone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contactEmail"
                                className="form-label"
                            >e-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="contactEmail"
                                value={contactEmail}
                                onChange={e => setContactEmail(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Submit</button>
                    </form>
                    <Link to="/" className="home-link">
                        Go back home
                    </Link>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
};