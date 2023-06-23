import React, { Fragment, Component } from "react";
import { Link } from "gatsby";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Fragment>
        <section className="footer-area">
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-desc">
                    <p>
                      © Copyright {new Date().getFullYear()} by{" "}
                      <Link to="/">iaikabupatenblitar.or.id</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          role="button"
          onKeyUp={this.scrollTop}
          tabIndex="0"
          onClick={this.scrollTop}
          id="back-to-top"
          className={this.state.scrollBtn ? "back-btn-shown" : ""}
        >
          <i className="fa fa-angle-up" title="Go top"></i>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
