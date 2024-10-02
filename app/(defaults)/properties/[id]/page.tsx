import React, { Suspense, use } from "react";
import { fetchSingleProperty } from "./action";
import PropertyInfo from "./components/property-header";
import ContactForm from "./components/contact-form";
import LoadingFallback from "./components/loading-fallback";
import CTASection from "../../pages/home/contents/cta-section";
import PropertyNotFoundFallback from "./components/property-error-handler";
import { PropertyDetailsTable } from "./components/property-details-table";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: PageProps) {
  const property = await fetchSingleProperty(params.id);

  return {
    title: property?.exterior.property_type || "Property Details",
    description:
      property?.property_description || "Detailed view of the property",
  };
}

const PropertyDetails = ({ params }: PageProps) => {
  const property = use(fetchSingleProperty(params.id));
  const apiKey = process.env.NEXT_PUBLIC_SITE_KEY!;
  if (!property) {
    return <PropertyNotFoundFallback />;
  }

  return (
    <>
      <div
        className="max-w-[1200px] mx-auto mt-[50px] p-[10px]"
        id="property-details"
      >
        <div className="">
          <div className="w-full my-5 flex justify-center">
            <div className="w-[100%] mx-auto rounded-lg ">
              <PropertyInfo property={property} />
              <div>
                <h2 className="text-2xl text-left font-bold dark:text-white uppercase">
                  PROPERTY DESCRIPTION
                </h2>
                <hr className="h-0.5 bg-gray-400 w-[285px] my-2" />
                <h3 className="my-3 text-gray-600 dark:text-gray-500">
                  {property.property_description}
                </h3>
              </div>

              <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h2 className="font-bold text-lg text-left dark:text-white uppercase">
                      ADDITIONAL DETAILS
                    </h2>
                    <hr className="h-0.5 bg-gray-400 w-[205px] my-5" />
                    <PropertyDetailsTable property={property} />
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="font-bold text-lg text-left mb-4 dark:text-white uppercase">
                    PROPERTY LOCATION
                  </h2>
                  <hr className="h-0.5 bg-gray-400 w-[100px] my-5" />
                  <div className="map w-embed w-iframe my-10">
                    <iframe
                      width="100%"
                      height="520"
                      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${property.latitude},${property.longitude}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection isSingle={true} />
      <ContactForm />
    </>
  );
};

const PropertyDetailsPage = (props: PageProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <PropertyDetails {...props} />
  </Suspense>
);

export default PropertyDetailsPage;
