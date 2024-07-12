import React from 'react';
import './About.css'; // Importing a CSS file for styling (optional)

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our DocHub</h1>
      <p>
        Welcome to DocHub! We are dedicated to providing comprehensive and compassionate care to all our patients. Our experienced team of healthcare professionals is here to ensure you receive the best medical services available.
      </p>
      <p>
        Our clinic offers a wide range of services including general check-ups, specialist consultations and more. We strive to create a welcoming and comfortable environment for everyone who walks through our doors.
      </p>
      <p>
        We believe in a patient-centered approach and work closely with you to address your individual health needs. Your well-being is our top priority.
      </p>
      <div className="team-section">
        <h2>Meet Our Doctors</h2>
        <div className="team-member ">
          <img  src="https://media.istockphoto.com/photos/portrait-of-a-doctor-smiling-picture-id488117766?k=6&m=488117766&s=612x612&w=0&h=VPPSKNtLjX5_0Okl2hbW7T0ZJwfkaE4GBP5-gXRG4Tw=" alt="Dr. John Doe" />
          <h3>Dr. John Doe</h3>
          <p>Chief Medical Officer</p>
        </div>
        <div className="team-member">
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt='Dr.Jain Smith' />
          <h3>Dr. Jane Smith</h3>
          <p>Cardiologist</p>
        </div>
        <div className="team-member">
          <img src="https://th.bing.com/th/id/OIP.WZuFeD-_Btx-rRmknaI_9AHaHa?w=180&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Dr. Emily Brown" />
          <h3>Dr. Emily Brown</h3>
          <p>Darmatologist</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default About;
