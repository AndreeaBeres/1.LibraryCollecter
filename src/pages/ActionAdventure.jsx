import React from 'react';
import Header from '../components/Header'; // Adjust the path if needed
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
  {
  title: "Jurassic Park",
  author: "Michael Crichton",
  year: "1990",
  image: "https://m.media-amazon.com/images/I/61+bmMAjnXL._AC_UF1000,1000_QL80_.jpg",
  link: "https://www.amazon.com/gp/product/B007UH4D3G?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks"
  },
  {
  title: "The Hobbit",
  author: "J. R. R. Tolkien",
  year: "1937",
  image: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg",
  link: "https://www.amazon.com/Hobbit-Graphic-J-R-Tolkien-ebook/dp/B0CKT929N4/"
  },
  {
  title: "The Hunger Games",
  author: "Suzanne Collins",
  year: "2008",
  image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg",
  link: "https://www.amazon.com/Hunger-Games-Book-1/dp/0439023521/"
  },
  {
  title: "The Fellowship of the Ring",
  author: "J.R.R. Tolkien",
  year: "1954",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1298411339i/34.jpg",
  link: "https://www.amazon.com/Fellowship-Ring-Being-First-Rings/dp/0547928211"
  },
  {
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year: "2003",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720313229i/968.jpg",
  link: "https://www.amazon.com/Vinci-Code-Dan-Brown/dp/0385504209"
  },
  {
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  year: "2005",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684638853i/2429135.jpg",
  link: "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium/dp/0307949486"
  },
  {
  title: "The Bourne Identity",
  author: "Robert Ludlum",
  year: "1980",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1335860740i/7869.jpg",
  link: "https://www.amazon.com/Bourne-Identity-Novel-Jason/dp/0553593544"
  },
  {
  title: "The Hunt for Red October",
  author: "Tom Clancy",
  year: "2003",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1281995542i/19691.jpg",
  link: "https://www.amazon.com/Hunt-October-Jack-Ryan-Novel/dp/0425240339"
  },
  {
  title: "The Count of Monte Cristo",
  author: "Alexandre Dumas",
  year: "1844",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724863997i/7126.jpg",
  link: "https://www.amazon.com/Count-Monte-Cristo-Penguin-Classics/dp/0140449264"
  },
  {
  title: "The Return of the King",
  author: "J.R.R. Tolkien",
  year: "1955",
  image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1520258755i/18512.jpg",
  link: "https://www.amazon.com/Return-King-Lord-Rings-Paperback/dp/0007488351"
  },
];

const ActionAdventure = () => {
  return (
    <div className="action-adventure-page">
      <Header />
      <h2>Action + Adventure</h2>
      <div className="main-content">
        <Sidebar />
        <div className="book-content">
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActionAdventure;