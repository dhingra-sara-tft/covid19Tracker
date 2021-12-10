import { useEffect , useState } from "react"
import React  from 'react'
import './covid.css'

const Covid = () => {

    const [data, setdata] = useState([]);

    

   const getCovidData = async () =>{
       try{
const res =  await fetch("https://data.covid19india.org/data.json");
const actualData =  await res.json();
setdata(actualData.statewise[0]);
       }
catch(err){
    console.log(err);
}
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
      <div>
        <section>
          <h1> LIVE </h1>
          <h2>Covid-19 Tracker</h2>

          <ul>
            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>OUR </span> COUNTRY
              </p>
              <p className="card__total card__name">INDIA</p>
            </li>

            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>TOTAL </span> RECOVERED
              </p>
              <p className="card__total card__name">{data.recovered}</p>
            </li>

            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>TOTAL </span> CONFIRMED
              </p>
              <p className="card__total card__name">{data.confirmed}</p>
            </li>

            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>TOTAL</span> DEATHS
              </p>
              <p className="card__total card__name">{data.deaths}</p>
            </li>

            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>TOTAL </span> ACTIVE
              </p>
              <p className="card__total card__name">{data.active}</p>
            </li>

            <li className="card">
              <div className="card__main"></div>
              <div className="card__inner"></div>
              <p className="card__name">
                <span>LAST </span> UPDATED
              </p>
              <p className="card__total card__name">{data.lastupdatedtime}</p>
            </li>

          </ul>
        </section>
      </div>
    );
}

export default Covid
