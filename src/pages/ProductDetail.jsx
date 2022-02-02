import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data));
  }, [name]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category?.categoryName}</Card.Meta>
            <Card.Description>
              Birim Fiyati: {product.unitPrice} -
              Stok Adedi: {product.unitsInStock} -
              Birim Miktari: {product.quantityPerUnit}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Sepetten Cikar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
