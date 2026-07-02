const medicationLibrary = [
  {
    genericName: "Acetaminophen",
    tradeNames: ["Ofirmev"],
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
    classes: ["ED Miscellaneous"]
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