import "./ProductsContainer.css";
import Products from "./Products";

function ProductsContainer(props) {
  return (
    <section className="prod-container">
      <Products
        title={"Tre Små Grisar"}
        author={"S.A Nilsen"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <Products
        title={"Pippi Långstrum"}
        author={"Astrid Lindgren"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <Products
        title={"Det susar i säven"}
        author={"William Svenningsson"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
      <Products
        title={"Alla vill väll vara katt"}
        author={"Britt-Marie Nilsson"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      />
    </section>
  );
}
export default ProductsContainer;
