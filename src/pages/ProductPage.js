import React from "react";
import { Table, Image, Badge } from "react-bootstrap";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);

  const getData = async () => {
    try {
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      //   console.log(resp.data.data);
      setProduct(resp.data.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h3 className="display-5">Product page Page</h3>
        </div>
      </div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Detail</th>
              <th>Date</th>
              <th>view</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p, index) => {
              return (
                <tr kep={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.detail}</td>
                  <td>{p.date}</td>
                  <td>
                    <Badge variant="success">{p.view}</Badge>
                  </td>
                  <td>
                    <Image src={p.picture} rounded alt={p.title} width={100} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductPage;
