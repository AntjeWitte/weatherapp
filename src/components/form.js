export default function ActivityForm({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.check.checked,
    };
    console.log(data);

    onAddActivity(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <div>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="check">Good-weather activity: </label>
          <input type="checkbox" name="check" id="check" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
