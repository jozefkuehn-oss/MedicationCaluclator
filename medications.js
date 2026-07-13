const medicationLibrary = [
  {
    genericName: "Acetaminophen",
    tradeNames: ["Ofirmev", "Tylenol"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Acetylcysteine",
    tradeNames: ["Acetadote"],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Adenosine",
    tradeNames: ["Adenocard"],
    classes: ["ACLS / Code Medications"]
  },
  {
    genericName: "Albumin",
    tradeNames: ["Albutein", "Flexbumin"],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Alteplase",
    tradeNames: ["Activase"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Amikacin",
    tradeNames: [],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Aminocaproic Acid",
    tradeNames: ["Amicar"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Amiodarone",
    tradeNames: ["Cordarone", "Nexterone"],
    classes: ["ACLS / Code Medications"]
  },
  {
    genericName: "Ampicillin",
    tradeNames: [],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Ampicillin/Sulbactam",
    tradeNames: ["Unasyn"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Argatroban",
    tradeNames: ["Acova"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Azithromycin",
    tradeNames: ["Zithromax"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Bivalirudin",
    tradeNames: ["Angiomax"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Bumetanide",
    tradeNames: ["Bumex"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Calcium Chloride",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Calcium Gluconate",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Caspofungin",
    tradeNames: ["Cancidas"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Cefazolin",
    tradeNames: ["Ancef"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Cefepime",
    tradeNames: ["Maxipime"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Cefotaxime",
    tradeNames: ["Claforan"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Ceftaroline",
    tradeNames: ["Teflaro"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Ceftazidime",
    tradeNames: ["Fortaz"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Ceftriaxone",
    tradeNames: ["Rocephin"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Cefuroxime",
    tradeNames: ["Zinacef"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Ciprofloxacin",
    tradeNames: ["Cipro"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Clevidipine",
    tradeNames: ["Cleviprex"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Clindamycin",
    tradeNames: ["Cleocin"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Daptomycin",
    tradeNames: ["Cubicin"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Dexmedetomidine",
    tradeNames: ["Precedex"],
    classes: ["Sedation / Analgesia"]
  },
  {
    genericName: "Dextrose 10%",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Dextrose 20%",
    tradeNames: [],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Dextrose 50%",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Diazepam",
    tradeNames: ["Valium"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Digoxin",
    tradeNames: ["Lanoxin"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Diltiazem",
    tradeNames: ["Cardizem"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Diphenhydramine",
    tradeNames: ["Benadryl"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Dobutamine",
    tradeNames: ["Dobutrex"],
    classes: ["Vasopressors / Inotropes"]
  },
  {
    genericName: "Dopamine",
    tradeNames: ["Intropin"],
    classes: ["Vasopressors / Inotropes"]
  },
  {
    genericName: "Enalaprilat",
    tradeNames: ["Vasotec IV"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Epinephrine",
    tradeNames: ["Adrenalin"],
    classes: ["ACLS / Code Medications", "Vasopressors / Inotropes"]
  },
  {
    genericName: "Eptifibatide",
    tradeNames: ["Integrilin"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Ertapenem",
    tradeNames: ["Invanz"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Esmolol",
    tradeNames: ["Brevibloc"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Etomidate",
    tradeNames: ["Amidate"],
    classes: ["RSI / Airway"]
  },
  {
    genericName: "Famotidine",
    tradeNames: ["Pepcid"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Fentanyl",
    tradeNames: ["Sublimaze"],
    classes: ["Sedation / Analgesia"]
  },
  {
    genericName: "Fluconazole",
    tradeNames: ["Diflucan"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Fosphenytoin",
    tradeNames: ["Cerebyx"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Furosemide",
    tradeNames: ["Lasix"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Gentamicin",
    tradeNames: [],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Glucagon",
    tradeNames: ["GlucaGen"],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Haloperidol",
    tradeNames: ["Haldol"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Heparin",
    tradeNames: [],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Hydralazine",
    tradeNames: ["Apresoline"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Hydrocortisone",
    tradeNames: ["Solu-Cortef"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Hydromorphone",
    tradeNames: ["Dilaudid"],
    classes: ["Sedation / Analgesia"]
  },
  {
    genericName: "Hydroxocobalamin",
    tradeNames: ["Cyanokit"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Immune Globulin IV",
    tradeNames: ["IVIG"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Infliximab",
    tradeNames: ["Remicade"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Insulin Regular",
    tradeNames: ["Humulin R", "Novolin R"],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Ketamine",
    tradeNames: ["Ketalar"],
    classes: ["RSI / Airway", "Sedation / Analgesia"]
  },
  {
    genericName: "Ketorolac",
    tradeNames: ["Toradol"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Labetalol",
    tradeNames: ["Trandate", "Normodyne"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Levetiracetam",
    tradeNames: ["Keppra"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Levofloxacin",
    tradeNames: ["Levaquin"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Lidocaine",
    tradeNames: ["Xylocaine"],
    classes: ["ACLS / Code Medications"]
  },
  {
    genericName: "Linezolid",
    tradeNames: ["Zyvox"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Lorazepam",
    tradeNames: ["Ativan"],
    classes: ["Sedation / Analgesia"]
  },
  {
    genericName: "Magnesium Sulfate",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Seizure / Neuro", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Mannitol",
    tradeNames: ["Osmitrol"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Meropenem",
    tradeNames: ["Merrem"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Methocarbamol",
    tradeNames: ["Robaxin"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Methylene Blue",
    tradeNames: ["ProvayBlue"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Methylprednisolone",
    tradeNames: ["Solu-Medrol"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Metoclopramide",
    tradeNames: ["Reglan"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Metoprolol",
    tradeNames: ["Lopressor"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Metronidazole",
    tradeNames: ["Flagyl"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Micafungin",
    tradeNames: ["Mycamine"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Midazolam",
    tradeNames: ["Versed"],
    classes: ["RSI / Airway", "Sedation / Analgesia"]
  },
  {
    genericName: "Milrinone",
    tradeNames: ["Primacor"],
    classes: ["Vasopressors / Inotropes"]
  },
  {
    genericName: "Morphine",
    tradeNames: [],
    classes: ["Sedation / Analgesia"]
  },
  {
    genericName: "Naloxone",
    tradeNames: ["Narcan"],
    classes: ["ACLS / Code Medications"]
  },
  {
    genericName: "Nicardipine",
    tradeNames: ["Cardene"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Nitroglycerin",
    tradeNames: ["Tridil"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Nitroprusside",
    tradeNames: ["Nipride"],
    classes: ["Vasodilators / Antihypertensives"]
  },
  {
    genericName: "Norepinephrine",
    tradeNames: ["Levophed"],
    classes: ["Vasopressors / Inotropes"]
  },
  {
    genericName: "Octreotide",
    tradeNames: ["Sandostatin"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Ondansetron",
    tradeNames: ["Zofran"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Pantoprazole",
    tradeNames: ["Protonix"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Penicillin G",
    tradeNames: [],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Phenobarbital",
    tradeNames: ["Luminal"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Phenylephrine",
    tradeNames: ["Neo-Synephrine"],
    classes: ["Vasopressors / Inotropes"]
  },
  {
    genericName: "Phenytoin",
    tradeNames: ["Dilantin"],
    classes: ["Seizure / Neuro"]
  },
  {
    genericName: "Piperacillin/Tazobactam",
    tradeNames: ["Zosyn"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Potassium Chloride",
    tradeNames: [],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Procainamide",
    tradeNames: ["Pronestyl"],
    classes: ["ACLS / Code Medications"]
  },
  {
    genericName: "Promethazine",
    tradeNames: ["Phenergan"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Propofol",
    tradeNames: ["Diprivan"],
    classes: ["RSI / Airway", "Sedation / Analgesia"]
  },
  {
    genericName: "Protamine",
    tradeNames: [],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Rocuronium",
    tradeNames: ["Zemuron"],
    classes: ["RSI / Airway"]
  },
  {
    genericName: "Sodium Bicarbonate",
    tradeNames: [],
    classes: ["ACLS / Code Medications", "Electrolytes / Metabolic"]
  },
  {
    genericName: "Sodium Phosphate",
    tradeNames: [],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Succinylcholine",
    tradeNames: ["Anectine", "Quelicin"],
    classes: ["RSI / Airway"]
  },
  {
    genericName: "Tenecteplase",
    tradeNames: ["TNKase"],
    classes: ["Anticoagulation / Thrombolytics"]
  },
  {
    genericName: "Thiamine",
    tradeNames: [],
    classes: ["Electrolytes / Metabolic"]
  },
  {
    genericName: "Tigecycline",
    tradeNames: ["Tygacil"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Tranexamic Acid",
    tradeNames: ["Cyklokapron"],
    classes: ["ED Miscellaneous"]
  },
  {
    genericName: "Vancomycin",
    tradeNames: ["Vancocin"],
    classes: ["Antibiotics / Antifungals"]
  },
  {
    genericName: "Vasopressin",
    tradeNames: ["Vasostrict"],
    classes: ["ACLS / Code Medications", "Vasopressors / Inotropes"]
  },
  {
    genericName: "Vecuronium",
    tradeNames: ["Norcuron"],
    classes: ["RSI / Airway"]
  },
  {
    genericName: "Voriconazole",
    tradeNames: ["Vfend"],
    classes: ["Antibiotics / Antifungals"]
  }
];

const medicationClassDefaults = {
  "ACLS / Code Medications": {
    commonUse: "Used for resuscitation, dysrhythmia management, hemodynamic support, or other emergency indications depending on protocol.",
    commonConcentrations: "Verify vial, syringe, premix, or pharmacy-prepared concentration before administration.",
    preparationNotes: "Preparation varies by indication and route. Verify medication concentration, route, compatibility, and local emergency protocol before administration.",
    keyWarnings: "High-alert medication in emergency use. Verify indication, rhythm/hemodynamics, dose, route, concentration, and local protocol."
  },

  "RSI / Airway": {
    commonUse: "Used for rapid sequence intubation, induction, paralysis, or airway-related sedation depending on medication and protocol.",
    commonConcentrations: "Commonly supplied in vial, ampule, or prefilled syringe depending on medication and facility stock.",
    preparationNotes: "Usually drawn from vial or prefilled syringe and administered IV push for RSI/airway use. Verify dose, concentration, airway readiness, and post-intubation sedation plan.",
    keyWarnings: "Airway medication. Ensure airway equipment, ventilation plan, monitoring, and appropriate sedation/analgesia when paralytics are used."
  },

  "Vasopressors / Inotropes": {
    commonUse: "Used for blood pressure support, shock states, or cardiac output support depending on medication and protocol.",
    commonConcentrations: "Often supplied as concentrate, vial, or premixed infusion depending on medication and facility standard concentration.",
    preparationNotes: "Commonly prepared as a pump infusion in NS, D5W, or premixed product depending on medication and facility protocol. Verify final concentration, titration parameters, and line compatibility.",
    keyWarnings: "High-alert medication. Monitor blood pressure, heart rate, rhythm, perfusion, IV site, and ordered titration goals."
  },

  "Vasodilators / Antihypertensives": {
    commonUse: "Used for blood pressure control, rate control, afterload reduction, or vasodilation depending on medication and indication.",
    commonConcentrations: "May be supplied as vial, premixed infusion, or ready-to-administer product depending on medication.",
    preparationNotes: "Preparation varies by product. Some medications are given IV push, while others require pump infusion. Verify dilution, concentration, and titration protocol.",
    keyWarnings: "Monitor blood pressure and heart rate closely. Avoid rapid or excessive blood pressure reduction unless protocol-directed."
  },

  "Sedation / Analgesia": {
    commonUse: "Used for pain control, procedural sedation, induction, or ongoing sedation depending on medication and protocol.",
    commonConcentrations: "Commonly supplied in vial, ampule, prefilled syringe, or premixed infusion depending on medication and facility stock.",
    preparationNotes: "Verify route, concentration, dose, monitoring requirements, and whether the medication should be administered IV push or by pump infusion.",
    keyWarnings: "May cause respiratory depression, hypotension, altered mental status, or loss of airway reflexes. Ensure monitoring and airway support are available."
  },

  "Seizure / Neuro": {
    commonUse: "Used for seizure management, neuroprotection, intracranial pressure management, or neurologic indications depending on medication.",
    commonConcentrations: "Verify vial concentration, reconstitution requirements, and facility-specific standard concentration.",
    preparationNotes: "Preparation varies by medication. Verify diluent, infusion rate, compatibility, and neurologic monitoring requirements.",
    keyWarnings: "Monitor airway, respiratory status, mental status, blood pressure, and neurologic response. Use caution with sedating medications."
  },

  "Anticoagulation / Thrombolytics": {
    commonUse: "Used for anticoagulation, thrombolysis, or reversal/support of coagulation-related therapy depending on indication.",
    commonConcentrations: "Verify vial, premix, kit, or pharmacy-prepared concentration before administration.",
    preparationNotes: "Preparation varies widely by indication. Verify dose, timing, reconstitution, dilution, route, infusion setup, and lab monitoring requirements.",
    keyWarnings: "High-alert bleeding-risk medication. Verify indication, contraindications, dose, timing, labs, bleeding risk, and reversal plan when applicable."
  },

  "Electrolytes / Metabolic": {
    commonUse: "Used for electrolyte replacement, metabolic emergencies, toxicology indications, or glucose/metabolic support depending on medication.",
    commonConcentrations: "Verify product concentration carefully. Many electrolyte products are concentrated and may require dilution.",
    preparationNotes: "Dilution and infusion rate vary by medication and indication. Verify compatibility, concentration, route, infusion rate, and lab values before administration.",
    keyWarnings: "Many electrolyte/metabolic medications are high-alert. Monitor labs, ECG when appropriate, renal function, and infusion site."
  },

  "Antibiotics / Antifungals": {
    commonUse: "Used for suspected or confirmed infection based on source, organism coverage, cultures, and local antimicrobial guidance.",
    commonConcentrations: "Usually supplied as powder for reconstitution, premixed infusion, or ready-to-use formulation depending on product and facility supply.",
    preparationNotes: "Reconstitute and dilute according to product labeling and pharmacy/facility guidance. Common diluents may include NS, D5W, or LR depending on the medication.",
    keyWarnings: "Check allergy history, renal/hepatic dosing, culture/source guidance, infusion time, and compatibility."
  },

  "ED Miscellaneous": {
    commonUse: "Used for emergency department or inpatient supportive care indications depending on medication.",
    commonConcentrations: "Verify product formulation, vial concentration, and facility-specific standard concentration before preparation.",
    preparationNotes: "Preparation varies by medication, route, and product. Verify label, compatibility, concentration, and local policy.",
    keyWarnings: "Verify indication, route, dose, contraindications, monitoring needs, and local protocol before administration."
  }
};

const medicationDetailOverrides = {
  "Acetaminophen": {
    commonUse: "Used for pain and fever management.",
    commonConcentrations: "IV acetaminophen is commonly supplied as a ready-to-administer solution; oral and rectal formulations may also be stocked.",
    preparationNotes: "IV acetaminophen is typically supplied ready to administer and is not usually diluted. Verify route, dose, and product concentration before use.",
    keyWarnings: "Monitor total daily acetaminophen exposure. Use caution with liver disease, alcohol use disorder, or overdose risk."
  },

  "Acetylcysteine": {
    commonUse: "Used for acetaminophen toxicity and selected toxicology indications.",
    commonConcentrations: "Commonly supplied as a concentrated IV solution requiring protocol-specific dilution.",
    preparationNotes: "IV acetylcysteine is commonly diluted in D5W. Some protocols allow NS or other diluents depending on age, fluid restriction, and product labeling. Verify protocol-specific bag volumes.",
    keyWarnings: "Monitor for anaphylactoid reactions, nausea/vomiting, bronchospasm, and protocol-specific lab monitoring."
  },

  "Adenosine": {
    commonUse: "Used for selected regular narrow-complex supraventricular tachycardias and diagnostic rhythm evaluation.",
    commonConcentrations: "Commonly supplied as single-dose IV vials or prefilled syringes.",
    preparationNotes: "Usually administered undiluted by rapid IV push followed immediately by a rapid flush. Use proximal access when possible and follow ACLS/local protocol.",
    keyWarnings: "May cause transient asystole, flushing, chest discomfort, shortness of breath, hypotension, or bronchospasm. Verify rhythm and contraindications."
  },

  "Albumin": {
    commonUse: "Used for intravascular volume expansion or oncotic support in selected clinical situations.",
    commonConcentrations: "Commonly supplied as 5% or 25% albumin solution depending on product and facility stock.",
    preparationNotes: "Supplied ready to administer and is not typically diluted. Do not mix with other medications unless specifically allowed by policy.",
    keyWarnings: "Monitor for fluid overload, pulmonary edema, hypotension, and allergic reaction."
  },

  "Alteplase": {
    commonUse: "Used for thrombolysis in selected stroke, PE, catheter clearance, or cardiac arrest-related indications depending on protocol.",
    commonConcentrations: "Supplied as lyophilized powder requiring reconstitution; dose and preparation depend on indication.",
    preparationNotes: "Reconstitute with manufacturer-supplied sterile water for injection or directed diluent. Do not shake. Further dilution/infusion setup depends on indication and protocol.",
    keyWarnings: "High-alert thrombolytic. Verify indication, contraindications, timing, bleeding risk, and neurologic/bleeding monitoring."
  },

  "Amikacin": {
    commonUse: "Aminoglycoside antibiotic used for selected serious gram-negative infections.",
    commonConcentrations: "Commonly supplied as injectable solution or pharmacy-prepared dose.",
    preparationNotes: "Typically diluted in NS or D5W for IV infusion. Verify final concentration, renal dosing, peak/trough monitoring, and compatibility.",
    keyWarnings: "Monitor renal function, ototoxicity risk, drug levels when ordered, and other nephrotoxic medications."
  },

  "Aminocaproic Acid": {
    commonUse: "Antifibrinolytic used for selected bleeding or hyperfibrinolysis indications.",
    commonConcentrations: "Verify vial concentration and ordered dose.",
    preparationNotes: "May be administered undiluted by controlled IV injection or diluted in NS, D5W, or compatible IV fluid for infusion depending on protocol.",
    keyWarnings: "Monitor for thrombosis risk, renal function, and indication-specific contraindications."
  },

  "Amiodarone": {
    commonUse: "Used for selected ventricular and atrial dysrhythmias.",
    commonConcentrations: "Commonly supplied as 50 mg/mL vials or premixed dextrose formulations depending on facility supply.",
    preparationNotes: "Commonly diluted in D5W for IV infusion. Premixed Nexterone formulations are ready to use and should not be further diluted unless directed by labeling or pharmacy. Verify container, tubing, filter requirements, and local policy.",
    keyWarnings: "Monitor rhythm, blood pressure, QT interval, and infusion site. May cause hypotension, bradycardia, QT prolongation, and infusion-related complications."
  },

  "Argatroban": {
    commonUse: "Direct thrombin inhibitor used for anticoagulation, including selected HIT-related indications.",
    commonConcentrations: "Concentrated product commonly requires dilution; ready-to-use products may also exist.",
    preparationNotes: "Commonly diluted in NS, D5W, or LR for infusion. Verify final concentration, aPTT monitoring, and hepatic dosing considerations.",
    keyWarnings: "High-alert anticoagulant. Monitor aPTT, bleeding, hepatic function, and procedure-related protocol requirements."
  },

  "Azithromycin": {
    commonUse: "Macrolide antibiotic used for selected respiratory, atypical, and other susceptible infections.",
    commonConcentrations: "IV product commonly requires reconstitution and further dilution.",
    preparationNotes: "IV azithromycin requires reconstitution and further dilution, commonly in NS or D5W, before infusion. Do not give IV push.",
    keyWarnings: "Use caution with QT prolongation risk, liver disease, and interacting medications."
  },

  "Bivalirudin": {
    commonUse: "Direct thrombin inhibitor used for procedural or selected anticoagulation indications.",
    commonConcentrations: "Usually supplied as powder requiring reconstitution.",
    preparationNotes: "Reconstitute with sterile water for injection, then further dilute in NS or D5W for infusion. Verify renal dosing and procedural protocol.",
    keyWarnings: "High-alert anticoagulant. Monitor bleeding, aPTT/ACT per protocol, renal function, and procedural indication."
  },

  "Bumetanide": {
    commonUse: "Loop diuretic used for fluid overload or diuresis.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "May be administered slow IV push or diluted in NS or D5W for infusion depending on protocol.",
    keyWarnings: "Monitor blood pressure, urine output, electrolytes, renal function, and hearing changes with high doses."
  },

  "Calcium Chloride": {
    commonUse: "Used for hyperkalemia membrane stabilization, hypocalcemia, calcium channel blocker toxicity, or cardiac arrest-related indications.",
    commonConcentrations: "Commonly supplied as 10% solution in vials or prefilled syringes.",
    preparationNotes: "Often administered undiluted by slow IV push in emergencies or diluted for controlled infusion depending on indication. Prefer central access when possible. Do not mix with bicarbonate or phosphate-containing solutions.",
    keyWarnings: "Vesicant risk. Prefer central access when possible. Avoid extravasation and avoid co-administration with bicarbonate/phosphate due to precipitation risk."
  },

  "Calcium Gluconate": {
    commonUse: "Used for hyperkalemia membrane stabilization, hypocalcemia, magnesium toxicity, or calcium channel blocker toxicity.",
    commonConcentrations: "Commonly supplied as 10% solution in vials or syringes.",
    preparationNotes: "May be administered slow IV push or diluted in NS or D5W for infusion depending on indication. Avoid mixing with bicarbonate or phosphate-containing solutions.",
    keyWarnings: "Monitor rhythm and IV site. Less caustic than calcium chloride but still requires compatibility verification."
  },

  "Caspofungin": {
    commonUse: "Echinocandin antifungal used for selected invasive fungal infections.",
    commonConcentrations: "Usually supplied as powder requiring reconstitution and dilution.",
    preparationNotes: "Reconstitute per vial instructions and dilute for infusion, commonly in NS/LR-compatible non-dextrose fluids per product labeling. Avoid dextrose-containing diluents unless specifically allowed by product guidance.",
    keyWarnings: "Monitor hepatic function, infusion reaction, allergy history, and compatibility."
  },

  "Cefazolin": {
    commonUse: "First-generation cephalosporin used for selected skin/soft tissue infections and perioperative prophylaxis.",
    preparationNotes: "Reconstitute per vial instructions and commonly dilute in NS or D5W for IV infusion. Verify product concentration, stability, and infusion time."
  },

  "Cefepime": {
    commonUse: "Fourth-generation cephalosporin used for broad gram-negative coverage including Pseudomonas when indicated.",
    preparationNotes: "Reconstitute per vial instructions and commonly dilute in NS or D5W for IV infusion. Verify renal dosing, concentration, and infusion time.",
    keyWarnings: "Use caution with renal impairment; monitor for neurotoxicity or altered mental status."
  },

  "Ceftriaxone": {
    commonUse: "Third-generation cephalosporin used for selected respiratory, CNS, urinary, intra-abdominal, and sepsis-related indications.",
    preparationNotes: "Reconstitute per vial instructions and commonly dilute in NS or D5W for IV infusion. Avoid calcium-containing IV solutions in neonates and verify compatibility policy for all patients.",
    keyWarnings: "Check allergy history and compatibility. Avoid inappropriate calcium co-administration per policy."
  },

  "Ciprofloxacin": {
    commonUse: "Fluoroquinolone antibiotic used for selected gram-negative, urinary, intra-abdominal, and other susceptible infections.",
    preparationNotes: "Often supplied as a premixed IV infusion. If preparing from concentrate, dilute according to product labeling, commonly in NS or D5W-compatible solutions. Do not give IV push.",
    keyWarnings: "Use caution with QT prolongation, tendon injury risk, CNS effects, and interacting medications."
  },

  "Clevidipine": {
    commonUse: "Used for rapid titratable blood pressure reduction.",
    commonConcentrations: "Supplied as a lipid emulsion in ready-to-use vials.",
    preparationNotes: "Ready-to-use lipid emulsion. Do not dilute. Use dedicated line when possible and follow product-specific beyond-use timing after vial puncture.",
    keyWarnings: "Monitor blood pressure and heart rate closely. Avoid in patients with egg/soy allergy or lipid metabolism issues if contraindicated by policy/product labeling."
  },

  "Clindamycin": {
    commonUse: "Lincosamide antibiotic used for selected anaerobic, dental, skin/soft tissue, and toxin-suppression indications.",
    preparationNotes: "Dilute in NS or D5W for IV infusion. Do not give rapid IV push. Verify final concentration and infusion time.",
    keyWarnings: "Monitor for diarrhea/C. difficile risk and allergy history."
  },

  "Daptomycin": {
    commonUse: "Lipopeptide antibiotic used for selected resistant gram-positive infections; not used for pneumonia.",
    preparationNotes: "Reconstitute carefully with NS per product guidance; avoid vigorous shaking. Further dilution is commonly in NS. Verify indication, CPK monitoring, and renal dosing.",
    keyWarnings: "Monitor CPK, muscle pain/weakness, renal function, and indication appropriateness."
  },

  "Dexmedetomidine": {
    commonUse: "Used for ICU sedation or procedural sedation support.",
    commonConcentrations: "Available as concentrated vial or premixed infusion depending on product and facility stock.",
    preparationNotes: "Concentrated formulations are commonly diluted in NS or D5W for infusion. Premixed products may be ready to administer. Administer by pump only.",
    keyWarnings: "Monitor for bradycardia, hypotension, and oversedation."
  },

  "Dextrose 10%": {
    commonUse: "Used for hypoglycemia treatment or glucose support depending on protocol.",
    commonConcentrations: "Supplied as 10% dextrose solution.",
    preparationNotes: "Typically supplied ready to administer. May be given by infusion or protocol-directed bolus depending on local policy.",
    keyWarnings: "Monitor blood glucose and IV site. Avoid extravasation."
  },

  "Dextrose 20%": {
    commonUse: "Used for glucose support or selected hypoglycemia protocols depending on facility supply.",
    commonConcentrations: "Supplied as 20% dextrose solution where stocked.",
    preparationNotes: "Typically supplied ready to administer or prepared by pharmacy depending on policy. Verify concentration and route.",
    keyWarnings: "Hypertonic solution. Monitor blood glucose and IV site closely."
  },

  "Dextrose 50%": {
    commonUse: "Used for severe hypoglycemia and selected metabolic emergencies.",
    commonConcentrations: "Commonly supplied as 50% dextrose prefilled syringe.",
    preparationNotes: "Usually administered undiluted IV push through patent IV access. May be diluted per protocol if lower concentration is desired.",
    keyWarnings: "Hypertonic and irritating to tissue. Ensure patent IV access and monitor for extravasation."
  },

  "Diazepam": {
    commonUse: "Benzodiazepine used for seizures, sedation, or alcohol withdrawal-related indications depending on protocol.",
    commonConcentrations: "Commonly supplied as injectable solution, prefilled syringe, or rectal formulation depending on setting.",
    preparationNotes: "Often administered undiluted slow IV push. Avoid mixing with other medications in the same syringe. Verify route and formulation.",
    keyWarnings: "Monitor respiratory status, airway, blood pressure, and sedation level. Use caution with opioids or other CNS depressants."
  },

  "Digoxin": {
    commonUse: "Used for selected rate control or heart failure-related indications.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "May be administered slow IV push; dilution requirements vary by formulation and policy. Verify dose carefully.",
    keyWarnings: "Monitor rhythm, potassium, renal function, and digoxin level when applicable. Narrow therapeutic index."
  },

  "Diltiazem": {
    commonUse: "Used for rate control in selected atrial fibrillation/flutter or SVT-related indications.",
    commonConcentrations: "Supplied as vial for IV bolus and/or infusion preparation; premixed infusions may exist.",
    preparationNotes: "IV bolus may be given undiluted slowly. Infusions are commonly prepared in NS or D5W depending on protocol/product.",
    keyWarnings: "Monitor blood pressure, heart rate, rhythm, AV block, and heart failure concerns."
  },

  "Diphenhydramine": {
    commonUse: "Used for allergic reactions, adjunct anaphylaxis care, dystonic reactions, or nausea-related protocols.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "May be administered undiluted slow IV push or diluted in NS/D5W for infusion depending on dose and policy.",
    keyWarnings: "May cause sedation, hypotension, anticholinergic effects, and tissue irritation."
  },

  "Dobutamine": {
    commonUse: "Inotrope used for cardiac output support in selected shock or heart failure states.",
    commonConcentrations: "Usually supplied as concentrate requiring dilution or as premixed infusion.",
    preparationNotes: "Commonly diluted in D5W or NS for pump infusion; premixed products may be ready to administer. Verify concentration and titration order.",
    keyWarnings: "Monitor heart rate, rhythm, blood pressure, perfusion, and ectopy."
  },

  "Dopamine": {
    commonUse: "Vasoactive infusion used for selected hypotension, shock, or bradycardia-related indications.",
    commonConcentrations: "Usually supplied as concentrate requiring dilution or as premixed infusion.",
    preparationNotes: "Commonly diluted in D5W or NS for pump infusion; premixed products may be ready to administer. Verify concentration and titration order.",
    keyWarnings: "Monitor blood pressure, heart rate, rhythm, extravasation, and ordered titration goals."
  },

  "Enalaprilat": {
    commonUse: "IV ACE inhibitor used for selected hypertensive or afterload reduction indications.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "May be given slow IV push or diluted in compatible fluid depending on policy. Verify blood pressure parameters before administration.",
    keyWarnings: "Monitor hypotension, renal function, potassium, and ACE inhibitor contraindications."
  },

  "Epinephrine": {
    commonUse: "Used for cardiac arrest, anaphylaxis, severe asthma/bronchospasm, bradycardia, or shock depending on concentration and route.",
    commonConcentrations: "Commonly supplied as 1 mg/mL, 0.1 mg/mL prefilled syringe, autoinjector, or infusion concentration depending on use.",
    preparationNotes: "Route and dilution depend heavily on indication. Cardiac arrest prefilled syringes may be ready to use; infusions are commonly diluted in NS or D5W by protocol. Verify concentration carefully before administration.",
    keyWarnings: "High-alert medication. Concentration/route errors can be fatal. Monitor rhythm, blood pressure, IV site, and response."
  },

  "Eptifibatide": {
    commonUse: "Glycoprotein IIb/IIIa inhibitor used for selected ACS/PCI anticoagulation protocols.",
    commonConcentrations: "Commonly supplied as bolus vial and infusion vial/premix depending on product.",
    preparationNotes: "Administer bolus/infusion per protocol. May be supplied ready to use. Verify renal dosing and concurrent anticoagulation orders.",
    keyWarnings: "High-alert bleeding-risk medication. Monitor bleeding, platelets, renal function, and procedure protocol."
  },

  "Ertapenem": {
    commonUse: "Carbapenem antibiotic used for selected intra-abdominal, urinary, skin/soft tissue, or resistant infections.",
    preparationNotes: "Reconstitute per vial instructions and dilute for IV infusion commonly in NS. Avoid dextrose-containing diluents unless product guidance allows.",
    keyWarnings: "Check beta-lactam allergy, renal dosing, seizure history, and compatibility."
  },

  "Esmolol": {
    commonUse: "Short-acting beta blocker used for selected tachycardia, rate control, or blood pressure control indications.",
    commonConcentrations: "Available as ready-to-use vial/bag or concentrated formulation depending on product.",
    preparationNotes: "Ready-to-use formulations should not be diluted. Concentrated formulations require dilution per product instructions, commonly in NS or D5W.",
    keyWarnings: "Monitor blood pressure, heart rate, bronchospasm risk, heart block, and heart failure concerns."
  },

  "Etomidate": {
    commonUse: "Induction agent used for RSI or procedural sedation depending on protocol.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "Usually administered undiluted IV push for induction. Verify dose and airway readiness before administration.",
    keyWarnings: "May cause myoclonus, adrenal suppression, nausea/vomiting, and respiratory depression when combined with other sedatives."
  },

  "Famotidine": {
    commonUse: "H2 blocker used for acid suppression or selected allergic reaction adjunct therapy.",
    preparationNotes: "May be administered slow IV push or diluted in NS/D5W for infusion depending on product and policy.",
    keyWarnings: "Verify renal dosing and monitor for CNS effects in renal impairment."
  },

  "Fentanyl": {
    commonUse: "Opioid analgesic used for pain control, procedural sedation adjunct, or post-intubation analgesia.",
    commonConcentrations: "Commonly supplied as injectable solution or prefilled syringe.",
    preparationNotes: "May be administered undiluted slow IV push or prepared as infusion depending on protocol. Verify concentration carefully.",
    keyWarnings: "Monitor respiratory status, sedation level, blood pressure, chest wall rigidity with rapid/high-dose administration, and opioid coadministration."
  },

  "Fluconazole": {
    commonUse: "Azole antifungal used for selected Candida and fungal infections.",
    preparationNotes: "Often supplied as premixed IV infusion in NS or D5W-compatible product depending on manufacturer. Do not give IV push.",
    keyWarnings: "Monitor liver function, QT prolongation risk, renal dosing, and drug interactions."
  },

  "Fosphenytoin": {
    commonUse: "Used for seizure management or status epilepticus loading/maintenance.",
    commonConcentrations: "Dosed in phenytoin equivalents PE. Verify mg PE/mL concentration.",
    preparationNotes: "May be administered IV or IM depending on indication/product. IV infusion may be given undiluted or diluted in D5W or NS depending on product guidance. Verify PE dosing and rate.",
    keyWarnings: "Monitor blood pressure, rhythm, respiratory status, and infusion rate. Do not confuse mg PE with mg."
  },

  "Furosemide": {
    commonUse: "Loop diuretic used for fluid overload, pulmonary edema, or diuresis.",
    preparationNotes: "May be administered slow IV push or diluted in NS or D5W for infusion depending on protocol.",
    keyWarnings: "Monitor blood pressure, urine output, electrolytes, renal function, and hearing changes with high doses."
  },

  "Gentamicin": {
    commonUse: "Aminoglycoside antibiotic used for selected serious gram-negative infections.",
    preparationNotes: "Typically diluted in NS or D5W for IV infusion. Verify renal dosing, peak/trough monitoring, and compatibility.",
    keyWarnings: "Monitor renal function, ototoxicity risk, drug levels when ordered, and other nephrotoxic medications."
  },

  "Glucagon": {
    commonUse: "Used for severe hypoglycemia without IV access, beta blocker/calcium channel blocker toxicity adjunct, or other protocol-specific indications.",
    commonConcentrations: "Often supplied as powder requiring reconstitution or as ready-to-use product depending on formulation.",
    preparationNotes: "Reconstitute with supplied diluent when provided. For infusions, dilution may be in D5W or NS depending on protocol and product guidance.",
    keyWarnings: "May cause nausea/vomiting and hyperglycemia. Monitor glucose and airway/aspiration risk."
  },

  "Haloperidol": {
    commonUse: "Antipsychotic used for agitation, nausea, or delirium-related protocols depending on setting.",
    preparationNotes: "May be administered IM or slow IV depending on policy. Dilution requirements vary; verify route approval and monitoring policy.",
    keyWarnings: "Monitor QT prolongation, dystonia/EPS, sedation, hypotension, and contraindications."
  },

  "Heparin": {
    commonUse: "Anticoagulant used for ACS, VTE, line patency, or procedural anticoagulation depending on protocol.",
    commonConcentrations: "Available in many vial, syringe, flush, and infusion concentrations.",
    preparationNotes: "Verify concentration carefully. Infusions are commonly prepared in NS or D5W depending on facility standard. Use pump and protocol-driven monitoring.",
    keyWarnings: "High-alert anticoagulant. Monitor bleeding, aPTT/anti-Xa per protocol, platelets/HIT risk, and dosing weight."
  },

  "Hydralazine": {
    commonUse: "Vasodilator used for selected hypertensive situations.",
    preparationNotes: "May be administered slow IV push or diluted according to policy. Verify blood pressure parameters before use.",
    keyWarnings: "Monitor for hypotension, reflex tachycardia, headache, and overshoot blood pressure reduction."
  },

  "Hydrocortisone": {
    commonUse: "Corticosteroid used for adrenal crisis, allergic reactions, asthma/COPD exacerbation, or shock adjunct depending on protocol.",
    commonConcentrations: "Often supplied as powder requiring reconstitution or premixed/ready-to-use product.",
    preparationNotes: "Reconstitute with supplied diluent or directed diluent. May be given slow IV push or diluted in NS/D5W for infusion depending on dose and policy.",
    keyWarnings: "Monitor glucose, infection concerns, GI bleeding risk, and steroid-related precautions."
  },

  "Hydromorphone": {
    commonUse: "Opioid analgesic used for moderate to severe pain.",
    commonConcentrations: "Commonly supplied as injectable solution; concentrations vary significantly.",
    preparationNotes: "May be administered slow IV push, IM, or infusion depending on protocol. Verify concentration carefully due to high-potency formulation differences.",
    keyWarnings: "High-alert opioid. Monitor respiratory status, sedation, blood pressure, and opioid tolerance."
  },

  "Hydroxocobalamin": {
    commonUse: "Used for suspected cyanide poisoning, especially smoke inhalation with compatible clinical presentation.",
    commonConcentrations: "Supplied as emergency kit requiring reconstitution.",
    preparationNotes: "Reconstitute with supplied diluent, usually NS per kit instructions; D5W/LR may be alternatives if NS unavailable depending on product guidance. Do not shake aggressively; invert/mix per kit instructions.",
    keyWarnings: "May cause hypertension, red discoloration of skin/urine, and lab interference. Use dedicated line when possible."
  },

  "Immune Globulin IV": {
    commonUse: "Used for selected immunologic, neurologic, hematologic, or infectious indications.",
    commonConcentrations: "Supplied as ready-to-administer IVIG product; concentration varies by manufacturer.",
    preparationNotes: "Usually administered without dilution unless product labeling allows. Do not mix products or shake. Use product-specific tubing/rate guidance.",
    keyWarnings: "Monitor for infusion reactions, renal dysfunction, thrombosis risk, aseptic meningitis, and product-specific precautions."
  },

  "Infliximab": {
    commonUse: "Biologic therapy used for selected autoimmune/inflammatory conditions.",
    commonConcentrations: "Supplied as powder requiring reconstitution and dilution.",
    preparationNotes: "Reconstitute with sterile water and further dilute in NS per product guidance. Do not dilute in D5W unless specifically allowed. Use filter if required by product/policy.",
    keyWarnings: "Monitor for infusion reactions, infection risk, TB/hepatitis screening status, and immunosuppression concerns."
  },

  "Insulin Regular": {
    commonUse: "Used for hyperglycemia, DKA/HHS protocols, hyperkalemia shifting therapy, or insulin infusion protocols.",
    commonConcentrations: "Commonly supplied as U-100 vial; infusion concentrations are facility-specific.",
    preparationNotes: "Infusions are commonly prepared in NS or compatible fluid per facility protocol. For hyperkalemia, verify insulin dose and dextrose coadministration orders.",
    keyWarnings: "High-alert medication. Monitor glucose and potassium closely. Concentration and decimal errors can be dangerous."
  },

  "Ketamine": {
    commonUse: "Used for analgesia, procedural sedation, dissociative sedation, induction, or post-intubation sedation depending on protocol.",
    commonConcentrations: "Available in multiple vial concentrations. Always verify the vial label and calculated concentration before drawing up.",
    preparationNotes: "May be administered undiluted IV/IM for sedation/induction or diluted in NS/D5W for infusion depending on protocol. Verify concentration and route.",
    keyWarnings: "May cause hypertension, tachycardia, emergence reactions, hypersalivation, nausea/vomiting, or respiratory depression when combined with other sedatives."
  },

  "Ketorolac": {
    commonUse: "NSAID used for short-term pain control.",
    preparationNotes: "May be administered IV slow push or IM. Dilution usually not required, but verify product and local policy.",
    keyWarnings: "Avoid or use caution with renal impairment, bleeding risk, GI ulcer/bleed risk, anticoagulation, and NSAID allergy."
  },

  "Labetalol": {
    commonUse: "Beta/alpha blocker used for selected hypertensive situations.",
    preparationNotes: "May be administered slow IV push or prepared as infusion in NS or D5W depending on protocol.",
    keyWarnings: "Monitor blood pressure, heart rate, bronchospasm risk, heart block, and heart failure concerns."
  },

  "Levetiracetam": {
    commonUse: "Antiseizure medication used for seizure treatment or prophylaxis depending on indication.",
    commonConcentrations: "Available as vial/concentrate or premixed infusion depending on product.",
    preparationNotes: "Commonly diluted in NS, D5W, or LR for IV infusion when using concentrate. Premixed products may be ready to administer.",
    keyWarnings: "Monitor sedation, behavioral changes, renal dosing, and seizure response."
  },

  "Levofloxacin": {
    commonUse: "Fluoroquinolone antibiotic used for selected respiratory, urinary, and other susceptible infections.",
    preparationNotes: "Often supplied as premixed IV infusion. Do not give IV push. Verify renal dosing and infusion time.",
    keyWarnings: "Use caution with QT prolongation, tendon injury risk, CNS effects, and interacting medications."
  },

  "Lidocaine": {
    commonUse: "Used for selected ventricular dysrhythmias, local anesthesia, or pain-related protocols depending on formulation.",
    commonConcentrations: "Available in multiple concentrations and formulations; verify preservative-free/cardiac formulation when applicable.",
    preparationNotes: "Cardiac use may involve IV bolus undiluted followed by infusion commonly prepared in D5W or NS depending on product/policy. Verify formulation before IV use.",
    keyWarnings: "Monitor neurologic status, rhythm, QRS/QT changes, seizure risk, and total dose."
  },

  "Linezolid": {
    commonUse: "Oxazolidinone antibiotic used for selected resistant gram-positive infections including MRSA/VRE when indicated.",
    commonConcentrations: "Often supplied as ready-to-use IV infusion bag.",
    preparationNotes: "Usually supplied ready to administer and should not be mixed with other medications. Do not give IV push.",
    keyWarnings: "Monitor for serotonin syndrome risk, thrombocytopenia, neuropathy with prolonged use, and drug interactions."
  },

  "Lorazepam": {
    commonUse: "Benzodiazepine used for seizures, agitation, anxiety, alcohol withdrawal, or sedation adjunct depending on protocol.",
    commonConcentrations: "Commonly supplied as injectable solution; concentration varies.",
    preparationNotes: "May be administered slow IV push. Can be diluted with NS or D5W depending on product/policy. Verify route and rate.",
    keyWarnings: "Monitor respiratory status, airway, blood pressure, and sedation level. Use caution with opioids or other CNS depressants."
  },

  "Magnesium Sulfate": {
    commonUse: "Used for magnesium replacement, torsades de pointes, severe asthma adjunct therapy, eclampsia/seizure indications, or other protocols.",
    commonConcentrations: "Commonly supplied as concentrated solution requiring dose-specific dilution or as premixed bag depending on facility.",
    preparationNotes: "Commonly diluted in NS or D5W for IV infusion depending on indication. Emergency torsades dosing may be given more rapidly per protocol. Verify concentration and infusion time.",
    keyWarnings: "Monitor blood pressure, respiratory status, reflexes when applicable, renal function, and ECG when indicated."
  },

  "Mannitol": {
    commonUse: "Osmotic diuretic used for selected increased intracranial pressure or renal/diuretic indications.",
    commonConcentrations: "Commonly supplied as 20% or 25% solution depending on product.",
    preparationNotes: "Usually administered using filtered tubing due to crystallization risk. Do not administer if crystals are present unless product has been warmed/dissolved per policy.",
    keyWarnings: "Monitor serum osmolality, renal function, fluid status, and heart failure/pulmonary edema risk."
  },

  "Meropenem": {
    commonUse: "Carbapenem antibiotic used for broad-spectrum coverage of selected severe or resistant infections.",
    preparationNotes: "Reconstitute per vial instructions and commonly dilute in NS for infusion. D5W stability may be limited depending on product; verify guidance.",
    keyWarnings: "Check beta-lactam allergy, renal dosing, seizure history, and compatibility."
  },

  "Methocarbamol": {
    commonUse: "Muscle relaxant used for musculoskeletal pain/spasm.",
    preparationNotes: "May be administered undiluted slow IV or diluted in NS/D5W depending on policy. Avoid rapid administration.",
    keyWarnings: "May cause sedation, dizziness, hypotension, and discoloration of urine."
  },

  "Methylene Blue": {
    commonUse: "Used for selected methemoglobinemia or vasoplegia indications depending on protocol.",
    preparationNotes: "May be diluted in D5W for IV infusion; avoid NS if product guidance warns of reduced solubility/precipitation risk. Verify indication and dose carefully.",
    keyWarnings: "Use caution with serotonergic medications due to serotonin syndrome risk. Monitor oxygenation interpretation and hemolysis risk in G6PD deficiency."
  },

  "Methylprednisolone": {
    commonUse: "Corticosteroid used for allergic reactions, asthma/COPD exacerbation, spinal/neuro protocols, or inflammatory indications.",
    commonConcentrations: "Often supplied as powder requiring reconstitution or ready-to-use formulation.",
    preparationNotes: "Reconstitute with supplied diluent or directed diluent. May be given slow IV push or diluted in NS/D5W for infusion depending on dose and protocol.",
    keyWarnings: "Monitor glucose, infection concerns, GI bleeding risk, and steroid-related precautions."
  },

  "Metoclopramide": {
    commonUse: "Antiemetic/prokinetic used for nausea, vomiting, migraine adjunct, or gastroparesis-related indications.",
    preparationNotes: "May be administered slow IV push or diluted in NS/D5W for infusion to reduce adverse effects depending on policy.",
    keyWarnings: "Monitor for akathisia, dystonia/EPS, sedation, diarrhea, and QT risk."
  },

  "Metoprolol": {
    commonUse: "Beta blocker used for selected rate control, hypertension, or ACS-related indications.",
    preparationNotes: "May be administered slow IV push. Dilution usually not required, but verify product and local policy.",
    keyWarnings: "Monitor blood pressure, heart rate, heart block, bronchospasm risk, and heart failure concerns."
  },

  "Metronidazole": {
    commonUse: "Antibiotic used for anaerobic and selected protozoal infections.",
    commonConcentrations: "Often supplied as ready-to-use IV infusion.",
    preparationNotes: "Usually supplied ready to administer. Do not give IV push. Verify infusion time and compatibility.",
    keyWarnings: "Monitor liver function, neurologic symptoms, and alcohol/disulfiram-like reaction counseling."
  },

  "Micafungin": {
    commonUse: "Echinocandin antifungal used for selected Candida and invasive fungal infections.",
    preparationNotes: "Reconstitute per vial instructions and dilute for infusion, commonly in NS or D5W depending on product guidance. Protect from light if required by product/policy.",
    keyWarnings: "Monitor hepatic function, infusion reaction, allergy history, and compatibility."
  },

  "Midazolam": {
    commonUse: "Benzodiazepine used for sedation, seizures, anxiolysis, RSI adjunct, or post-intubation sedation.",
    commonConcentrations: "Commonly supplied as injectable solution or prefilled syringe; concentrations vary.",
    preparationNotes: "May be administered undiluted slow IV push, IN/IM depending on protocol, or diluted in NS/D5W for infusion.",
    keyWarnings: "Monitor respiratory status, airway, blood pressure, and sedation level. Use caution with opioids or other CNS depressants."
  },

  "Milrinone": {
    commonUse: "Inodilator used for selected heart failure, cardiac output support, or post-cardiac surgery indications.",
    commonConcentrations: "Available as concentrate requiring dilution or premixed infusion depending on product.",
    preparationNotes: "Commonly diluted in D5W or NS for pump infusion; premixed products may be ready to administer. Verify renal dosing and hemodynamic monitoring.",
    keyWarnings: "Monitor blood pressure, rhythm, renal function, and hypotension/arrhythmia risk."
  },

  "Morphine": {
    commonUse: "Opioid analgesic used for pain control or selected dyspnea/palliative indications.",
    commonConcentrations: "Commonly supplied as injectable solution; concentrations vary significantly.",
    preparationNotes: "May be administered slow IV push, IM, or infusion depending on protocol. Verify concentration carefully.",
    keyWarnings: "Monitor respiratory status, sedation, blood pressure, nausea/vomiting, and opioid tolerance."
  },

  "Naloxone": {
    commonUse: "Opioid antagonist used for suspected opioid-induced respiratory depression or overdose.",
    commonConcentrations: "Commonly supplied as injectable solution, prefilled syringe, or intranasal product.",
    preparationNotes: "May be administered IV, IM, IN, or infusion depending on protocol. Infusions are commonly diluted in NS or D5W.",
    keyWarnings: "May precipitate acute withdrawal, agitation, vomiting, or recurrent respiratory depression after medication wears off."
  },

  "Nicardipine": {
    commonUse: "Calcium channel blocker infusion used for titratable blood pressure control.",
    commonConcentrations: "Available as premixed infusion or concentrated vial depending on product.",
    preparationNotes: "Premixed bags may be ready to administer. Concentrate is commonly diluted in NS or D5W according to product/policy. Administer by pump.",
    keyWarnings: "Monitor blood pressure and heart rate closely. Avoid rapid overcorrection unless protocol-directed."
  },

  "Nitroglycerin": {
    commonUse: "Vasodilator used for chest pain/ACS, pulmonary edema, or blood pressure control depending on protocol.",
    commonConcentrations: "Available as tablets, spray, paste, IV vial, or premixed infusion depending on route.",
    preparationNotes: "IV nitroglycerin is commonly diluted in D5W or NS depending on product/policy and administered by pump. Use appropriate tubing/container per policy due to adsorption concerns.",
    keyWarnings: "Monitor blood pressure, headache, reflex tachycardia, and contraindications such as recent PDE-5 inhibitor use."
  },

  "Nitroprusside": {
    commonUse: "Potent arterial/venous vasodilator used for tightly controlled blood pressure reduction.",
    commonConcentrations: "Supplied as concentrated product requiring dilution.",
    preparationNotes: "Must be diluted in D5W for IV infusion and protected from light according to product guidance. Do not administer direct IV injection.",
    keyWarnings: "High-alert medication. Monitor blood pressure continuously when possible. Watch for cyanide/thiocyanate toxicity risk, especially with prolonged use or renal/hepatic impairment."
  },

  "Norepinephrine": {
    commonUse: "Used for blood pressure support in shock or severe hypotension.",
    commonConcentrations: "Available as concentrate requiring dilution or premixed infusion depending on facility supply.",
    preparationNotes: "Commonly diluted in D5W, D5NS, or NS depending on product formulation and facility policy. Premixed products may be ready to administer. Verify concentration, titration parameters, and line access.",
    keyWarnings: "High-alert vasopressor. Monitor blood pressure, perfusion, rhythm, and IV site. Extravasation can cause tissue injury."
  },

  "Octreotide": {
    commonUse: "Used for variceal bleeding, selected GI/endocrine indications, or other protocol-specific uses.",
    commonConcentrations: "Available as injectable solution or long-acting formulation depending on product.",
    preparationNotes: "May be administered subcutaneous, IV bolus, or IV infusion depending on indication. Infusions are commonly diluted in NS.",
    keyWarnings: "Monitor glucose, bradycardia, GI effects, and indication-specific response."
  },

  "Ondansetron": {
    commonUse: "Used for nausea and vomiting.",
    commonConcentrations: "Commonly supplied as injectable solution, ODT/tablet, or premixed product depending on facility.",
    preparationNotes: "May be administered slow IV push or diluted in NS/D5W for infusion depending on dose and policy.",
    keyWarnings: "Use caution with prolonged QT risk, electrolyte abnormalities, or interacting medications."
  },

  "Pantoprazole": {
    commonUse: "Proton pump inhibitor used for acid suppression or GI bleed-related protocols depending on indication.",
    commonConcentrations: "Often supplied as powder requiring reconstitution.",
    preparationNotes: "Reconstitute per vial instructions. May be administered slow IV push or diluted in NS for infusion depending on indication/protocol.",
    keyWarnings: "Verify indication, route, and infusion protocol. Monitor magnesium with prolonged therapy when applicable."
  },

  "Phenobarbital": {
    commonUse: "Barbiturate used for seizure control, alcohol withdrawal protocols, or sedation-related indications.",
    commonConcentrations: "Commonly supplied as injectable solution.",
    preparationNotes: "May be administered slow IV push or diluted in NS/D5W for infusion depending on protocol. Avoid rapid administration.",
    keyWarnings: "Monitor respiratory status, blood pressure, sedation level, and CNS depression."
  },

  "Phenylephrine": {
    commonUse: "Pure alpha-agonist used for blood pressure support or selected hypotension states.",
    commonConcentrations: "Available as concentrate, vial, prefilled syringe, or premixed infusion depending on product.",
    preparationNotes: "IV push products may be supplied ready-to-use. Infusions are commonly diluted in NS or D5W depending on product/policy.",
    keyWarnings: "High-alert vasopressor. Monitor blood pressure, heart rate, perfusion, and IV site."
  },

  "Phenytoin": {
    commonUse: "Antiseizure medication used for seizure loading or maintenance therapy.",
    commonConcentrations: "Commonly supplied as injectable solution requiring careful compatibility handling.",
    preparationNotes: "For IV infusion, dilute in NS only. Avoid dextrose-containing solutions due to precipitation risk. Use in-line filter when required by product/policy and administer promptly after preparation.",
    keyWarnings: "Monitor blood pressure, rhythm, infusion site, and rate. High risk for precipitation and tissue injury with improper preparation."
  },

  "Piperacillin/Tazobactam": {
    commonUse: "Broad-spectrum beta-lactam/beta-lactamase inhibitor used for selected sepsis, intra-abdominal, respiratory, urinary, and soft tissue infections.",
    preparationNotes: "Reconstitute per vial instructions and dilute for IV infusion commonly in NS or D5W-compatible fluids per product guidance. Extended infusion protocols may be used by facility policy.",
    keyWarnings: "Check allergy history, renal dosing, sodium load, infusion time, and compatibility."
  },

  "Potassium Chloride": {
    commonUse: "Electrolyte replacement used for hypokalemia.",
    commonConcentrations: "Supplied as concentrated vial, premixed bag, or oral formulation depending on route.",
    preparationNotes: "IV potassium chloride must be diluted before administration unless using a premixed product. Commonly diluted in NS; D5W may be avoided in some situations because glucose can shift potassium intracellularly. Administer by pump.",
    keyWarnings: "High-alert electrolyte. Never administer IV push. Monitor ECG when indicated, renal function, potassium level, and infusion site."
  },

  "Procainamide": {
    commonUse: "Antiarrhythmic used for selected stable wide-complex tachycardias or atrial dysrhythmias depending on protocol.",
    commonConcentrations: "Usually supplied as injectable solution requiring dilution for infusion.",
    preparationNotes: "Commonly diluted in D5W or NS for controlled IV infusion. Verify maximum rate and rhythm/blood pressure monitoring.",
    keyWarnings: "Monitor QRS widening, QT prolongation, hypotension, rhythm, and heart failure risk."
  },

  "Promethazine": {
    commonUse: "Antiemetic/antihistamine used for nausea, allergy, or sedation adjunct depending on protocol.",
    preparationNotes: "IM route is often preferred when appropriate. If IV is allowed by policy, dilute significantly and administer slowly through a large patent vein. Avoid arterial or subcutaneous administration.",
    keyWarnings: "Vesicant/tissue injury risk. Severe extravasation can occur. Monitor sedation, hypotension, and respiratory depression with other CNS depressants."
  },

  "Propofol": {
    commonUse: "Sedative-hypnotic used for induction or ongoing sedation in controlled/monitored settings.",
    commonConcentrations: "Supplied as lipid emulsion, commonly 10 mg/mL.",
    preparationNotes: "Ready-to-use lipid emulsion. Do not dilute unless product labeling/policy specifically allows, commonly only with D5W if dilution is permitted. Strict aseptic handling and tubing-change timing required.",
    keyWarnings: "Can cause hypotension and respiratory depression. Requires airway-capable monitoring and strict aseptic handling due to infection risk."
  },

  "Protamine": {
    commonUse: "Used for reversal of heparin anticoagulation.",
    preparationNotes: "Administer slow IV. May be given undiluted or diluted in NS/D5W depending on dose and policy. Verify heparin exposure timing.",
    keyWarnings: "Monitor for hypotension, bradycardia, pulmonary hypertension, and anaphylactoid reaction."
  },

  "Rocuronium": {
    commonUse: "Nondepolarizing neuromuscular blocker used for paralysis during RSI or mechanical ventilation support.",
    preparationNotes: "Usually administered undiluted IV push for RSI or paralysis. Verify concentration, dose, and need for sedation/analgesia after paralysis.",
    keyWarnings: "Paralytic. Patient will be unable to breathe or communicate. Ensure airway/ventilation support and ongoing sedation/analgesia."
  },

  "Sodium Bicarbonate": {
    commonUse: "Used for selected metabolic acidosis, hyperkalemia, sodium channel blocker toxicity, or resuscitation situations depending on protocol.",
    commonConcentrations: "Commonly supplied as 8.4% solution or other concentrations depending on product.",
    preparationNotes: "May be administered undiluted in emergencies or added to compatible fluids such as D5W or sterile water for infusion depending on indication. Avoid mixing with calcium, catecholamines, or incompatible medications.",
    keyWarnings: "Monitor sodium load, pH/CO2 status, potassium, calcium compatibility, and extravasation risk."
  },

  "Sodium Phosphate": {
    commonUse: "Electrolyte replacement used for hypophosphatemia.",
    preparationNotes: "Must be diluted for IV infusion, commonly in NS or D5W depending on policy. Verify sodium load, renal function, calcium/phosphate levels, and infusion rate.",
    keyWarnings: "High-alert electrolyte. Monitor calcium/phosphate balance, renal function, and compatibility."
  },

  "Succinylcholine": {
    commonUse: "Depolarizing neuromuscular blocker used for paralysis during RSI.",
    preparationNotes: "Usually administered undiluted IV push for RSI. Verify contraindications, potassium risk, and airway readiness before administration.",
    keyWarnings: "Monitor for hyperkalemia risk, malignant hyperthermia risk, bradycardia, and ensure airway/ventilation readiness."
  },

  "Tenecteplase": {
    commonUse: "Thrombolytic used for selected STEMI, stroke, PE, or arrest-related protocols depending on system policy.",
    commonConcentrations: "Supplied as a lyophilized powder kit requiring reconstitution.",
    preparationNotes: "Reconstitute with manufacturer-supplied sterile water using the product kit. Do not shake. Administer as directed for indication; do not mix with other medications in the same line.",
    keyWarnings: "High-alert thrombolytic. Verify indication, weight-based dose, contraindications, timing, bleeding risk, and line/medication restrictions."
  },

  "Thiamine": {
    commonUse: "Vitamin replacement used for deficiency risk, alcohol use disorder, malnutrition, or Wernicke encephalopathy prevention/treatment.",
    preparationNotes: "May be administered IV/IM. IV doses may be diluted in NS or D5W depending on dose and policy. Administer before or with glucose when Wernicke risk is a concern.",
    keyWarnings: "Monitor for allergic reaction and verify route/dose for indication."
  },

  "Tigecycline": {
    commonUse: "Glycylcycline antibiotic used for selected complicated skin/soft tissue and intra-abdominal infections.",
    preparationNotes: "Reconstitute per vial instructions and dilute for infusion in NS, D5W, or LR-compatible fluids depending on product guidance. Verify infusion time and compatibility.",
    keyWarnings: "Monitor nausea/vomiting, hepatic function, culture guidance, and indication appropriateness."
  },

  "Tranexamic Acid": {
    commonUse: "Antifibrinolytic used for selected hemorrhage, trauma, or bleeding indications depending on protocol.",
    preparationNotes: "Commonly diluted in NS or D5W for IV infusion. Some protocols allow slow IV administration depending on indication. Verify rate and thrombosis precautions.",
    keyWarnings: "Monitor thrombosis risk, seizure risk with high doses, renal function, and indication timing."
  },

  "Vancomycin": {
    commonUse: "Glycopeptide antibiotic used for suspected or confirmed gram-positive infections including MRSA coverage when indicated.",
    commonConcentrations: "Supplied as powder vials requiring reconstitution and further dilution for IV infusion.",
    preparationNotes: "Reconstitute powder with sterile water, then further dilute for IV infusion commonly in NS or D5W. Do not give IV push. Verify concentration, infusion time, renal dosing, and monitoring requirements.",
    keyWarnings: "Monitor renal function, infusion reactions, levels when ordered, and infusion rate to reduce vancomycin infusion reaction risk."
  },

  "Vasopressin": {
    commonUse: "Vasopressor/antidiuretic hormone analog used for shock support or selected endocrine/GI indications depending on protocol.",
    preparationNotes: "Commonly diluted in NS or D5W for IV infusion. Premixed products may be available. Verify concentration, titration parameters, and hemodynamic monitoring.",
    keyWarnings: "High-alert medication. Monitor blood pressure, perfusion, ischemia risk, and ordered titration goals."
  },

  "Vecuronium": {
    commonUse: "Nondepolarizing neuromuscular blocker used for paralysis in intubated/ventilated patients.",
    preparationNotes: "Reconstitute with sterile water or compatible diluent per product instructions. May be further diluted in NS or D5W for infusion depending on policy. Ensure sedation/analgesia for paralyzed patients.",
    keyWarnings: "Paralytic. Patient will be unable to breathe or communicate. Ensure airway/ventilation support and ongoing sedation/analgesia."
  },

  "Voriconazole": {
    commonUse: "Azole antifungal used for selected invasive mold/fungal infections such as aspergillosis.",
    preparationNotes: "Reconstitute per vial instructions and dilute for IV infusion in compatible fluid such as NS or D5W per product guidance. Do not give IV push.",
    keyWarnings: "Monitor liver function, QT risk, visual disturbances, drug interactions, and renal/hepatic considerations."
  }
};

const medicationConcentrationOverrides = {
  "Acetaminophen": "IV acetaminophen is commonly supplied as 10 mg/mL ready-to-administer solution. Oral and rectal formulations vary.",
  "Acetylcysteine": "Common IV concentration is 200 mg/mL concentrate before dilution.",
  "Adenosine": "Common vial/syringe concentration: 3 mg/mL.",
  "Albumin": "Common concentrations include 5% and 25% albumin solutions.",
  "Alteplase": "Commonly supplied as lyophilized powder kits in multiple vial sizes depending on indication.",
  "Amikacin": "Common injectable concentrations vary by manufacturer and facility stock. Verify vial label before preparation.",
  "Aminocaproic Acid": "Common injectable concentration: 250 mg/mL.",
  "Amiodarone": "Common vial concentration: 50 mg/mL. Premixed dextrose formulations may also be stocked.",
  "Ampicillin": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Ampicillin/Sulbactam": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Argatroban": "Commonly supplied as concentrated injection requiring dilution; ready-to-use products may also be stocked.",
  "Azithromycin": "Common IV vial: 500 mg powder requiring reconstitution and dilution.",
  "Bivalirudin": "Common vial: 250 mg powder requiring reconstitution and dilution.",
  "Bumetanide": "Common injectable concentration: 0.25 mg/mL.",
  "Calcium Chloride": "Commonly supplied as 10% solution, often 100 mg/mL.",
  "Calcium Gluconate": "Commonly supplied as 10% solution, often 100 mg/mL.",
  "Caspofungin": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by product.",
  "Cefazolin": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Cefepime": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Cefotaxime": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Ceftaroline": "Commonly supplied as powder vial requiring reconstitution and dilution.",
  "Ceftazidime": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Ceftriaxone": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Cefuroxime": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Ciprofloxacin": "Commonly supplied as premixed IV infusion bags, often 200 mg/100 mL or 400 mg/200 mL depending on product.",
  "Clevidipine": "Commonly supplied as 0.5 mg/mL ready-to-use lipid emulsion.",
  "Clindamycin": "Common injectable concentration: 150 mg/mL.",
  "Daptomycin": "Commonly supplied as powder vials requiring reconstitution.",
  "Dexmedetomidine": "Common concentrate: 100 mcg/mL. Premixed infusion products may also be stocked.",
  "Dextrose 10%": "Commonly supplied as 10 g/100 mL solution.",
  "Dextrose 20%": "Commonly supplied as 20 g/100 mL solution where stocked.",
  "Dextrose 50%": "Commonly supplied as 25 g/50 mL prefilled syringe.",
  "Diazepam": "Common injectable concentration: 5 mg/mL.",
  "Digoxin": "Common injectable concentration: 0.25 mg/mL.",
  "Diltiazem": "Common vial concentration: 5 mg/mL.",
  "Diphenhydramine": "Common injectable concentration: 50 mg/mL.",
  "Dobutamine": "Common concentrate: 12.5 mg/mL. Premixed infusion products may also be stocked.",
  "Dopamine": "Common concentrate: 40 mg/mL. Premixed infusion products may also be stocked.",
  "Enalaprilat": "Common injectable concentration: 1.25 mg/mL.",
  "Epinephrine": "Common concentrations include 1 mg/mL and 0.1 mg/mL prefilled syringe formulations. Verify route-specific concentration.",
  "Eptifibatide": "Commonly supplied in bolus and infusion concentrations depending on product.",
  "Ertapenem": "Common vial: 1 g powder requiring reconstitution.",
  "Esmolol": "Common concentrations vary by formulation; ready-to-use and concentrated products may both be stocked.",
  "Etomidate": "Common injectable concentration: 2 mg/mL.",
  "Famotidine": "Common injectable concentration: 10 mg/mL.",
  "Fentanyl": "Common injectable concentration: 50 mcg/mL.",
  "Fluconazole": "Common premixed concentration: 2 mg/mL.",
  "Fosphenytoin": "Common concentration: 50 mg PE/mL.",
  "Furosemide": "Common injectable concentration: 10 mg/mL.",
  "Gentamicin": "Common injectable concentrations vary by product and facility. Verify vial label before preparation.",
  "Glucagon": "Commonly supplied as 1 mg emergency kit or ready-to-use product depending on stock.",
  "Haloperidol": "Common injectable concentration: 5 mg/mL.",
  "Heparin": "Available in many concentrations including flush, bolus, and infusion stock. Verify vial/bag concentration carefully.",
  "Hydralazine": "Common injectable concentration: 20 mg/mL.",
  "Hydrocortisone": "Commonly supplied as powder requiring reconstitution; vial sizes vary by facility.",
  "Hydromorphone": "Common injectable concentrations include 1 mg/mL and higher-concentration products. Verify vial carefully.",
  "Hydroxocobalamin": "Common Cyanokit supply: 5 g kit requiring reconstitution.",
  "Immune Globulin IV": "Concentration varies by manufacturer and product. Verify bottle concentration before administration.",
  "Infliximab": "Common vial: 100 mg powder requiring reconstitution.",
  "Insulin Regular": "Common vial concentration: U-100, or 100 units/mL.",
  "Ketamine": "Common vial concentrations may include 10 mg/mL, 50 mg/mL, or 100 mg/mL depending on supply.",
  "Ketorolac": "Common injectable concentrations include 15 mg/mL and 30 mg/mL depending on product.",
  "Labetalol": "Common injectable concentration: 5 mg/mL.",
  "Levetiracetam": "Common injectable concentration: 100 mg/mL. Premixed products may also be stocked.",
  "Levofloxacin": "Commonly supplied as premixed infusion bags, often 5 mg/mL.",
  "Lidocaine": "Common cardiac concentration: 20 mg/mL, or 2%. Premixed infusion bags may also be stocked.",
  "Linezolid": "Common premixed concentration: 2 mg/mL.",
  "Lorazepam": "Common injectable concentrations include 2 mg/mL and 4 mg/mL.",
  "Magnesium Sulfate": "Common concentrated vial concentration: 500 mg/mL. Premixed bags may also be stocked.",
  "Mannitol": "Common concentrations include 20% and 25% solutions.",
  "Meropenem": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary by facility.",
  "Methocarbamol": "Common injectable concentration: 100 mg/mL.",
  "Methylene Blue": "Common injectable concentration: 5 mg/mL.",
  "Methylprednisolone": "Commonly supplied as powder or Act-O-Vial products requiring reconstitution; vial sizes vary.",
  "Metoclopramide": "Common injectable concentration: 5 mg/mL.",
  "Metoprolol": "Common injectable concentration: 1 mg/mL.",
  "Metronidazole": "Common premixed concentration: 5 mg/mL.",
  "Micafungin": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary.",
  "Midazolam": "Common injectable concentrations include 1 mg/mL and 5 mg/mL.",
  "Milrinone": "Common concentration: 1 mg/mL concentrate. Premixed infusion products may also be stocked.",
  "Morphine": "Common injectable concentrations vary widely. Verify vial or syringe concentration carefully.",
  "Naloxone": "Common injectable concentrations include 0.4 mg/mL and 1 mg/mL. Intranasal products may vary.",
  "Nicardipine": "Common concentration: 2.5 mg/mL concentrate. Premixed infusion products may also be stocked.",
  "Nitroglycerin": "Common IV concentration: 5 mg/mL concentrate. Premixed infusion products may also be stocked.",
  "Nitroprusside": "Common vial: 50 mg powder requiring dilution.",
  "Norepinephrine": "Common concentration: 1 mg/mL concentrate. Premixed infusion products may also be stocked.",
  "Octreotide": "Common injectable concentrations vary by product. Verify vial concentration before administration.",
  "Ondansetron": "Common injectable concentration: 2 mg/mL.",
  "Pantoprazole": "Common vial: 40 mg powder requiring reconstitution.",
  "Penicillin G": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary.",
  "Phenobarbital": "Common injectable concentration: 65 mg/mL or 130 mg/mL depending on product.",
  "Phenylephrine": "Common vial/syringe concentrations vary widely. Premixed and ready-to-use products may also be stocked.",
  "Phenytoin": "Common injectable concentration: 50 mg/mL.",
  "Piperacillin/Tazobactam": "Commonly supplied as powder vials requiring reconstitution; vial sizes vary.",
  "Potassium Chloride": "Common concentrated vial concentration: 2 mEq/mL. Premixed bags may also be stocked.",
  "Procainamide": "Common injectable concentration: 100 mg/mL.",
  "Promethazine": "Common injectable concentration: 25 mg/mL.",
  "Propofol": "Common concentration: 10 mg/mL lipid emulsion.",
  "Protamine": "Common injectable concentration: 10 mg/mL.",
  "Rocuronium": "Common injectable concentration: 10 mg/mL.",
  "Sodium Bicarbonate": "Common concentration: 8.4%, or 1 mEq/mL.",
  "Sodium Phosphate": "Common vial concentrations vary by product. Verify mMol phosphate and mEq sodium content.",
  "Succinylcholine": "Common injectable concentration: 20 mg/mL.",
  "Tenecteplase": "Commonly supplied as weight-based kit requiring reconstitution.",
  "Thiamine": "Common injectable concentration: 100 mg/mL.",
  "Tigecycline": "Common vial: 50 mg powder requiring reconstitution.",
  "Tranexamic Acid": "Common injectable concentration: 100 mg/mL.",
  "Vancomycin": "Commonly supplied as powder vials such as 500 mg, 1 g, or larger pharmacy stock vials requiring reconstitution.",
  "Vasopressin": "Common vial concentration: 20 units/mL. Premixed products may also be stocked.",
  "Vecuronium": "Commonly supplied as powder vial requiring reconstitution; final concentration depends on diluent volume.",
  "Voriconazole": "Common vial: 200 mg powder requiring reconstitution."
};

function getPrimaryMedicationClass(medication) {
  if (!medication.classes || medication.classes.length === 0) {
    return "ED Miscellaneous";
  }

  return medication.classes[0];
}

function getMedicationDefaultDetails(medication) {
  const primaryClass = getPrimaryMedicationClass(medication);
  return medicationClassDefaults[primaryClass] || medicationClassDefaults["ED Miscellaneous"];
}

medicationLibrary.forEach(medication => {
  const defaultDetails = getMedicationDefaultDetails(medication);
  const overrideDetails = medicationDetailOverrides[medication.genericName] || {};

  medication.commonUse =
    overrideDetails.commonUse ||
    medication.commonUse ||
    defaultDetails.commonUse;

   medication.commonConcentrations =
    medicationConcentrationOverrides[medication.genericName] ||
    overrideDetails.commonConcentrations ||
    medication.commonConcentrations ||
    defaultDetails.commonConcentrations;
    
  medication.preparationNotes =
    overrideDetails.preparationNotes ||
    medication.preparationNotes ||
    defaultDetails.preparationNotes;

  medication.keyWarnings =
    overrideDetails.keyWarnings ||
    medication.keyWarnings ||
    defaultDetails.keyWarnings;
});