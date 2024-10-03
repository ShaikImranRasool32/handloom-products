import React from 'react'
import SalesSummary from './SalesSummary'
import ProductPerformance from './ProductPerformance'
import CampaignPerformance from './CampaignPerformance'
import CustomerDemographics from './CustomerDemographics'
import RevenueChart from './RevenueChart'

const Marketing = () => {
  return (
    <div>
         <SalesSummary />
        <ProductPerformance />
        <CampaignPerformance />
        <CustomerDemographics />
        <RevenueChart />
      
    </div>
  )
}

export default Marketing
