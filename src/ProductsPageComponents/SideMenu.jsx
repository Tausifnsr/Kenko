import SideMenuCart from "./SideMenuCart"
import Categories from "./Categories"
import FilterSection from "./FilterSection"
import ProductTags from "./ProductTags"

function SideMenu() {
  return (
    <>
        <div>
        <div>
              <SideMenuCart />
            </div>
            <div className="w-56">
              <Categories />
            </div>
            <div>
              <FilterSection />
            </div>
            <div>
              <ProductTags />
            </div>
        </div>
    </>
  )
}

export default SideMenu