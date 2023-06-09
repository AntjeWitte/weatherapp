export default function ActivityForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    //const formData = new FormData(event.target);
    //const data = Object.fromEntries(formData);
    const data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.check.checked,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h2 className="activity-form__title">Add new Activity</h2>
      <div className="activity-form__fields">
        <div className="activity-form__field">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="activity-form__field">
          <label htmlFor="check">Good-weather activity: </label>
          <input type="checkbox" name="check" id="check" />
        </div>
        <div className="activity-form__button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

// Handle the submit event:

// Extract the submitted data as an object with the keys name and isForGoodWeather and their respective values.

// Hint: To get the boolean value of a checkbox, use .checked.
// Call onAddActivity and pass it the data object as argument.

// After submitting, reset the form and focus the first input field.

// Switch to the App.js and

// create a state for activities,
// write a function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
// please add a unique id to every new activity object; you can use uid to do so.
// Pass handleAddActivity to the Form component; make sure to use the correct prop name.
