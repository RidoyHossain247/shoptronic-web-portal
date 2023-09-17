import React from 'react';
import HeroBanner from '../components/Banner/HeroBanner';
import BestSellingProduct from '../components/BestSellingProduct/BestSellingProduct';
import TopCategory from "../components/TopCategory/TopCategory";
import TrendingProduct from '../components/TrendingProduct/TrendingProduct';
export default function Page() {
  return (
    <>
      <TopCategory />
      <TrendingProduct />
      <HeroBanner />
      <BestSellingProduct />
    </>
  )
}