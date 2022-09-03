import { useSelector } from "react-redux";

export const products = useSelector((state) => state.products.products);
