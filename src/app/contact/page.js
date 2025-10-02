export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">LIÊN HỆ</span>
          </p>{" "}
          <h2>Nếu bạn cần hỗ trợ? Hãy liên hệ chúng tôi!</h2>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="mb-5">
            <iframe
              style={{ width: "100%", height: 400 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14902.180456860378!2d106.6390205!3d10.7746855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2zQ2FvIMSQ4bqzbmcgQ8O0bmcgTmdo4buHIFRow7RuZyBUaW4gVFAuSENN!5e1!3m2!1svi!2s!4v1758596886713!5m2!1svi!2s"
              allowFullScreen=""
            />
          </div>
          {/* End Google Maps */}
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={200}>
                <i className="icon bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Địa chỉ</h3>
                  <p>12 D. Trịnh Đình Thảo, Hòa Thạnh, Tân Phú, Hồ Chí Minh 700000</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={300}>
                <i className="icon bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Gọi cho chúng tôi</h3>
                  <p>+84 982 348 293</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={400}>
                <i className="icon bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email</h3>
                  <p>mycaysincay@gamil.com</p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay={500}>
                <i className="icon bi bi-clock flex-shrink-0" />
                <div>
                  <h3>
                    Thời gian mở cửa:
                    <br />
                  </h3>
                  <p>
                    <strong>Thứ 2 - Thứ 7</strong>: 11AM - 23PM; <br />
                    <strong>Chủ nhật</strong>: <span>Đóng cửa</span>
                  </p>
                </div>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={600}>
            <div className="row gy-4">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Tên" required="" />
              </div>
              <div className="col-md-6 ">
                <input type="email" className="form-control" name="email" placeholder="Email" required="" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Chủ đề" required="" />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows={6} placeholder="Nội dung" required="" defaultValue={""} />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Đang gửi lên</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
                <button type="submit">Gửi thư</button>
              </div>
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </section>
      {/* /Contact Section */}
    </>
  );
}
