import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title: "We Have Always Lived in the Castle",
    author: "Shirley Jackson",
    year: "1962",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704229774i/89724.jpg",
    link: "https://www.amazon.com/Always-Castle-Penguin-Classics-Deluxe/dp/0143039970"
    },
    {
    title:"The Haunting of Hill House",
    author:"Shirley Jackson",
    year:"1959",
    image:"https://m.media-amazon.com/images/I/81-PKwy-mPL._AC_UF894,1000_QL80_.jpg",
    link:"https://www.amazon.de/-/en/Shirley-Jackson/dp/0141191449"
    },
    {
    title:"Let the Right One In",
    author:"John Ajvide Lindqvist",
    year:"2004",
    image:"https://m.media-amazon.com/images/I/71I6e5W0FwL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Let-Right-John-Ajvide-Lindqvist/dp/1250902967"
    },
    {
    title:"The Case Against Satan",
    author:"Ray Russell",
    year:"1962",
    image:"https://m.media-amazon.com/images/I/81MP9o7R8JL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.in/Case-Against-Satan-Ray-Russell/dp/0722175450"
    },
    {
    title:"The Night Eaters: She Eats the Night",
    author:"Marjorie Liu, Sana Takeda",
    year:"2022",
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1648298438l/60656255.jpg",
    link:"https://www.amazon.com/Night-Eaters-She-Eats-Book/dp/1419758705"
    },
    {
    title:"Nothing But Blackened Teeth",
    author:"Cassandra Khaw",
    year:"2021",
    image:"https://m.media-amazon.com/images/I/81qTEifgmDL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Nothing-Blackened-Teeth-Cassandra-Khaw/dp/1789098572"
    },
    {
    title:"Road of Bones",
    author:"Christopher Golden",
    year:"2022",
    image:"https://m.media-amazon.com/images/I/A1FoBRdtguS._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Road-Bones-Novel-Christopher-Golden/dp/1250274303"
    },
    {
    title:"The Only Good Indians",
    author:"Stephen Graham Jones",
    year:"2020",
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1601545259i/52180399.jpg",
    link:"https://www.amazon.co.uk/Only-Indians-Stephen-Graham-Jones/dp/1789095298"
    },
    {
    title:"Doing Harm",
    author:"Kelly Parsons",
    year:"2014",
    image:"https://m.media-amazon.com/images/I/81TsOo4H9zL._AC_UF350,350_QL50_.jpg",
    link:"https://www.amazon.com/Doing-Harm-Medicine-Dismissed-Misdiagnosed/dp/0062470809"
    },
    {
    title:"The Ruins",
    author:"Scott Smith",
    year:"2006",
    image:"https://m.media-amazon.com/images/I/81oNmUkGJuL._AC_UF1000,1000_QL80_.jpg",
    link:"https://www.amazon.com/Ruins-Scott-Smith/dp/0307390276"
    }
];

    const Horror = () => {
        return (
          <div className="horror-page">
            <Header />
            <h2>Horror</h2>
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
      
      export default Horror;