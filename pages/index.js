import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import ShoppingCart from "../components/shoppingCart";
import Product from "../components/product";
import style from "../styles/Home.module.css";
import { getLatestItems } from "../services/storeService";
import styleProduct from "../styles/product.module.css";

export default function Home({ items }) {
  return (
    <div>
      <Layout>
        <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <h2>Aprende con LearnDotCOde</h2>
            </div>
          </div>
        </div>

        <h3 className={style.h3}>Ultimos productos</h3>
        <div className={styleProduct.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="item" />
            ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
