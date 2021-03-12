import './App.css';
import React,{useState} from 'react';
const App=()=> {
  const database={
    programming: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      {
        name: "C++ Primer by Stanley B. Lippman, Josée Lajoie, and Barbara E",
        rating: "3.9/5"
      }
    ],
  
    fiction: [
      {
        name: "One Hundred Years of Solitude by Gabriel Garcia Marquez",
        rating: "4.5/5"
      },
      {
        name: "Great Expectations by Charles Dickens",
        rating: "4.5/5"
      },
      {
        name: "The Stranger by Albert Camus",
        rating: "4.6/5"
      }
    ],
    biography: [
      {
        name: "The Diary Of A Young Girl by Anne Frank",
        rating: "4.2/5"
      },
      {
        name: "Long Walk to Freedom by Nelson Mandela",
        rating: "5/5"
      },
      {
        name:
          "Transcendence: My Spiritual Experiences with Pramukh Swamiji by A. P. J. Abdul Kalam and Arun Tiwari",
        rating: "5/5"
      }
    ]
  }

const [books,setbooks]=useState("biography");
const genrechange=(genre)=>{
  console.log(genre);
setbooks(genre);
}
  return (
    <div className="App">
<h1>Books List </h1>

      {Object.keys(database).map((genre) =>(
<button className="heading" key={genre} onClick={(e)=>genrechange(genre)}>{genre}</button>
      ))
  
      }
      <div className="what">
      {database[books].map((book) =>(
        <div className="box">
        <div key={book.name} className="boxx">{book.name}</div>
        <div key={book.rating} className="rating">{book.rating}</div>
        </div>
      ))

}
</div>
    </div>
  );
}

export default App;
