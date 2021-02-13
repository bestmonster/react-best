import React from "react";
import { Table, Image, Badge, Spinner } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setErroe] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course",
        {
          cancelToken: cancelToken.current.token,
        }
      );
      //   console.log(resp.data.data);
      setProduct(resp.data.data);
    } catch (error) {
      // console.log(error);
      setErroe(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();

    return () => {
      // console.log("Exit product page");
      cancelToken.current.cancel();
    };
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <p>System Broken!!!! Try again</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
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
              <th>Tool</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p, index) => {
              return (
                <tr kep={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.detail}</td>
                  <td>
                    {format(new Date(p.date), "dd MMM yyyy", { locale: th })}
                  </td>
                  <td>
                    <Badge variant="success">{p.view}</Badge>
                  </td>
                  <td>
                    <Image src={p.picture} rounded alt={p.title} width={100} />
                  </td>
                  <td>
                    <Link to="/detail">
                      <BsEyeFill />
                    </Link>
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
