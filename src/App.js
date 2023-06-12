import "./App.css";
import { useState, useEffect } from "react";
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

  useEffect(() => {
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
    const interval = setInterval(loadWeather, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
