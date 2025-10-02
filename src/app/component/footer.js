export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon" />
            <div className="address">
              <h4>Địa chỉ</h4>
              <p> 12 D. Trịnh Đình Thảo, Hòa Thạnh </p>
              <p>Tân Phú, Hồ Chí Minh</p>
              <p />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon" />
            <div>
              <h4>Liên hệ</h4>
              <p>
                <strong>Số điện thoại</strong> <span>+84 982 348 293</span>
                <br />
                <strong>Email:</strong> <span>mycaysincay@gamil.com</span>
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon" />
            <div>
              <h4>Giờ mở cửa </h4>
              <p>
                <strong>Thứ 2 - Thứ 7 </strong> <span>11AM - 23PM</span>
                <br />
                <strong>Chủ nhật</strong>: <span>Đóng cửa</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Theo dõi chúng tôi</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Sincay</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">KhaiHuynh</a>{" "}
          Distributed by <a href="https://themewagon.com">KhaiHuynh</a>
        </div>
      </div>
    </footer>
  );
}
