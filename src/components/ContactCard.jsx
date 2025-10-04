
export const ContactCard = ({name, address, phone, email}) => {

    return(
        <>
        <img className="card-image" src="https://avatar.iran.liara.run/public/boy" alt="avatar "/>
        <div className="contact-card-info">
            <h2>{name}</h2>
            <h4>{address}</h4>
            <h4>{phone}</h4>
            <h4>{email}</h4>
        </div>
        Contact Card
        </>
    );
};