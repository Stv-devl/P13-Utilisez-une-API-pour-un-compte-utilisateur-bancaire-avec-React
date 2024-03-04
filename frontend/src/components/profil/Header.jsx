import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { UserModel } from "../../service/formatData";
import { editUserName, userVerification } from "../../features/userSlice";

const Header = ({ datas, isAuthenticated }) => {
  const dispatch = useDispatch();

  const userModel = new UserModel(datas || {});
  const { firstName, lastName } = userModel.models;

  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  console.log(isEditing);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const updatedNames = {
        firstName: newFirstName,
        lastName: newLastName,
        token: isAuthenticated,
      };
      dispatch(editUserName(updatedNames));
      dispatch(userVerification(isAuthenticated));
      setIsEditing(false);
    },
    [newFirstName, newLastName, isAuthenticated, dispatch]
  );

  return (
    <div className="header">
      {!isEditing ? (
        <>
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}!`}
          </h1>
          <button className="edit-button" onClick={(e) => setIsEditing(true)}>
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Change your names</h1>
          <div className="from-wrapper">
            <form className="changeNameForm" onSubmit={handleSubmit}>
              <input
                type="text"
                id="changeFirstname"
                name="changeFirstname"
                placeholder="firstname..."
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <input
                type="text"
                id="changeLastname"
                name="changeLastname"
                placeholder="lastname..."
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <div className="input-name-wrapper">
                <input type="submit" value="Update" className="edit-button" />
                <button
                  className="edit-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
