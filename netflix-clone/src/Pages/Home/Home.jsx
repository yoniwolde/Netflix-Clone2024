import React from 'react'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
// import Row from "../../Components/Rows/Row/Row"


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* <Row/> */}
      <Footer/>
    </>
  );
}

export default Home