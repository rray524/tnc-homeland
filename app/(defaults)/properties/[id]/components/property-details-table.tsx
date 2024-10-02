import React from "react";
import { PropertyDetails } from "@/types/types";
import { tableSections } from "../data/property-details-data";

interface PropertyDetailsTableProps {
  property: PropertyDetails;
}

export const PropertyDetailsTable: React.FC<PropertyDetailsTableProps> = ({
  property,
}) => {
  return (
    <div className="relative overflow-y-auto max-h-[500px] scrollable-container my-8 border-b-2">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="sticky top-0">
          <tr>
            <th className="py-3 px-6 bg-gulf-blue text-left text-sm font-medium text-white uppercase tracking-wider">
              Feature
            </th>
            <th className="py-3 px-6 bg-gulf-blue text-left text-sm font-medium text-white uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tableSections.map((section, sectionIndex) =>
            section.fields.map((field, fieldIndex) => (
              <tr
                key={`${sectionIndex}-${fieldIndex}`}
                className="hover:bg-gray-100"
              >
                <td className="py-4 px-6 border-b border-gray-200">
                  {field.label}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {field.value(property)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
