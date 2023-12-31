import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ list }) => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((item, index) => {
            const arias = index?.length ? { "aria-label": "curent-page" } : {};
            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Breadcrumb;
