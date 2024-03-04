import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserModel } from "../../service/formatData";
import { editUserName, userVerification } from "../../features/userSlice";

const Header = ({ datas, isAuthenticated }) => {
  const dispatch = useDispatch();

  const userModel = new UserModel(datas || {});
  const { firstName, lastName } = userModel.models;

  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      setNewFirstName(firstName);
      setNewLastName(lastName);
    }
  }, [firstName, lastName, isEditing]);

  const validateName = (name) => /^[A-Za-zÀ-ÖØ-öø-ÿ\-_.]{3,25}$/.test(name);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!validateName(newFirstName) || !validateName(newLastName)) {
        setError("Please write correct informations");
        return;
      }

      const updatedNames = {
        firstName: newFirstName,
        lastName: newLastName,
        token: isAuthenticated,
      };
      dispatch(editUserName(updatedNames));
      dispatch(userVerification(isAuthenticated));
      setIsEditing(false);
      setError("");
    },
    [newFirstName, newLastName, isAuthenticated, dispatch]
  );

  const handleCancel = () => {
    setIsEditing(false);
    setError("");
  };
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
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <input
                type="text"
                id="changeLastname"
                name="changeLastname"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              {error && <div className="errorMessage">{error}</div>}
              <div className="input-name-wrapper">
                <input type="submit" value="Update" className="edit-button" />
                <button
                  type="button"
                  className="edit-button"
                  onClick={handleCancel}
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
