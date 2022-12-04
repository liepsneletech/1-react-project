import ReactDOM from "react-dom/client";
// CSS
import "./index.css";

import { books } from "./books";
import { Book } from "./Book";

// Mini Book Project

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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
