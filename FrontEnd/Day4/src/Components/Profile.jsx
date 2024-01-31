import React, { useState } from 'react';
import '../css/Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    bio: 'Web Developer',
    education: 'Bachelor of Science in Computer Science',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    // Add more profile information as needed
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{user.name}</h1>
        <p>@{user.username}</p>
      </div>

      <div className="profile-details">
        <div className="profile-section">
          <h2>Contact Information</h2>
          <p>Email: {user.email}</p>
        </div>

        <div className="profile-section">
          <h2>About Me</h2>
          <p>{user.bio}</p>
        </div>

        <div className="profile-section">
          <h2>Education</h2>
          <p>{user.education}</p>
        </div>

        <div className="profile-section">
          <h2>Skills</h2>
          <ul>
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Profile;
