import React, { useRef } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import CarouselInfo from "@itseasy21/react-elastic-carousel";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineSkype,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useAboutUs } from "../hooks/useAboutUs";

export const AboutUsOurTeam = () => {
  const carouselRef = useRef<any>();
  const { team } = useAboutUs();
  return (
    <div className="flex g30 about-us-our-team">
      <div>
        <h2 className="about-us-our-team-header">
          Our<span className="bold-text">Team</span>
        </h2>
        <h3 className="about-us-our-team-sub-header">Meet Our Expert Team</h3>
        <div>
          <p className="about-us-our-team-paragraph">
            A dedicated team of forward-thinkers committed to revolutionizing
            the food vegan landscape with creative solutions and sustainable
            practices.
          </p>
          <p className="about-us-our-team-paragraph">
            Our diverse group of culinary experts brings a wealth of knowledge
            about vegan cuisine, ensuring that every product we offer is a
            delectable masterpiece of flavors and ethics.
          </p>
          <p className="about-us-our-team-paragraph">
            Backed by a team of friendly and responsive customer service
            professionals, we prioritize your satisfaction and are here to
            assist you on your journey to exploring and enjoying our delectable
            vegan food offerings.
          </p>
          <p className="about-us-our-team-paragraph">
            A collective of visionaries striving to redefine the food-vegan
            sphere, merging technology and compassion seamlessly.Committed
            eco-conscious individuals, each playing a vital role in creating,
            and delivering sustainable, plant-based culinary experiences.Our
            tightly-knit crew fosters a culture of collaboration, where diverse
            skills converge to provide you with a seamless and delightful online
            vegan shopping escapade.
          </p>
        </div>
      </div>
      <div>
        <div className="daily-best-sells-carousel-arrows">
          <button onClick={() => carouselRef.current.slidePrev()}>
            <HiOutlineArrowNarrowLeft />
          </button>
          <button onClick={() => carouselRef.current.slideNext()}>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
        <div>
          <CarouselInfo
            showArrows={false}
            ref={carouselRef}
            itemsToScroll={2}
            itemsToShow={2}
            pagination={false}
            itemPadding={[10, 15]}
            isRTL={false}
          >
            {team.map((item, index) => (
              <div
                key={index}
                className="about-us-our-team-card"
                style={{
                  backgroundColor: item.backgroundColor,
                }}
              >
                <img
                  className="about-us-our-team-card-image "
                  src={item.image}
                  alt={`Team Worker ${index + 1}`}
                />
                <div className="about-us-our-team-card-cover"></div>
                <div className="flex align-center justify-center g10 column about-us-our-team-card-cover-text">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                  <div className="flex g10 about-us-our-team-card-icons">
                    <CiFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineSkype />
                    <AiOutlineTwitter />
                  </div>
                </div>
              </div>
            ))}
          </CarouselInfo>
        </div>
      </div>
    </div>
  );
};
