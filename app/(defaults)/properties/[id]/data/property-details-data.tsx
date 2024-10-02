import { formatPrice } from "@/helpers/utils";
import { PropertyDetails } from "@/types/types";

export const tableSections = [
  {
    title: "General Details",
    fields: [
      {
        label: "Price",
        value: (property: PropertyDetails) =>
          `$${formatPrice(property.general_details.price)}`,
      },
      {
        label: "Taxes",
        value: (property: PropertyDetails) =>
          `$${formatPrice(property.general_details.taxes)}`,
      },
      {
        label: "Address",
        value: (property: PropertyDetails) => property.general_details.address,
      },
      {
        label: "Lot Size",
        value: (property: PropertyDetails) => property.general_details.lot_size,
      },
      {
        label: "Directions",
        value: (property: PropertyDetails) =>
          property.general_details.directions,
      },
      {
        label: "City",
        value: (property: PropertyDetails) => property.city,
      },
      {
        label: "State",
        value: (property: PropertyDetails) => property.state,
      },
      {
        label: "Country",
        value: (property: PropertyDetails) => property.country,
      },
    ],
  },
  {
    title: "Room Interior",
    fields: [
      {
        label: "Rooms",
        value: (property: PropertyDetails) => property.room_interior.rooms,
      },
      {
        label: "Room Plus",
        value: (property: PropertyDetails) =>
          property.room_interior.rooms_plus.toString(),
      },
      {
        label: "Bedroom Plus",
        value: (property: PropertyDetails) =>
          property.room_interior.bedrooms_plus.toString(),
      },
      {
        label: "Rooms Plus",
        value: (property: PropertyDetails) => property.room_interior.rooms_plus,
      },
      {
        label: "Bedrooms",
        value: (property: PropertyDetails) => property.room_interior.bedrooms,
      },
      {
        label: "Bedrooms Plus",
        value: (property: PropertyDetails) =>
          property.room_interior.bedrooms_plus,
      },
      {
        label: "Kitchens",
        value: (property: PropertyDetails) => property.room_interior.kitchens,
      },
      {
        label: "Family Room",
        value: (property: PropertyDetails) =>
          property.room_interior.family_room,
      },
      {
        label: "Basement",
        value: (property: PropertyDetails) => property.room_interior.basement,
      },
    ],
  },
  {
    title: "Exterior",
    fields: [
      {
        label: "Property Type",
        value: (property: PropertyDetails) => property.exterior.property_type,
      },
      {
        label: "Style",
        value: (property: PropertyDetails) => property.exterior.style,
      },
      {
        label: "Exterior",
        value: (property: PropertyDetails) => property.exterior.exterior,
      },
      {
        label: "Garage Type",
        value: (property: PropertyDetails) => property.exterior.garage_type,
      },
      {
        label: "Drive Parking Spaces",
        value: (property: PropertyDetails) =>
          property.exterior.drive_parking_spaces,
      },
      {
        label: "Pool",
        value: (property: PropertyDetails) => property.exterior.pool,
      },
    ],
  },
  {
    title: "Utilities",
    fields: [
      {
        label: "Fireplace Stove",
        value: (property: PropertyDetails) =>
          property.utilities.fireplace_stove,
      },
      {
        label: "Heat Source",
        value: (property: PropertyDetails) => property.utilities.heat_source,
      },
      {
        label: "Heat Type",
        value: (property: PropertyDetails) => property.utilities.heat_type,
      },
      {
        label: "Central Air Conditioning",
        value: (property: PropertyDetails) =>
          property.utilities.central_air_conditioning,
      },
      {
        label: "Laundry Level",
        value: (property: PropertyDetails) => property.utilities.laundry_level,
      },
      {
        label: "Sewers",
        value: (property: PropertyDetails) => property.utilities.sewers,
      },
      {
        label: "Water",
        value: (property: PropertyDetails) => property.utilities.water,
      },
    ],
  },
  {
    title: "At a Glance",
    fields: [
      {
        label: "Type",
        value: (property: PropertyDetails) => property.at_a_glance.type,
      },
      {
        label: "Area",
        value: (property: PropertyDetails) => property.at_a_glance.area,
      },
      {
        label: "Municipality",
        value: (property: PropertyDetails) => property.at_a_glance.municipality,
      },
      {
        label: "Neighborhood",
        value: (property: PropertyDetails) => property.at_a_glance.neighborhood,
      },
      {
        label: "Style",
        value: (property: PropertyDetails) => property.at_a_glance.style,
      },
      {
        label: "Lot Size",
        value: (property: PropertyDetails) => property.at_a_glance.lot_size,
      },
      {
        label: "Tax",
        value: (property: PropertyDetails) =>
          `$${formatPrice(property.at_a_glance.tax)}`,
      },
      {
        label: "Beds",
        value: (property: PropertyDetails) => property.at_a_glance.beds,
      },
      {
        label: "Baths",
        value: (property: PropertyDetails) => property.at_a_glance.baths,
      },
      {
        label: "Fireplace",
        value: (property: PropertyDetails) => property.at_a_glance.fireplace,
      },
      {
        label: "Pool",
        value: (property: PropertyDetails) => property.at_a_glance.pool,
      },
      {
        label: "Municipality",
        value: (property: PropertyDetails) => property.at_a_glance.municipality,
      },
      {
        label: "Neighborhood",
        value: (property: PropertyDetails) => property.at_a_glance.neighborhood,
      },
      {
        label: "Area",
        value: (property: PropertyDetails) => property.at_a_glance.area,
      },
    ],
  },
];
