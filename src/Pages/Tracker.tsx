import React from "react";
import { useState, useEffect } from "react";
import Map from "../components/Map";
import Hero from "../components/Hero";
import ApiResponse from "../models/api";

const apiKey = "at_8sYmaM9D3sksMmAkiDayufxTF1wOC";

const Tracker: React.FC = () => {
  const [enteredSearch, setEnteredSearch] = useState<string>("");
  const [position, setPosition] = useState<number[]>([]);
  const [data, setData] = useState<ApiResponse>({
    location: {
      country: "",
      timezone: "",
    },
    ip: "",
    isp: "",
  });

  useEffect(() => {
    //Produces a more accurate marker

    // navigator.geolocation.getCurrentPosition(
    //   (position) =>
    //     setPosition([position.coords.latitude, position.coords.longitude]),
    //   (error) => console.error(error)
    // );

    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        return fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${data.ip}`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setPosition([data?.location?.lat, data?.location?.lng]);
      })
      .catch((err) => console.error(err));
  }, []);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSearch(event.target.value);
  };

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault();

    const userInput = enteredSearch;

    //Regex Checks
    const isDomain = /^[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    const isIPv4 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    //Boolean check to fetch data on regex
    if (isDomain.test(userInput)) {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${enteredSearch}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setPosition([data?.location?.lat, data?.location?.lng]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isIPv4.test(userInput)) {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${enteredSearch}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setPosition([data?.location?.lat, data?.location?.lng]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
        <Hero onChange={inputChangeHandler} value={enteredSearch} data={data} />
      </form>
      {position.length > 0 && <Map position={position} />}
    </>
  );
};

export default Tracker;
