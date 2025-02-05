import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title:"Stay Awake",
    author:"2022",
    year:"Megan Goldin",
    image:"https://m.media-amazon.com/images/I/81HaJ8ADATL._AC_UF894,1000_QL80_.jpg",
    link:"https://www.amazon.co.uk/Stay-Awake-Megan-Goldin/dp/1250280664",
    },
    {
    title:"My Murder",
    author:"Katie Williams",
    year:"2023",
    image:"https://m.media-amazon.com/images/I/415wJHkqUfL._SY780_.jpg",
    link:"https://www.amazon.co.uk/My-Murder-Katie-Williams-ebook/dp/B0BBLT9QWF",
    },
    {
    title:"The Quiet Girl",
    author:"S.F. Kosa",
    year:"2004",
    image:"https://m.media-amazon.com/images/I/71gyHUKCLiL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Quiet-Girl-S-F-Kosa/dp/1728215560",
    },
    {
    title:"The Night Shift",
    author:"Alex Finlay",
    year:"2022",
    image:"https://m.media-amazon.com/images/I/81W35+Tj7dL.jpg",
    link:"https://www.amazon.de/Night-Shift-Alex-Finlay/dp/1250268885",
    },
    {
    title:"Hidden Pictures",
    author:"Jason Rekulak",
    year:"2022",
    image:"https://m.media-amazon.com/images/I/71XmCZw489L._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Hidden-Pictures/dp/0751583723",
    },
    {
    title:"When No One Is Watching",
    author:"Alyssa Cole",
    year:"2020",
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585146341l/49398072.jpg",
    link:"https://www.amazon.com/When-No-One-Watching-Thriller/dp/0062982656",
    },
    {
    title:"The Good Girl",
    author:"Mary Kubica",
    year:"2017",
    image:"https://m.media-amazon.com/images/I/81Wiq3QpLJL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Good-Girl-Mary-Kubica/dp/0778319253",
    },
    {
    title:"The Long Weekend",
    author:"Gilly MacMillan",
    year:"2022",
    image:"https://m.media-amazon.com/images/I/41ekaSSHF1L._SY780_.jpg",
    link:"https://www.amazon.co.uk/Long-Weekend-Gilly-Macmillan-ebook/dp/B098WMW5GD",
    },
    {
    title:"The Child",
    author:"Fiona Barton",
    year:"2017",
    image:"https://m.media-amazon.com/images/I/91XpNSqu-0L._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Child-Fiona-Barton/dp/0552172456",
    },
    {
    title:"In a Dark, Dark Wood",
    author:"Ruth Ware",
    year:"2016",
    image:"https://m.media-amazon.com/images/I/81G9RCABfKL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Dark-Wood-Ruth-Ware/dp/1501112333",
    },
]

const ThrillerSuspense = () => {
    return (
      <div className="thrillersuspense-page">
        <Header />
        <h2>Thriller + Suspense</h2>
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
  
  export default ThrillerSuspense;