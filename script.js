const form = document.querySelector("#advisorForm");
const recommendation = document.querySelector("#recommendation");

const cropRules = [
  {
    crop: "Rice",
    reason: "high moisture and good rainfall support paddy cultivation.",
    match: ({ moisture, rainfall }) => moisture >= 65 && rainfall === "high"
  },
  {
    crop: "Cotton",
    reason: "black soil with warm temperatures is suitable for cotton.",
    match: ({ soil, temperature }) => soil === "black" && temperature >= 25
  },
  {
    crop: "Groundnut",
    reason: "sandy soil and moderate water availability support groundnut.",
    match: ({ soil, moisture }) => soil === "sandy" && moisture >= 35 && moisture <= 65
  },
  {
    crop: "Maize",
    reason: "medium rainfall and balanced soil moisture are suitable for maize.",
    match: ({ moisture, rainfall }) => moisture >= 45 && moisture <= 70 && rainfall === "medium"
  },
  {
    crop: "Millets",
    reason: "low rainfall conditions are better handled by drought-tolerant millets.",
    match: ({ rainfall, moisture }) => rainfall === "low" || moisture < 40
  },
  {
    crop: "Vegetables",
    reason: "loamy soil and stable moisture support vegetable farming.",
    match: ({ soil, moisture }) => soil === "loamy" && moisture >= 50
  }
];

function recommendCrop(values) {
  const selected = cropRules.find((rule) => rule.match(values)) || cropRules[3];
  return `Recommended: ${selected.crop}. Reason: ${selected.reason}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const values = {
    soil: document.querySelector("#soilType").value,
    moisture: Number(document.querySelector("#soilMoisture").value),
    temperature: Number(document.querySelector("#temperature").value),
    rainfall: document.querySelector("#rainfall").value
  };

  recommendation.textContent = recommendCrop(values);
});

function updateSensorPreview() {
  const temperature = 24 + Math.floor(Math.random() * 9);
  const humidity = 58 + Math.floor(Math.random() * 28);
  const moisture = 45 + Math.floor(Math.random() * 35);
  const rainfall = 20 + Math.floor(Math.random() * 55);

  document.querySelector("#temperatureValue").textContent = `${temperature}°C`;
  document.querySelector("#humidityValue").textContent = `${humidity}%`;
  document.querySelector("#moistureValue").textContent = `${moisture}%`;
  document.querySelector("#rainfallValue").textContent = `${rainfall}%`;
  document.querySelector("#heroMoisture").textContent = `${moisture}%`;
}

setInterval(updateSensorPreview, 5000);
