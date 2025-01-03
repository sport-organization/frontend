import Offer from "./Offer.jsx";

function Offers() {
  return (
    <>
      <h1 className="offersText">Доступно везде и всегда!</h1>
      <div className="offersDiv">
        <Offer
          offerText="Индивидуальные планы тренировок"
          offerBackground="src/assets/images/plans.png"
        />
        <Offer
          offerText="Рациональное питание"
          offerBackground="src/assets/images/eat.png"
        />
        <Offer
          offerText="Полезные советы и статьи"
          offerBackground="src/assets/images/articles.png"
        />
        <Offer
          offerText="Сообщество единомышленников"
          offerBackground="src/assets/images/community.png"
        />
      </div>
    </>
  );
}

export default Offers;
