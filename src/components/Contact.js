import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="avatar"/>
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{props.online ? "online" : "offline"}</p>
                </div>
            </div>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;