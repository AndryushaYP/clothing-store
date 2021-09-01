import React from "react";
import {
  PopupContainer,
  PopupWrapperContainer,
  ImageContainer,
  ItemInfoContainer,
  TitleContainer,
  DescriptionContainer,
  CloseButton,
} from "./Popup.styles";
import { useDispatch } from "react-redux";
import { removeSelectedItem } from "../../redux/shop/shop.actions";

const Popup = ({ selectedItem }) => {
  const popupClose = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(removeSelectedItem());
    }
  };

  const dispatch = useDispatch();
  return (
    <PopupContainer onClick={popupClose}>
      <PopupWrapperContainer>
        <ImageContainer src={selectedItem.imageUrl} />
        <ItemInfoContainer>
          <TitleContainer>SIZE & FIT</TitleContainer>
          <DescriptionContainer>
            Model's height: 185.5cm/6'1" Model is wearing: W 32" L 32"
          </DescriptionContainer>
          <TitleContainer>LOOK AFTER ME</TitleContainer>
          <DescriptionContainer>
            Machine wash according to instructions on care label
          </DescriptionContainer>
          <TitleContainer>ABOUT ME</TitleContainer>
          <DescriptionContainer>
            Stretch denim Black wash Body: 94% Cotton, 3% Ethylene Vinyl Acetate, 2% Polyester, 1%
            Elastane.
          </DescriptionContainer>
        </ItemInfoContainer>
        <CloseButton onClick={() => dispatch(removeSelectedItem())} />
      </PopupWrapperContainer>
    </PopupContainer>
  );
};

export default Popup;
