import React from "react";
import { Link } from "gatsby";

const Pagination = ({ currentPage, numPages, slug }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/berita" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          {numPages > 1 && (
            <nav className="mb-5" aria-label="Navigasi Halaman Berita">
              <ul className="pagination justify-content-center">
                {!isFirst && (
                  <li className="page-item">
                    <Link to={prevPage} className="page-link" rel="prev">
                      ← Sebelumnya
                    </Link>
                  </li>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                  <li
                    className={`page-item${
                      i + 1 === currentPage ? " active" : ""
                    }`}
                    key={`pagination-number${i + 1}`}
                    style={{
                      margin: 0,
                    }}
                  >
                    <Link
                      className="page-link"
                      to={`${
                        i === 0 ? "/" + slug : "/" + slug + "/" + (i + 1)
                      }`}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
                {!isLast && (
                  <li className="page-item">
                    <Link className="page-link" to={nextPage} rel="next">
                      Selanjutnya →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
