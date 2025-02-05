import React from 'react';  // Just React is necessary for JSX
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Home.css';  // Correct the path if needed

const Home = () => {
  return (
    <div>
      <Header />

      <div className="image-container">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
          alt="Books"
          className="shrink-image"
        />
      </div>

      <div className="image-right">
        <img
          src="https://scontent.ftgm1-1.fna.fbcdn.net/v/t39.30808-6/457882146_2215250642169098_1143212147214810848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=50QMDSdNCRcQ7kNvgEAQ6f7&_nc_ht=scontent.ftgm1-1.fna&oh=00_AYDoBj2zhSnjtdTedLn2lX299YcIsBk8sJISZ0qMyLF1Kw&oe=66DBAFA1"
          alt="Unsure what book you want to read?"
          className="shrink-image"
        />
      </div>

      <div className="centered-text">
        <p>
          Imagine you want a book to read, but you're unsure which one to start with. We recommend checking
          out what we have to offer!
        </p>
      </div>

      <div className="banner">
        <Sidebar /> 

        <div className="content">
          {/* Example book content here */}
        </div>
      </div>

      <Footer /> 
    </div>
  );
};

export default Home;


