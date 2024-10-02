"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/section-title";
import { PropertyDetails } from "@/types/types";
import Tabs from "./components/tabs";
import PropertyCard from "../sold-properties/component";
import { Pagination } from "@/components/pagination";
import { fetchProperties } from "../../action";
import PreloadingProperty from "../sold-properties/components/property-preloader";

const PropertyListing: React.FC = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "new", "pre-constructed"];
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties(activeTab === "All" ? "" : activeTab);
        const data = activeTab === "All" ? res : res.data;
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const filteredProperties = properties?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="max-w-[1320px] mx-auto relative mt-[20px] md:mt-[60px] p-4"
      id="new-listing"
    >
      <SectionTitle
        title=""
        subtitle="Discover Your Perfect Home - TNC Homeland Sales and Listings"
        titleClass="text-[18px] text-yellow-500 font-semibold text-center"
        subtitleClass="md:text-[36px] text-[23px] font-semibold text-center dark:text-white w-[70%] mx-auto"
      />
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} tabs={tabs} />
      {loadingData ? (
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 my-10">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className={`w-full lg:w-1/3 md:w-1/2 px-4 mb-8`} key={index}>
                <div key={index} className="border border-gray-200 p-4">
                  <PreloadingProperty />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : filteredProperties.length !== 0 ? (
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-10">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={index}
              image={
                property.image_urls.length > 0
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${property.image_urls[0]}`
                  : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
              }
              squre={property.square_feet}
              bedrooms={property.at_a_glance.beds}
              bathrooms={property.at_a_glance.baths}
              name={property.name}
              location={property.general_details.address}
              price={property.general_details.price}
              category={property.category}
              link={property._id}
            />
          ))}
        </div>
      ) : (
        <div className="max-h-14 w-full mx-auto">
          <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold my-4">
            No property listed yet!
          </h4>
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default PropertyListing;
