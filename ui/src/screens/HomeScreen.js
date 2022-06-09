import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router";

const HomeScreen = () => {
  const params = useParams();
  const keyword = params.keyword;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  //const products = [];

  return (
    <>
      <h1>Latest Prodcuts</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger" childern={error}></Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}></Product>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
