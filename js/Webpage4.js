  const diseaseInfo = {
    AKI: {
      brief: "Acute Kidney Injury (AKI) is a sudden condition when kidneys stop functioning proerly. Therefore, the process of blood filteration is disrupted, leading to harmful substances accumulating in the body over a short period.",
      mainSymptoms: ["oliguria","edema", "fatigue", "confussion", "flank pain", "weakness", "loss of appetite", "pruritus", "chest pain"]
    },
    CKD: {
      brief: "Chronic Kidney Disease (CKD) is a long-term condition where kidneys stop functioning properly. Therefore, the process of blood filteration is disrupted, causing harmful susbtances to build up in the body over time.",
      mainSymptoms: ["nausea", "vomiting", "loss of appetite", "fatigue", "weakness", "hypertension", "dyspnea"]
    },
    kidneyStones: {
      brief: "Kidney Stones are hard deposits made of minerals and salts that develop inside the kidneys and crystalize in the urine.",
      mainSymptoms: ["flank pain", "dysuria", "cloudy urine", "frequent urination", "hematuria", "oliguria", "vomiting", "fever"],
    },
    UTI: {
      brief: "Urinary Tract Infection (UTI) is a bacterial infection in the urinary system, caused by the emergence and multiplication of harmful bacteria, such as E.coli in any part of the urinary tract.",
      mainSymptoms: ["dysuria", "hematuria", "frequent urination", "flank pain", "nausea", "vomiting", "fever"]
    },
    pyelonephritis: {
      brief: "Pyelonephritis is a type of urinary tract infection (UTI) that causes the inflammation of one or both kidneys, due to a bacterial infection.",
      mainSymptoms: ["fever", "flank pain", "nausea", "vomiting", "dysuria", "frequent urination", "cloudy urine"]
    },
    glomerulonephritis: {
      brief: "Glomerulonephritis is the inflammation of the glomeruli in the nephrons (tiny clusters of blood vessels that aid in blood filtration). This condition significantly decreases the effectiveness of waste removal and fluid regulation in the blood.",
      mainSymptoms: ["hematuria", "proteinuria", "hypertension", "edema", "nausea", "vomiting", "muscle cramps", "fatigue"]
    },
    nephroticSyndrome: {
      brief: "Nephrotic Syndrome is "
    },
  }
  
  const age = Number(localStorage.getItem("age"));
  const gender = localStorage.getItem("gender");
  const symptoms = JSON.parse(localStorage.getItem("symptoms")) || [];

  if (!age || !gender || symptoms.length === 0) {
    window.location.href = "Webpage1.html"; 
  }

  const patientInfo = {
    age,
    gender, 
    symptoms
  };

  const diseaseXSymptom = {
  fatigue: {
    AKI: 0.5, 
    CKD: 0.9, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.5, 
    nephroticSyndrome: 0.6, 
    PKD: 0.3, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.4, 
    renalCellCarcinoma: 0.3, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.3, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.7, 
    alportSyndrome: 0.4, 
    ESRD: 0.8
    },

    edema: {
    AKI: 0.6, 
    CKD: 0.5, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.8, 
    nephroticSyndrome: 0.9, 
    PKD: 0.2, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.4, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.8, 
    IgANephropathy: 0.4, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.2, 
    HUS: 0.6, 
    alportSyndrome: 0.3, 
    ESRD: 0.7
    },

    oliguria: {
    AKI: 0.9, 
    CKD: 0.3, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.6, 
    nephroticSyndrome: 0.4, 
    PKD: 0.1, 
    diabeticNephropathy: 0.2, 
    hypertensiveNephropathy: 0.2, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.4, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.7, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.3, 
    HUS: 0.8, 
    alportSyndrome: 0.1, 
    ESRD: 0.7
    },

    polyuria: {
    AKI: 0.1, 
    CKD: 0.5, 
    kidneyStones: 0.1, 
    UTI: 0.2, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.6, 
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.6, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.2, 
    ESRD: 0.1
    },

    hematuria: {
    AKI: 0.4, 
    CKD: 0.2, 
    kidneyStones: 0.9, 
    UTI: 0.7, 
    pyelonephritis: 0.5, 
    glomerulonephritis: 0.8, 
    nephroticSyndrome: 0.2, 
    PKD: 0.6, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.8, 
    lupusNephritis: 0.6, 
    IgANephropathy: 0.9, 
    hydronephrosis: 0.3, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.1, 
    HUS: 0.7, 
    alportSyndrome: 0.8, 
    ESRD: 0.2
    },

    foamyUrine: {
    AKI: 0.2, 
    CKD: 0.5, 
    kidneyStones: 0.1, 
    UTI: 0.2, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.7, 
    nephroticSyndrome: 0.9, 
    PKD: 0.3, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.4, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.5, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.5, 
    alportSyndrome: 0.4, 
    ESRD: 0.6
    },

    proteinuria: {
    AKI: 0.3, 
    CKD: 0.8, 
    kidneyStones: 0.1, 
    UTI: 0.2, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.9, 
    nephroticSyndrome: 0.9, 
    PKD: 0.4, 
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.7, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.9, 
    IgANephropathy: 0.8, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.2, 
    HUS: 0.6, 
    alportSyndrome: 0.7, 
    ESRD: 0.5
    },

    flankPain: {
    AKI: 0.4, 
    CKD: 0.1, 
    kidneyStones: 0.9, 
    UTI: 0.3, 
    pyelonephritis: 0.9, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.7, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.6, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.8, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.3, 
    HUS: 0.2, 
    alportSyndrome: 0.1, 
    ESRD: 0.1
    },

    fever: {
    AKI: 0.4, 
    CKD: 0.1, 
    kidneyStones: 0.3, 
    UTI: 0.5, 
    pyelonephritis: 0.9, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.4, 
    lupusNephritis: 0.6, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.6, 
    renalArteryStenosis: 0.1, 
    HUS: 0.7, 
    alportSyndrome: 0.1, 
    ESRD: 0.1
    },

    dysuria: {
    AKI: 0.1, 
    CKD: 0.1, 
    kidneyStones: 0.6, 
    UTI: 0.9, 
    pyelonephritis: 0.7, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.1
    },

    frequentUrination: {
    AKI: 0.1, 
    CKD: 0.5, 
    kidneyStones: 0.6, 
    UTI: 0.9, 
    pyelonephritis: 0.7, 
    glomerulonephritis: 0.2, 
    nephroticSyndrome: 0.1, 
    PKD: 0.5, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.3, 
    lupusNephritis: 0.2, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.4, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.2, 
    ESRD: 0.1
    },

    nausea: {
    AKI: 0.8, 
    CKD: 0.6, 
    kidneyStones: 0.9, 
    UTI: 0.2, 
    pyelonephritis: 0.8, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.2, 
    PKD: 0.3, 
    diabeticNephropathy: 0.4, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.3, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.5, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.2, 
    HUS: 0.8, 
    alportSyndrome: 0.2, 
    ESRD: 0.7
    },

    vomiting: {
    AKI: 0.7, 
    CKD: 0.4, 
    kidneyStones: 0.9, 
    UTI: 0.1, 
    pyelonephritis: 0.8, 
    glomerulonephritis: 0.2, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.3, 
    hypertensiveNephropathy: 0.2, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.2, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.6, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.2, 
    HUS: 0.7, 
    alportSyndrome: 0.1, 
    ESRD: 0.6
    },

    appetiteLoss: {
    AKI: 0.7, 
    CKD: 0.8, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.6, 
    glomerulonephritis: 0.4, 
    nephroticSyndrome: 0.4, 
    PKD: 0.3, 
    diabeticNephropathy: 0.6, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.5, 
    lupusNephritis: 0.5, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.1, 
    HUS: 0.7, 
    alportSyndrome: 0.2, 
    ESRD: 0.8
    },

    weightLoss: {
    AKI: 0.3, 
    CKD: 0.7, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.3, 
    glomerulonephritis: 0.2, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.6, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.8, 
    lupusNephritis: 0.5, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.1, 
    HUS: 0.5, 
    alportSyndrome: 0.2, 
    ESRD: 0.8
    },

    hypertension: {
    AKI: 0.4, 
    CKD: 0.8, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.7, 
    nephroticSyndrome: 0.5, 
    PKD: 0.9, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.9, 
    renalCellCarcinoma: 0.3, 
    lupusNephritis: 0.6, 
    IgANephropathy: 0.7, 
    hydronephrosis: 0.4, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.9, 
    HUS: 0.5, 
    alportSyndrome: 0.6, 
    ESRD: 0.8
    },

    hypotension: {
    AKI: 0.8, 
    CKD: 0.1, 
    kidneyStones: 0.2, 
    UTI: 0.4, 
    pyelonephritis: 0.7, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.3, 
    PKD: 0.1, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.1, 
    HUS: 0.3, 
    alportSyndrome: 0.1, 
    ESRD: 0.1
    },

    anemia: {
    AKI: 0.2, 
    CKD: 0.8, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.5, 
    nephroticSyndrome: 0.3, 
    PKD: 0.4, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.6, 
    renalCellCarcinoma: 0.5, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.4, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.8, 
    alportSyndrome: 0.6, 
    ESRD: 0.9
    },

    pruritus: {
    AKI: 0.4, 
    CKD: 0.7, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.3, 
    PKD: 0.3, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.3, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.5, 
    renalArteryStenosis: 0.1, 
    HUS: 0.4, 
    alportSyndrome: 0.2, 
    ESRD: 0.8
    },

    drySkin: {
    AKI: 0.2, 
    CKD: 0.7, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.4, 
    PKD: 0.3, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.4, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.5, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.3, 
    alportSyndrome: 0.2, 
    ESRD: 0.8
    },

    dyspnea: {
    AKI: 0.8, 
    CKD: 0.7, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.3, 
    glomerulonephritis: 0.6, 
    nephroticSyndrome: 0.7, 
    PKD: 0.4, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.5, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.6, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.2, 
    HUS: 0.7, 
    alportSyndrome: 0.4, 
    ESRD: 0.9
    },

    confusion: {
    AKI: 0.8, 
    CKD: 0.6, 
    kidneyStones: 0.1, 
    UTI: 0.4, 
    pyelonephritis: 0.7, 
    glomerulonephritis: 0.2, 
    nephroticSyndrome: 0.2, 
    PKD: 0.2, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.5, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.4, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.4, 
    HUS: 0.8, 
    alportSyndrome: 0.2, 
    ESRD: 0.7
    },

    muscleCramps: {
    AKI: 0.5, 
    CKD: 0.6, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.6, 
    PKD: 0.4, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.4, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.3, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.1, 
    HUS: 0.5, 
    alportSyndrome: 0.2, 
    ESRD: 0.7
    },

    headache: {
    AKI: 0.3, 
    CKD: 0.4, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.4, 
    glomerulonephritis: 0.6, 
    nephroticSyndrome: 0.2, 
    PKD: 0.7, 
    diabeticNephropathy: 0.3, 
    hypertensiveNephropathy: 0.8, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.4, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.9, 
    HUS: 0.6, 
    alportSyndrome: 0.2, 
    ESRD: 0.5
    },

    nocturia: {
    AKI: 0.1, 
    CKD: 0.8, 
    kidneyStones: 0.2, 
    UTI: 0.7, 
    pyelonephritis: 0.6, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.2, 
    PKD: 0.7, 
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.6, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.3, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.4, 
    interstitialNephritis: 0.5, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.3, 
    ESRD: 0.2
    },

    cloudyUrine: {
    AKI: 0.2, 
    CKD: 0.3, 
    kidneyStones: 0.8, 
    UTI: 0.9, 
    pyelonephritis: 0.9, 
    glomerulonephritis: 0.4, 
    nephroticSyndrome: 0.3, 
    PKD: 0.4, 
    diabeticNephropathy: 0.2, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.4, 
    IgANephropathy: 0.3, 
    hydronephrosis: 0.4, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.2, 
    alportSyndrome: 0.2, 
    ESRD: 0.4
    },

    uremicBreath: {
    AKI: 0.7, 
    CKD: 0.6, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.2, 
    glomerulonephritis: 0.3, 
    nephroticSyndrome: 0.2, 
    PKD: 0.3, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.3, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.1, 
    HUS: 0.6, 
    alportSyndrome: 0.2, 
    ESRD: 0.9
    },

    chestPain: {
    AKI: 0.6, 
    CKD: 0.4, 
    kidneyStones: 0.2, 
    UTI: 0.1, 
    pyelonephritis: 0.3, 
    glomerulonephritis: 0.2, 
    nephroticSyndrome: 0.3, 
    PKD: 0.2, 
    diabeticNephropathy: 0.4, 
    hypertensiveNephropathy: 0.5, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.5, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.4, 
    HUS: 0.5, 
    alportSyndrome: 0.1, 
    ESRD: 0.8
    },

    weakness: {
    AKI: 0.7, 
    CKD: 0.8, 
    kidneyStones: 0.2, 
    UTI: 0.3, 
    pyelonephritis: 0.6, 
    glomerulonephritis: 0.5, 
    nephroticSyndrome: 0.6, 
    PKD: 0.4, 
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.5, 
    renalCellCarcinoma: 0.4, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.3, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.2, 
    HUS: 0.8, 
    alportSyndrome: 0.5, 
    ESRD: 0.9
    },

    pallor: {
    AKI: 0.3, 
    CKD: 0.8, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.3, 
    glomerulonephritis: 0.5, 
    nephroticSyndrome: 0.4, 
    PKD: 0.3, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.5, 
    renalCellCarcinoma: 0.5, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.4, 
    hydronephrosis: 0.2, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.9, 
    alportSyndrome: 0.6, 
    ESRD: 0.9
  },
  };


const diseaseScores = {};
Object.keys(diseaseXSymptom.fatigue).forEach(disease => {
  diseaseScores[disease] = 0;
});


Object.keys(diseaseScores).forEach(disease => {
  let total = 0;
  patientInfo.symptoms.forEach(symptom => {
    if (diseaseXSymptom[symptom] && diseaseXSymptom[symptom][disease] !== undefined) {
      total += diseaseXSymptom[symptom][disease];
    }
  });
  diseaseScores[disease] = total;
});

if (patientInfo.age >= 65) {
  diseaseScores.CKD += 0.5;
  diseaseScores.ESRD += 0.7;
  diseaseScores.AKI += 0.5;
} else if (patientInfo.age >= 50) {
  diseaseScores.CKD += 0.3;
  diseaseScores.ESRD += 0.4;
}

if (patientInfo.gender.toLowerCase() === "male") {
  diseaseScores.ESRD += 0.4;
  diseaseScores.renalCellCarcinoma += 0.5;
}
if (patientInfo.gender.toLowerCase() === "female") {
  diseaseScores.UTI += 0.5;
  diseaseScores.CKD += 0.2;
}

const prevalenceModifiers = {
  AKI: 1.0, CKD: 1.5, kidneyStones: 1.3, UTI: 1.6,
  pyelonephritis: 1.2, glomerulonephritis: 0.8, nephroticSyndrome: 0.7,
  PKD: 1.1, diabeticNephropathy: 1.2, hypertensiveNephropathy: 1.2,
  renalCellCarcinoma: 0.6, lupusNephritis: 0.6, IgANephropathy: 0.5,
  hydronephrosis: 0.7, interstitialNephritis: 0.5, renalArteryStenosis: 0.6,
  HUS: 0.4, alportSyndrome: 0.3, ESRD: 0.5
};
Object.keys(diseaseScores).forEach(disease => {
  diseaseScores[disease] *= prevalenceModifiers[disease] || 1;
});

const symptomCombos = [
  { symptoms: ["oliguria", "hypotension"], diseases: { AKI: 1.7 } },
  { symptoms: ["fever", "dysuria", "flankPain"], diseases: { pyelonephritis: 1.5 } },
  { symptoms: ["confusion", "oliguria", "nausea", "vomiting"], diseases: { AKI: 1.5, HUS: 1.5 } },
  { symptoms: ["fever", "hypotension", "confusion"], diseases: { AKI: 1.7, pyelonephritis: 1.5 } },
  { symptoms: ["hematuria", "flankPain", "nausea"], diseases: { kidneyStones: 1.4 } },
  { symptoms: ["oliguria", "shortnessOfBreath", "edema"], diseases: { AKI: 1.5, ESRD: 1.5 } },
  { symptoms: ["fever", "dysuria", "oliguria", "flankPain"], diseases: { pyelonephritis: 1.7, AKI: 1.5 } },
  { symptoms: ["hematuria", "edema", "hypertension"], diseases: { glomerulonephritis: 1.5 } },
  { symptoms: ["nausea", "vomiting", "fatigue", "oliguria"], diseases: { AKI: 1.5, HUS: 1.5 } },
  { symptoms: ["polyuria", "fatigue", "nausea"], diseases: { AKI: 1.3, diabeticNephropathy: 1.2 } },
  { symptoms: ["hematuria", "flankPain", "fever", "dysuria"], diseases: { kidneyStones: 1.5, UTI: 1.3 } },
  { symptoms: ["edema", "proteinuria", "foamyUrine"], diseases: { nephroticSyndrome: 1.5 } },
  { symptoms: ["fatigue", "anemia", "pallor"], diseases: { CKD: 1.3, ESRD: 1.5 } },
  { symptoms: ["fever", "dysuria", "cloudyUrine"], diseases: { UTI: 1.5 } },
  { symptoms: ["flankPain", "hematuria", "nausea", "vomiting"], diseases: { kidneyStones: 1.5 } },
  { symptoms: ["hypertension", "headache", "visualDisturbance"], diseases: { hypertensiveNephropathy: 1.5 } }
];

symptomCombos.forEach(combo => {
  const hasAll = combo.symptoms.every(symptom => patientInfo.symptoms.includes(symptom));
  if (hasAll) {
    Object.keys(combo.diseases).forEach(disease => {
      diseaseScores[disease] += combo.diseases[disease];
    });
  }
});


const sortedDiseases = Object.entries(diseaseScores)
  .sort((a, b) => b[1] - a[1]);

function classifyChance(score, maxScore) {
  const ratio = score / maxScore;
  if (ratio >= 0.9) return "Very high chance";
  if (ratio >= 0.7) return "High chance";
  if (ratio >= 0.5) return "Moderate chance";
  if (ratio >= 0.3) return "Low chance";
  return "Low chance";
}

const diseaseList = document.getElementById("diseaseList");
diseaseList.innerHTML = ""; 
const maxScore = sortedDiseases[0][1];

const diseaseNames = {
  AKI: "Acute Kidney Injury",
  CKD: "Chronic Kidney Disease",
  kidneyStones: "Kidney Stones",
  UTI: "Urinary Tract Infection",
  pyelonephritis: "Pyelonephritis",
  glomerulonephritis: "Glomerulonephritis",
  nephroticSyndrome: "Nephrotic Syndrome",
  PKD: "Polycystic Kidney Disease",
  diabeticNephropathy: "Diabetic Nephropathy",
  hypertensiveNephropathy: "Hypertensive Nephropathy",
  renalCellCarcinoma: "Renal Cell Carcinoma",
  lupusNephritis: "Lupus Nephritis",
  IgANephropathy: "IgA Nephropathy",
  hydronephrosis: "Hydronephrosis",
  interstitialNephritis: "Interstitial Nephritis",
  renalArteryStenosis: "Renal Artery Stenosis",
  HUS: "Hemolytic Uremic Syndrome",
  alportSyndrome: "Alport Syndrome",
  ESRD: "End-Stage Renal Disease"
};

sortedDiseases.slice(0, 3).forEach(([disease, score]) => {
  const chanceLevel = classifyChance(score, maxScore);
  const listItem = document.createElement("li");
  listItem.textContent = `${diseaseNames[disease] || disease}: ${chanceLevel}`;
  diseaseList.appendChild(listItem);
});