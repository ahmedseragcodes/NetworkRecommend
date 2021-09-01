import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [networkRecommendations] = useState([
    {
      Fitness1: "Tik Tok",
      Fitness2: "Instagram",
      Fitness3: "Facebook",
      Fitness4: "Youtube"
    },
    { Finance1: "Google Search", Finance2: "Facebook", Finance3: "Youtube" },
    {
      RealEstate1: "Google Search",
      RealEstate2: "Tik Tok",
      RealEstate3: "Instagram",
      RealEstate4: "Facebook"
    },
    {
      Dentistry1: "Google Search",
      Dentistry2: "Instagram",
      Dentistry3: "Facebook"
    },
    {
      Lawyer1: "Google Search",
      Lawyer2: "Facebook",
      Lawyer3: "Tik Tok"
    }
  ]);

  const [industryType, setIndustryType] = useState("");

  const handleIndustryChange = function (event) {
    setIndustryType(event.target.value);
  };
   // eslint-disable-next-line eqeqeq
  if (industryType == "Fitness") {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
        <p>{networkRecommendations[0].Fitness1}</p>
        <p>{networkRecommendations[0].Fitness2}</p>
        <p>{networkRecommendations[0].Fitness3}</p>
        <p>{networkRecommendations[0].Fitness4}</p>
      </div>
    );
  } //End Fitness
   // eslint-disable-next-line eqeqeq
  else if (industryType == "Finance") {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
        <p>{networkRecommendations[1].Finance1}</p>
        <p>{networkRecommendations[1].Finance2}</p>
        <p>{networkRecommendations[1].Finance3}</p>
      </div>
    );
  } //End Finance
  // eslint-disable-next-line eqeqeq
  else if (industryType == "Real Estate") {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
        <p>{networkRecommendations[2].RealEstate1}</p>
        <p>{networkRecommendations[2].RealEstate2}</p>
        <p>{networkRecommendations[2].RealEstate3}</p>
        <p>{networkRecommendations[2].RealEstate4}</p>
      </div>
    );
  } //End Real Estate
  // eslint-disable-next-line eqeqeq
  else if (industryType == "Dentistry") {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
        <p>{networkRecommendations[3].Dentistry1}</p>
        <p>{networkRecommendations[3].Dentistry2}</p>
        <p>{networkRecommendations[3].Dentistry3}</p>
      </div>
    );
  } //End Dentistry
  // eslint-disable-next-line eqeqeq
  else if (industryType == "Lawyer") {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
        <p>{networkRecommendations[4].Lawyer1}</p>
        <p>{networkRecommendations[4].Lawyer2}</p>
        <p>{networkRecommendations[4].Lawyer3}</p>
      </div>
    );
  } // End Lawyer
  else {
    return (
      <div>
        <h1>Network Recommend</h1>
        <h3>
          Choose Your Industry & We'll Show You The Best Places to Create
          Content & Advertise to Reach Your Target Market
        </h3>
        <form>
          <label htmlFor="industryType">
            <select
              name={industryType}
              value={industryType}
              onChange={handleIndustryChange}
            >
              <option value="Industry">Industry</option>
              <option value="Fitness">Fitness</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Finance">Finance</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Lawyer">Lawyer</option>
            </select>
          </label>
        </form>
      </div>
    );
  } //End No Entry Yet
}
