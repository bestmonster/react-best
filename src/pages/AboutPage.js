import React from "react";
import axios from 'axios';

const AboutPage = () => {

  const [confirm, setConfirm] = React.useState ('')
  const [datecovid, setDatecovid] = React.useState('')

  const getData = async () => {
    const resp = await axios.get('https://covid19.th-stat.com/api/open/today')
    // console.log(resp.data.Confirmed);
    // setConfirm(resp.data.Confirmed)
    setDatecovid(resp.data.UpdateDate)
  }

  React.useEffect( () => {

    // async function getData() {
    //   const resp = await axios.get('https://covid19.th-stat.com/api/open/today')
    //   // console.log(resp.data.Confirmed);
    //   setConfirm(resp.data.Confirmed)
    //   setDatecovid(resp.data.UpdateDate)
    // }

    getData()

  },[])

  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">About</h1>

        {
          confirm && (
            <p>All Case : {confirm} </p>
          )
        }

        <p>Date {datecovid}</p>
        {/* <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default AboutPage;
