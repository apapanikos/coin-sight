// src/app/api/crypto/coingecko.ts
import axiosInstance from "@/utils/axios";

// Function to fetch cryptocurrency prices from CoinGecko
export const getCryptoPrices = async () => {
  try {
    const response = await axiosInstance.get("/coins/markets", {
      params: {
        vs_currency: "usd", // Currency to return the data in
        order: "market_cap_desc", // Order by market cap
        per_page: 10, // Number of cryptocurrencies to fetch
        page: 1, // Page number
        sparkline: false, // Whether or not to include sparkline data
      },
    });
    return response.data; // Return the API data
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    throw error; // Handle or rethrow the error as needed
  }
};
