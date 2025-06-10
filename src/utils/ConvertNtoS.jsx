const ConvertNtoS = ({ num }) => {
  // Handle invalid input
  if (!num || isNaN(num)) return <span>0</span>;

  // Convert to number if string
  const value = typeof num === "string" ? parseFloat(num) : num;

  // Define suffixes and their corresponding values
  const ranges = [
    { value: 1e12, suffix: "T" },
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
    { value: 1, suffix: "" },
  ];

  // Find the appropriate range
  const range = ranges.find((range) => value >= range.value);

  if (!range) return <span>0</span>;

  // Calculate the shortened number
  const shortenedNum = value / range.value;

  // Format the number: keep one decimal if not whole number
  const formatted =
    shortenedNum % 1 === 0 ? shortenedNum.toString() : shortenedNum.toFixed(1);

  return (
    <span>
      {formatted}
      {range.suffix}
    </span>
  );
};

export default ConvertNtoS;
