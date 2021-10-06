export const buildCasesData = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = data["cases"][date] - lastDataPoint;
      chartData.push(newDataPoint);
    }
    lastDataPoint = data["cases"][date];
  }
  return chartData;
};

export const buildDeathsData = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.deaths) {
    if (lastDataPoint) {
      let newDataPoint = data["deaths"][date] - lastDataPoint;
      chartData.push(newDataPoint);
    }
    lastDataPoint = data["deaths"][date];
  }
  return chartData;
};
export const buildRecoveredData = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.recovered) {
    if (lastDataPoint) {
      let newDataPoint = data["recovered"][date] - lastDataPoint;
      chartData.push(newDataPoint);
    }
    lastDataPoint = data["recovered"][date];
  }
  return chartData;
};
export const buildVaccineData = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = data["cases"][date] - lastDataPoint;
      chartData.push(newDataPoint);
    }
    lastDataPoint = data["cases"][date];
  }
  return chartData;
};

export const genRandomColor = () => {
  let color = "";
  color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
};
