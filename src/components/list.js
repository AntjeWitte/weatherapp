export default function List({ activities, isActive, onDeleteActivity }) {
  console.log(onDeleteActivity);
  return (
    <>
      <section>
        <h2>
          {isActive === true
            ? "🌤️ Outdoor activities:"
            : "🌧️ Indoor activities:"}
        </h2>
        <ul>
          {activities
            .filter((activity) => activity.isForGoodWeather === isActive)
            .map((activity) => {
              return (
                <li key={activity.id}>
                  {activity.name}
                  <button
                    type="button"
                    title="delete movie"
                    onClick={() => onDeleteActivity(activity.id)}
                  >
                    ✕
                  </button>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}
