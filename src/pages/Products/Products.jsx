import "swiper/css";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y } from "swiper";
import Chart from "../../components/Chart/BarChart";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import SectionBox from "../../components/SectionBox/SectionBox";
import basket from "../../../public/svg/basket.svg";
import { data } from "../../data/data";
import product1 from "../../../public/images/img_square_01.png";
import product2 from "../../../public/images/img_square_02.png";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

function Products() {
  useTitle("Products");

  const [tables, setTabkes] = useState([{}, {}]);

  return (
    <div className="products">
      <div className="section-wrapper">
        <h1 className="section-title">Products dashboard</h1>
        <SectionBox title="Overview">
          <Swiper
            modules={[A11y]}
            spaceBetween={12}
            slidesPerView={"auto"}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <OverviewCard
                stroke="#83BF6E"
                bgColor="rgba(181, 228, 202, 0.25)"
                icon={basket}
                title="Earning"
                count="128k"
                percent={37.8}
                status={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OverviewCard
                stroke="#2A85FF"
                bgColor="rgba(177, 229, 252, 0.25)"
                icon={basket}
                title="Customer"
                count="512"
                percent={37.8}
                status={false}
              />
            </SwiperSlide>
            <SwiperSlide>
              <OverviewCard
                stroke="#8E59FF"
                bgColor="rgba(202, 189, 255, 0.25)"
                icon={basket}
                title="Payouts"
                count="64k"
                percent={37.8}
                status={true}
              />
            </SwiperSlide>
          </Swiper>
        </SectionBox>

        <div className="products-wrapper section-space">
          <div className="left">
            <SectionBox title="Product activity">
              <table className="products-table_activity">
                <thead className="products-activity__thead">
                  <tr className="products-activity__thead-tr">
                    <th className="products-activity__week products-activity__th">
                      Week
                    </th>
                    <th className="products-activity__products products-activity__th">
                      Products
                    </th>
                    <th className="products-activity__views products-activity__th">
                      Views
                    </th>
                    <th className="products-activity__likes products-activity__th">
                      Likes
                    </th>
                    <th className="products-activity__comments products-activity__th">
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody className="products-activity__tbody">
                  <tr className="products-activity__tbody-tr">
                    <td className="products-activity__week products-activity__td">
                      25 Sep - 1 Oct
                    </td>
                    <td className="products-activity__products products-activity__td">
                      <span className="products-activity__products-count">
                        8
                      </span>
                      <span className="products-activity__td-percent products-activity__td-percent--up">
                        37.8%
                      </span>
                    </td>
                    <td className="products-activity__views products-activity__td">
                      <span className="products-activity__views-count">
                        24k
                      </span>
                      <span className="products-activity__td-percent products-activity__td-percent--up">
                        37.8%
                      </span>
                    </td>
                    <td className="products-activity__likes products-activity__td">
                      <span className="products-activity__likes-count">48</span>
                      <span className="products-activity__td-percent products-activity__td-percent--down">
                        37.8%
                      </span>
                    </td>
                    <td className="products-activity__comments products-activity__td">
                      <span className="products-activity__comments-count">
                        24k
                      </span>
                      <span className="products-activity__td-percent products-activity__td-percent--down">
                        37.8%
                      </span>
                    </td>
                  </tr>
                  <tr className="products-activity__tbody-tr">
                    <td className="products-activity__week products-activity__td">
                      25 Sep - 1 Oct
                    </td>
                    <td className="products-activity__products products-activity__td">
                      8
                    </td>
                    <td className="products-activity__views products-activity__td">
                      24k
                    </td>
                    <td className="products-activity__likes products-activity__td">
                      48
                    </td>
                    <td className="products-activity__comments products-activity__td">
                      16
                    </td>
                  </tr>
                </tbody>
              </table>
            </SectionBox>
          </div>
          <div className="right">
            <SectionBox title="Product views">
              <div className="section-chart">
                <Chart data={data} height={170} />
              </div>
            </SectionBox>
          </div>
        </div>

        <SectionBox title="Products">
          <table className="products-table">
            <thead className="products-table__thead">
              <tr className="products-table__thead-tr">
                <th className="products-table__thead-checkbox">
                  <label htmlFor="product">
                    <input type="checkbox" name="" id="" />
                  </label>
                </th>
                <th className="products-table__thead-info">Product</th>
                <th className="products-table__thead-details">
                  <span className="products-table__thead-status">Status</span>
                  <span className="products-table__thead-price">Price</span>
                  <span className="products-table__thead-sales">Sales</span>
                  <span className="products-table__thead-views">Views</span>
                  <span className="products-table__thead-likes">Likes</span>
                </th>
              </tr>
            </thead>
            <tbody className="products-table__tbody">
              {tables.map((table, index) => (
                <tr className="products-table__tbody-tr" key={index}>
                  <td className="products-table__tbody-checkbox">
                    <label htmlFor="product">
                      <input type="checkbox" name="" id="" />
                    </label>
                  </td>
                  <td className="products-table__tbody-info">
                    <img
                      className="products-table__tbody-info-img"
                      src={product1}
                      alt=""
                    />
                    <div className="products-table__tbody-info-content">
                      <h4 className="products-table__tbody-info-name">
                        Bento Matte 3D Illustration
                      </h4>
                      <h6 className="products-table__tbody-info-category">
                        UI design kit
                      </h6>
                    </div>
                  </td>
                  <td className="products-table__tbody-details-wrapper">
                    <div className="products-table__tbody-details">
                      <span>
                        <span
                          className={
                            status[0]
                              ? "products-table__tbody-status-active"
                              : "products-table__tbody-status-deactive"
                          }
                        >
                          {status[0] ? "Active" : "Deactive"}
                        </span>
                      </span>
                      <span className="products-table__tbody-price">$98</span>
                      <span className="products-table__tbody-sales">
                        <h4 className="products-table__tbody-sales-price products-table--bg-color">
                          $3,200
                        </h4>
                        <span className="products-table__tbody-sales-percent">
                          55.8%
                        </span>
                      </span>
                      <span className="products-table__tbody-views">
                        <span className="products-table--bg-color">48k</span>
                      </span>
                      <span className="products-table__tbody-likes">
                        <span className="products-table--bg-color">8</span>
                      </span>
                    </div>

                    <div className="products-table__tbody-access">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionBox>
      </div>
    </div>
  );
}

export default Products;
