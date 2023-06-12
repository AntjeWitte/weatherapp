import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import ActivityForm from "./components/form.js";
import List from "./components/list.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  //const [activities, setActivities] = useState([]);
  const [activities, setActivities] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const URL = "https://example-apis.vercel.app/api/weather";

  const [weather, setWeather] = useState();

  async function loadWeather() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data.isGoodWeather);
    } catch (error) {
      console.log(error);
    }
  }

  loadWeather();

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(
      activities.filter((activity) => (activity.id === id ? false : true))
    );
  }

  return (
    <div>
      <List
        activities={activities}
        isActive={weather}
        onDeleteActivity={handleDeleteActivity}
      />
      <ActivityForm onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

// Switch to the App.js and

// create a state for activities,
// write a function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
// please add a unique id to every new activity object; you can use uid to do so.
// Pass handleAddActivity to the Form component; make sure to use the correct prop name.
