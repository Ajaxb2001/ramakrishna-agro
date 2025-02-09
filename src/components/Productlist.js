import React, { useState } from "react";
import '../css/Productlist.css'; // Optional CSS file for styling
import Amrutdhara from "../assets/AmrutDhara.jpeg"; 
import BeetCandy from "../assets/B - Candy.jpeg";
import BeetJam from "../assets/Beet Jam.jpeg";
import Beetsherbat from "../assets/Beet Sharbat.jpeg";
import carrotcandy from "../assets/C-Candy.jpeg";
import Dantamanjan from "../assets/Dantamanjan.jpeg";
import Dhoop from "../assets/Dhoop.jpeg";
import DiredMatki from "../assets/Dried Matki.jpeg";
import FacePack from "../assets/Facepack.jpeg";
import Ganvati from "../assets/Ghanvati.jpeg";
import GhavankurCapsule from "../assets/Ghavankur Capsules.jpeg";
import Ghee from "../assets/Ghee.jpeg";
import Goark from "../assets/Goarka.jpeg";
import Gotirth from "../assets/Gotrith.jpeg";
import Hairoil from "../assets/Hair Oil.jpeg";
import Honey from "../assets/Honey.jpeg";
import KadhipattaPowder from "../assets/Kadhipatta Powder.jpeg";
import Lemongrasspowder from "../assets/Lemongrass Powder.jpeg";
import Panchdavya from "../assets/Panchdavya-oil.jpeg";
import Papayajam from "../assets/Papaya Jam.jpeg";
import Phynely from "../assets/Phynely.jpeg";
import Pittashamak from "../assets/Pittashanamk.jpeg";
import PureDhoop from "../assets/Pure Dhoop.jpeg";
import Shampoo from "../assets/Shampoo.jpeg";
import ShenGowrya from "../assets/Shen-Gowrya.jpeg";
import Tulsipowder from "../assets/Tulsi Powder.jpeg";
import Vednashamakoil from "../assets/Vednashamak Tel.jpeg";

const ProductList = () => {
  // Array of products with specific products moved to the end
  const products = [
    { id: 1, name: "Amrut-Dhara", description: "Pure herbal essence for overall wellness.", price: "₹55", image: Amrutdhara },
    { id: 2, name: "Beet Candy", description: "Naturally sweetened beet candy, rich in nutrients.", price: "₹40", image: BeetCandy },
    { id: 4, name: "Beet Sherbat", description: "Refreshing beet-based drink for hot days.", price: "₹70", image: Beetsherbat },
    { id: 5, name: "Carrot Candy", description: "Healthy carrot candy with a delightful taste.", price: "₹40", image: carrotcandy },
    { id: 6, name: "Dantamanjan", description: "Natural tooth powder for dental hygiene.", price: "₹50", image: Dantamanjan },
    { id: 9, name: "Face Pack", description: "Natural face pack for glowing skin.", price: "₹55", image: FacePack },
    { id: 11, name: "Ghavankur Capsules", description: "Herbal capsules for vitality.", price: "₹210", image: GhavankurCapsule },
    { id: 13, name: "Goark", description: "Herbal extract for multiple health benefits.", price: "₹65", image: Goark },
    { id: 14, name: "Gotirth", description: "Natural immunity booster.", price: "₹20", image: Gotirth },
    { id: 15, name: "Hair Oil", description: "Nourishing hair oil for healthy scalp.", price: "₹95", image: Hairoil },
    { id: 16, name: "Honey", description: "Pure and organic honey.", price: "₹70", image: Honey },
    { id: 17, name: "Kadhipatta-Powder", description: "Dried curry leaves powder for cooking.", price: "₹17", image: KadhipattaPowder },
    { id: 18, name: "Lemongrass Powder", description: "Aromatic lemongrass powder for teas and recipes.", price: "₹17", image: Lemongrasspowder },
    { id: 19, name: "Panchgavya Gruht - 15 ml", description: "Five-ingredient herbal oil for massage.", price: "₹125", image: Panchdavya },
    { id: 20, name: "Papaya Jam", description: "Delicious jam made from ripe papayas.", price: "₹75", image: Papayajam },
    { id: 21, name: "Phynely", description: "Organic floor cleaner.", price: "₹60", image: Phynely },
    { id: 22, name: "Pittashamak", description: "Herbal blend for acidity relief.", price: "₹40", image: Pittashamak },
    { id: 23, name: "Pure Dhoop", description: "Chemical-free dhoop for spiritual ambiance.", price: "₹55", image: PureDhoop },
    { id: 24, name: "Shampoo", description: "Herbal shampoo for smooth hair.", price: "₹60", image: Shampoo },
    { id: 25, name: "Agnihotri-Sheni", description: "Traditional face powder for natural glow.", price: "₹25", image: ShenGowrya },
    { id: 26, name: "Tulsi Powder", description: "Holy basil powder for health and wellness.", price: "₹17", image: Tulsipowder },
    { id: 27, name: "Vednashamak Oil", description: "Herbal oil for pain relief.", price: "₹85", image: Vednashamakoil },
    
    // Moved items with IDs 3, 7, 8, 10, 12
    { id: 3, name: "Beet Jam", description: "Fresh beet jam, sweetened with natural ingredients.", price: "₹75", image: BeetJam },
    { id: 7, name: "Dhoop", description: "Organic incense sticks for meditation and relaxation.", price: "₹50", image: Dhoop },
    { id: 8, name: "Dried Matki", description: "Dried matki beans, perfect for cooking.", price: "₹35", image: DiredMatki },
    { id: 10, name: "Ghanvati", description: "Herbal supplement for immunity boost.", price: "₹110", image: Ganvati },
    { id: 12, name: "Pure Ghee", description: "Authentic and pure cow ghee.", price: "₹450", image: Ghee },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
<div className="parallax">
  <div className="parallax-content">
    <h1 className="parallax-heading">Ramakrishna Agro Products 🌿</h1>
    <p className="parallax-description">Explore our range of natural, chemical-free agro products. 🍃</p>
  </div>
</div>

  
      {/* Product List */}
      <div className="product-list">
        <div className="products-container">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy" // Enable lazy loading
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
          {indexOfLastProduct < products.length && <button onClick={nextPage}>Next</button>}
        </div>
      </div>
    </div>
  );  
};

export default ProductList;