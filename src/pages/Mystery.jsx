import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title:"Dracula",
    author:"Bram Stoker",
    year:"1897",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018245-71EFaIUUbfL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/B08YQCPYY2"
    },
    {
    title:"My Annihilation",
    author:"Fuminori Nakamura",
    year:"2022",
    image:"https://m.media-amazon.com/images/I/718LmMSnH2L._AC_UF894,1000_QL80_.jpg",
    link:"https://www.amazon.co.uk/dp/1641292725"
    },
    {
    title:"The Silent Patient",
    author:"Alex Michaelides",
    year:"2021",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018391-91BbLCJOruL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.com/dp/125030170X"
    },
    {
    title:"The Little Death",
    author:"Michael Nava",
    year:"2001",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018438-31G0AMYPK9L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/1555836941"
    },
    {
    title:"Berkley Tourist Season",
    author:"Carl Hiaasen",
    year:"2016",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018490-813WHPxt3eL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/0399587144"
    },
    {
    title:"Rebecca",
    author:"Daphne Du Maurier",
    year:"1997",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018585-816JLxXG3YL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/0380730405"
    },
    {
    title:"The Dry",
    author:"Jane Harper",
    year:"2018",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018684-91q62eNpqGL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/1250105625"
    },
    {
    title:"The Decagon House Murders",
    author:"Yukito Ayatsuji",
    year:"2021",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018725-81N-xC3Se6L.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.com/dp/1782276343"
    },
    {
    title:"The Shadow of the Wind",
    author:"Carlos Ruiz Zafon",
    year:"1900",
    image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689018773-91fqdoW5QzL.jpg?crop=1xw:1xh;center,top&resize=980:*",
    link:"https://www.amazon.co.uk/dp/0143034901"
    },
    {
    title:"Angels & Demons",
    author:"Dan Brown",
    year:"2000",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696691404i/960.jpg",
    link:"https://www.amazon.com/Angels-Demons-Robert-Langdon-Brown/dp/1416524797"
    },
]

const Mystery = () => {
    return (
      <div className="mystery-page">
        <Header />
        <h2>Mystery</h2>
        <div className="main-content">
          <Sidebar />
          <div className="books-content">
            {books.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Mystery;