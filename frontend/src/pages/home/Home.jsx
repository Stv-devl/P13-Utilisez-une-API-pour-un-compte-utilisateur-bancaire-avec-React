import { HeroModel } from "../../data/formatData";
import { FeaturesModel } from "../../data/formatData";
import { mockedData } from "../../data/mockedData";

/**
 * The Home component
 * @returns {JSX.Element} - The Home component show the bank's services and features.
 */

const Home = () => {
  const heroModel = new HeroModel(mockedData.hero);
  const featuresModel = new FeaturesModel(mockedData.features);

  const heroData = heroModel.heroModel;
  const featuresData = featuresModel.featuresModel;

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          {heroData.subtitles.map((subtitle, index) => (
            <p key={`subtitle${index}`} className="subtitle">
              {subtitle}
            </p>
          ))}
          <p className="text">{heroData.text}</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((feature, index) => (
          <div key={`feature${index}`} className="feature-item">
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
