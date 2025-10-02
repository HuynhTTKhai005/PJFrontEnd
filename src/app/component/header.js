import Link from "next/link";
export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto me-xl-0">
          SINCAY
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Trang chủ
                <br />
              </a>
            </li>
            <li>
              <a href="#about">Về chúng tôi</a>
            </li>
            <li>
              <a href="#menu">Thực đơn</a>
            </li>
            <li>
              <a href="#events">Sự kiện</a>
            </li>

            <li>
              <a href="#gallery">Không gian</a>
            </li>

            <li>
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <a className="btn-getstarted" href="#book-a-table">
          Đặt bàn
        </a>
      </div>
    </header>
  );
}
