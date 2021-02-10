import React from "react";
import "./card.styles.css";
export class Card extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { id: id1, name: name1, email: email1 } = nextProps.monster;
    const { id: id2, name: name2, email: email2 } = this.props.monster;
    return id1 !== id2 || name1 !== name2 || email1 !== email2;
  }

  componentDidUpdate() {
    console.log(`Card updated ${this.props.monster.id}`);
  }
  render() {
    console.log(`Card render ${this.props.monster.id}`);
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
        ></img>
        <h2>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}
