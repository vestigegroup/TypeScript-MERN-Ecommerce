import {
  ProductDetailsAction,
  ProductDetailsActionTypes,
  ProductDetailsState,
} from "./../types/ProductDetails";
import {
  ProductListAction,
  ProductListActionTypes,
  ProductListState,
} from "../types/ProductList";
import {
  ProductDeleteAction,
  ProductDeleteActionTypes,
  ProductDeleteState,
} from "../types/";

const initialProductListState: ProductListState = {
  products: [],
  loading: false,
};

export const productListReducer = (
  state: ProductListState = initialProductListState,
  action: ProductListAction
) => {
  switch (action.type) {
    case ProductListActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: initialProductListState.products };
    case ProductListActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: initialProductListState.loading,
        products: action.payload,
      };
    case ProductListActionTypes.PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        products: initialProductListState.products,
      };
    default:
      return state;
  }
};

const initialProductDetailsState: ProductDetailsState = {
  loading: false,
};

export const productDetailsReducer = (
  state: ProductDetailsState = initialProductDetailsState,
  action: ProductDetailsAction
) => {
  switch (action.type) {
    case ProductDetailsActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: initialProductDetailsState.product };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductDetailsActionTypes.PRODUCT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialProductDeleteState: ProductDeleteState = {
  loading: false,
};

export const productDeleteReducer = (
  state: ProductDeleteState = initialProductDeleteState,
  action: ProductDeleteAction
) => {
  switch (action.type) {
    case ProductDeleteActionTypes.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ProductDeleteActionTypes.PRODUCT_DELETE_SUCCESS:
      return { loading: true, success: true };
    case ProductDeleteActionTypes.PRODUCT_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
