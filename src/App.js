import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import ActivityForm from "./components/form.js";
import List from "./components/list.js";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  return (
    <div>
      <List activities={activities} id={activities.id} />
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
