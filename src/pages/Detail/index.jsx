import {
  getProductById,
  getProductByCategory,
} from "assets/fake-data/products";
import FoodItem from "components/FoodItem";
import Helmet from "components/Helmet";
import DetailInfo from "container/Detail/DetailInfo";
import ProductInfo from "container/Detail/Info";
import PreviewImage from "container/Detail/PreviewImage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bottom,
  BottomTitle,
  Container,
  ProductList,
  Top,
  Wrapper,
} from "./styles";

const Detail = () => {
  const { id } = useParams();
  const detail = getProductById(id);
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    if (detail) {
      const category = getProductByCategory(detail.categoryId).filter(
        (item) => item.id !== detail.id
      );
      setCatData(category);
    }
  }, [detail]);

  return (
    <Helmet title={detail.title}>
      <Container>
        <Top>
          <Wrapper>
            <PreviewImage product={detail} />
            <div className="hidden laptop:block">
              <DetailInfo product={detail} />
            </div>
          </Wrapper>
          <ProductInfo product={detail} />
          <div className="block laptop:hidden -mt-2">
            <DetailInfo product={detail} />
          </div>
        </Top>
        <Bottom>
          <BottomTitle>PRODUCTS SAME CATEGORY</BottomTitle>
          <ProductList>
            {catData.map((data, index) => (
              <FoodItem key={index} data={data} />
            ))}
          </ProductList>
        </Bottom>
      </Container>
    </Helmet>
  );
};

export default Detail;
