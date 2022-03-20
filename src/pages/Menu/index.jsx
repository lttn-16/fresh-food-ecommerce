import Button from "components/Button";
import FoodItem from "components/FoodItem";
import Helmet from "components/Helmet";
import Pagination from "components/Pagination";
import SideBar from "container/Menu/SideBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, update } from "redux/Filter/FilterSlice";
import {
  Backdrop,
  Container,
  DataWrapper,
  SideBarWrapper,
  Wrapper,
} from "./styles";

const SIZE_PER_PAGE = 9;

const Menu = () => {
  const [data, setData] = useState();
  const [expand, setExpand] = useState(false);
  const [page, setPage] = useState(0);

  const product = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(product.slice(0, 9));
    setPage(0);
  }, [product]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (newPage === 0) {
      setData(product.slice(0, 9));
    } else {
      setData(product.slice(9));
    }
  };

  const handleCloseFilter = () => {
    setExpand(false);
  };

  return (
    <Helmet title="Menu">
      <Container>
        <Button
          onClick={() => setExpand(true)}
          type="primary"
          className="laptop:hidden mb-3"
        >
          Filter
        </Button>
        <Backdrop expand={expand} onClick={handleCloseFilter}></Backdrop>
        <SideBarWrapper expand={expand}>
          <i
            onClick={handleCloseFilter}
            className="bx bx-left-arrow-alt text-2xl my-2 laptop:hidden"
          ></i>
          <SideBar />
          <Button
            type="primary"
            onClick={() => {
              dispatch(clear());
              dispatch(update());
            }}
          >
            Reset
          </Button>
        </SideBarWrapper>
        <Wrapper>
          <DataWrapper>
            {data?.map((data) => (
              <FoodItem key={data.id} data={data} />
            ))}
          </DataWrapper>
          <Pagination
            page={page}
            sizePerPage={SIZE_PER_PAGE}
            totalSize={product.length}
            onPageChange={handlePageChange}
            className="w-full flex justify-end mt-3"
          />
        </Wrapper>
      </Container>
    </Helmet>
  );
};

export default Menu;
