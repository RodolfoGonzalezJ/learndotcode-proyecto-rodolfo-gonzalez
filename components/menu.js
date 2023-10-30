import Link from "next/link";

import style from "../styles/menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handleClickCart(e) {
    e.preventDefault();
    cart.openCart();
  }
  return (
    <nav className={style.menu}>
      <div>
        <Link legacyBehavior href="/">
          <a className={style.link}>Pagina principal</a>
        </Link>

        <Link legacyBehavior href="/store">
          <a className={style.link}>Tienda</a>
        </Link>

        <Link legacyBehavior href="/about">
          <a className={style.link}>Sobre nosotros</a>
        </Link>
      </div>

      <div></div>
      <a href="#" className={style.link} onClick={handleClickCart}>
        Carrito ({cart.getNumberOfItems()})
      </a>
    </nav>
  );
}
