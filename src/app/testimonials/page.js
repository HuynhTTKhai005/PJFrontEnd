"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">Cảm nhận khách hàng </span>
          </p>{" "}
          <h2>Khách hàng nói gì về Sincay</h2>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} spaceBetween={30} className="mySwiper">
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Không gian sạch sẽ, nhân viên thân thiện. Mì cay cấp độ 3 là vừa đủ, ăn ngon mà không bị quá gắt.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Lê Dương Bảo Lâm</h3>
                      <h4>Kỹ sư</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* End testimonial item */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Topping đầy đủ, nước dùng đậm đà. Mình đi nhóm 4 người ai cũng gọi thêm nước vì quá ngon.</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Huỳnh Em Ty Pi</h3>
                      <h4>Doanh nhân</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* End testimonial item */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Giá hơi nhỉnh hơn mấy quán khác nhưng chất lượng thì xứng đáng. Mình sẽ quay lại</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Trần Tuấn Phương</h3>
                      <h4>Ca sĩ</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* End testimonial item */}
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>Giá hơi nhỉnh hơn mấy quán khác nhưng chất lượng thì xứng đáng. Mình sẽ quay lại</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Nguyễn Thiên An</h3>
                      <h4>Sinh viên</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* End testimonial item */}
          </Swiper>
          {/* /Testimonials Section */}
        </div>
      </section>
    </>
  );
}
