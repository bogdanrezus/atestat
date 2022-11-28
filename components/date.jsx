const months = {
  1: "Ianuarie",
  2: "Februarie",
  3: "Martie",
  4: "Aprilie",
  5: "Mai",
  6: "Iunie",
  7: "Iulie",
  8: "August",
  9: "Septembrie",
  10: "Octombrie",
  11: "Noiembrie",
  12: "Decembrie",
};

function convert(date) {
  const [year, month, day] = date.split("-");
  return `${Number(day)} ${months[Number(month)]} ${year}`;
}

export default function Date({ date }) {
  return convert(date);
}
