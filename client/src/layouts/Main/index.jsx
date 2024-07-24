import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PropTypes from "prop-types";
Main.propTypes = {
  children: PropTypes.object,
};

export default function Main(props) {
  return (
    <>
      <Header />
      {props?.children}
      <Footer />
    </>
  );
}
