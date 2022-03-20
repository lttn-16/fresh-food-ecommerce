import DetailInfo from "container/Detail/DetailInfo";
import ProductInfo from "container/Detail/Info";
import PreviewImage from "container/Detail/PreviewImage";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ButtonWrapper,
  Container,
  Content,
  Wrapper,
  Button,
  Backdrop,
} from "./styles";
import { remove } from "redux/Modal/ModalSlice";

const Modal = () => {
  const [detail, setDetail] = useState(null);
  const product = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(product);
  }, [product]);

  return (
    detail && (
      <Container expand={detail}>
        <Backdrop expand={detail} onClick={() => dispatch(remove())}></Backdrop>
        <Content expand={detail}>
          <Wrapper>
            <PreviewImage product={detail} />
            <div className="hidden laptop:block">
              <DetailInfo product={detail} />
            </div>
          </Wrapper>
          <ProductInfo product={detail} isModal />
          <div className="block laptop:hidden -mt-2">
            <DetailInfo product={detail} />
          </div>
          <ButtonWrapper onClick={() => dispatch(remove())}>
            <Button>Close</Button>
          </ButtonWrapper>
        </Content>
      </Container>
    )
  );
};

export default Modal;
