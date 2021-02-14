import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Spinner, CardDeck, Card, Badge, Button } from "react-bootstrap";

const DetailPage = () => {
  const { id, title } = useParams();
  const history = useHistory();

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setErroe] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id,
        {
          cancelToken: cancelToken.current.token,
        }
      );
      //   console.log(resp.data.data);
      setDetail(resp.data.data);
    } catch (error) {
      // console.log(error);
      setErroe(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(id);

    return () => {
      // console.log("Exit product page");
      cancelToken.current.cancel();
    };
  }, [id]);

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
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">
          <Button
            variant="secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            Back to Menu
          </Button>{" "}
          <h2>
            {title} - [{id}]
          </h2>
          <div className="row mt-4">
            {detail.length > 0 ? (
              detail.map((d, index) => {
                return (
                  <div className="col-4" key={d.ch_id}>
                    <CardDeck>
                      <Card className="mb-4 shadow-sm">
                        <Card.Body>
                          <Card.Title>
                            {d.ch_title}
                            <p>
                              <span>view : </span>
                              <Badge variant="warning">{d.ch_view}</Badge>
                            </p>
                          </Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </Card.Footer>
                      </Card>
                    </CardDeck>
                  </div>
                );
              })
            ) : (
              <div className="mx-auto">No data in website</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
