import Card from "./Card";
import "./style.css";
import image1 from "../../assets/images/pic1.webp";
import image2 from "../../assets/images/pic2.jpg";
import image3 from "../../assets/images/pic3.jpg";
import image4 from "../../assets/images/pic4.jpg";
import image5 from "../../assets/images/pic5.jfif";
import image6 from "../../assets/images/pic6.jfif";
import image7 from "../../assets/images/pic7.jpg";
import image8 from "../../assets/images/pic8.jfif";
import image9 from "../../assets/images/pic9.jfif";

let users = [
  {
    heading: "Expeditions",
    image: image1,
  },
  {
    heading: "Expeditions",
    image: image2,
  },
  {
    heading: "Expeditions",
    image: image3,
  },
  {
    heading: "Expeditions",
    image: image4,
  },
  {
    heading: "Expeditions",
    image: image5,
  },
  {
    heading: "Expeditions",
    image: image6,
  },
  {
    heading: "Expeditions",
    image: image7,
  },
  {
    heading: "Expeditions",
    image: image8,
  },
  {
    heading: "Expeditions",
    image: image9,
  },
];

const CardSection = () => {
  return (
    <div className="MainHeading">
      <h4>Our Services</h4>

      <div className="Card">
        {users.map((user) => (
          <Card cardHeading={user.heading} cardImage={user.image} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
