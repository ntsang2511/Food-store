import Navbar from "../components/Navbar";

function Pay() {
  return (
    <>
      <Navbar />
      <div className="invoice">
        <div className="invoice__title">
          <h1>Thanh toán</h1>
        </div>
        <div className="invoice__information"></div>
        <div className="invoice__information-item">
          <h4>Hình thức thanh toán</h4>
          <input type="text" className="invoice__information-item-input" />
        </div>
        <div className="invoice__information-item">
          <h4>Thông tin hóa đơn</h4>
          <textarea
            name="invoice__infomation-item-textarea"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="invoice__information-item">
          <h4>Hình thức thanh toán</h4>
          <input type="text" className="invoice__information-item-input" />
        </div>
      </div>
    </>
  );
}

export default Pay;
