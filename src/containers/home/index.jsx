import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { ArrowRight } from "lucide-react";
import saasLogoImg from "./../../assets/images/saasLabs_logo.svg";

const Home = () => {
  return (
    <div className="home-page">
      <img src={saasLogoImg} alt="logo" />
      <div className="home-page__header">
        only for illustration purpose
      </div>
      <main className="home-page__main">
        <Link to="/percentage-funded" className="btn-link">
          <Button className="btn-primary" size="md">
            Go to Percentage funded table
            <ArrowRight size={16} />
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
