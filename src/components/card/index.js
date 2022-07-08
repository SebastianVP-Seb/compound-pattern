import Card from "./Card";
import CardButtons from "./CardButtons";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

const CardExported=Object.assign(Card, {
    Header: CardHeader,
    Image: CardImage,
    Description: CardDescription,
    Buttons: CardButtons
});

export default CardExported;