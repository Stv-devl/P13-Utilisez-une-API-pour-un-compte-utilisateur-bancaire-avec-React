/**
 * Edit component
 * Display a form for lets users to edit their firstname and lastname.
 * @param {string} newFirstName - The value for the newfirstname.
 * @param {Function} setNewFirstName - The useState to update the newfirstname.
 * @param {string} newLastName - The value for the newlastname.
 * @param {Function} setNewLastName - The useState to update the newfirstname.
 * @param {Function} handleSubmit - Function to handle the form submission.
 * @param {Function} handleCancel - Function to cancel the editing.
 * @param {string} error - Error message to display if there's an error.
 * @returns {JSX.Element} - The form for editing names.
 */

const Edit = ({
  newFirstName,
  setNewFirstName,
  newLastName,
  setNewLastName,
  handleSubmit,
  handleCancel,
  error,
}) => (
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
          <button type="button" className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </>
);

export default Edit;
