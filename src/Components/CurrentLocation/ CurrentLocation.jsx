import axios from "axios";
import React, { useEffect, useState } from "react";
import apiKeys from "../../apikeys";

const CurrentLocation = () => {
  const [locationdata, setLocationdata] = useState();

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (err) => reject(err)
      );
    });
  }

  async function apicall(lat, lon) {
    const res = await axios.get(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await res.data;
    console.log(data);
    setLocationdata({
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
    });
    // console.log(locationdata);
  }
  console.log(locationdata);


  useEffect(() => {
    if (navigator.geolocation) {
      getCurrentPosition().then((data) =>
        apicall(data.coords.latitude, data.coords.longitude)
      );
    } else {
      console.log("Location is not present");
    }
  }, []);

  return <div> CurrentLocation</div>;
};

export default CurrentLocation;
