import React from "react";
import PropTypes, { bool } from "prop-types";

const Footer = ({ title, postcode, isOpen }) => {
  // const { title, postcode } = props;
  return (
    <div>
      <hr />
      <h3 style={style.title}>
        {title} Copy {new Date().getFullYear()}
      </h3>
      <p style={{ color: "green" }}>
        {postcode} {isOpen.toString()}
      </p>
    </div>
  );
};

const style = {
  title: {
    color: "red",
  },
};

Footer.propTypes = {
  title: PropTypes.string,
  postcode: PropTypes.number,
  isOpen: bool,
};

export default Footer;
