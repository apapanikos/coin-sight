"use client";

import { useEffect, useState } from "react";
import { getCryptoPrices } from "../app/api/crypto/coingecko";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoPrices();
      setCryptos(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {cryptos.map((crypto) => (
        <li key={crypto.id}>
          {crypto.name}: ${crypto.current_price}
        </li>
      ))}
    </ul>
  );
};

export default CryptoList;
