import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title:"Pride and Prejudice",
    author:"Jane Austen",
    year:"1813",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    link:"https://www.amazon.com/Pride-Prejudice-Jane-Austen-ebook/dp/B0DBHBBDVW/",
    },
    {
    title:"Outlander",
    author:"Diana Gabaldon",
    year:"1991",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659086907i/10964.jpg",
    link:"https://www.amazon.com/Outlander-Novel-Book-1-ebook/dp/B000FC2L1O",
    },
    {
    title:"Jane Eyre",
    author:"Charlotte Bronte",
    year:"1847",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    link:"https://www.amazon.com/Jane-Eyre-Original-Unabridged-Charlotte-ebook/dp/B0CG49PH6D/",
    },
    {
    title:"Gone with the Wind",
    author:"Margaret Mitchell",
    year:"1936",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551144577i/18405.jpg",
    link:"https://www.amazon.com/Gone-Wind-Margaret-Mitchell-ebook/dp/B0D83PN8WQ",
    },
    {
    title:"Sense and Sensibility",
    author:"Jane Austen",
    year:"1811",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1397245675i/14935.jpg",
    link:"https://www.amazon.com/Sense-Sensibility-Jane-Austen-ebook/dp/B07MWB9T94",
    },
    {
    title:"The Notebook",
    author:"Nicholas Sparks",
    year:"1996",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385738917i/15931.jpg",
    link:"https://www.amazon.co.uk/Notebook-Nicholas-Sparks/dp/07515404711",
    },
    {
    title:"Persuasion",
    author:"Jane Austen",
    year:"1817",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385172413i/2156.jpg",
    link:"https://www.amazon.com/Persuasion-Jane-Austen/dp/150329031X",
    },
    {
    title:"Dragonfly in Amber",
    author:"Diana Gabaldon",
    year:"1992",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456114344i/5364.jpg",
    link:"https://www.amazon.com/Dragonfly-Amber-25th-Anniversary-Outlander/dp/1524796883",
    },
    {
    title:"Voyager",
    author:"Diana Gabaldon",
    year:"1993",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483278195i/10987.jpg",
    link:"https://www.amazon.com/Voyager-25th-Anniversary-Novel-Outlander/dp/1984818228",
    },
    {
    title:"Taming Flame",
    author:"Therisa Peimer",
    year:"2022",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658244114i/61608233.jpg",
    link:"https://www.amazon.com/Taming-Flame-Romance-Therisa-Peimer-ebook/dp/B0B7B76FWB",
    },
]

const Romance = () => {
    return (
      <div className="romance-page">
        <Header />
        <h2>Romance</h2>
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
  
  export default Romance;