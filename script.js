// Generate fields dynamically
function createFields(containerId, count, label) {
  const container = document.getElementById(containerId);
  for (let i = 1; i <= count; i++) {
    const div = document.createElement("div");
    div.className = "bed";
    div.innerHTML = `
      <strong>#${i}</strong>
      <input type="text" id="${label}-${i}" placeholder="Enter note (e.g., Old Linen, Yellow Gown)" />
    `;
    container.appendChild(div);
  }
}

// Initialize lists
createFields("linen-list", 20, "linen");
createFields("gown-list", 20, "gown");
createFields("oxygen-list", 7, "oxygen");

// Save to file
document.getElementById("saveBtn").addEventListener("click", () => {
  const data = {
    linen: collectData("linen", 20),
    gown: collectData("gown", 20),
    oxygen: collectData("oxygen", 7),
    lastUpdated: new Date().toLocaleString()
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "data.json";
  link.click();
});

document.getElementById("loadBtn").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const data = JSON.parse(event.target.result);
      loadData(data);
    };
    reader.readAsText(file);
  };
  input.click();
});

function collectData(prefix, count) {
  const result = {};
  for (let i = 1; i <= count; i++) {
    result[i] = document.getElementById(`${prefix}-${i}`).value;
  }
  return result;
}

function loadData(data) {
  for (let i = 1; i <= 20; i++) {
    document.getElementById(`linen-${i}`).value = data.linen[i] || "";
    document.getElementById(`gown-${i}`).value = data.gown[i] || "";
  }
  for (let i = 1; i <= 7; i++) {
    document.getElementById(`oxygen-${i}`).value = data.oxygen[i] || "";
  }
  alert("✅ Data loaded successfully!");
}
