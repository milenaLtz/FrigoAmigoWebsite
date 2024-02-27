import PremiumSingleCard from './PremiumSingleCard';
import stars from '../../Pictures/PREMIUM.png';
import PremiumSingleCardOrange from './PremiumSingleCardOrange';

const PremiumCards = () => {
  return (
    <>
      <img src={stars} alt="stars_premium" className="premium-stars"></img>
      <div className="premium-cards-block premium-cards-block-web-desktop">
        <PremiumSingleCardOrange time="1 Месяц" priceTotal="199руб" />
        <PremiumSingleCard
          time="3 Месяца"
          priceMonth="169 руб/мес"
          priceTotal="507руб"
          color="#fff"
        />
        <PremiumSingleCard
          time="6 Месяцев"
          priceMonth="149 руб/мес"
          priceTotal="849руб"
          color="#fff"
        />
        <PremiumSingleCard
          time="1 Год"
          priceMonth="129 руб/мес"
          priceTotal="1548руб"
          color="#fff"
        />
      </div>

      <div className="premium-container">
        <div className="premium-cards-block1 premium-cards-block-web-mobile">
          <PremiumSingleCardOrange time="1 Месяц" priceTotal="199руб" />
          <PremiumSingleCard
            time="3 Месяца"
            priceMonth="169 руб/мес"
            priceTotal="507руб"
            color="#fff"
          />
        </div>
        <div className="premium-cards-block2 premium-cards-block-web-mobile">
          <PremiumSingleCard
            time="6 Месяцев"
            priceMonth="149 руб/мес"
            priceTotal="849руб"
            color="#fff"
          />
          <PremiumSingleCard
            time="1 Год"
            priceMonth="129 руб/мес"
            priceTotal="1548руб"
            color="#fff"
          />
        </div>
      </div>
    </>
    // style={{backgroundImage: "linear-gradient(to right, #fff, #fff, #fff, #fff)", border: "2px solid #EC9A29"}}
  );
};

export default PremiumCards;
