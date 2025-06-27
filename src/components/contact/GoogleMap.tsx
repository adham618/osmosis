export default function GoogleMap() {
  return (
    <section className="google_map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13315.084603408723!2d-112.07956783953559!3d33.45020843513247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1218b24a25b7%3A0x7a191e4edb89e51c!2sDowntown%20Phoenix%2C%20Phoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1710701169813!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Downtown Phoenix, AZ"
      ></iframe>
    </section>
  )
}
