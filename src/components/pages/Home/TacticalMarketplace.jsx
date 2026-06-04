import React, { useEffect, useState } from "react";
import API from "../../../Api/Api";

const TacticalMarketplace = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          API.get("/product?_embed&per_page=50"),
          API.get("/product_cat?per_page=50"),
        ]);

        setProducts(productRes.data);
        setCategories(categoryRes.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    activeCat === "all"
      ? products
      : products.filter((product) =>
          product.product_cat?.includes(activeCat)
        );

  return (
    <section className="w-full bg-[#080b0c] py-20 font-['Chakra_Petch']">
      <div className="max-w-[1440px] mx-auto px-5 xl:px-[80px]">
        {/* Heading */}
        <div className="max-w-[850px] mx-auto text-center">
          <span className="block text-sm uppercase tracking-[3px] text-[#7C8761] font-semibold">
            // OPERATOR SUPPLY NETWORK //
          </span>

          <h2 className="mt-4 text-[34px] md:text-[42px] xl:text-[48px] font-bold uppercase text-[#5E7D4D]">
            Tactical Marketplace
          </h2>

          <p className="mt-5 text-white text-lg leading-8">
            Buy, sell and discover premium airsoft equipment, tactical apparel
            and mission-ready gear from the community.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16 border border-[#1d2521] bg-[#0c1110] overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveCat("all")}
              className={`px-7 py-5 uppercase text-sm tracking-wider transition-all ${
                activeCat === "all"
                  ? "bg-[#6f8d5c] text-white"
                  : "text-[#8c8c8c] hover:text-white"
              }`}
            >
              All Products
            </button>

{categories
  .filter((cat) => cat.slug !== "uncategorized")
  .map((cat) => (
    <button
      key={cat.id}
      onClick={() => setActiveCat(cat.id)}
      className={`px-7 py-5 uppercase text-sm tracking-wider whitespace-nowrap transition-all ${
        activeCat === cat.id
          ? "bg-[#6f8d5c] text-white"
          : "text-[#8c8c8c] hover:text-white"
      }`}
    >
      {cat.name}
    </button>
))}
          </div>
        </div>

        {/* Products */}
        {loading ? (
          <div className="text-center text-white py-20">
            Loading Products...
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14">
            {filteredProducts.map((product) => {
              const image =
                product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/placeholder.jpg";

              const features =
                product.acf?.features
                  ?.split(",")
                  .map((item) => item.trim()) || [];

              return (
                <div key={product.id} className="group">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={product.title.rendered}
                      className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4 bg-[#6f8d5c] text-white text-xs uppercase px-3 py-2">
                      {product.acf?.brand_name}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <div className="border-l-2 border-[#5E7D4D] pl-3 text-[#5E7D4D] uppercase text-sm">
                      {product.acf?.product_subtitle}
                    </div>

                    <h3 className="mt-4 text-white text-[24px] font-bold uppercase leading-[1.5] min-h-[110px]">
                      {product.title.rendered}
                    </h3>

                    <div className="border-t border-[#1b2220] mt-6 pt-6 flex items-center justify-between">
                      <div className="text-[#5E7D4D] text-[42px] font-bold">
                        $
                        {product.meta?._price ||
                          product.meta?.price ||
                          "145"}
                      </div>

                      <button className="border border-[#5d5d5d] px-8 py-4 uppercase text-white hover:bg-[#6f8d5c] hover:border-[#6f8d5c] transition">
                        Add To Cart
                      </button>
                    </div>

                    <div className="border-t border-[#1b2220] mt-6 pt-5 flex flex-wrap gap-2">
                      {features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-[#4d613e] text-[#d5d5d5] text-[11px] uppercase px-3 py-2"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#6f8d5c] text-white uppercase px-12 py-4 hover:opacity-90 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TacticalMarketplace;