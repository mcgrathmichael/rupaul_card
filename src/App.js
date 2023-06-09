import "./App.css";
import "./app.scss";

function App() {
  return (
    <div className="wrapper">
      <Card
        img=".src/img/anetra.png"
        name="Anetra"
        description="'Anetra' was the name of a stripper that she used to work with - she
          chose the name because Anetra was 'the hottest thing she ever saw in
          her life'."
      />
      <Card
        img="https://static.wikia.nocookie.net/logosrupaulsdragrace/images/4/42/Anetra.jpeg/revision/latest?cb=20221213163345"
        alt="drag queen"
        name="Mistress"
        description=" 'Mistress' is a double entendre for 'a bitch who is in control' and 'a sexy slut'. 'Isabelle' is the feminine version of her real name, Israel. 
        'Brooks' comes for her drag mother, Chevelle Brooks."
      />
      <Card
        img="https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/84/SashaColby.jpeg/revision/latest/scale-to-width-down/350?cb=20221213165003"
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
        <img src={props.img} alt="drag queen" />
        <h2 className="card_title">{props.name}</h2>
        <p className="card_desc">{props.description}</p>
        <button className="card_btn">View More</button>
      </div>
    </>
  );
}

export default App;
