import React, { Component } from "react";
import { Link } from "gatsby";
import logoImage from "../images/logo-iai-kab.png";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add("active");
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });
  };

  render() {
    return (
      <div>
        <header className="header-area">
          <div className="header-top-action">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="top-action-content">
                    <div className="info-box info-box-1 d-flex align-items-center">
                      <ul className="d-flex align-items-center">
                        <li>
                          <a href="mailto:iai.blitarkab@gmail.com">
                            <i className="fa fa-envelope"></i>
                            iai.blitarkab@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="top-action-content info-action-content">
                    <div className="info-box info-box-2 d-flex align-items-center justify-content-end">
                      <ul className="top-action-list d-flex align-items-center">
                        <li>
                          <a
                            href="https://www.facebook.com/groups/apotekerblitar/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/iai.blitarkabofficial/"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`header-top header-menu-action ${
              this.state.sticky ? "header-fixed" : ""
            }`}
          >
            <div className="container">
              <div className="row ostion-top-wrap">
                <div className="col-lg-5 col-sm-5 site-branding">
                  <div className="logo-action d-flex align-items-center">
                    <div className="ostion-logo">
                      <Link to="/">
                        <img
                          src={logoImage}
                          alt="IAI Kabupaten Blitar"
                          title="Ikatan Apoteker Indonesia Kabupaten Blitar"
                        />
                      </Link>
                    </div>
                    <div className="header-btn ml-auto">
                      <a
                        href="https://apoteker.or.id/#!/access/"
                        rel="noreferrer"
                        target="_blank"
                        className="theme-btn"
                      >
                        Aplikasi SIAP
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-7 ostion-menu">
                  <div className="ostion-menu-innner">
                    <div className="ostion-menu-content">
                      <div className="navigation-top">
                        <nav className="main-navigation">
                          <ul>
                            <li className="active">
                              <Link to="/">Beranda</Link>
                            </li>
                            <li>
                              <Link to="/kegiatan">Kegiatan</Link>
                            </li>
                            <li>
                              <Link to="/berita">Berita</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="mobile-menu-toggle">
                      <i className="fa fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav-container">
            <div className="humburger-menu">
              <div className="humburger-menu-lines side-menu-close"></div>
            </div>
            <div className="side-menu-wrap">
              <ul className="side-menu-ul">
                <li className="sidenav__item">
                  <Link to="/">Beranda</Link>
                </li>
                <li className="sidenav__item">
                  <Link to="/kegiatan">Kegiatan</Link>
                </li>
                <li className="sidenav__item">
                  <Link to="/berita">Berita</Link>
                </li>
              </ul>
              <div className="side-btn">
                <a
                  href="https://apoteker.or.id/#!/access/"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-btn"
                >
                  Aplikasi SIAP
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavOne;
