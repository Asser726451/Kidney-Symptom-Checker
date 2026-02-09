  const diseaseInfo = {
    AKI: {
      brief: `<br><br> Definition: Acute Kidney Injury (AKI) is a sudden condition when kidneys stop functioning proerly. Therefore, the process of blood filteration is disrupted, leading to harmful substances accumulating in the body over a short period.<br><br>
      Causes: AKI is mainly caused by reduced blood flow to the kidneys. It can also be caused by a certain severe damage done to the kidney, or in case the ureters are blocked, preventing the urine from leaving the kidneys. <br><br>
      Symptoms: The main symptoms of AKI are oliguria, edema, fatigue, confussion, flank pain, weakness, loss of appetite, pruritus, and chest pain. <br><br>
      Impact: AKI may lead to kidney failure, since excess and waste products are building up in the kidneys (urea). Furthermore, this disease is associated with fluid and electrolyte imbalance AKI which causes damageto other organs in the body, particularly the heart, lungs, and brain. Hence, AKI is correlated with high mortality rates.`
    },
    CKD: {
      brief: `<br><br>Definition: Chronic Kidney Disease (CKD) is a long-term condition where kidneys stop functioning properly. Therefore, the process of blood filteration is disrupted, causing harmful susbtances to build up in the body over time.<br><br>
      Causes: The primary cause of CKD is kidney damage that is mainly associated with diabetes and hypertension. Other causes of CKD include the inflammation of the kidney's glomeruli (glomerulonephritis), the presence of many fluid-filled cysts in the kidneys, in addition to reccurent infections in the kidney.<br><br>
      Symptoms: The main symptoms of CKD are nausea, vomiting, loss of appetite, fatigue, weakness, hypertension, and dyspnea.<br><br>
      Impact: CKD negativelly impacts the kidney's ability to filter waste products from the blood and this condition is directly linked with fluid and electrolyte imblance, weak acid-base regulation, and slow hormone production.`
    },
    kidneyStones: {
      brief: `<br><br>Definition: Kidney Stones are hard deposits made of minerals and salts that develop inside the kidneys and crystalize in the urine.<br><br>
      Causes: Kidney stones are mainly caused by dehydration. Due to the low water concentration in the blood, waste products in the urine become more concentrated and crystalize which leads to the formation of kidney stones. Kidney stones can also be caused by an imbalanced diet, containing high amounts of salts, sugars, and proteins which act as solutes in the blood.<br><br>
      Symptoms: The main symptoms of kidney stones are flank pain, dysuria, cloudy urine, frequent urination, hematuria, oliguria, vomiting, and fever.<br><br>
      Impact: Kidney stones can impair kidney function or even cause permanent damage, since urine and waste products are blocked from leaving the kidneys through the ureter. Furthermore, kidney stones leads to severe pain and discomfort and this condition even increases the risk of urinary tract infections.`
    },
    UTI: {
      brief: `<br><br>Definition: Urinary Tract Infection (UTI) is a bacterial infection in the urinary system, caused by the emergence and multiplication of harmful bacteria, such as E.coli in the lower part of the urinary tract.<br><br>
      Causes: The primary cause of UTI is the presence of bacteria in the lower urinary tract. One of these major bacteria is E.coli from the gastrointestinal tract. This bacteria enters the urethra and multiplies in the bladder. Bacteria can be present in the urinary tract, due to mutltiple reasons, including sexual activity, weak immune system, poor hygiene, and hormonal changes.<br><br> 
      Symptoms: The symptoms of UTI include dysuria, hematuria, frequent urination, flank pain, nausea, vomiting, and fever.<br><br>
      Impact: UTI can lead to serious complications, such as damage and inflammation to the urinary system which leads to inability to urinate properly. UTI can also allow bacteria to enter the bloodstream and impact many other parts of the body. This condition is known as sepsis and it can be life-threatening.`
    },
    pyelonephritis: {
      brief: `<br><br>Pyelonephritis is a type of urinary tract infection (UTI) that causes the inflammation of one or both kidneys, due to a bacterial infection.<br><br>
      Causes: The leading cause of pyeloniphritis is the gathering of bacteria (mainly E.coli) in the upper urinary tract near the kidneys, as bacteria travels across the ureters. This bacteria is formed in the urinary tract, due to an ascending infection, a bloodstream infection, or a fungal infection. <br><br>
      Symptoms: The symptoms of pyelonephritis include fever, flank pain, nausea, vomiting, dysuria, frequent urination, and cloudy urine.<br><br>
      Impact: Pyelonephritis severely impacts the kidney's ability to filter waste products from the blood, as the kidneys are inflammed and damaged. This condition can also lead to sepsis which is the spread of bacteria from the urinary tract into the bloodstream and impacting the rest of the body cells.`
    },
    glomerulonephritis: { 
     brief: `<br><br>Definition: Glomerulonephritis is the inflammation of the glomeruli, the tiny filters in the kidneys that remove waste and excess fluid from the blood.<br><br> 
     Causes: This condition is often triggered by immune system responses, infections like strep throat, or underlying diseases such as lupus and vasculitis.<br><br> 
     Symptoms: Key symptoms include hematuria, proteinuria (foamy urine), hypertension, and edema in the face or legs.<br><br> 
     Impact: It can cause significant damage to the filtration system, potentially leading to acute or chronic kidney failure and dangerous protein loss.` 
    },

    nephroticSyndrome: {
      brief: `<br><br>Definition: Nephrotic Syndrome is a kidney disorder that causes the body to excrete too much protein in the urine.<br><br>
      Causes: It is typically caused by damage to the clusters of small blood vessels in the kidneys that filter waste and excess water from the blood.<br><br>
      Symptoms: Key symptoms include severe edema (especially around the eyes and ankles), foamy urine due to proteinuria, and weight gain from fluid retention.<br><br>
      Impact: This condition increases the risk of infections and blood clots while leading to high cholesterol and significant nutritional deficiencies.`
    },
    PKD: {
      brief: `<br><br>Definition: Polycystic Kidney Disease (PKD) is a genetic disorder characterized by the growth of numerous fluid-filled cysts in the kidneys.<br><br>
      Causes: It is caused by inherited gene mutations that trigger cyst formation, which can eventually enlarge the kidneys and replace healthy tissue.<br><br>
      Symptoms: Main symptoms include high blood pressure, back or side pain, hematuria, and a feeling of fullness in the abdomen.<br><br>
      Impact: PKD can lead to kidney failure over time and may cause complications in other organs, such as cysts in the liver or aneurysms in the brain.`
    },
    diabeticNephropathy: {
      brief: `<br><br>Definition: Diabetic Nephropathy is a progressive kidney disease caused by long-term damage from diabetes mellitus.<br><br>
      Causes: High blood sugar levels damage the kidney's delicate filtration system over many years, leading to scarring and functional loss.<br><br>
      Symptoms: Symptoms often appear late and include worsening blood pressure control, proteinuria, swelling of the feet, and increased need to urinate.<br><br>
      Impact: It is a leading cause of end-stage renal disease (ESRD) and significantly increases the risk of cardiovascular complications.`
    },
    hypertensiveNephropathy: {
      brief: `<br><br>Definition: Hypertensive Nephropathy is kidney damage resulting from chronic high blood pressure.<br><br>
      Causes: Persistent hypertension thickens and narrows the blood vessels in the kidneys, reducing blood flow and causing tissue death.<br><br>
      Symptoms: It is often asymptomatic in early stages but can progress to cause headaches, vision changes, and swelling in the extremities.<br><br>
      Impact: This condition creates a dangerous cycle where damaged kidneys further raise blood pressure, eventually leading to chronic kidney failure.`
    },
    renalCellCarcinoma: {
      brief: `<br><br>Definition: Renal Cell Carcinoma is the most common type of kidney cancer, originating in the lining of the small tubes in the kidney.<br><br>
      Causes: While the exact cause is unclear, risk factors include smoking, obesity, hypertension, and certain genetic syndromes.<br><br>
      Symptoms: Symptoms include hematuria, a persistent lump or mass in the side/abdomen, unexplained weight loss, and flank pain.<br><br>
      Impact: If left untreated, the cancer can metastasize to other parts of the body, leading to organ failure and high mortality rates.`
    },
    lupusNephritis: {
      brief: `<br><br>Definition: Lupus Nephritis is an inflammation of the kidneys caused by Systemic Lupus Erythematosus (SLE), an autoimmune disease.<br><br>
      Causes: The body's immune system mistakenly attacks the kidneys, leading to inflammation and scarring of the glomeruli.<br><br>
      Symptoms: Common signs include foamy urine, hematuria, high blood pressure, and swelling in the legs or face.<br><br>
      Impact: It can lead to permanent kidney damage or failure if not managed with aggressive immunosuppressive therapy.`
    },
    igaNephropathy: {
      brief: `<br><br>Definition: IgA Nephropathy (Berger's disease) occurs when an antibody called immunoglobulin A (IgA) builds up in the kidneys.<br><br>
      Causes: The buildup is caused by an overactive immune response, often following a respiratory or gastrointestinal infection.<br><br>
      Symptoms: The hallmark symptom is "cola-colored" urine (hematuria), typically appearing during or shortly after an upper respiratory infection.<br><br>
      Impact: While progression is often slow, the resulting inflammation can gradually lead to chronic kidney disease and failure.`
    },
    hydronephrosis: {
      brief: `<br><br>Definition: Hydronephrosis is the swelling of one or both kidneys due to a buildup of urine inside the organ.<br><br>
      Causes: It occurs when an obstruction (like a stone or tumor) or a structural defect prevents urine from draining into the bladder.<br><br>
      Symptoms: Symptoms include intense pain in the back or side, nausea, fever, and painful or frequent urination.<br><br>
      Impact: Prolonged pressure from the trapped urine can cause the kidney tissue to atrophy, leading to permanent loss of renal function.`
    },
    interstitialNephritis: {
      brief: `<br><br>Definition: Interstitial Nephritis is an inflammation of the spaces between the kidney tubules, often affecting their ability to filter properly.<br><br>
      Causes: It is most commonly caused by an allergic reaction to medications (like NSAIDs or antibiotics) or by certain infections.<br><br>
      Symptoms: Symptoms include fever, skin rash, fatigue, and a decrease in urine output.<br><br>
      Impact: This condition often causes acute kidney injury, but function frequently returns to normal if the offending cause is removed quickly.`
    },
    renalArteryStenosis: {
      brief: `<br><br>Definition: Renal Artery Stenosis is the narrowing of one or more arteries that carry blood to the kidneys.<br><br>
      Causes: It is primarily caused by atherosclerosis (plaque buildup) or fibromuscular dysplasia in the artery walls.<br><br>
      Symptoms: The most common sign is high blood pressure that is difficult to control with standard medications.<br><br>
      Impact: Reduced blood flow causes the kidneys to "shrivel" (atrophy) and can lead to fluid buildup in the lungs and eventual kidney failure.`
    },
    HUS: {
      brief: `<br><br>Definition: Hemolytic Uremic Syndrome (HUS) is a condition that involves the destruction of red blood cells, which then clog the kidney's filtering system.<br><br>
      Causes: It is usually triggered by a severe infection with certain strains of E. coli bacteria, often from contaminated food.<br><br>
      Symptoms: Symptoms include bloody diarrhea, pale skin, extreme fatigue, and decreased frequency of urination.<br><br>
      Impact: HUS is a medical emergency that can lead to acute kidney failure, stroke, and life-threatening complications in other organs.`
    },
    alportSyndrome: {
      brief: `<br><br>Definition: Alport Syndrome is an inherited disease that damages the tiny blood vessels in your kidneys.<br><br>
      Causes: It is caused by genetic mutations that affect the collagen responsible for the structure of the kidney's filtering membranes.<br><br>
      Symptoms: Key features include blood in the urine, hearing loss, and sometimes abnormalities in the lenses of the eyes.<br><br>
      Impact: This condition leads to progressive kidney scarring and usually results in end-stage renal disease by early adulthood in males.`
    },
    ESRD: {
      brief: `<br><br>Definition: End-Stage Renal Disease (ESRD) is the final, permanent stage of chronic kidney disease where the kidneys no longer function well enough to meet the body's needs.<br><br>
      Causes: It is the culmination of long-term damage from conditions like diabetes, hypertension, or chronic glomerulonephritis.<br><br>
      Symptoms: Symptoms include extreme fatigue, nausea, metal taste in the mouth, and difficulty breathing due to fluid in the lungs.<br><br>
      Impact: Survival at this stage requires regular dialysis or a kidney transplant to perform the vital functions the kidneys can no longer manage.`
    },
    obstructiveUropathy: {
    brief: `<br><br>Definition: Obstructive Uropathy is a condition where the normal flow of urine is blocked, causing urine to back up and potentially damaging the urinary tract and kidneys.<br><br>
    Causes: Causes include kidney stones, tumors, enlarged prostate, strictures, or congenital abnormalities of the urinary tract.<br><br>
    Symptoms: Patients may experience difficulty urinating, changes in urine stream, flank or abdominal pain, urinary tract infections, and swelling.<br><br>
    Impact: Prolonged obstruction can lead to kidney damage, hydronephrosis, loss of kidney function, and increased risk of infections.`
    },
    contrastInducedNephropathy: {
      brief: `<br><br>Definition: Contrast-Induced Nephropathy (CIN) is a form of acute kidney injury that occurs after the administration of intravenous radiocontrast media.<br><br>
      Causes: The iodine-based dyes used in medical imaging can have toxic effects on the kidney cells or reduce blood flow to the organ.<br><br>
      Symptoms: It usually presents as a sudden rise in serum creatinine within 48 to 72 hours after a procedure, often with few physical symptoms.<br><br>
      Impact: While often reversible, it can lead to permanent damage in patients with pre-existing kidney disease or diabetes.`
    },
    medullarySpongeKidney: {
      brief: `<br><br>Definition: Medullary Sponge Kidney is a congenital disorder where the small tubes inside the kidneys are dilated, giving them a sponge-like appearance.<br><br>
      Causes: It is a birth defect where the tubules do not form correctly, though the exact genetic cause is often unknown.<br><br>
      Symptoms: Many have no symptoms until they develop complications like kidney stones or frequent UTIs.<br><br>
      Impact: While it rarely leads to total kidney failure, it causes chronic discomfort and increases the risk of calcium deposits and infections.`
    },
    goodpastureSyndrome: {
      brief: `<br><br>Definition: Goodpasture Syndrome is a rare, life-threatening autoimmune disease that attacks both the kidneys and the lungs.<br><br>
      Causes: The immune system produces antibodies that attack the basement membranes in the lungs and the glomeruli in the kidneys.<br><br>
      Symptoms: Symptoms include coughing up blood, shortness of breath, hematuria, and swelling.<br><br>
      Impact: It often results in rapidly progressive glomerulonephritis, leading to sudden kidney failure if not treated immediately.`
    },
    vasculitis: {
      brief: `<br><br>Definition: Renal Vasculitis is an inflammation of the blood vessels within the kidneys, which can restrict blood flow and damage tissue.<br><br>
      Causes: It is typically caused by autoimmune disorders where the body attacks its own vasculature, such as ANCA-associated vasculitis.<br><br>
      Symptoms: Signs include fever, weight loss, joint pain, and dark-colored urine due to blood and protein leakage.<br><br>
      Impact: Inflammation can cause the vessel walls to weaken or scar, leading to ischemia (lack of blood) and rapid destruction of kidney function.`
    }
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
    AKI: 0.7,
    CKD: 0.8,
    kidneyStones: 0.2,
    UTI: 0.4,
    pyelonephritis: 0.6,
    glomerulonephritis: 0.5,
    nephroticSyndrome: 0.6,
    PKD: 0.4,
    diabeticNephropathy: 0.6,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.7,
    lupusNephritis: 0.8,
    IgANephropathy: 0.4,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.3,
    HUS: 0.9,
    alportSyndrome: 0.4,
    ESRD: 0.9,
    obstructiveUropathy: 0.4,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.8,
    vasculitis: 0.8
  },

    edema: {
    AKI: 0.7,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.8,
    nephroticSyndrome: 0.9,
    PKD: 0.3,
    diabeticNephropathy: 0.8,
    hypertensiveNephropathy: 0.5,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.8,
    IgANephropathy: 0.6,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.4,
    HUS: 0.7,
    alportSyndrome: 0.5,
    ESRD: 0.9,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.6,
    vasculitis: 0.6
  },

    oliguria: {
    AKI: 0.9,
    CKD: 0.6,
    kidneyStones: 0.4,
    UTI: 0.2,
    pyelonephritis: 0.3,
    glomerulonephritis: 0.8,
    nephroticSyndrome: 0.7,
    PKD: 0.3,
    diabeticNephropathy: 0.5,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.8,
    IgANephropathy: 0.6,
    hydronephrosis: 0.5,
    interstitialNephritis: 0.6,
    renalArteryStenosis: 0.5,
    HUS: 0.9,
    alportSyndrome: 0.4,
    ESRD: 0.9,
    obstructiveUropathy: 0.8,
    contrastInducedNephropathy: 0.8,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.8,
    vasculitis: 0.8
  },

    polyuria: {
    AKI: 0.4,
    CKD: 0.6,
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.1,
    PKD: 0.5,
    diabeticNephropathy: 0.8,
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.4,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.2,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.2,
    obstructiveUropathy: 0.5,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
   },

    hematuria: {
    AKI: 0.4,
    CKD: 0.2,
    kidneyStones: 0.9,
    UTI: 0.8,
    pyelonephritis: 0.6,
    glomerulonephritis: 0.9,
    nephroticSyndrome: 0.2,
    PKD: 0.7,
    diabeticNephropathy: 0.1,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.9,
    lupusNephritis: 0.8,
    IgANephropathy: 0.9,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.1,
    HUS: 0.5,
    alportSyndrome: 0.8,
    ESRD: 0.2,
    obstructiveUropathy: 0.5,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.6,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.9
   },

    foamyUrine: {
    AKI: 0.3,
    CKD: 0.7,
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.8,
    nephroticSyndrome: 0.9,
    PKD: 0.3,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 0.6,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.9,
    IgANephropathy: 0.7,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.2,
    HUS: 0.4,
    alportSyndrome: 0.6,
    ESRD: 0.8,
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.8,
    vasculitis: 0.8
  },

   proteinuria: {
    AKI: 0.4,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.3,
    pyelonephritis: 0.3,
    glomerulonephritis: 0.9,
    nephroticSyndrome: 0.9,
    PKD: 0.4,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 0.7,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.9,
    IgANephropathy: 0.8,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.3,
    HUS: 0.5,
    alportSyndrome: 0.7,
    ESRD: 0.9,
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.9
   },

    flankPain: {
    AKI: 0.4,
    CKD: 0.2,
    kidneyStones: 0.9,
    UTI: 0.3,
    pyelonephritis: 0.9,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.1,
    PKD: 0.8,
    diabeticNephropathy: 0.1,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.7,
    lupusNephritis: 0.2,
    IgANephropathy: 0.4,
    hydronephrosis: 0.9,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.1,
    HUS: 0.2,
    alportSyndrome: 0.1,
    ESRD: 0.2,
    obstructiveUropathy: 0.9,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.6,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.3
   },

    fever: {
    AKI: 0.4,
    CKD: 0.2,
    kidneyStones: 0.3,
    UTI: 0.5,
    pyelonephritis: 0.9,
    glomerulonephritis: 0.4,
    nephroticSyndrome: 0.3,
    PKD: 0.5,
    diabeticNephropathy: 0.1,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.6,
    lupusNephritis: 0.8,
    IgANephropathy: 0.3,
    hydronephrosis: 0.4,
    interstitialNephritis: 0.7,
    renalArteryStenosis: 0.1,
    HUS: 0.7,
    alportSyndrome: 0.1,
    ESRD: 0.3,
    obstructiveUropathy: 0.5,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.6,
    vasculitis: 0.9
    },

    dysuria: {
    AKI: 0.2,
    CKD: 0.1,
    kidneyStones: 0.7,
    UTI: 0.9,
    pyelonephritis: 0.6,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.1,
    PKD: 0.2,
    diabeticNephropathy: 0.2,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.3,
    lupusNephritis: 0.1,
    IgANephropathy: 0.2,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.1,
    renalArteryStenosis: 0.1,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.1,
    obstructiveUropathy: 0.6,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.2
    },

    frequentUrination: {
    AKI: 0.3,
    CKD: 0.6,
    kidneyStones: 0.5,
    UTI: 0.9,
    pyelonephritis: 0.7,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.2,
    PKD: 0.6,
    diabeticNephropathy: 0.8,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.3,
    lupusNephritis: 0.2,
    IgANephropathy: 0.2,
    hydronephrosis: 0.5,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.2,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.3,
    obstructiveUropathy: 0.8,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.5,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
   },

    nausea: {
    AKI: 0.8,
    CKD: 0.7,
    kidneyStones: 0.9,
    UTI: 0.3,
    pyelonephritis: 0.7,
    glomerulonephritis: 0.4,
    nephroticSyndrome: 0.3,
    PKD: 0.4,
    diabeticNephropathy: 0.5,
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.4,
    IgANephropathy: 0.3,
    hydronephrosis: 0.7,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.1,
    HUS: 0.8,
    alportSyndrome: 0.2,
    ESRD: 0.9,
    obstructiveUropathy: 0.7,
    contrastInducedNephropathy: 0.5,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.4,
    vasculitis: 0.5
   },

    vomiting: {
    AKI: 0.7,
    CKD: 0.6,
    kidneyStones: 0.9,
    UTI: 0.2,
    pyelonephritis: 0.8,
    glomerulonephritis: 0.3,
    nephroticSyndrome: 0.2,
    PKD: 0.3,
    diabeticNephropathy: 0.5,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.3,
    lupusNephritis: 0.4,
    IgANephropathy: 0.2,
    hydronephrosis: 0.7,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.1,
    HUS: 0.8,
    alportSyndrome: 0.2,
    ESRD: 0.9,
    obstructiveUropathy: 0.7,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.3,
    vasculitis: 0.4
   },

    appetiteLoss: {
    AKI: 0.8,
    CKD: 0.8,
    kidneyStones: 0.2,
    UTI: 0.3,
    pyelonephritis: 0.7,
    glomerulonephritis: 0.5,
    nephroticSyndrome: 0.6,
    PKD: 0.5,
    diabeticNephropathy: 0.6,
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.8,
    lupusNephritis: 0.7,
    IgANephropathy: 0.4,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.6,
    renalArteryStenosis: 0.1,
    HUS: 0.8,
    alportSyndrome: 0.3,
    ESRD: 0.9,
    obstructiveUropathy: 0.4,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.7,
    vasculitis: 0.8
    },

    weightLoss: {
    AKI: 0.2,
    CKD: 0.7,
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.3,
    nephroticSyndrome: 0.2,
    PKD: 0.4,
    diabeticNephropathy: 0.6,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.9,
    lupusNephritis: 0.6,
    IgANephropathy: 0.3,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.2,
    HUS: 0.4,
    alportSyndrome: 0.2,
    ESRD: 0.9,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.7,
    vasculitis: 0.8
    },

    hypertension: {
    AKI: 0.6,
    CKD: 0.9,
    kidneyStones: 0.2,
    UTI: 0.2,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.9,
    nephroticSyndrome: 0.7,
    PKD: 0.9,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 1.0,
    renalCellCarcinoma: 0.5,
    lupusNephritis: 0.8,
    IgANephropathy: 0.8,
    hydronephrosis: 0.4,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.9,
    HUS: 0.8,
    alportSyndrome: 0.6,
    ESRD: 0.9,
    obstructiveUropathy: 0.5,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.3,
    goodpastureSyndrome: 0.7,
    vasculitis: 0.8
    },

    hypotension: {
    AKI: 0.8,
    CKD: 0.3,
    kidneyStones: 0.1,
    UTI: 0.4,
    pyelonephritis: 0.6,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.4,
    PKD: 0.1,
    diabeticNephropathy: 0.4,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.4,
    alportSyndrome: 0.1,
    ESRD: 0.5,
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.3
    },

    anemia: {
    AKI: 0.5,
    CKD: 0.9,
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.3,
    glomerulonephritis: 0.6,
    nephroticSyndrome: 0.4,
    PKD: 0.5,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 0.7,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.8,
    IgANephropathy: 0.6,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.2,
    HUS: 0.9,
    alportSyndrome: 0.5,
    ESRD: 0.9,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.8
    },

    pruritus: {
    AKI: 0.4,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.1,
    glomerulonephritis: 0.3,
    nephroticSyndrome: 0.4,
    PKD: 0.3,
    diabeticNephropathy: 0.7,
    hypertensiveNephropathy: 0.5,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.3,
    IgANephropathy: 0.3,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.1,
    HUS: 0.2,
    alportSyndrome: 0.2,
    ESRD: 0.9,
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.2,
    vasculitis: 0.3
    },

    drySkin: {
    AKI: 0.3,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.1,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.5,
    PKD: 0.3,
    diabeticNephropathy: 0.8,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.3,
    IgANephropathy: 0.2,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.1,
    HUS: 0.2,
    alportSyndrome: 0.1,
    ESRD: 0.9,
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.2
    },

confusion: {
    AKI: 0.7,
    CKD: 0.6,
    kidneyStones: 0.1,
    UTI: 0.8,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.2,
    PKD: 0.2,
    diabeticNephropathy: 0.3,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.4,
    IgANephropathy: 0.1,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.7,
    alportSyndrome: 0.1,
    ESRD: 0.9,
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.2,
    vasculitis: 0.4
},

    dyspnea: {
    AKI: 0.7,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.3,
    glomerulonephritis: 0.6,
    nephroticSyndrome: 0.7,
    PKD: 0.4,
    diabeticNephropathy: 0.7,
    hypertensiveNephropathy: 0.6,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.6,
    IgANephropathy: 0.5,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.5,
    HUS: 0.5,
    alportSyndrome: 0.4,
    ESRD: 0.9,
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.8
    },

    headache: {
    AKI: 0.5,
    CKD: 0.4,
    kidneyStones: 0.2,
    UTI: 0.2,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.7,
    nephroticSyndrome: 0.3,
    PKD: 0.8,
    diabeticNephropathy: 0.4,
    hypertensiveNephropathy: 0.9,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.6,
    IgANephropathy: 0.5,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.7,
    HUS: 0.7,
    alportSyndrome: 0.3,
    ESRD: 0.8,
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.3,
    vasculitis: 0.8
    },  

    nocturia: {
    AKI: 0.3,
    CKD: 0.9,
    kidneyStones: 0.3,
    UTI: 0.7,
    pyelonephritis: 0.6,
    glomerulonephritis: 0.4,
    nephroticSyndrome: 0.5,
    PKD: 0.8,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 0.7,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.4,
    IgANephropathy: 0.4,
    hydronephrosis: 0.5,
    interstitialNephritis: 0.6,
    renalArteryStenosis: 0.4,
    HUS: 0.1,
    alportSyndrome: 0.4,
    ESRD: 0.7,
    obstructiveUropathy: 0.9,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.6,
    goodpastureSyndrome: 0.2,
    vasculitis: 0.2
  },

    cloudyUrine: {
    AKI: 0.3,
    CKD: 0.3,
    kidneyStones: 0.6,
    UTI: 0.9,
    pyelonephritis: 0.9,
    glomerulonephritis: 0.5,
    nephroticSyndrome: 0.6,
    PKD: 0.4,
    diabeticNephropathy: 0.5,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.4,
    IgANephropathy: 0.3,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.1,
    HUS: 0.3,
    alportSyndrome: 0.2,
    ESRD: 0.3,
    obstructiveUropathy: 0.6,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.5,
    goodpastureSyndrome: 0.2,
    vasculitis: 0.2
   },

uremicBreath: {
    AKI: 0.8,
    CKD: 0.8,
    kidneyStones: 0.0,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.4,
    nephroticSyndrome: 0.2,
    PKD: 0.4,
    diabeticNephropathy: 0.7,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.4,
    IgANephropathy: 0.3,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.1,
    HUS: 0.7,
    alportSyndrome: 0.2,
    ESRD: 1.0,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.3,
    vasculitis: 0.3
},

chestPain: {
    AKI: 0.6,
    CKD: 0.7,
    kidneyStones: 0.2,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.5,
    nephroticSyndrome: 0.6,
    PKD: 0.4,
    diabeticNephropathy: 0.9,
    hypertensiveNephropathy: 0.8,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.8,
    IgANephropathy: 0.3,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.7,
    HUS: 0.5,
    alportSyndrome: 0.3,
    ESRD: 0.9,
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.8,
    vasculitis: 0.7
},

weakness: {
    AKI: 0.7,
    CKD: 0.8,
    kidneyStones: 0.3,
    UTI: 0.4,
    pyelonephritis: 0.7,
    glomerulonephritis: 0.5,
    nephroticSyndrome: 0.6,
    PKD: 0.4,
    diabeticNephropathy: 0.7,
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.8,
    lupusNephritis: 0.7,
    IgANephropathy: 0.4,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.5,
    renalArteryStenosis: 0.2,
    HUS: 0.8,
    alportSyndrome: 0.4,
    ESRD: 1.0,
    obstructiveUropathy: 0.4,
    contrastInducedNephropathy: 0.5,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.8,
    vasculitis: 0.8
},

pallor: {
    AKI: 0.5,
    CKD: 0.8,
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.6,
    nephroticSyndrome: 0.7,
    PKD: 0.4,
    diabeticNephropathy: 0.8,
    hypertensiveNephropathy: 0.5,
    renalCellCarcinoma: 0.6,
    lupusNephritis: 0.7,
    IgANephropathy: 0.5,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.2,
    HUS: 0.9,
    alportSyndrome: 0.4,
    ESRD: 1.0,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.8
},

  weakUrineStream: {
    AKI: 0.3, 
    CKD: 0.1, 
    kidneyStones: 0.6, 
    UTI: 0.3, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.4, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.8, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.2,
    obstructiveUropathy: 0.9, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  urinaryRetention: {
    AKI: 0.4, 
    CKD: 0.1, 
    kidneyStones: 0.7, 
    UTI: 0.4, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.6, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.8, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.1,
    obstructiveUropathy: 0.9, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  urinaryHesitancy: {
    AKI: 0.2, 
    CKD: 0.1, 
    kidneyStones: 0.4, 
    UTI: 0.4, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.1, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.6, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.1,
    obstructiveUropathy: 0.9, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  incompleteBladderEmptying: {
    AKI: 0.3, 
    CKD: 0.1, 
    kidneyStones: 0.5,
    UTI: 0.4, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.2, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.1, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.8, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.2,
    obstructiveUropathy: 0.9, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  rash: {
    AKI: 0.3, 
    CKD: 0.4, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.4, 
    nephroticSyndrome: 0.2, 
    PKD: 0.1, 
    diabeticNephropathy: 0.3, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.9, 
    IgANephropathy: 0.4, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.7, 
    renalArteryStenosis: 0.1, 
    HUS: 0.8, 
    alportSyndrome: 0.1, 
    ESRD: 0.5, 
    obstructiveUropathy: 0.1, 
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1, 
    goodpastureSyndrome: 0.2, 
    vasculitis: 0.9 
  },

  pulmonarySymptoms: {
    AKI: 0.5, 
    CKD: 0.6, 
    kidneyStones: 0.1, 
    UTI: 0.1, 
    pyelonephritis: 0.1, 
    glomerulonephritis: 0.4, 
    nephroticSyndrome: 0.7, 
    PKD: 0.2,
    diabeticNephropathy: 0.4, 
    hypertensiveNephropathy: 0.3, 
    renalCellCarcinoma: 0.5, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.1, 
    interstitialNephritis: 0.2, 
    renalArteryStenosis: 0.5, 
    HUS: 0.4, 
    alportSyndrome: 0.1, 
    ESRD: 0.9, 
    obstructiveUropathy: 0.1, 
    contrastInducedNephropathy: 0.2, 
    medullarySpongeKidney: 0.1, 
    goodpastureSyndrome: 0.9, 
    vasculitis: 0.9 
  },

  backPain: {
    AKI: 0.4, 
    CKD: 0.2, 
    kidneyStones: 0.9, 
    UTI: 0.3, 
    pyelonephritis: 0.9, 
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.1, 
    PKD: 0.7, 
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.6,
    lupusNephritis: 0.2, 
    IgANephropathy: 0.4, 
    hydronephrosis: 0.8, 
    interstitialNephritis: 0.3, 
    renalArteryStenosis: 0.1, 
    HUS: 0.2, 
    alportSyndrome: 0.1, 
    ESRD: 0.2,
    obstructiveUropathy: 0.8, 
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.5, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.3
  },

  pelvicPain: {
    AKI: 0.2, 
    CKD: 0.1, 
    kidneyStones: 0.6, 
    UTI: 0.9,
    pyelonephritis: 0.4, 
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.3, 
    diabeticNephropathy: 0.2, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.1, 
    hydronephrosis: 0.3, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.1,
    obstructiveUropathy: 0.8, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  groinPain: {
    AKI: 0.2, 
    CKD: 0.1, 
    kidneyStones: 0.9, 
    UTI: 0.7, 
    pyelonephritis: 0.5,
    glomerulonephritis: 0.1, 
    nephroticSyndrome: 0.1, 
    PKD: 0.3,
    diabeticNephropathy: 0.1, 
    hypertensiveNephropathy: 0.1, 
    renalCellCarcinoma: 0.3, 
    lupusNephritis: 0.1, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.6, 
    interstitialNephritis: 0.1, 
    renalArteryStenosis: 0.1, 
    HUS: 0.1, 
    alportSyndrome: 0.1, 
    ESRD: 0.1,
    obstructiveUropathy: 0.8, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.4, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
  },

  urinaryIncontinence: {
    AKI: 0.1,
    CKD: 0.2,
    kidneyStones: 0.2,
    UTI: 0.8,
    pyelonephritis: 0.4,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.1,
    PKD: 0.1,
    diabeticNephropathy: 0.4,
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.3,
    interstitialNephritis: 0.1,
    renalArteryStenosis: 0.1,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.2,
    obstructiveUropathy: 0.9,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
},
  
  polydipsia: {
    AKI: 0.2, 
    CKD: 0.5, 
    kidneyStones: 0.1,
    UTI: 0.2,
    pyelonephritis: 0.3,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.2,
    PKD: 0.4,
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.4, 
    renalArteryStenosis: 0.2,
    HUS: 0.2,
    alportSyndrome: 0.1,
    ESRD: 0.6, 
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
}, 

darkColoredUrine: {
    AKI: 0.6, 
    CKD: 0.3,
    kidneyStones: 0.7, 
    UTI: 0.5, 
    pyelonephritis: 0.5,
    glomerulonephritis: 0.9, 
    nephroticSyndrome: 0.3, 
    PKD: 0.6, 
    diabeticNephropathy: 0.2,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.7, 
    lupusNephritis: 0.7, 
    IgANephropathy: 0.9, 
    hydronephrosis: 0.3,
    interstitialNephritis: 0.4,
    renalArteryStenosis: 0.1,
    HUS: 0.8, 
    alportSyndrome: 0.7, 
    ESRD: 0.2, 
    obstructiveUropathy: 0.4,
    contrastInducedNephropathy: 0.3,
    medullarySpongeKidney: 0.5, 
    goodpastureSyndrome: 0.8, 
    vasculitis: 0.8  
}, 

foulSmellingUrine: {
    AKI: 0.2,
    CKD: 0.3, 
    kidneyStones: 0.4, 
    UTI: 0.9, 
    pyelonephritis: 0.8, 
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.1,
    PKD: 0.3, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.4, 
    interstitialNephritis: 0.1,
    renalArteryStenosis: 0.1,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.3,
    obstructiveUropathy: 0.6,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.4, 
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
}, 

extremeTinglingAndNumbness: {
    AKI: 0.4, 
    CKD: 0.7, 
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.1,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.3,
    PKD: 0.2,
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.2, 
    lupusNephritis: 0.4, 
    IgANephropathy: 0.1,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.3,
    alportSyndrome: 0.1,
    ESRD: 0.9, 
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.6  
}, 

persistentHiccups: {
    AKI: 0.5, 
    CKD: 0.6, 
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.2,
    nephroticSyndrome: 0.1,
    PKD: 0.2,
    diabeticNephropathy: 0.4,
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.3, 
    lupusNephritis: 0.2,
    IgANephropathy: 0.1,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.3,
    alportSyndrome: 0.1,
    ESRD: 0.8, 
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.2,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.2,
    vasculitis: 0.2
}, 

dysgeusia: {
    AKI: 0.6,
    CKD: 0.8, 
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.3,
    nephroticSyndrome: 0.2,
    PKD: 0.5, 
    diabeticNephropathy: 0.7, 
    hypertensiveNephropathy: 0.6,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.4,
    IgANephropathy: 0.3,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.3,
    renalArteryStenosis: 0.2,
    HUS: 0.5, 
    alportSyndrome: 0.4,
    ESRD: 0.9, 
    obstructiveUropathy: 0.2,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.4,
    vasculitis: 0.4
}, 

reducedSweating: {
    AKI: 0.2, 
    CKD: 0.5, 
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.1,
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.2, 
    PKD: 0.2,
    diabeticNephropathy: 0.8, 
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.1,
    lupusNephritis: 0.2,
    IgANephropathy: 0.1,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.7, 
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.3 
}, 

poorWoundHealing: {
    AKI: 0.3,
    CKD: 0.8, 
    kidneyStones: 0.1,
    UTI: 0.1,
    pyelonephritis: 0.2,
    glomerulonephritis: 0.4,
    nephroticSyndrome: 0.7,
    PKD: 0.4,
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.4,
    renalCellCarcinoma: 0.5, 
    lupusNephritis: 0.8, 
    IgANephropathy: 0.2,
    hydronephrosis: 0.1,
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.3, 
    HUS: 0.4,
    alportSyndrome: 0.2,
    ESRD: 0.9, 
    obstructiveUropathy: 0.1,
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.1,
    goodpastureSyndrome: 0.6,
    vasculitis: 0.8 
}, 

recurrentInfections: {
    AKI: 0.3,
    CKD: 0.7, 
    kidneyStones: 0.6, 
    UTI: 0.9, 
    pyelonephritis: 0.7, 
    glomerulonephritis: 0.4, 
    nephroticSyndrome: 0.8, 
    PKD: 0.6, 
    diabeticNephropathy: 0.9, 
    hypertensiveNephropathy: 0.3,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.8, 
    IgANephropathy: 0.2, 
    hydronephrosis: 0.7, 
    interstitialNephritis: 0.2,
    renalArteryStenosis: 0.1,
    HUS: 0.3,
    alportSyndrome: 0.2,
    ESRD: 0.9, 
    obstructiveUropathy: 0.8, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.6, 
    goodpastureSyndrome: 0.5, 
    vasculitis: 0.6 
}, 

BladderPressure: {
    AKI: 0.1,
    CKD: 0.2,
    kidneyStones: 0.7, 
    UTI: 0.9, 
    pyelonephritis: 0.5, 
    glomerulonephritis: 0.1,
    nephroticSyndrome: 0.1,
    PKD: 0.4, 
    diabeticNephropathy: 0.5, 
    hypertensiveNephropathy: 0.1,
    renalCellCarcinoma: 0.2,
    lupusNephritis: 0.1,
    IgANephropathy: 0.1,
    hydronephrosis: 0.6, 
    interstitialNephritis: 0.1,
    renalArteryStenosis: 0.1,
    HUS: 0.1,
    alportSyndrome: 0.1,
    ESRD: 0.2,
    obstructiveUropathy: 0.9, 
    contrastInducedNephropathy: 0.1,
    medullarySpongeKidney: 0.2,
    goodpastureSyndrome: 0.1,
    vasculitis: 0.1
}, 

urineSediment: {
    AKI: 0.8,
    CKD: 0.5,
    kidneyStones: 0.7,
    UTI: 0.9,
    pyelonephritis: 0.9,
    glomerulonephritis: 0.9,
    nephroticSyndrome: 0.7,
    PKD: 0.4,
    diabeticNephropathy: 0.4,
    hypertensiveNephropathy: 0.2,
    renalCellCarcinoma: 0.4,
    lupusNephritis: 0.9,
    IgANephropathy: 0.8,
    hydronephrosis: 0.2,
    interstitialNephritis: 0.7,
    renalArteryStenosis: 0.1,
    HUS: 0.6,
    alportSyndrome: 0.7,
    ESRD: 0.5,
    obstructiveUropathy: 0.3,
    contrastInducedNephropathy: 0.4,
    medullarySpongeKidney: 0.4,
    goodpastureSyndrome: 0.9,
    vasculitis: 0.9
}
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

if (patientInfo.age < 18) {
  diseaseScores.HUS += 0.8;
  diseaseScores.alportSyndrome += 0.6;
  diseaseScores.glomerulonephritis += 0.4;
  diseaseScores.medullarySpongeKidney += 0.2;
  diseaseScores.diabeticNephropathy -= 0.5;
  diseaseScores.hypertensiveNephropathy -= 0.4;
}

if (patientInfo.age >= 18 && patientInfo.age < 40) {
  diseaseScores.lupusNephritis += 0.7;
  diseaseScores.IgANephropathy += 0.4;
  diseaseScores.vasculitis += 0.3;
  diseaseScores.goodpastureSyndrome += 0.3;
  diseaseScores.obstructiveUropathy += 0.2;
}

if (patientInfo.age >= 40 && patientInfo.age <= 60) {
  diseaseScores.diabeticNephropathy += 0.4;
  diseaseScores.hypertensiveNephropathy += 0.4;
  diseaseScores.kidneyStones += 0.2;
  diseaseScores.CKD += 0.2; 
}

if (patientInfo.age > 60) {
  diseaseScores.CKD += 0.5;
  diseaseScores.ESRD += 0.7;
  diseaseScores.AKI += 0.5;
  diseaseScores.contrastInducedNephropathy += 0.5;
  diseaseScores.renalArteryStenosis += 0.4;
  diseaseScores.obstructiveUropathy += 0.2;
  diseaseScores.kidneyStones += 0.2;
  diseaseScores.alportSyndrome -= 0.4;
  diseaseScores.HUS -= 0.3;
}


if (patientInfo.gender.toLowerCase() === "male") {
  diseaseScores.ESRD += 0.4;
  diseaseScores.renalCellCarcinoma += 0.5;
  diseaseScores.alportSyndrome += 0.3;
  diseaseScores.IgANephropathy += 0.2;
  diseaseScores.renalArteryStenosis += 0.2;
  diseaseScores.CKD += 0.1;
  diseaseScores.kidneyStones += 0.1; 
}

if (patientInfo.gender.toLowerCase() === "female") {
  diseaseScores.UTI += 0.5;
  diseaseScores.pyelonephritis += 0.3;
  diseaseScores.CKD += 0.2;
  diseaseScores.lupusNephritis += 0.8;
  diseaseScores.vasculitis += 0.2;
  diseaseScores.ESRD += 0.1; 
}

const prevalenceModifiers = {
  AKI: 1.0,
  CKD: 1.5,
  kidneyStones: 1.3,
  UTI: 1.6,
  pyelonephritis: 1.2,
  glomerulonephritis: 0.8,
  nephroticSyndrome: 0.7,
  PKD: 1.1,
  diabeticNephropathy: 1.2,
  hypertensiveNephropathy: 1.2,
  renalCellCarcinoma: 0.6,
  lupusNephritis: 0.6,
  IgANephropathy: 0.5,
  hydronephrosis: 0.7,
  interstitialNephritis: 0.5,
  renalArteryStenosis: 0.6,
  HUS: 0.4,
  alportSyndrome: 0.3,
  ESRD: 0.5,
  obstructiveUropathy: 0.7,
  contrastInducedNephropathy: 0.6,
  medullarySpongeKidney: 0.4,
  goodpastureSyndrome: 0.3,
  vasculitis: 0.4
};

Object.keys(diseaseScores).forEach(disease => {
  diseaseScores[disease] *= prevalenceModifiers[disease] || 1;
});

const symptomCombos = [
  // AKI
  { symptoms: ["oliguria", "hypotension"], diseases: { AKI: 1.7 } },
  { symptoms: ["oliguria", "nausea", "vomiting", "fatigue"], diseases: { AKI: 1.5 } },
  { symptoms: ["oliguria", "edema", "shortnessOfBreath"], diseases: { AKI: 1.5 } },
  
  // CKD / ESRD
  { symptoms: ["fatigue", "anemia", "pallor"], diseases: { CKD: 1.3, ESRD: 1.5 } },
  { symptoms: ["edema", "pruritus", "dry skin"], diseases: { CKD: 1.2, ESRD: 1.3 } },
  { symptoms: ["nausea", "vomiting", "uremic breath"], diseases: { ESRD: 1.4 } },
  
  // Kidney Stones
  { symptoms: ["hematuria", "flank Pain", "nausea"], diseases: { kidneyStones: 1.4 } },
  { symptoms: ["hematuria", "flank Pain", "vomiting"], diseases: { kidneyStones: 1.5 } },
  
  // UTI / Pyelonephritis
  { symptoms: ["fever", "dysuria", "flank Pain"], diseases: { pyelonephritis: 1.5 } },
  { symptoms: ["fever", "dysuria", "cloudy urine"], diseases: { UTI: 1.5 } },
  { symptoms: ["urinaryIncontinence", "dysuria", "fever"], diseases: { UTI: 1.3, pyelonephritis: 1.2 } },
  
  // Nephrotic Syndrome
  { symptoms: ["edema", "proteinuria", "foamy urine"], diseases: { nephroticSyndrome: 1.5 } },
  
  // Glomerulonephritis
  { symptoms: ["hematuria", "edema", "hypertension"], diseases: { glomerulonephritis: 1.5 } },
  
  // Diabetic / Hypertensive Nephropathy
  { symptoms: ["polyuria", "fatigue", "nausea"], diseases: { diabeticNephropathy: 1.2, AKI: 1.3 } },
  { symptoms: ["hypertension", "headache", "visual disturbance"], diseases: { hypertensiveNephropathy: 1.5 } },
  
  // PKD
  { symptoms: ["flank Pain", "hematuria", "hypertension"], diseases: { PKD: 1.5 } },
  
  // Lupus Nephritis
  { symptoms: ["edema", "proteinuria", "rash"], diseases: { lupusNephritis: 1.5 } },
  
  // IgA Nephropathy
  { symptoms: ["hematuria", "hypertension"], diseases: { IgANephropathy: 1.3 } },
  
  // Alport Syndrome
  { symptoms: ["hematuria", "pallor"], diseases: { alportSyndrome: 1.5 } },
  
  // HUS
  { symptoms: ["fatigue", "hematuria", "anemia"], diseases: { HUS: 1.5 } },
  
  // Obstructive Uropathy / Hydronephrosis
  { symptoms: ["weakUrineStream", "urinaryRetention", "flank Pain"], diseases: { obstructiveUropathy: 1.5, hydronephrosis: 1.3 } },
  
  // Medullary Sponge Kidney
  { symptoms: ["hematuria", "flank Pain"], diseases: { medullarySpongeKidney: 1.3 } },
  
  // Goodpasture Syndrome
  { symptoms: ["hematuria", "pulmonary symptoms", "fatigue"], diseases: { goodpastureSyndrome: 1.5 } },
  
  // Vasculitis
  { symptoms: ["hematuria", "rash", "fever"], diseases: { vasculitis: 1.4 } },
  
  // Renal Cell Carcinoma
  { symptoms: ["hematuria", "flank Pain", "weight loss"], diseases: { renalCellCarcinoma: 1.5 } },
  
  // Renal Artery Stenosis
  { symptoms: ["hypertension", "headache"], diseases: { renalArteryStenosis: 1.3 } },
  
  // Interstitial Nephritis
  { symptoms: ["fever", "rash", "oliguria"], diseases: { interstitialNephritis: 1.4 } },
  
  // Contrast-Induced Nephropathy
  { symptoms: ["oliguria", "nausea"], diseases: { contrastInducedNephropathy: 1.5 } }
];

const normalize = str => str.toLowerCase().replace(/\s+/g, "");
const patientSymptoms = patientInfo.symptoms.map(normalize);
symptomCombos.forEach(combo => {
  const hasAll = combo.symptoms
    .map(normalize)
    .every(symptom => patientSymptoms.includes(symptom));
  if (hasAll) {
    Object.keys(combo.diseases).forEach(disease => {
      diseaseScores[disease] += combo.diseases[disease];
    });
  }
});
const sortedDiseases = Object.entries(diseaseScores)
  .sort((a, b) => b[1] - a[1]); // Sort descending by score
const topDiseases = sortedDiseases.slice(0, 3);

function getChanceLevel(score) {
  if (score >= 9) {
    return "High chance";
  } else if (score >= 5) {
    return "Moderate chance";
  } else if (score >= 1) {
    return "Low chance";
  } else {
    return "No significant indication";
  }
}

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
  ESRD: "End-Stage Renal Disease",
  obstructiveUropathy: "Obstructive Uropathy",
  contrastInducedNephropathy: "Contrast-Induced Nephropathy",
  medullarySpongeKidney: "Medullary Sponge Kidney",
  goodpastureSyndrome: "Goodpasture Syndrome",
  vasculitis: "Vasculitis"
};

const diseaseList = document.getElementById("diseaseList");
diseaseList.innerHTML = ""; 

topDiseases.forEach(([diseaseName, score]) => {
  const card = document.createElement("div");
  card.classList.add("resultCard");

  const chanceText = getChanceLevel(score);

  let chanceClass = "";
  switch(chanceText) {
    case "High chance": chanceClass = "high"; break;
    case "Moderate chance": chanceClass = "moderate"; break;
    case "Low chance": chanceClass = "low"; break;
    default: chanceClass = "none";
  }

  card.innerHTML = `
    <h2>${diseaseNames[diseaseName] ?? diseaseName}</h2>
        <p>
      <strong>Chance Level:</strong> 
      <span class="${chanceClass}">${chanceText}</span>
    </p>
    <p>${diseaseInfo[diseaseName]?.brief || "No description available."}</p>
  `;

  diseaseList.appendChild(card);
});

