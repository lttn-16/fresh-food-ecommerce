import category from "assets/fake-data/category";
import { getProductByCategory, homeData } from "assets/fake-data/products";
import FoodItem from "components/FoodItem";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonWrapper,
  Container,
  Description,
  FoodList,
  Title,
  TitleGreen,
  Wrapper,
} from "./styles";

const Food = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(homeData);
  }, []);

  const handleClickCategory = (catId) => {
    if (catId === 0) {
      setActiveCategory(0);
      setData(homeData);
    } else {
      setActiveCategory(catId);
      const foodData = getProductByCategory(catId);
      setData(foodData);
    }
  };

  return (
    <Container className="bg-[url('./assets/images/foodbg.jpg')]">
      <Wrapper>
        <Title>
          What will <TitleGreen> you </TitleGreen>eat today?
        </Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias
          aliquam eveniet, iure praesentium dicta ex dolorum inventore itaque
          minus repudiandae, odio provident? Velit architecto natus expedita
          non? Odio, dolorum.
        </Description>
        <ButtonWrapper>
          {category.map((item, index) => (
            <div data-aos="zoom-in" key={index}>
              <Button
                active={item.id === activeCategory}
                key={item.id}
                onClick={() => handleClickCategory(item.id)}
              >
                {item.display}
              </Button>
            </div>
          ))}
        </ButtonWrapper>
        <FoodList>
          {data.map((data) => (
            <div data-aos="fade-up">
              <FoodItem key={data.id} data={data} />
            </div>
          ))}
        </FoodList>
      </Wrapper>
    </Container>
  );
};

export default Food;
