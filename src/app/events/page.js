"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Events() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <section id="events" className="events section">
      <div className="container section-title" data-aos="fade-up">
        <p>
          <span className="description-title">Sự kiện</span>
        </p>{" "}
        <h2>
          Sự kiện tại Sincay
          <br />
        </h2>
      </div>
      {/* event */}
      <div className="container mt-5">
        <div className=" row g-4 d-flex">
          {/* Carousel chính */}
          <div className="col-lg-7 col-md-7 overflow-hidden  ">
            <Splide
              ref={mainRef}
              options={{
                type: "fade",
                pagination: false,
                height: "500px",
                arrows: false,
              }}
              aria-label="Main carousel">
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4 "
                  style={{
                    backgroundImage: "url(/img/events_1.jpg) ",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Tin tức</h3>
                  <div className="tit align-self-start">Ra mắt MEMBERSHIP</div>
                  <p className="description">CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH MEMBERSHIP  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4  "
                  style={{
                    backgroundImage: "url(/img/events_2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Sự kiện</h3>
                  <div className="tit align-self-start">Ưu đãi</div>
                  <p className="description">Mì Tương Đen Chuẩn Vị Hàn – Ưu Đãi Từ 59K, Ăn Là Mê!</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4  "
                  style={{
                    backgroundImage: "url(/img/events_3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Tin tức</h3>
                  <div className="tit align-self-start">Ra mắt</div>
                  <p className="description">Thử ngay kẻo lỡ thực đơn Hàn Quốc mới toanh “sang xịn mịn”  </p>
                </div>
              </SplideSlide>{" "}
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4 "
                  style={{
                    backgroundImage: "url(/img/events_1.jpg) ",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Tin tức</h3>
                  <div className="tit align-self-start">Ra mắt MEMBERSHIP</div>
                  <p className="description">CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH MEMBERSHIP  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4  "
                  style={{
                    backgroundImage: "url(/img/events_2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Sự kiện</h3>
                  <div className="tit align-self-start">Ưu đãi</div>
                  <p className="description">Mì Tương Đen Chuẩn Vị Hàn – Ưu Đãi Từ 59K, Ăn Là Mê!</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className="event-item d-flex flex-column justify-content-end p-4  "
                  style={{
                    backgroundImage: "url(/img/events_3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}>
                  <h3>Tin tức</h3>
                  <div className="tit align-self-start">Ra mắt</div>
                  <p className="description">Thử ngay kẻo lỡ thực đơn Hàn Quốc mới toanh “sang xịn mịn” </p>
                </div>
              </SplideSlide>
            </Splide>
          </div>

          {/* Thumbnail bên phải */}
          <div className="col-lg-5 col-md-5">
            <Splide
              ref={thumbsRef}
              options={{ fixedHeight: 180, gap: 10, direction: "ttb", height: "500px", pagination: false, cover: true, isNavigation: true, arrows: true }}
              aria-label="Thumbnail carousel">
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/event.jpg" alt="..." width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ra mắt MEMBERSHIP</h5>
                    <p className="card-text">CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH MEMBERSHIP </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/events_2.png" alt="Thumb 2" width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ưu đãi</h5>
                    <p className="card-text">Mì Tương Đen Chuẩn Vị Hàn – Ưu Đãi Từ 59K, Ăn Là Mê!</p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/events_3.jpg" alt="Thumb 3" width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ra mắt </h5>
                    <p className="card-text">Thử ngay kẻo lỡ thực đơn Hàn Quốc mới toanh “sang xịn mịn” từ chuỗi nhà hàng Sincay</p>
                  </div>
                </div>
              </SplideSlide>{" "}
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/event.jpg" alt="..." width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ra mắt MEMBERSHIP</h5>
                    <p className="card-text">CHÍNH THỨC RA MẮT CHƯƠNG TRÌNH MEMBERSHIP </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/events_2.png" alt="Thumb 2" width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ưu đãi</h5>
                    <p className="card-text">Mì Tương Đen Chuẩn Vị Hàn – Ưu Đãi Từ 59K, Ăn Là Mê!</p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="card  d-flex flex-row h-100 ">
                  <div className="cardimg">
                    <Image src="/img/events_3.jpg" alt="Thumb 3" width={200} height={175} />
                  </div>
                  <div className="card-body h-100 w-75">
                    <h5 className="card-title">Ra mắt </h5>
                    <p className="card-text">Thử ngay kẻo lỡ thực đơn Hàn Quốc mới toanh “sang xịn mịn” từ chuỗi nhà hàng Sincay</p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}
