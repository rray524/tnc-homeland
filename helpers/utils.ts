export const formatPrice = (value: string | number): string => {
  if (value === undefined || value === null || value === "") {
    return "0.00";
  }
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  const numberValue = parseFloat(value.replace(/,/g, ""));
  if (isNaN(numberValue)) {
    return "0.00";
  }
  return numberValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 196;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const truncateText = (text: string, length: number) => {
  if (text?.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};
