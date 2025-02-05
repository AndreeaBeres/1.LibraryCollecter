import React from 'react';
import Header from '../components/Header'; 
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Book from '../components/Book';
import '../ActionAdventure.css';

const books = [
    {
    title: "Piranesi",
    author: "Susanna Clarke",
    year: "2021",
    image: "https://cdn4.libris.ro/img/pozeprod/25464/25463214-1.jpg",
    link: "https://www.goodreads.com/book/show/50202953-piranesi"
    },
    {
    title: "Six of Crows",
    author: "Leigh Bardugo",
    year: "2015",
    image: "https://images.gr-assets.com/books/1459349344l/23437156.jpg",
    link: "https://www.amazon.co.uk/Six-Crows-Book-Leigh-Bardugo/dp/1780622287"
    },
    {
    title: "Stardust",
    author: "Neil Gaiman",
    year: "2010",
    image: "https://cdn.kobo.com/book-images/007796fc-ce7e-4c4b-8744-0e9158e8f76e/1200/1200/False/stardust-4.jpg",
    link: "https://www.amazon.ca/Stardust-Neil-Gaiman-ebook/dp/B000FC13Y0"
    },
    {
    title: "Jade City",
    author: "Fonda Lee",
    year: "2010",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547625704i/43587154.jpg",
    link: "https://www.amazon.com/Jade-City-Green-Bone-Saga/dp/0316440884"
    },
    {
    title: "The Last Unicorn",
    author: "Peter S. Beagle",
    year: "2010",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524764327i/29127.jpg",
    link: "https://www.amazon.com/Last-Unicorn-Peter-S-Beagle/dp/0345228928"
    },
    {
    title: "Who Fears Death",
    author: "Nnedi Okorafor",
    year: "2018",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348469489i/7767021.jpg",
    link: "https://www.amazon.com/Who-Fears-Death-Nnedi-Okorafor/dp/0756407281"
    },
    {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    year: "2020",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620324329i/50659467.jpg",
    link: "https://www.amazon.co.uk/Court-Thorns-Roses-Sarah-Maas/dp/1408857863"
    },
    {
    title: "The Power",
    author: "Naomi Alderman",
    year: "2017",
    image: "https://i1.books-express.ro/be/9780670919963/the-power.jpg",
    link: "https://www.amazon.com/Power-Naomi-Alderman/dp/0316547611"
    },
    {
    title: "The Fifth Season",
    author: "N. K. Jemisin",
    year: "2016",
    image: "https://upload.wikimedia.org/wikipedia/en/0/01/The_Fifth_Season_%28novel%29.jpg",
    link: "https://www.amazon.com/Fifth-Season-Broken-Earth-Book-ebook/dp/B00H25FCSQ"
    },
    {
    title: "Kindred",
    author: "Octavia E. Butler",
    year: "2018",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339423248i/60931.jpg",
    link: "https://www.amazon.com/Kindred-Graphic-Adaptation-Damian-Duffy/dp/141970947X"
    },
];

const Fantasy = () => {
    return (
      <div className="fantasy-page">
        <Header />
        <h2>Fantasy</h2>
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
  
  export default Fantasy;