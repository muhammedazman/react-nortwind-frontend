import React from "react";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CardDetail from "../pages/CardDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail />} />
              <Route path="/cart" element={<CardDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
