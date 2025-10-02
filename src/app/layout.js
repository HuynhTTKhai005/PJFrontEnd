"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Footer from "./component/footer";
import Header from "./component/header";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "glightbox/dist/css/glightbox.min.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Sincay</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
 

        {/* Vendor JS Files */}
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/php-email-form/validate.js" strategy="lazyOnload" />
        <Script src="/vendor/aos/aos.js" strategy="lazyOnload" />
        <Script src="/vendor/glightbox/js/glightbox.min.js" strategy="lazyOnload" />
        <Script src="/vendor/purecounter/purecounter_vanilla.js" strategy="lazyOnload" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        {/* Main JS File */}
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
