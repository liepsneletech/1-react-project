import ReactDOM from "react-dom/client";
import "./index.css";

// Mini Book Project

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL300_SR300,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen ",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          non reiciendis. Saepe eius odit hic aut, assumenda cum dolore
          repellendus vel dolores repellat ea sed aliquid quisquam magnam eaque
          odio?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);

  return (
    <article className="book">
      <img src={img} alt="Book" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

// First component
// import ReactDom from "react-dom";

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>Monika Levivckaitė</h2>;
// const Message = () => <p>This is my message.</p>;

// ReactDom.render(<Greeting />, document.getElementById("root"));
