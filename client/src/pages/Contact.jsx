import '../pagesCss/Contact.css';
function Contact() {
    return (  
        <div className="contact">
            <h3 className="contact__title">Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form action="" >
                <input className="contact__first-input" type="text" placeholder="Name" required name="Name"/>
                <input className="contact__input" type="text" placeholder="Email" required name="Email"/>
                <input className="contact__input" type="text" placeholder="Subject" required name="Subject"/>
                <input className="contact__input" type="text" placeholder="Comment" required name="Comment"/>
                <button className="contact__submit" type="submit">
                    <i className="contact__submit-content">SEND MESSAGE</i>
                </button>
            </form>
            <div className="contact__map">
                <img src="https://www.w3schools.com/w3images/map.jpg" alt="map" className="contact__map-img"/>
            </div>
        </div>
    );
}

export default Contact;