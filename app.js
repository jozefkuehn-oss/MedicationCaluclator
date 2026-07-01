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
function updateEmsDoseUnits() {
  const infusionType = document.getElementById("emsInfusionType").value;
  const doseUnitSelect = document.getElementById("emsDoseUnit");

  doseUnitSelect.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select dose unit";
  placeholder.disabled = true;
  placeholder.selected = true;
  doseUnitSelect.appendChild(placeholder);

  if (!infusionType) {
    return;
  }

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
  if (dose === null || dose <= 0 || !unit) return null;

  if (unit === "g") return dose * 1000;
  if (unit === "mg") return dose;
  if (unit === "mcg") return dose / 1000;
  if (unit === "units") return dose;

  if (unit === "mg/kg") {
    if (weight === null || weight <= 0) return null;
    return weight * dose;
  }

  if (unit === "mcg/kg") {
    if (weight === null || weight <= 0) return null;
    return (weight * dose) / 1000;
  }

  if (unit === "units/kg") {
    if (weight === null || weight <= 0) return null;
    return weight * dose;
  }

  return null;
}

function standardizeVialAmountToMg(amount, unit) {
  if (amount === null || amount <= 0 || !unit) return null;

  if (unit === "g") return amount * 1000;
  if (unit === "mg") return amount;
  if (unit === "mcg") return amount / 1000;
  if (unit === "units") return amount;

  return null;
}

function calculateDrawUp() {
  const weight = getNumber("drawWeight");
  const orderedDose = getNumber("orderedDose");
  const orderedDoseUnit = document.getElementById("orderedDoseUnit").value;

  const vialDrugAmount = getNumber("vialDrugAmount");
  const vialDrugUnit = document.getElementById("vialDrugUnit").value;
  const vialVolume = getNumber("vialVolume");

  const drawResult = document.getElementById("drawResult");
  const drawDoseMgResult = document.getElementById("drawDoseMgResult");
  const drawConcentrationResult = document.getElementById("drawConcentrationResult");

  if (orderedDose === null || orderedDose <= 0) {
    drawResult.textContent = "Enter ordered dose";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  if (!orderedDoseUnit) {
    drawResult.textContent = "Select ordered dose unit";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  if (orderedDoseUnit.includes("/kg") && (weight === null || weight <= 0)) {
    drawResult.textContent = "Enter patient weight";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  if (vialDrugAmount === null || vialDrugAmount <= 0) {
    drawResult.textContent = "Enter vial drug amount";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  if (!vialDrugUnit) {
    drawResult.textContent = "Select vial drug unit";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  if (vialVolume === null || vialVolume <= 0) {
    drawResult.textContent = "Enter total vial volume";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
    return;
  }

  const orderedDoseMg = calculateDrawDoseMg(
    weight,
    orderedDose,
    orderedDoseUnit
  );

  const vialAmountMg = standardizeVialAmountToMg(
    vialDrugAmount,
    vialDrugUnit
  );

  const calculatedConcentrationMgMl =
    vialAmountMg !== null && vialVolume > 0
      ? vialAmountMg / vialVolume
      : null;

  const volumeToDraw =
    orderedDoseMg !== null && calculatedConcentrationMgMl
      ? orderedDoseMg / calculatedConcentrationMgMl
      : null;

  if (
    volumeToDraw !== null &&
    Number.isFinite(volumeToDraw) &&
    calculatedConcentrationMgMl !== null &&
    Number.isFinite(calculatedConcentrationMgMl)
  ) {
    drawResult.textContent = formatNumber(volumeToDraw) + " mL";
    drawDoseMgResult.textContent = formatNumber(orderedDoseMg) + " mg";
    drawConcentrationResult.textContent =
      formatNumber(calculatedConcentrationMgMl) + " mg/mL";
  } else {
    drawResult.textContent = "Unable to calculate";
    drawDoseMgResult.textContent = "--";
    drawConcentrationResult.textContent = "--";
  }
}

function clearDraw() {
  const fields = [
    "drawWeight",
    "orderedDose",
    "vialDrugAmount",
    "vialVolume"
  ];

  fields.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.value = "";
    }
  });

  const orderedDoseUnit = document.getElementById("orderedDoseUnit");
  const vialDrugUnit = document.getElementById("vialDrugUnit");
  const drawResult = document.getElementById("drawResult");
  const drawDoseMgResult = document.getElementById("drawDoseMgResult");
  const drawConcentrationResult = document.getElementById("drawConcentrationResult");

  if (orderedDoseUnit) orderedDoseUnit.value = "";
  if (vialDrugUnit) vialDrugUnit.value = "";

  if (drawResult) drawResult.textContent = "--";
  if (drawDoseMgResult) drawDoseMgResult.textContent = "--";
  if (drawConcentrationResult) drawConcentrationResult.textContent = "--";
}
function calculateGravityDrip(rateMlHr, dripFactor) {
  if (rateMlHr === null || !Number.isFinite(rateMlHr) || rateMlHr <= 0) {
    return null;
  }

  const mlMin = rateMlHr / 60;
  const gttsMin = mlMin * dripFactor;
  const gttsSec = gttsMin / 60;

  return {
    mlMin,
    gttsMin,
    gttsSec,
    practicalCount: getPracticalDropCount(gttsSec)
  };
}

function getPracticalDropCount(gttsSec) {
  if (!gttsSec || gttsSec <= 0 || !Number.isFinite(gttsSec)) {
    return "--";
  }

  if (gttsSec < 1) {
    const secondsPerDrop = Math.round(1 / gttsSec);
    return `1 drop every ${secondsPerDrop} seconds`;
  }

  if (gttsSec >= 1 && gttsSec < 2) {
    const dropsEveryTwoSeconds = Math.round(gttsSec * 2);

    if (dropsEveryTwoSeconds <= 2) {
      return "1 drop every second";
    }

    return `${dropsEveryTwoSeconds} drops every 2 seconds`;
  }

  const dropsPerSecond = Math.round(gttsSec);
  return `${dropsPerSecond} drops every second`;
}

function runEmsSafetyChecks(values, results, drip) {
  const checks = [];

  function addCheck(severity, message, field = null) {
    checks.push({ severity, message, field });
  }

  if (!values.infusionType) {
    addCheck("critical", "Infusion type is required.", "emsInfusionType");
  } else {
    addCheck("ok", "Infusion type selected.");
  }

  if (values.weight === null || values.weight <= 0) {
    addCheck("critical", "Patient weight is required.", "emsWeight");
  } else {
    addCheck("ok", "Weight check passed.");
  }

  if (values.dose === null || values.dose <= 0) {
    addCheck("critical", "Dose ordered is required.", "emsDose");
  } else {
    addCheck("ok", "Dose check passed.");
  }

  if (!values.doseUnit) {
    addCheck("critical", "Dose unit is required.", "emsDoseUnit");
  } else {
    addCheck("ok", "Dose unit selected.");
  }

  if (values.drugAmount === null || values.drugAmount <= 0) {
    addCheck("critical", "Drug amount in bag is required.", "emsDrugAmount");
  } else {
    addCheck("ok", "Drug amount entered.");
  }

  if (!values.drugUnit) {
    addCheck("critical", "Drug unit is required.", "emsDrugUnit");
  } else {
    addCheck("ok", "Drug unit selected.");
  }

  if (values.totalVolume === null || values.totalVolume <= 0) {
    addCheck("critical", "Total volume is required.", "emsTotalVolume");
  } else {
    addCheck("ok", "Total volume entered.");
  }

  if (values.vtbi !== null && values.totalVolume !== null && values.vtbi > values.totalVolume) {
    addCheck("critical", "VTBI cannot be greater than total bag volume.", "emsVtbi");
  } else {
    addCheck("ok", "VTBI check passed.");
  }

  if (!values.dripSet) {
    addCheck("critical", "Drip set is required.", "emsDripSet");
  } else {
    addCheck("ok", "Drip set selected.");
  }

  if (values.infusionType === "Timed Dose") {
    if (values.duration === null || values.duration <= 0) {
      addCheck("critical", "Desired duration is required for timed doses.", "emsDuration");
    } else {
      addCheck("ok", "Duration entered.");
    }

    if (!values.durationUnit) {
      addCheck("critical", "Duration unit is required for timed doses.", "emsDurationUnit");
    } else {
      addCheck("ok", "Duration unit selected.");
    }
  }

  if (values.infusionType === "Continuous") {
    if (values.duration !== null && values.duration <= 0) {
      addCheck("critical", "If entered, duration must be greater than zero.", "emsDuration");
    } else if (values.duration !== null && !values.durationUnit) {
      addCheck("critical", "Duration unit is required when duration is entered.", "emsDurationUnit");
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
    addCheck("critical", "Dose unit does not match continuous infusion type.", "emsDoseUnit");
  }

  if (
    values.infusionType === "Timed Dose" &&
    ["mg/kg/min", "mg/kg/hr", "mcg/kg/min", "mcg/kg/hr", "units/kg/min", "units/kg/hr", "mcg/min", "mcg/hr", "mg/min", "mg/hr", "units/min", "units/hr"].includes(values.doseUnit)
  ) {
    addCheck("critical", "Dose unit does not match timed dose infusion type.", "emsDoseUnit");
  }

  if (values.doseUnit && values.doseUnit.includes("/kg") && (!values.weight || values.weight <= 0)) {
    addCheck("critical", "Weight is required for kg-based dosing.", "emsWeight");
  }

  if (results.rate === null || Number.isNaN(results.rate) || !Number.isFinite(results.rate)) {
    addCheck("critical", "Flow rate could not be calculated. Check required inputs.");
  } else if (results.rate > 999) {
    addCheck("caution", "mL/hr equivalent is unusually high. Verify calculation.", "emsDuration");
  } else {
    addCheck("ok", "Rate safety check passed.");
  }

  if (
    results.concentration !== null &&
    Number.isFinite(results.concentration) &&
    (results.concentration > 100 || results.concentration < 0.001)
  ) {
    addCheck("caution", "Concentration is unusual. Verify drug amount and total volume.", "emsDrugAmount");
  } else if (results.concentration !== null) {
    addCheck("ok", "Concentration range check passed.");
  }

  if (values.infusionType === "Continuous" && values.doseUnit === "mg/min") {
    addCheck("caution", "Consider using mg/hr for clarity when documenting continuous infusions.", "emsDoseUnit");
  }

  if (
    values.weight !== null &&
    ["mg/kg", "mcg/kg", "units/kg", "g/kg"].includes(values.doseUnit) &&
    values.dose > 10
  ) {
    addCheck("caution", "Dose may be unusually high for weight-based dosing. Verify order.", "emsDose");
  }

  if (drip) {
    if (drip.gttsMin < 5) {
      addCheck("caution", "Drip rate is very slow and may be difficult to maintain accurately by gravity.", "emsDripSet");
    }

    if (drip.gttsMin > 120) {
      addCheck("caution", "Drip rate is very fast and may be difficult to control accurately by gravity.", "emsDripSet");
    }

    if (drip.gttsSec < 0.25) {
      addCheck("caution", "Drop timing is very slow. Consider whether gravity drip is practical.", "emsDripSet");
    }

    if (drip.gttsSec > 3) {
      addCheck("caution", "Drop timing is very fast. Consider pump use if available.", "emsDripSet");
    }
  }

  return checks;
}

function clearEmsFieldHighlights() {
  const fieldIds = [
    "emsInfusionType",
    "emsWeight",
    "emsDose",
    "emsDoseUnit",
    "emsDrugAmount",
    "emsDrugUnit",
    "emsTotalVolume",
    "emsVtbi",
    "emsDuration",
    "emsDurationUnit",
    "emsDripSet"
  ];

  fieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.classList.remove("input-error", "input-caution");
    }
  });
}

function applyEmsFieldHighlights(checks) {
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
function calculateEMS() {
  const values = {
    infusionType: document.getElementById("emsInfusionType").value,
    weight: getNumber("emsWeight"),
    dose: getNumber("emsDose"),
    doseUnit: document.getElementById("emsDoseUnit").value,
    drugAmount: getNumber("emsDrugAmount"),
    drugUnit: document.getElementById("emsDrugUnit").value,
    totalVolume: getNumber("emsTotalVolume"),
    vtbi: getNumber("emsVtbi"),
    duration: getNumber("emsDuration"),
    durationUnit: document.getElementById("emsDurationUnit").value,
    dripSet: Number(document.getElementById("emsDripSet").value)
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

  const drip = calculateGravityDrip(rate, values.dripSet);

  const results = {
    concentration,
    calculatedDose,
    rate,
    calculatedVtbi
  };

  const safetyChecks = runEmsSafetyChecks(values, results, drip);
  const hasCritical = safetyChecks.some(check => check.severity === "critical");
  const hasCaution = safetyChecks.some(check => check.severity === "caution");

  const status = document.getElementById("emsStatusResult");
  const resultsPanel = document.getElementById("emsResultsPanel");

  status.classList.remove("ems-ready", "ems-caution", "ems-warning");
  resultsPanel.classList.remove("critical-panel", "caution-panel", "ready-panel");

  clearEmsFieldHighlights();
  applyEmsFieldHighlights(safetyChecks);

  if (hasCritical) {
    triggerCriticalScreenAlert();

    status.textContent = "CALCULATION BLOCKED";
    status.classList.add("ems-warning");
    resultsPanel.classList.add("critical-panel");

    document.getElementById("emsConcentrationResult").textContent = "LOCKED";
    document.getElementById("emsDoseResult").textContent = "LOCKED";
    document.getElementById("emsRateResult").textContent = "LOCKED";
    document.getElementById("emsMlMinResult").textContent = "LOCKED";
    document.getElementById("emsGttsMinResult").textContent = "LOCKED";
    document.getElementById("emsGttsSecResult").textContent = "LOCKED";
    document.getElementById("emsPracticalResult").textContent = "LOCKED";
    document.getElementById("emsVtbiResult").textContent = "LOCKED";
  } else if (hasCaution) {
    clearCriticalScreenAlert();

    status.textContent = "VERIFY BEFORE USE";
    status.classList.add("ems-caution");
    resultsPanel.classList.add("caution-panel");

    document.getElementById("emsConcentrationResult").textContent =
      formatNumber(concentration) + " mg/mL";

    document.getElementById("emsDoseResult").textContent =
      formatNumber(calculatedDose) + " mg/hr";

    document.getElementById("emsRateResult").textContent =
      formatNumber(rate) + " mL/hr";

    document.getElementById("emsMlMinResult").textContent =
      drip ? formatNumber(drip.mlMin) + " mL/min" : "--";

    document.getElementById("emsGttsMinResult").textContent =
      drip ? formatNumber(drip.gttsMin) + " gtts/min" : "--";

    document.getElementById("emsGttsSecResult").textContent =
      drip ? formatNumber(drip.gttsSec) + " gtts/sec" : "--";

    document.getElementById("emsPracticalResult").textContent =
      drip ? drip.practicalCount : "--";

    document.getElementById("emsVtbiResult").textContent =
      values.infusionType === "Continuous" && calculatedVtbi === null
        ? "Not calculated without duration"
        : formatNumber(calculatedVtbi) + " mL";
  } else {
    clearCriticalScreenAlert();

    status.textContent = "READY TO VERIFY";
    status.classList.add("ems-ready");
    resultsPanel.classList.add("ready-panel");

    document.getElementById("emsConcentrationResult").textContent =
      formatNumber(concentration) + " mg/mL";

    document.getElementById("emsDoseResult").textContent =
      formatNumber(calculatedDose) + " mg/hr";

    document.getElementById("emsRateResult").textContent =
      formatNumber(rate) + " mL/hr";

    document.getElementById("emsMlMinResult").textContent =
      drip ? formatNumber(drip.mlMin) + " mL/min" : "--";

    document.getElementById("emsGttsMinResult").textContent =
      drip ? formatNumber(drip.gttsMin) + " gtts/min" : "--";

    document.getElementById("emsGttsSecResult").textContent =
      drip ? formatNumber(drip.gttsSec) + " gtts/sec" : "--";

    document.getElementById("emsPracticalResult").textContent =
      drip ? drip.practicalCount : "--";

    document.getElementById("emsVtbiResult").textContent =
      values.infusionType === "Continuous" && calculatedVtbi === null
        ? "Not calculated without duration"
        : formatNumber(calculatedVtbi) + " mL";
  }

  document.getElementById("emsSafetyResults").innerHTML = renderSafetyChecks(safetyChecks);
}

function clearEMS() {
  const fields = [
    "emsWeight",
    "emsDose",
    "emsDrugAmount",
    "emsTotalVolume",
    "emsVtbi",
    "emsDuration"
  ];

  fields.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.value = "";
    }
  });

  document.getElementById("emsInfusionType").value = "";
  updateEmsDoseUnits();

  document.getElementById("emsDoseUnit").value = "";
  document.getElementById("emsDrugUnit").value = "";
  document.getElementById("emsDurationUnit").value = "";
  document.getElementById("emsDripSet").value = "";

  clearCriticalScreenAlert();
  clearEmsFieldHighlights();

  const status = document.getElementById("emsStatusResult");
  const resultsPanel = document.getElementById("emsResultsPanel");

  status.textContent = "Waiting for inputs";
  status.classList.remove("ems-ready", "ems-caution", "ems-warning");

  resultsPanel.classList.remove("critical-panel", "caution-panel", "ready-panel");

  document.getElementById("emsConcentrationResult").textContent = "--";
  document.getElementById("emsDoseResult").textContent = "--";
  document.getElementById("emsRateResult").textContent = "--";
  document.getElementById("emsMlMinResult").textContent = "--";
  document.getElementById("emsGttsMinResult").textContent = "--";
  document.getElementById("emsGttsSecResult").textContent = "--";
  document.getElementById("emsPracticalResult").textContent = "--";
  document.getElementById("emsVtbiResult").textContent = "--";
  document.getElementById("emsSafetyResults").textContent = "Safety checks will appear here.";
}
function showSection(section) {
  const infusionSection = document.getElementById("infusionSection");
  const drawSection = document.getElementById("drawSection");
  const emsSection = document.getElementById("emsSection");

  const showInfusion = document.getElementById("showInfusion");
  const showDraw = document.getElementById("showDraw");
  const showEMS = document.getElementById("showEMS");

  infusionSection.classList.add("hidden");
  drawSection.classList.add("hidden");
  emsSection.classList.add("hidden");

  showInfusion.classList.remove("active");
  showDraw.classList.remove("active");
  showEMS.classList.remove("active");

  if (section === "infusion") {
    infusionSection.classList.remove("hidden");
    showInfusion.classList.add("active");
  }

  if (section === "draw") {
    drawSection.classList.remove("hidden");
    showDraw.classList.add("active");
  }

  if (section === "ems") {
    emsSection.classList.remove("hidden");
    showEMS.classList.add("active");
  }
}
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
    const field = document.getElementById(id);
    if (field) {
      field.value = "";
    }
  });
  const infusionType = document.getElementById("infusionType");
  const doseUnit = document.getElementById("doseUnit");
  const drugUnit = document.getElementById("drugUnit");
  const durationUnit = document.getElementById("durationUnit");
  if (infusionType) infusionType.value = "";
  updateDoseUnits();
  if (doseUnit) doseUnit.value = "";
  if (drugUnit) drugUnit.value = "";
  if (durationUnit) durationUnit.value = "";
  const statusResult = document.getElementById("statusResult");
  const resultsPanel = document.getElementById("infusionResultsPanel");
  const alertBanner = document.getElementById("alertBanner");
  if (statusResult) {
    statusResult.textContent = "Waiting for inputs";
    statusResult.classList.remove("status-ready", "status-check");
  }
  if (alertBanner) {
    alertBanner.textContent = "Waiting for inputs";
    alertBanner.classList.remove("ready", "caution", "critical");
    alertBanner.classList.add("neutral");
  }
  if (resultsPanel) {
    resultsPanel.classList.remove(
      "warning-panel",
      "ready-panel",
      "critical-panel",
      "caution-panel"
    );
  }
  if (typeof clearCriticalScreenAlert === "function") {
    clearCriticalScreenAlert();
  }
  if (typeof clearFieldHighlights === "function") {
    clearFieldHighlights();
  }
  document.getElementById("concentrationResult").textContent = "--";
  document.getElementById("doseResult").textContent = "--";
  document.getElementById("rateResult").textContent = "--";
  document.getElementById("vtbiResult").textContent = "--";
  document.getElementById("safetyResults").textContent = "Safety checks will appear here.";
}
const showInfusionButton = document.getElementById("showInfusion");
const showDrawButton = document.getElementById("showDraw");
const showEMSButton = document.getElementById("showEMS");

if (showInfusionButton) {
  showInfusionButton.addEventListener("click", function () {
    showSection("infusion");
  });
}

if (showDrawButton) {
  showDrawButton.addEventListener("click", function () {
    showSection("draw");
  });
}

if (showEMSButton) {
  showEMSButton.addEventListener("click", function () {
    showSection("ems");
  });
}

const calculateInfusionButton = document.getElementById("calculateInfusion");

if (calculateInfusionButton) {
  calculateInfusionButton.addEventListener("click", calculateInfusion);
}

const clearInfusionButton = document.getElementById("clearInfusion");

if (clearInfusionButton) {
  clearInfusionButton.addEventListener("click", clearInfusion);
}

const calculateDrawButton = document.getElementById("calculateDraw");

if (calculateDrawButton) {
  calculateDrawButton.addEventListener("click", calculateDrawUp);
}

const clearDrawButton = document.getElementById("clearDraw");

if (clearDrawButton) {
  clearDrawButton.addEventListener("click", clearDraw);
}

const emsInfusionTypeSelect = document.getElementById("emsInfusionType");

if (emsInfusionTypeSelect) {
  emsInfusionTypeSelect.addEventListener("change", updateEmsDoseUnits);
}

const calculateEMSButton = document.getElementById("calculateEMS");

if (calculateEMSButton) {
  calculateEMSButton.addEventListener("click", calculateEMS);
}

const clearEMSButton = document.getElementById("clearEMS");

if (clearEMSButton) {
  clearEMSButton.addEventListener("click", clearEMS);
}

if (typeof updateEmsDoseUnits === "function") {
  updateEmsDoseUnits();
}
showSection("draw");