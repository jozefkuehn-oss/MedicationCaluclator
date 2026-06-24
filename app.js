const timedDoseUnits = [
  "mg/kg",
  "mcg/kg",
  "units/kg",
  "g",
  "mg",
  "mcg",
  "units"
];
const continuousUnits = [
  "mcg/kg/min",
  "mcg/kg/hr",
  "mg/kg/min",
  "mg/kg/hr",
  "units/kg/min",
  "units/kg/hr",
  "mcg/min",
  "mcg/hr",
  "mg/min",
  "mg/hr",
  "units/min",
  "units/hr"
];
function getNumber(id) {
  const value = document.getElementById(id).value;
  return value === "" ? null : Number(value);
}
function updateDoseUnits() {
  const infusionType = document.getElementById("infusionType").value;
  const doseUnitSelect = document.getElementById("doseUnit");
  doseUnitSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select dose unit";
  placeholder.disabled = true;
  placeholder.selected = true;
  doseUnitSelect.appendChild(placeholder);
  const unitList = infusionType === "Continuous" ? continuousUnits : timedDoseUnits;
  unitList.forEach(unit => {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit;
    doseUnitSelect.appendChild(option);
  });
}
function standardizeDrugAmountToMg(amount, unit) {
  if (amount === null) return null;
  if (unit === "mg") return amount;
  if (unit === "mcg") return amount / 1000;
  if (unit === "g") return amount * 1000;
  if (unit === "units") return amount;
  return null;
}
function calculateDoseMgHr(infusionType, weight, dose, doseUnit) {
  if (dose === null) return null;
  if (infusionType === "Continuous") {
    if (doseUnit === "mcg/kg/min") return (weight * dose * 60) / 1000;
    if (doseUnit === "mg/kg/min") return weight * dose * 60;
    if (doseUnit === "units/kg/min") return weight * dose * 60;
    if (doseUnit === "mcg/kg/hr") return (weight * dose) / 1000;
    if (doseUnit === "mg/kg/hr") return weight * dose;
    if (doseUnit === "units/kg/hr") return weight * dose;
    if (doseUnit === "mcg/min") return (dose * 60) / 1000;
    if (doseUnit === "mg/min") return dose * 60;
    if (doseUnit === "units/min") return dose * 60;
    if (doseUnit === "mcg/hr") return dose / 1000;
    if (doseUnit === "mg/hr") return dose;
    if (doseUnit === "units/hr") return dose;
  }
  if (infusionType === "Timed Dose") {
    if (doseUnit === "g") return dose * 1000;
    if (doseUnit === "mg") return dose;
    if (doseUnit === "mcg") return dose / 1000;
    if (doseUnit === "units") return dose;
    if (doseUnit === "g/kg") return weight * dose * 1000;
    if (doseUnit === "mg/kg") return weight * dose;
    if (doseUnit === "mcg/kg") return (weight * dose) / 1000;
    if (doseUnit === "units/kg") return weight * dose;
  }
  return null;
}
function runSafetyChecks(values, results) {
  const checks = [];
  function addCheck(severity, message, field = null) {
    checks.push({ severity, message, field });
  }
  if (!values.infusionType) {
    addCheck("critical", "Infusion type is required.", "infusionType");
  } else {
    addCheck("ok", "Infusion type selected.");
  }
  if (values.weight === null || values.weight <= 0) {
    addCheck("critical", "Patient weight is required.", "weight");
  } else {
    addCheck("ok", "Weight check passed.");
  }
  if (values.dose === null || values.dose <= 0) {
    addCheck("critical", "Dose ordered is required.", "dose");
  } else {
    addCheck("ok", "Dose check passed.");
  }
  if (!values.doseUnit) {
    addCheck("critical", "Dose unit is required.", "doseUnit");
  } else {
    addCheck("ok", "Dose unit selected.");
  }
  if (values.drugAmount === null || values.drugAmount <= 0) {
    addCheck("critical", "Drug amount in bag is required.", "drugAmount");
  } else {
    addCheck("ok", "Drug amount entered.");
  }
  if (!values.drugUnit) {
    addCheck("critical", "Drug unit is required.", "drugUnit");
  } else {
    addCheck("ok", "Drug unit selected.");
  }
  if (values.totalVolume === null || values.totalVolume <= 0) {
    addCheck("critical", "Total volume is required.", "totalVolume");
  } else {
    addCheck("ok", "Total volume entered.");
  }
  if (values.vtbi !== null && values.totalVolume !== null && values.vtbi > values.totalVolume) {
    addCheck("critical", "VTBI cannot be greater than total bag volume.", "vtbi");
  } else {
    addCheck("ok", "VTBI check passed.");
  }
if (values.infusionType === "Timed Dose") {
  if (values.duration === null || values.duration <= 0) {
    addCheck("critical", "Desired duration is required for timed doses.", "duration");
  } else {
    addCheck("ok", "Duration entered.");
  }
  if (!values.durationUnit) {
    addCheck("critical", "Duration unit is required for timed doses.", "durationUnit");
  } else {
    addCheck("ok", "Duration unit selected.");
  }
}
if (values.infusionType === "Continuous") {
  if (values.duration !== null && values.duration <= 0) {
    addCheck("critical", "If entered, duration must be greater than zero.", "duration");
  } else if (values.duration !== null && !values.durationUnit) {
    addCheck("critical", "Duration unit is required when duration is entered.", "durationUnit");
  } else if (values.duration !== null && values.durationUnit) {
    addCheck("ok", "Optional duration entered for VTBI estimate.");
  } else {
    addCheck("ok", "Duration not required for continuous infusion.");
  }
}
  if (
    values.infusionType === "Continuous" &&
    ["mg/kg", "mcg/kg", "units/kg", "g", "mg", "mcg", "units"].includes(values.doseUnit)
  ) {
    addCheck("critical", "Dose unit does not match continuous infusion type.", "doseUnit");
  }
  if (
    values.infusionType === "Timed Dose" &&
    ["mg/kg/min", "mg/kg/hr", "mcg/kg/min", "mcg/kg/hr", "units/kg/min", "units/kg/hr", "mcg/min", "mcg/hr", "mg/min", "mg/hr", "units/min", "units/hr"].includes(values.doseUnit)
  ) {
    addCheck("critical", "Dose unit does not match timed dose infusion type.", "doseUnit");
  }
  if (values.doseUnit && values.doseUnit.includes("/kg") && (!values.weight || values.weight <= 0)) {
    addCheck("critical", "Weight is required for kg-based dosing.", "weight");
  }
  if (results.rate === null || Number.isNaN(results.rate) || !Number.isFinite(results.rate)) {
    addCheck("critical", "Pump rate could not be calculated. Check required inputs.");
  } else if (results.rate > 999) {
    addCheck("caution", "Pump rate is unusually high. Verify calculation and pump limits.", "duration");
  } else {
    addCheck("ok", "Rate safety check passed.");
  }
  if (
    results.concentration !== null &&
    Number.isFinite(results.concentration) &&
    (results.concentration > 100 || results.concentration < 0.001)
  ) {
    addCheck("caution", "Concentration is unusual. Verify drug amount and total volume.", "drugAmount");
  } else if (results.concentration !== null) {
    addCheck("ok", "Concentration range check passed.");
  }
  if (values.infusionType === "Continuous" && values.doseUnit === "mg/min") {
    addCheck("caution", "Consider using mg/hr for clarity when documenting continuous infusions.", "doseUnit");
  }
  if (
    values.weight !== null &&
    ["mg/kg", "mcg/kg", "units/kg", "g/kg"].includes(values.doseUnit) &&
    values.dose > 10
  ) {
    addCheck("caution", "Dose may be unusually high for weight-based dosing. Verify order.", "dose");
  }
  const validUnits = [...timedDoseUnits, ...continuousUnits];
  if (values.doseUnit && !validUnits.includes(values.doseUnit)) {
    addCheck("critical", "Dose unit is not recognized by the calculator.", "doseUnit");
  }
  return checks;
}
function triggerCriticalScreenAlert() {
  const banner = document.getElementById("criticalTopBanner");
  banner.classList.remove("hidden");
  document.body.classList.remove("critical-alert-active");
  // Restart the flash animation every time Calculate is pressed
  void document.body.offsetWidth;
  document.body.classList.add("critical-alert-active");
}
function clearCriticalScreenAlert() {
  const banner = document.getElementById("criticalTopBanner");
  banner.classList.add("hidden");
  document.body.classList.remove("critical-alert-active");
}
function clearFieldHighlights() {
  const fieldIds = [
    "infusionType",
    "weight",
    "dose",
    "doseUnit",
    "drugAmount",
    "drugUnit",
    "totalVolume",
    "vtbi",
    "duration",
    "durationUnit"
  ];
  fieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.classList.remove("input-error", "input-caution");
    }
  });
}
function applyFieldHighlights(checks) {
  checks.forEach(check => {
    if (!check.field) return;
    const field = document.getElementById(check.field);
    if (!field) return;
    if (check.severity === "critical") {
      field.classList.add("input-error");
    }
    if (check.severity === "caution") {
      field.classList.add("input-caution");
    }
  });
}
function renderSafetyChecks(checks) {
  const critical = checks.filter(check => check.severity === "critical");
  const caution = checks.filter(check => check.severity === "caution");
  const ok = checks.filter(check => check.severity === "ok");
  let html = "";
  if (critical.length > 0) {
    html += `<div class="warning-group critical"><h4>🛑 Critical Issues</h4>`;
    html += critical.map(check => `<div class="warning-item">${check.message}</div>`).join("");
    html += `</div>`;
  }
  if (caution.length > 0) {
    html += `<div class="warning-group caution"><h4>⚠ Cautions</h4>`;
    html += caution.map(check => `<div class="warning-item">${check.message}</div>`).join("");
    html += `</div>`;
  }
  if (critical.length === 0 && caution.length === 0) {
    html += `<div class="warning-group ok"><h4>✅ No Calculator Issues Detected</h4>`;
    html += `<div class="warning-item">Verify medication, concentration, dose, protocol, and pump settings before administration.</div>`;
    html += `</div>`;
  }
  return html;
}
function formatNumber(value) {
  if (value === null || Number.isNaN(value) || !Number.isFinite(value)) {
    return "--";
  }
  return Number(value.toFixed(3)).toString();
}
function calculateInfusion() {
  const values = {
    infusionType: document.getElementById("infusionType").value,
    weight: getNumber("weight"),
    dose: getNumber("dose"),
    doseUnit: document.getElementById("doseUnit").value,
    drugAmount: getNumber("drugAmount"),
    drugUnit: document.getElementById("drugUnit").value,
    totalVolume: getNumber("totalVolume"),
    vtbi: getNumber("vtbi"),
    duration: getNumber("duration"),
    durationUnit: document.getElementById("durationUnit").value
  };
  const drugAmountStandardized = standardizeDrugAmountToMg(
    values.drugAmount,
    values.drugUnit
  );
  const concentration =
    drugAmountStandardized !== null && values.totalVolume
      ? drugAmountStandardized / values.totalVolume
      : null;
  const calculatedDose = calculateDoseMgHr(
    values.infusionType,
    values.weight,
    values.dose,
    values.doseUnit
  );
  let calculatedVtbi = null;
  let rate = null;
  if (values.infusionType === "Continuous") {
  rate =
    calculatedDose !== null && concentration
      ? calculatedDose / concentration
      : null;
  calculatedVtbi =
    rate !== null && values.duration !== null && values.durationUnit
      ? rate * (values.durationUnit === "hr" ? values.duration : values.duration / 60)
      : null;
} else {
    calculatedVtbi =
      calculatedDose !== null && concentration
        ? calculatedDose / concentration
        : null;
    rate =
      calculatedVtbi !== null && values.duration
        ? calculatedVtbi / (values.durationUnit === "hr" ? values.duration : values.duration / 60)
        : null;
  }
  const results = {
    concentration,
    calculatedDose,
    rate,
    calculatedVtbi
  };
  const safetyChecks = runSafetyChecks(values, results);
const hasCritical = safetyChecks.some(check => check.severity === "critical");
const hasCaution = safetyChecks.some(check => check.severity === "caution");
const statusResult = document.getElementById("statusResult");
const resultsPanel = document.getElementById("infusionResultsPanel");
const alertBanner = document.getElementById("alertBanner");
statusResult.classList.remove("status-ready", "status-check");
resultsPanel.classList.remove("critical-panel", "caution-panel", "ready-panel", "warning-panel");
alertBanner.classList.remove("neutral", "ready", "caution", "critical");
clearFieldHighlights();
applyFieldHighlights(safetyChecks);
if (hasCritical) {
  alertBanner.textContent = "🛑 DO NOT USE — CHECK INPUTS";
  alertBanner.classList.add("critical");

  triggerCriticalScreenAlert();

  statusResult.textContent = "CALCULATION BLOCKED";
  statusResult.classList.add("status-check");
  resultsPanel.classList.add("critical-panel");
  document.getElementById("concentrationResult").innerHTML =
    `<span class="locked-result">LOCKED</span>`;
  document.getElementById("doseResult").innerHTML =
    `<span class="locked-result">LOCKED</span>`;
  document.getElementById("rateResult").innerHTML =
    `<span class="locked-result">LOCKED</span>`;
  document.getElementById("vtbiResult").innerHTML =
    `<span class="locked-result">LOCKED</span>`;
} else if (hasCaution) {
    clearCriticalScreenAlert();

  alertBanner.textContent = "⚠ VERIFY BEFORE USE";
  alertBanner.classList.add("caution");
  statusResult.textContent = "VERIFY BEFORE USE";
  statusResult.classList.add("status-check");
  resultsPanel.classList.add("caution-panel");
  document.getElementById("concentrationResult").textContent =
    formatNumber(concentration) + " mg/mL";
  document.getElementById("doseResult").textContent =
    formatNumber(calculatedDose) + " mg/hr";
  document.getElementById("rateResult").textContent =
    formatNumber(rate) + " mL/hr";
  document.getElementById("vtbiResult").textContent =
  values.infusionType === "Continuous" && calculatedVtbi === null
    ? "Not calculated without duration"
    : formatNumber(calculatedVtbi) + " mL";
} else {
    clearCriticalScreenAlert();

  alertBanner.textContent = "✅ READY TO VERIFY";
  alertBanner.classList.add("ready");
  statusResult.textContent = "READY TO VERIFY";
  statusResult.classList.add("status-ready");
  resultsPanel.classList.add("ready-panel");
  document.getElementById("concentrationResult").textContent =
    formatNumber(concentration) + " mg/mL";
  document.getElementById("doseResult").textContent =
    formatNumber(calculatedDose) + " mg/hr";
  document.getElementById("rateResult").textContent =
    formatNumber(rate) + " mL/hr";
  document.getElementById("vtbiResult").textContent =
  values.infusionType === "Continuous" && calculatedVtbi === null
    ? "Not calculated without duration"
    : formatNumber(calculatedVtbi) + " mL";
}
document.getElementById("safetyResults").innerHTML = renderSafetyChecks(safetyChecks);
}
document.getElementById("infusionType").addEventListener("change", updateDoseUnits);
document.getElementById("calculateInfusion").addEventListener("click", calculateInfusion);
updateDoseUnits();
function calculateDrawDoseMg(weight, dose, unit) {
  if (dose === null) return null;
  if (unit === "g") return dose * 1000;
  if (unit === "mg") return dose;
  if (unit === "mcg") return dose / 1000;
  if (unit === "units") return dose;
  if (unit === "mg/kg") return weight * dose;
  if (unit === "mcg/kg") return (weight * dose) / 1000;
  if (unit === "units/kg") return weight * dose;
  return null;
}
function calculateConcentrationMgPerMl(concentration, unit) {
  if (concentration === null) return null;
  if (unit === "mg/mL") return concentration;
  if (unit === "mcg/mL") return concentration / 1000;
  if (unit === "units/mL") return concentration;
  return null;
}
function calculateDrawUp() {
  const weight = getNumber("drawWeight");
  const dose = getNumber("orderedDose");
  const doseUnit = document.getElementById("orderedDoseUnit").value;
  const vialConcentration = getNumber("vialConcentration");
  const concentrationUnit = document.getElementById("concentrationUnit").value;
  const doseMg = calculateDrawDoseMg(weight, dose, doseUnit);
  const concentrationMgMl = calculateConcentrationMgPerMl(
    vialConcentration,
    concentrationUnit
  );
  const volume =
    doseMg !== null && concentrationMgMl
      ? doseMg / concentrationMgMl
      : null;
  document.getElementById("drawResult").textContent =
    formatNumber(volume) + " mL";
}
document.getElementById("calculateDraw").addEventListener("click", calculateDrawUp);
function showSection(section) {
  const infusionSection = document.getElementById("infusionSection");
  const drawSection = document.getElementById("drawSection");
  const showInfusion = document.getElementById("showInfusion");
  const showDraw = document.getElementById("showDraw");
  if (section === "infusion") {
    infusionSection.classList.remove("hidden");
    drawSection.classList.add("hidden");
    showInfusion.classList.add("active");
    showDraw.classList.remove("active");
  }
  if (section === "draw") {
    drawSection.classList.remove("hidden");
    infusionSection.classList.add("hidden");
    showDraw.classList.add("active");
    showInfusion.classList.remove("active");
  }
}
document.getElementById("showInfusion").addEventListener("click", function () {
  showSection("infusion");
});
document.getElementById("showDraw").addEventListener("click", function () {
  showSection("draw");
});
function clearInfusion() {
  const fields = [
    "weight",
    "dose",
    "drugAmount",
    "totalVolume",
    "vtbi",
    "duration"
  ];
  fields.forEach(id => {
    document.getElementById(id).value = "";
  });

  clearCriticalScreenAlert();

  document.getElementById("infusionType").value = "";
  updateDoseUnits();
  document.getElementById("doseUnit").value = "";
  document.getElementById("drugUnit").value = "";
  document.getElementById("durationUnit").value = "";
  const statusResult = document.getElementById("statusResult");
  const resultsPanel = document.getElementById("infusionResultsPanel");
  const alertBanner = document.getElementById("alertBanner");
  statusResult.textContent = "Waiting for inputs";
  statusResult.classList.remove("status-ready", "status-check");
  alertBanner.textContent = "Waiting for inputs";
  alertBanner.classList.remove("ready", "caution", "critical");
  alertBanner.classList.add("neutral");
  resultsPanel.classList.remove(
    "warning-panel",
    "ready-panel",
    "critical-panel",
    "caution-panel"
  );
  clearFieldHighlights();
  document.getElementById("concentrationResult").textContent = "--";
  document.getElementById("doseResult").textContent = "--";
  document.getElementById("rateResult").textContent = "--";
  document.getElementById("vtbiResult").textContent = "--";
  document.getElementById("safetyResults").textContent = "Safety checks will appear here.";
}
function clearDraw() {
  const fields = [
    "drawWeight",
    "orderedDose",
    "vialConcentration"
  ];
  fields.forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("orderedDoseUnit").value = "";
  document.getElementById("concentrationUnit").value = "";
  document.getElementById("drawResult").textContent = "--";
}
document.getElementById("clearInfusion").addEventListener("click", clearInfusion);
document.getElementById("clearDraw").addEventListener("click", clearDraw);
