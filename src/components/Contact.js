import React from 'react';
import './Contact.css'

function Contact() {
    const srcAvatar = "https://randomuser.me/api/portraits/men/81.jpg";
    const name = "Aaron Peck";
    const online = true;

    return (
        <div className="Contact">
            <img className="avatar" src={srcAvatar} alt="avatar"></img>
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">{online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;