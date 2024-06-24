import React from 'react';
import './loan.css';

const Loan = () => {
  // List of loan facilities with their corresponding URLs
  const loanFacilities = [
    { name: 'CROP LOAN - SBI', url: 'https://www.bing.com/ck/a?!&&p=0196e9819bd55918JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTIyMQ&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly9zYmkuY28uaW4vd2ViL2FncmktcnVyYWwvYWdyaWN1bHR1cmUtYmFua2luZy9jcm9wLWxvYW4&ntb=1' },
    { name: 'GOLD LOAN FOR AGRI', url: 'https://www.bing.com/aclk?ld=e8Idovvf5NHnkoSS5BlNbp9DVUCUwp5sgFOwerfmihX51CjvmJ9kLHCIhldgOl66zw9UTQiHoW9xTmHq_Wr_DonyWjgsW2-vffajepSW49sFTZOAN5FGywvT-scMaxkHRidNkHGJDK6gh-ccVQDHBqajqWuSkFpuhXM-pcYX0_hP9QldALeWnUTEvL0vsqjVPW--Af2g&u=aHR0cHMlM2ElMmYlMmZ3d3cuYmFqYWpmaW5zZXJ2LmluJTJmZ29sZC1sb2FuJTNmdXRtX3NvdXJjZSUzZGJpbmdzZWFyY2hfbWt0ZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RkcHBtX3JnbF9vYl9wdF9iaW5nX2JnbF9iaW5nX2xlYWRfY29yZV9hZ3JpY3VsdHVyZV9lbV9wbV9hbGxfY2l0aWVzX2FsbF9ub3YyMyUyNnV0bV9jb250ZW50JTNkQWdyaWN1bHR1cmVfZ29sZF9sb2FuX0Jyb2FkJTI2dXRtX3Rlcm0lM2Rnb2xkJTI1MjBsb2FuJTI1MjBmYXJtZXJzJTI1MjBpbnRlcmVzdCUyNTIwcmF0ZSUyNm1zY2xraWQlM2Q2ZmE2MWI1ODI5NDkxNjc0ZjQ1YTdkNjk3OThlZjFjNA&rlid=6fa61b5829491674f45a7d69798ef1c4&ntb=1' },
    { name: 'UNION BANK OF INDIA', url: 'https://www.bing.com/ck/a?!&&p=295a1e3b14b2fbc2JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTI5NQ&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cudW5pb25iYW5rb2ZpbmRpYS5jby5pbi9lbmdsaXNoL2FncmljdWx0dXJlLWxvYW4uYXNweA&ntb=1' },
    { name: 'PUNJAB NATIONAL BANK', url: 'https://www.bing.com/ck/a?!&&p=2b4b74d520023675JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTMxOQ&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cucG5iaW5kaWEuaW4vYWdyaWN1bHR1cmUtY3JlZGl0LXNjaGVtZXMuSFRNTA&ntb=1' },
    { name: 'ICICI BANK', url: 'https://www.bing.com/ck/a?!&&p=6d6d80fc14e9c7c0JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTM0MQ&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cuaWNpY2liYW5rLmNvbS9ydXJhbC9sb2Fucy9mYXJtZXItZmluYW5jZQ&ntb=1' },
    { name: 'ALSO READ - ', url: 'https://www.bing.com/ck/a?!&&p=807f5ea2bb1e2fdfJmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTI1Mg&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cuYWdyaWZhcm1pbmcuaW4vYWdyaWN1bHR1cmUtbG9hbnMtZmFybWVycy1pbmRpYQ&ntb=1' },
    { name: 'ALSO READ- PM KISAN SAMMAN NIDHI', url: 'https://www.bing.com/ck/a?!&&p=8a8ca5fa0f1bffa3JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTM2Mw&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cubXlzY2hlbWUuZ292LmluL3NjaGVtZXMvcG0ta2lzYW4&ntb=1' },
    { name: 'ALSO READ - NABARD LOANS', url: 'https://www.bing.com/ck/a?!&&p=5a39359d07f5c0d3JmltdHM9MTcxNDQzNTIwMCZpZ3VpZD0wNTFjMzcyNy02YTc1LTYwYTktMGUyNS0yNWExNmIxZTYxMTkmaW5zaWQ9NTI3NQ&ptn=3&ver=2&hsh=3&fclid=051c3727-6a75-60a9-0e25-25a16b1e6119&psq=loan+for+farmers+website&u=a1aHR0cHM6Ly93d3cubmFiYXJkLm9yZy8&ntb=1' },
    // { name: 'Facility 9', url: 'https://example.com/facility9' },
    // { name: 'Facility 10', url: 'https://example.com/facility10' },
  ];

  return (
    <div className="loan-facilities-page">
      <h1>Loan Facilities</h1>
      <div className="loan-facilities-list">
        {loanFacilities.map((facility, index) => (
          <div key={index} className="loan-facility-item">
            <div className="facility-info">
              <h2>{facility.name}</h2>
            </div>
            <div className="visit-button">
              <a href={facility.url} target="_blank" rel="noopener noreferrer">
                <button>Visit</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan;
