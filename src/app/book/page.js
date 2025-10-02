export default function Book() {
  return (
    <>
      {/* Book A Table Section */}
      <section id="book-a-table" className="book-a-table section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">
              <br />
              ĐẶT BÀN
            </span>
          </p>{" "}
          <h2> Điền thông tin đặt bàn tại đây</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-0" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-7 reservation-img shadow-lg  " style={{ backgroundImage: "url(/img/book_1.jpg)" }} />
            <div className="col-lg-5 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay={200}>
              <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-lg-6 col-md-6">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Tên" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Số điện thoại" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="date" name="date" className="form-control" id="date" placeholder="Ngày" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="time" className="form-control" name="time" id="time" placeholder="Giờ" required="" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input type="number" className="form-control" name="people" id="people" placeholder="Số lượng khách" required="" />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Ghi chú" defaultValue={""} />
                </div>
                <div className="text-center mt-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                  <button type="submit">Đặt bàn</button>
                </div>
              </form>
            </div>
            {/* End Reservation Form */}
          </div>
        </div>
      </section>
      {/* /Book A Table Secti
       */}
    </>
  );
}
