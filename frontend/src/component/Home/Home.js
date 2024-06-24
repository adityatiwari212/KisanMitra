// Home.js

import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Weather_Forecast">Weather Forecast</Link></li>
          {/* Add other navigation links here */}
    
        <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012">Government Schemes</a>
        
        <a href="http://127.0.0.1:5500/bootstrap-5.3.3-dist/statistics.html">Official Crop Info</a>

        </ul>
      </nav>
    </div>
  );
}

export default Home;
