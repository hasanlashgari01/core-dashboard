import "./Home.css";

import Basket from "../../../public/svg/basket.svg";
import Chart from "../../components/Chart/BarChart";
import Comment from "../../components/Comment/Comment";
import Customer from "../../components/Customer/Customer";
import CustomerSocial from "../../components/CustomerSocial/CustomerSocial";
import Facebook from "../../../public/svg/facebook.svg";
import Instagram from "../../../public/svg/instagram.svg";
import { Link } from "react-router-dom";
import Popular1 from "../../../public/images/img_square_01.png";
import Popular2 from "../../../public/images/img_square_02.png";
import Popular3 from "../../../public/images/img_square_03.png";
import Popular4 from "../../../public/images/img_square_04.png";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import Profile1 from "../../../public/images/profile-1.jpg";
import SectionBox from "../../components/SectionBox/SectionBox";
import Tip from "../../components/Tip/Tip";
import Twitter from "../../../public/svg/twitter.svg";
import { data } from "../../data/data";
import { useRef } from "react";
import useTitle from "../../hooks/useTitle";

function Home() {
  useTitle("Home");

  const customersRef = useRef();
  const incomeRef = useRef();

  const customersHandler = () => {
    customersRef.current.classList.add("overview-header__item--active");
    incomeRef.current.classList.remove("overview-header__item--active");
  };

  const incomeHandler = () => {
    incomeRef.current.classList.add("overview-header__item--active");
    customersRef.current.classList.remove("overview-header__item--active");
  };

  return (
    <div className="home">
      <div className="section-wrapper">
        <h1 className="section-title">Dashboard</h1>
        <div className="home-wrapper section-space">
          <div className="left">
            <SectionBox title="overview">
              <div className="overview-header">
                <div className="overview-header__item overview-header__item--active" onClick={customersHandler} ref={customersRef}>
                  <div className="overview-header__item-inner">
                    <span className="overview-basket">
                      <img src={Basket} alt="" />
                    </span>
                    <div className="overview-header__item-content">
                      <span className="overview-header__item-text">Customers</span>
                      <h1 className="overview-header__item-count">1024</h1>
                    </div>
                  </div>
                  <div className="overview-header__item-percent-down">
                    <span>37.8%</span>
                  </div>
                </div>
                <div className="overview-header__item" onClick={incomeHandler} ref={incomeRef}>
                  <div className="overview-header__item-inner">
                    <span className="overview-basket">
                      <img src={Basket} alt="" />
                    </span>
                    <div className="overview-header__item-content">
                      <span className="overview-header__item-text">Income</span>
                      <h1 className="overview-header__item-count">256k</h1>
                    </div>
                  </div>
                  <div className="overview-header__item-percent-up">
                    <span>37.8%</span>
                  </div>
                </div>
              </div>
              <div className="overview-main">
                <div className="overview-main__top">
                  <p className="section-text overview-main__top-text">
                    Welcome <span className="section-text__bold">857 customers</span> with a personal message 😎
                  </p>
                  <a href="#" className="overview-main__top-send">
                    Send message
                  </a>
                </div>
                <div className="overview-customers">
                  <Customer image={Profile1} name="Gladyce" />
                  <Customer image={Profile1} name="Elbert" />
                  <Customer image={Profile1} name="Joyce" />
                  {/* BUG */}
                  <Customer image={Profile1} name="View all" />
                </div>
              </div>
            </SectionBox>
            <SectionBox title="Product views">
              <div className="section-chart">
                <Chart data={data} height={320} />
              </div>
            </SectionBox>
            <SectionBox title="Pro tips">
              <h3 className="tip-title">Need some ideas for the next product?</h3>
              <div className="tips">
                <Tip icon={Basket} title="Early access" image={Profile1} message="3 mins read">
                  <span className="tip-info">New</span>
                </Tip>
                <Tip icon={Basket} title="Asset use guidelines" info="Small label" image={Profile1} message="Time">
                  <span className="tip-info">Small label</span>
                </Tip>
                <Tip icon={Basket} title="Exclusive downloads" image={Profile1} message="2 mins read"></Tip>
                <Tip icon={Basket} title="Behind the scenes" info="New" image={Profile1} message="3 mins read">
                  <span className="tip-info">Hot</span>
                </Tip>
                <Tip icon={Basket} title="Asset use guidelines" info="New" image={Profile1} message="Time">
                  <span className="tip-info">Popular</span>
                </Tip>
                <Tip icon={Basket} title="Life & work updates" info="New" image={Profile1} message="3 mins read"></Tip>
              </div>
            </SectionBox>
            <SectionBox title="Get more customers!">
              <p className="customers-title">
                50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings
                right now! 🔥
              </p>
              <div className="customer-social-wrapper">
                <CustomerSocial icon={Facebook} name="Facebook" />
                <CustomerSocial icon={Twitter} name="Twitter" />
                <CustomerSocial icon={Instagram} name="Instagram" />
              </div>
            </SectionBox>
          </div>

          <div className="right">
            <SectionBox title="Popular products">
              <div className="popular-header">
                <span className="popular-header__category">Products</span>
                <span className="popular-header__category">Earning</span>
              </div>
              <div>
                <PopularProduct image={Popular1} title="Crypter - NFT UI kit" price="2,453.80" status={true} />
                <PopularProduct image={Popular2} title="Bento Matte 3D illustration 1.0" price="105.60" status={false} />
                <PopularProduct image={Popular3} title="Excellent material 3D chair" price="648.60" status={true} />
                <PopularProduct image={Popular4} title="Fleet - travel shopping kit" price="648.60" status={true} />
              </div>
              <Link to="/" className="popular-link">
                All products
              </Link>
            </SectionBox>

            <SectionBox title="Comments">
              <div className="comments">
                <Comment image={Profile1} name="Ethel" username="ethel" product="Smiles – 3D icons" comment="Great work 😊" time={1} />
                <Comment
                  image={Profile1}
                  name="Jazmyn"
                  username="jaz.designer"
                  product="Fleet - Travel shopping"
                  comment="I need react version asap!"
                  time={8}
                />
                <Comment
                  image={Profile1}
                  name="Ethel"
                  username="ethel"
                  product="Smiles – 3D icons"
                  comment="How can I buy only the design?"
                  time={1}
                />
              </div>
              <Link to="/" className="popular-link">
                View all
              </Link>
            </SectionBox>

            <SectionBox title="Refund requests">
              <div className="request-wrapper">
                <span className="request-basket">
                  <img src={Basket} alt="" />
                </span>
                <p className="section-text request-content">
                  You have <span className="section-text__bold">52 open refund requests</span> to action. This includes{" "}
                  <span className="section-text__bold">8 new requests. 👀</span>
                </p>
              </div>
              <Link to="/" className="popular-link">
                Review refund requests
              </Link>
            </SectionBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
