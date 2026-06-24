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
  if (values.weight === null || values.weight <= 0) {
    checks.push("MISSING: WEIGHT");
  } else {
    checks.push("OK: Weight Check");
  }
  if (values.dose === null) {
    checks.push("MISSING: DOSE");
  } else {
    checks.push("OK: Dose Check");
  }
  if (values.drugAmount === null || values.totalVolume === null || values.totalVolume <= 0) {
    checks.push("MISSING: MIX");
  } else {
    checks.push("OK: Mix/Concentration Check");
  }
  if (results.rate === null) {
    checks.push("MISSING DATA: Rate Safety Check");
  } else if (results.rate > 999) {
    checks.push("WARNING: HIGH RATE");
  } else {
    checks.push("OK: Rate Safety Check");
  }
  if (
    values.vtbi !== null &&
    values.totalVolume !== null &&
    values.vtbi > values.totalVolume
  ) {
    checks.push("INVALID: VTBI > VOLUME");
  } else {
    checks.push("OK: VTBI Check");
  }
  if (
    values.infusionType === "Continuous" &&
    ["mg/kg", "mcg/kg", "units/kg"].includes(values.doseUnit)
  ) {
    checks.push("⚠ Unit does not match infusion type");
  } else if (
    values.infusionType === "Timed Dose" &&
    ["mg/kg/min", "mg/kg/hr", "mcg/kg/min", "mcg/kg/hr"].includes(values.doseUnit)
  ) {
    checks.push("⚠ Unit does not match infusion type");
  } else {
    checks.push("OK: Infusion Type Match");
  }
  if (values.doseUnit.includes("/kg") && (!values.weight || values.weight <= 0)) {
    checks.push("⚠ Weight required for kg-based dosing");
  } else {
    checks.push("OK: Weight Dependency");
  }
  if (values.infusionType === "Continuous" && values.doseUnit === "mg/min") {
    checks.push("⚠ Consider using mg/hr for clarity");
  } else {
    checks.push("OK: Time Logic");
  }
  if (
    results.concentration !== null &&
    (results.concentration > 100 || results.concentration < 0.001)
  ) {
    checks.push("⚠ Unusual concentration");
  } else {
    checks.push("OK: Concentration Range");
  }
  if (
    values.weight !== null &&
    ["mg/kg", "mcg/kg", "units/kg", "g/kg"].includes(values.doseUnit) &&
    values.dose > 10
  ) {
    checks.push("⚠ Dose unusually high vs weight");
  } else {
    checks.push("OK: Dose/Weight Reasonableness");
  }
  const validUnits = [...timedDoseUnits, ...continuousUnits];
  if (!validUnits.includes(values.doseUnit)) {
    checks.push("⚠ Unit not recognized in system");
  } else {
    checks.push("OK: Unit Recognized");
  }
  return checks;
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
      rate !== null && values.duration !== null
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
  const hasIssue = safetyChecks.some(check => !check.startsWith("OK"));
const statusResult = document.getElementById("statusResult");
statusResult.textContent = hasIssue ? "CHECK INPUTS" : "READY";
statusResult.classList.remove("status-ready", "status-check");
if (hasIssue) {
  statusResult.classList.add("status-check");
} else {
  statusResult.classList.add("status-ready");
}
  document.getElementById("concentrationResult").textContent =
    formatNumber(concentration) + " mg/mL";
  document.getElementById("doseResult").textContent =
    formatNumber(calculatedDose) + " mg/hr";
  document.getElementById("rateResult").textContent =
    formatNumber(rate) + " mL/hr";
  document.getElementById("vtbiResult").textContent =
    formatNumber(calculatedVtbi) + " mL";
document.getElementById("safetyResults").innerHTML = safetyChecks
  .map(check => {
    const className = check.startsWith("OK") ? "safety-ok" : "safety-warning";
    return `<div class="${className}">${check}</div>`;
  })
  .join("");
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
  document.getElementById("infusionType").value = "Timed Dose";
  updateDoseUnits();
  document.getElementById("drugUnit").value = "g";
  document.getElementById("durationUnit").value = "hr";
  document.getElementById("statusResult").textContent = "Waiting for inputs";
  document.getElementById("statusResult").classList.remove("status-ready", "status-check");
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
  document.getElementById("orderedDoseUnit").value = "mg/kg";
  document.getElementById("concentrationUnit").value = "mg/mL";
  document.getElementById("drawResult").textContent = "--";
}
document.getElementById("clearInfusion").addEventListener("click", clearInfusion);
document.getElementById("clearDraw").addEventListener("click", clearDraw);
