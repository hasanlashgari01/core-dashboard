import SectionBox from "../../components/SectionBox/SectionBox";
import useTitle from "../../hooks/useTitle";
import "./Customers.css";

function Customers() {
  useTitle("Customers");

  return (
    <div className="products">
      <div className="section-wrapper">
        <h1 className="section-title">Customers</h1>
        <section className="customers-wrapper">
          <div className="left">
            <SectionBox title="Total customers"></SectionBox>
            <SectionBox title="Traffic channel"></SectionBox>
            <SectionBox title="Active customers"></SectionBox>
            <SectionBox title="Share your products"></SectionBox>
          </div>
          <div className="right">
            <SectionBox title="Refund requests"></SectionBox>
            <SectionBox title="Top country"></SectionBox>
            <SectionBox title="Top country"></SectionBox>
            <SectionBox title="Message"></SectionBox>
            <SectionBox title="New customer"></SectionBox>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Customers;
