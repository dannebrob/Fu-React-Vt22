import "./Products.css";

function Products({ title, author, text }) {
  console.log({ title });
  return (
    <div className="product">
      <h3 className="title">{title}</h3>
      <p className="author">Av {author}</p>
      <p className="text">{text}</p>
      <button>Add to cart</button>
    </div>
  );
}
export default Products;
