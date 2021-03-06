import hats from "../../images/hats.jpg";
import sneakers from "../../images/sneakers.jpg";
import womens from "../../images/womens.jpg";
import mens from "../../images/mens.jpg";
import jackets from "../../images/jackets.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: hats,
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: jackets,
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: sneakers,
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: womens,
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: mens,
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
