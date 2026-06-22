import FavoriteButton from "./FavoriteButton";

export default {
    title: "TMDB/FavoriteButton",
    component: FavoriteButton,
    argTypes: {
        isFavorite: {
            control: "boolean",
        },
    }
};

export const Favorite = {
    args: {
        isFavorite:true,
    }
};

export const NotFavorite = {
    args: {
        isFavorite:false,
    },
};

export const Disabled = {
  args: {
    isFavorite: false,
    disabled: true,
  },
};