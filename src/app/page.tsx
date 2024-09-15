import CryptoList from "@/components/Cryptolist";

const HomePage = () => {
  return (
    <div className="p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">CoinSightDev</h1>
      <CryptoList />
    </div>
  );
};

export default HomePage;
