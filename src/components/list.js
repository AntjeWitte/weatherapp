export default function List({ activities, id }) {
  return (
    <section>
      <h2>Activities:</h2>
      <ul>
        <li key={id}>{activities}</li>
      </ul>
    </section>
  );
}
