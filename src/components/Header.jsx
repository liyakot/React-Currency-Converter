import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Header.module.css";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const [currentUSD, setCurrentUSD] = useState();
  const [currentEUR, setCurrentEUR] = useState();

  let config = {
    headers: {
      apikey: "CVuyb9gchkXR85V9rDLgAj0ENLRXDaVa",
    },
  };

  const getCurrencyRates = () => {
    const getCurrentUSD = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=USD",
        config
      )
      .then((res) => setCurrentUSD(res.data.rates.UAH.toFixed(4)))
      .catch((err) => console.log(err));

    const getCurrentEUR = axios
      .get(
        "https://api.apilayer.com/exchangerates_data/latest?base=EUR",
        config
      )
      .then((res) => setCurrentEUR(res.data.rates.UAH.toFixed(4)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCurrencyRates();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="US" svg className={styles.flag} />
        USD <span className={styles.rate}>{currentUSD}</span>
      </div>
      <div className={styles.currency}>
        <ReactCountryFlag countryCode="EU" svg className={styles.flag} />
        EUR <span className={styles.rate}>{currentEUR}</span>{" "}
      </div>
    </header>
  );
};

export default Header;
