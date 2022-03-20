import category from "assets/fake-data/category";
import size from "assets/fake-data/product-size";
import CheckBox from "components/Checkbox";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelect, update } from "redux/Filter/FilterSlice";
import { Container, List, Title, Wrapper } from "./styles";

const SideBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.initFilter);

  return (
    <Container>
      <Wrapper>
        <Title>Category</Title>
        <List>
          {category
            .filter((item) => item.id !== 0)
            .map((data) => (
              <CheckBox
                label={data.display}
                key={data.id}
                initialCheck={filter.category.includes(data.categorySlug)}
                onChange={(isChecked) => {
                  dispatch(
                    filterSelect({
                      type: "CATEGORY",
                      checked: isChecked,
                      item: data,
                    })
                  );
                  dispatch(update());
                }}
              />
            ))}
        </List>
      </Wrapper>
      <Wrapper>
        <Title>Size</Title>
        <List>
          {size.map((data, index) => (
            <CheckBox
              label={data.display}
              key={index}
              initialCheck={filter.size.includes(data.size)}
              onChange={(isChecked) => {
                dispatch(
                  filterSelect({ type: "SIZE", checked: isChecked, item: data })
                );
                dispatch(update());
              }}
            />
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
