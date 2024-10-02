import { PropertyDetails } from "@/types/types";

export const fetchProperties = async (category = "", pageSize = 100) => {
  try {
    if (typeof window !== "undefined") {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-properties`
      );

      if (category && category !== "All") {
        url.searchParams.append("category", category);
      }
      const finalPageSize =
        pageSize === Infinity ? Number.MAX_SAFE_INTEGER : pageSize;
      url.searchParams.append("page_size", finalPageSize.toString());

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      if (category === "") {
        data = data.data.filter(
          (property: PropertyDetails) => property.category !== "sold"
        );
      }

      return data;
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};
