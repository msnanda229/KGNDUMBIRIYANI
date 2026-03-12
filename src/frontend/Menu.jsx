import React, { useRef, useState, useEffect } from "react";
import "./Menu.css";

function Menu() {

  const containerRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollNext = () => {
    containerRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  const scrollPrev = () => {
    containerRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  /* ======================
        MENU ITEMS
  ====================== */

  const biryanis = [
    {
      name: "Biryani Rice",
      price: "₹90",
      img: "https://static.vecteezy.com/system/resources/previews/067/013/492/large_2x/indian-style-chicken-biryani-served-on-a-restaurant-plate-in-foodgraphy-free-photo.jpg",
      desc: "Fragrant basmati rice cooked with aromatic spices and herbs."
    },
    {
      name: "Chicken Dum Biryani",
      price: "₹180",
      img: "https://tse4.mm.bing.net/th/id/OIP.hYAWojbrro3xW62L1cH6awHaE8?pid=Api&P=0&h=180",
      desc: "Slow cooked dum biryani layered with juicy chicken."
    },
    {
      name: "Chicken Fry Biryani",
      price: "₹180",
      img: "https://static.vecteezy.com/system/resources/thumbnails/067/176/596/small/chicken-biryani-image-plated-with-basmati-rice-and-red-chili-garnish-photo.jpg",
      desc: "Crispy fried chicken mixed with flavorful biryani rice."
    },
    {
      name: "Boneless Chicken Biryani",
      price: "₹200",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/3/791b470d-4f1e-4f49-8847-cb5cba3095e6_4cd1050f-b584-4b76-b9c0-3fa57e2df891.jpg",
      desc: "Tender boneless chicken cooked with rich spices."
    },
    {
      name: "Chicken Joint Biryani",
      price: "₹180",
      img: "https://authenticroyal.com/wp-content/uploads/2024/10/royal-rice-may-220461.jpg",
      desc: "Juicy chicken joints cooked with aromatic biryani spices."
    },
    {
      name: "Mutton Dum Biryani",
      price: "₹450",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg",
      desc: "Premium mutton dum biryani cooked slowly for deep flavor."
    },
    {
      name: "Mutton Fry Biryani",
      price: "₹350",
      img: "https://png.pngtree.com/background/20250319/original/pngtree-indian-delicious-mutton-biryani-picture-image_16300554.jpg",
      desc: "Spicy mutton fry mixed with aromatic biryani rice."
    },
    {
      name: "Prawns Biryani",
      price: "₹250",
      img: "https://as1.ftcdn.net/v2/jpg/14/52/28/36/1000_F_1452283674_ZiXc3iCoEE0Gfo8MNN16lw8P7tjubwUn.jpg",
      desc: "Juicy prawns cooked with spiced biryani rice."
    }
  ];

  const curries = [
    {
      name: "Chicken Curry",
      price: "₹130",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKQbPx4Imn_uGt3OvR4AwmSVf-J7_Qpr_FA&s",
      desc: "Classic spicy chicken curry with onion tomato masala."
    },
    {
      name: "Boneless Chicken Curry",
      price: "₹150",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT90g6o_EcsgV3NiJ5KNrhu7qV3R139e6Lag&s",
      desc: "Tender boneless chicken cooked in thick gravy."
    },
    {
      name: "Chicken Liver Curry",
      price: "₹120",
      img: "https://img.freepik.com/free-photo/fried-chicken-liver-with-onions-herbs_2829-19702.jpg",
      desc: "Rich and spicy chicken liver curry."
    },
    {
      name: "Mutton Curry",
      price: "₹280",
      img: "https://tse3.mm.bing.net/th/id/OIP.aGzAWe7tdWBCN9-Z6GJMIQHaHa?pid=Api&P=0&h=180",
      desc: "Slow cooked mutton in thick spicy masala gravy."
    },
    {
      name: "Prawns Fry",
      price: "₹200",
      img: "https://i.pinimg.com/736x/38/0e/17/380e17933538c6bb2a4115f185284a14.jpg",
      desc: "Crispy spicy prawns fry with authentic spices."
    }
  ];

  return (
    <section className="menu" id="menu">

      <div className="menu-header">
        <p>Our Specialties</p>
        <h1>The Menu</h1>
      </div>

      {/* BIRYANIS */}

      <h2 className="category-title">Biryanis</h2>

      <div className="menu-carousel">

        {showLeft && (
          <button className="menu-arrow prev" onClick={scrollPrev}>
            ‹
          </button>
        )}

        <div
          className="menu-container"
          ref={containerRef}
          onScroll={checkScroll}
        >
          {biryanis.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />

              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {showRight && (
          <button className="menu-arrow next" onClick={scrollNext}>
            ›
          </button>
        )}

      </div>

      {/* CURRIES */}

      <h2 className="category-title">Curries</h2>

      <div className="menu-grid">

        {curries.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />

            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Menu;