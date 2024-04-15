export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <div>상품목록</div>
      {products.map((p, index) => (
        <div key={index}>
          <h4>{p}</h4>
        </div>
      ))}
    </div>
  );
}
