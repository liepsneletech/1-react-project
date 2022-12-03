// Mini Book Project
import ReactDom from "react-dom";
import 

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
      alt="Book"
    />
  );
};

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};

const Author = () => {
  return <h4>Amelia Hepworth</h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));

/*First component
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Monika Levivckaitė</h2>;
const Message = () => <p>This is my message.</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));*/
