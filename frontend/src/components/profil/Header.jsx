import { UserModel } from "../../service/formatData";

const Header = ({ datas }) => {
  const userModel = new UserModel(datas || {});
  const { firstName, lastName } = userModel.models;

  const handleEdit = () => {
    //dispatch PUT
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${firstName} ${lastName}!`}
      </h1>
      <button className="edit-button" onClick={handleEdit}>
        Edit Name
      </button>
    </div>
  );
};

export default Header;
