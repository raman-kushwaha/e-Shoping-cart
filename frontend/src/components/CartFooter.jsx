import styles from "./CartFooter.module.css";

const CartFooter = () => {
  return (
    <div class={`container`}>
      <footer class={`py-3 my-4 position-relative`}>
        <div style={{ width: "80vw", position: "absolute", top: "500px" }}>
          <hr />
          <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
        </div>
      </footer>
    </div>
  );
};

export default CartFooter;
