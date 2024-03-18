import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUserName, userVerification } from "../../features/userSlice";
import Edit from "./Edit";

/**
 * Display the header section with user's name and an option to edit it.
 * Editing of firstname and lastname, updating the state at submission.
 * @param {string} firstName - The user's firstname.
 * @param {string} lastName - The user's lastname.
 * @param {string|null} isAuthenticated - The user's authentication status
 * @returns {JSX.Element} - The header section with conditional rendering based on editing state.
 */

const Header = ({ firstName, lastName, isAuthenticated }) => {
  const dispatch = useDispatch();

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

  const validateName = (name) =>
    /^[ ]*[A-Za-zÀ-ÖØ-öø-ÿ\-_. ]{3,25}[ ]*$/.test(name);

  /**
   * Function to handle the form submission,verifiy with regex, validating names and dispatching update.
   */
  const handleSubmit = (e) => {
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
  };

  /**
   * function to Handle the cancellation of the editing, resetting the editing state and any error messages.
   */
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
        <Edit
          newFirstName={newFirstName}
          setNewFirstName={setNewFirstName}
          newLastName={newLastName}
          setNewLastName={setNewLastName}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          error={error}
        />
      )}
    </div>
  );
};

export default Header;
