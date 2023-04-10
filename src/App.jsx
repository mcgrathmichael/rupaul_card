import "./App.css";
import "./app.scss";
import anetra from "./img/anetra.png";
import mistress from "./img/mistress.jpeg";
import sasha from "./img/Sasha.jpeg";

function App() {
  return (
    <div className="wrapper">
      <Card
        img={anetra}
        name="Anetra"
        description="'Anetra' was the name of a stripper that she used to work with - she
          chose the name because Anetra was 'the hottest thing she ever saw in
          her life'."
      />
      <Card
        img={mistress}
        alt="drag queen"
        name="Mistress"
        description=" 'Mistress' is a double entendre for 'a bitch who is in control' and 'a sexy slut'. 'Isabelle' is the feminine version of her real name, Israel. 
        'Brooks' comes for her drag mother, Chevelle Brooks."
      />
      <Card
        img={sasha}
        alt="drag queen"
        name="Sasha Colby"
        description="'Sasha' was picked during her transitioning process because it is a gender-neutral name. 
      'Colby' comes from her drag mother, Cassandra Colby."
      />
    </div>
  );
}

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card_body"></div>
        <img className="card_image" src={props.img} alt="drag queen" />
        <h2 className="card_title">{props.name}</h2>
        <p className="card_desc">{props.description}</p>
        <button className="card_btn">View More</button>
      </div>
    </>
  );
}

export default App;
