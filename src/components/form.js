export default function ActivityForm({ onAddActivity }) {
  return (
    <form className="activity-form">
      <h2 className="activity-form__title">Add new Activity</h2>
      <div className="activity-form__fields">
        <div className="activity-form__field">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="activity-form__field">
          <label htmlFor="notes">Good-weather activity:</label>
          <input type="checkbox" name="notes" id="notes" />
        </div>
        <div className="activity-form__button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
