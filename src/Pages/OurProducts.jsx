import Footer from "../CommonComponents/Footer";
import Navbar from "../CommonComponents/Navbar";
import SideMenu from "../ProductsPageComponents/SideMenu";
import ProductsList from "../ProductsPageComponents/ProductsList";

function Shop() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-[80%] flex mx-auto mt-48">
          <div className="sideMenu w-1/3">
            <SideMenu/>
          </div>
          <div className="w-2/3">
            <ProductsList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Shop;
