import React from 'react'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Rows/Row/Row";
import RowList from '../../Components/Rows/RowList/RowList';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Row />
      <RowList/>
      <Footer/>
    </>
  );
}

export default Home