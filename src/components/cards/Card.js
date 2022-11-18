const Card = ({ cardHeading, cardImage }) => {
  return (
    <div className="cards">
      <div className="contex">
        <p className="para">{cardHeading}</p>
        <img src={cardImage} alt="oom" />
        <button>Explore Service</button>
      </div>
    </div>
  );
};

export default Card;
