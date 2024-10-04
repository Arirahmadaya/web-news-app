export default function Card({
  id,
  name,
  username,
}) {
  return (
    <div>
      <h3>ID: {id}</h3>
      <h3>NAME: {name}</h3>
      <h3>USERNAME: {username}</h3>
    </div>
  );
}
