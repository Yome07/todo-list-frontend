/**
 * Composant de formulaire de contact.
 *
 * Permet à l'utilisateur d'envoyer un message avec son nom,
 * son adresse e-mail et son message.
 *
 * @returns {JSX.Element} Le formulaire de contact.
 */
import { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Message de contact envoyé :', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="card shadow-sm mt-4">
            <div className="card-body">
                <h3 className="mb-3">Contact</h3>

                <form onSubmit={handleSubmit} netlify>
                    <div className="mb-3">
                        <label htmlFor="contact-name" className="form-label">Nom</label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact-email" className="form-label">Adresse e-mail</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Votre adresse e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact-message" className="form-label">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="Écrivez votre message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button label="Envoyer" type="submit" />

                    {submitted && (
                        <p className="text-success mt-3 mb-0">
                            Votre message a bien été envoyé.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
