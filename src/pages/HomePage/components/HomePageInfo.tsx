import React from "react";

export const HomePageInfo = () => {
  return (
    <div className="home__page__info__main__container">
      <div>
        <div className="flex justify-center align-center column g10 fs28 home__page__info__header__container">
          <span>
            Online Store of
            <span className="green__text home__page__info__header__first__text">
              Products
            </span>
          </span>
          <span className="green__text">With Delivery</span>
        </div>
      </div>
      <div>
        <p className="home__page__info__paragraph">
          <span className="bold__text">Frutiy</span>
          is a direct importer of fruits, vegetables, fruits, salads, mushrooms.
          Since 2008, and already more than 14 years, we have been delivering
          products to the homes of Ukrainians, restaurants, cafes and other
          partners.
        </p>
        <p className="home__page__info__paragraph with__margin">
          Quality and service are our priorities. To the very same, we
          spivpratsyuemo only with nadinym postal workers from Spain, Brazil,
          Holland, Argentine, Thailand and other lands. And for the convenience
          of customers, they created an online store for products. Here, for the
          help of an intelligent catalog and filters, you can quickly select and
          buy those that you need.
        </p>
        <h3 className="home__page__info__mini__header">Assortment Nolorn</h3>
        <p>
          Buying products online is very convenient! You can select and order
          products at any time directly from your smartphone. This not only
          saves time, but also avoids queues at stores and the hassle of
          carrying heavy packages. In our online store you will find fresh
          vegetables and fruits, as well as:
        </p>
        <ul className="with-dots home__page__info_ul">
          <li>Berries</li>
          <li>Greens and salads</li>
          <li>Dried fruits</li>
          <li>Spices</li>
          <li>Flour and cereals</li>
          <li>Vegetables</li>
        </ul>
        <p className="home__page__info__paragraph">
          Another highlight of
          <span className="bold__text">Frutiy</span>
          is the opportunity to buy exotic fruits. Our assortment includes more
          than 500 exotic fruits from different parts of the world. It is
          difficult to buy them in a regular supermarket. However, using our
          delivery, you can easily feel the exotic taste.
        </p>
        <p className="home__page__info__paragraph">
          Looking for an original gift for a loved one, friend or colleague? In
          our online grocery store you can order Fruit Box - a set of exotic
          fruits in a beautiful craft box. Such a gift will be remembered for a
          long time and will cause pleasant emotions and impressions of new
          tastes. In addition, you can assemble and buy such a set yourself by
          choosing any fruits, berries or nuts from the assortment.
        </p>
        <p className="home__page__info__paragraph">
          The high quality of our products is confirmed by relevant certificates
          and the international HACCP certificate. We make sure that customers
          receive only selected natural products, ready to use. They are stored
          in our own warehouses where the correct temperature is maintained to
          keep them fresh and ripe.
        </p>
      </div>
    </div>
  );
};
