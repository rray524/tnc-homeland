"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/section-title";
import PropertyCard from "./component";
import { PropertyDetails } from "@/types/types";
import { Pagination } from "@/components/pagination";
import PreloadingProperty from "./components/property-preloader";
import { fetchProperties } from "../../action";

const RecentSoldProperties: React.FC = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties("sold");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const currentItems = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="max-w-[1320px] mx-auto my-10">
      <SectionTitle
        title=""
        subtitle="Recent Sales Success - These Properties Sold by TNC Homeland"
        titleClass="text-[18px] text-yellow-500 font-semibold text-center"
        subtitleClass="md:text-[36px] text-[23px] font-semibold text-center dark:text-white w-[70%] mx-auto"
      />
      <hr className="border-black mx-10 my-5 dark:border-white" />
      <div className="">
        {loadingData ? (
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 my-10">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className={`w-full lg:w-1/3 md:w-1/2 px-4 mb-8`}
                  key={index}
                >
                  <div key={index} className="border border-gray-200 p-4">
                    <PreloadingProperty />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentItems.length !== 0 ? (
          <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
            {currentItems.map((card, index) => (
              <PropertyCard
                key={index}
                image={
                  card.image_urls.length > 0
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${card.image_urls[0]}`
                    : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                }
                squre={card.square_feet}
                bedrooms={card.at_a_glance.beds}
                bathrooms={card.at_a_glance.baths}
                name={card.name}
                location={card.general_details.address}
                price={card.general_details.price}
                category={card.category}
                link={card._id}
              />
            ))}
          </div>
        ) : (
          <div className=" max-h-14 w-full mx-auto">
            <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold my-4">
              No property listed yet!
            </h4>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default RecentSoldProperties;
