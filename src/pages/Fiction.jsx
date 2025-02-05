import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    year:"1960",
    image:"https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/dp/B00K0OI42W?_bbid=229990637&tag=blogpagesite-20",
    },
    {
    title:"Pride and Prejudice",
    author:"Jane Austen",
    year:"1813",
    image:"https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    link:"https://www.amazon.com/dp/B00GKMNC5W/?_bbid&tag=blogpagesite-20",
    },
    {
    title:"1984",
    author:"George Orwell",
    year:"1949",
    image:"https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/1984-ebook/dp/B003JTHWKU/?_bbid=229844930&tag=blogpagesite-20",
    },
    {
    title:"A Tree Grows in Brooklyn",
    author:"Betty Smith",
    year:"1940",
    image:"https://cdn.dc5.ro/img-prod/157415-1897774.jpeg",
    link:"https://www.amazon.com/Tree-Grows-Brooklyn-P-S-ebook/dp/B000FCK65W/?_bbid=229707613&tag=blogpagesite-20",
    },
    {
    title:"The Book Thief",
    author:"Markus Zusak",
    year:"2005",
    image:"https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/dp/B000XUBFE2?_bbid=203671650&tag=blogpagesite-20",
    },
    {
    title:"Brave New World",
    author:"Aldous Huxley",
    year:"2005",
    image:"https://thediscerningwriter.wordpress.com/wp-content/uploads/2016/04/brave-new-world.jpg",
    link:"https://www.amazon.com/dp/B0B5WPTKGZ?_bbid=180711843&tag=blogpagesite-20",
    },
    {
    title:"The Underground Railroad",
    author:"Colson Whitehead",
    year:"2016",
    image:"https://m.media-amazon.com/images/I/91ikNi3cYUL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/dp/B01A4ATV0A?_bbid=230490657&tag=blogpagesite-20",
    },
    {
    title:"Beloved",
    author:"Toni Morrison",
    year:"1987",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1722944318i/6149.jpg",
    link:"https://www.amazon.com/dp/B000TWUTYG?_bbid=222455644&tag=blogpagesite-20",
    },
    {
    title:"All the Light We Cannot See",
    author:"Anthony Doerr",
    year:"2014",
    image:"https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/dp/B00DPM7TIG?_bbid=209788106&tag=blogpagesite-20",
    },
    {
    title:"Catch-22",
    author:"Joseph Heller",
    year:"1961",
    image:"https://cdn2.penguin.com.au/covers/original/9781784875848.jpg",
    link:"https://www.amazon.com/dp/B0048WQDIE?_bbid=205485419&tag=blogpagesite-20",
    },
]

const Fiction = () => {
    console.log(books); 
    return (
      <div className="fiction-page">
        <Header />
        <h2>Fiction</h2>
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
  
  export default Fiction;