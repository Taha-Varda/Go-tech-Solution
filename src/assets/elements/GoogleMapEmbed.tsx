import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464396.2394777667!2d73.704159!3d24.585896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56328ea7ae9%3A0x96c8ebe38f579743!2sGo-Tech%20Solution%7C%20Software%20Development%20Company%20in%20Udaipur%2C%20IT%20Company%20in%20Udaipur!5e0!3m2!1sen!2sus!4v1746614645515!5m2!1sen!2sus" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Go-Tech Solution Location"
      />
    </div>
  );
};

export default GoogleMapEmbed;