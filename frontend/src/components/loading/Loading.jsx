/**
 * The component is a loader who is active when we waiting for datas
 * @returns {JSX.Element} - A rotating loading circle
 */

const Loader = () => {
  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
