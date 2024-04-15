export default async function Read(props: any) {
  const resp = await fetch("http://localhost:9999/topics", {
    // next: { revalidate: 10 },
    // cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <div>
      <div>상품</div>
      <p>{props.params.id}</p>
      {topics.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </div>
  );
}
