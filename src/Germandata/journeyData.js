export const journeyData = [
  {
    "number": 1,
    "title": "Initial Assessment",
    "description": "Critical period where primary care physicians  play a key role in the initial detection and assessment of neurological symptoms.",
    "actions": [
      {
        "name": "Early Signs of Neurological Symptoms",
        "content": "Vision loss (optic neuritis), weakness, sensory disturbances, bladder/bowel dysfunction, and transverse myelitis."
      },
      {
        "name": "Visit to PCP",
        "content": "Initial discussion of observed symptoms and potential concerns regarding autoimmune or neurological disorders."
      },
      {
        "name": "Neurological or Autoimmune Screening Suggestions",
        "content": "Evaluation through MRI, AQP4-IgG antibody testing, or other autoimmune screenings."
      },
      {
        "name": "Referral to a Neurologist or Specialist",
        "content": "Decision to involve a Neurologist or specialist based on clinical findings and suspected neurological disorder like NMOSD."
      }
    ],
    "metrics": [
      { "value": "12%", "label": "Overall Referral Rate" },
      { "value": "100%", "label": "AQP4-IgG Screening Rate" },
      { "value": "6 to 82 years", "label": "Age Statistics: Range " },
      { "value": "28%" , "label": "Mis-Diagnosis Rate" },
      { "value": "765.5 days" , "label": "Average Delay Due to Mis-diagnosis" },
    ],
    "barriers": {
      "physician": [  
        {
          "subpoints": [
            {
              "text": "Delayed referrals due to symptom overlap with common conditions, contributing to a median referral delay of 14.6 months."
            },
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Access to AQP4-IgG tests is uneven, with Tier B hospitals facing an average delay of 313.10 days, compared to 205.75 days for Tier C hospitals, highlighting a significant gap in diagnostic access."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Patients' lack of awareness of NMOSD symptoms leads to an delay."
            },
          ]
        }
      ]
    }
  },
  {
    "number": 2,
    "title": "Diagnosis Confirmation",
    "description": "Detailed diagnostic process  including the use of biomarkers and differential diagnosis methods for NMOSD.",
    "actions": [
      {
        "name": "Consultation with a Neurologist",
        "content": "Detailed evaluation of neurological symptoms, clinical history, and ruling out other possible diagnoses such as MS."
      },
      {
        "name": "MRI for Neurological Involvement",
        "content": "MRI scans of the brain and spinal cord to detect lesions, transverse myelitis, or optic neuritis typically seen in NMOSD."
      },
      {
        "name": "AQP4-IgG Antibody Testing",
        "content": "Blood test to check for the presence of AQP4-IgG antibodies, a key biomarker for NMOSD diagnosis."
      },
      {
        "name": "Diagnosis Confirmation and Staging",
        "content": "Diagnosis confirmation based on AQP4-IgG antibody presence, MRI findings, and clinical symptoms. Classification as NMOSD with or without AQP4-IgG antibodies."
      }
    ],
    "metrics": [
      { "value": "84%", "label": "AQP4-IgG Positivity Rate " },
      { "value": "59.08%", "label": "MRI Confirmation Rate" },
      { "value": "1.59", "label": "Average Relapse " },
      { "value": "59.53%", "label": "Average Relapse After Treatment " },
      { "value": "40.47%", "label": "Average Relapse Before Treatment " }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Misdiagnosis as MS occurs in 28% of NMOSD cases due to overlapping symptoms and lack of clarity in diagnostic criteria."
            },
            
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Over-reliance on MRI alone leads to missed NMOSD diagnoses in AQP4-IgG-negative cases around 14%."
            },
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Patients delay MRI follow-up appointments, leading to an average MRI diagnostic delay of 2.09 months."
            },
            {
              "text": "8% of patients discontinued after receiving a diagnosis and AQP4-IgG tests"
            }
          ]
        }
      ]
    }
  },
  {
    "number": 3,
    "title": "Treatment Initiation and Monitoring Outcomes",
    "description": "Long-term treatment, monitoring, and management of NMOSD disease .",
    "actions": [
      {
        "name": "Treatment Initiation",
        "content": "Starting treatment with immunosuppressive therapies, monoclonal antibodies (e.g., eculizumab), or steroids to manage acute attacks and prevent relapse."
      },
      {
        "name": "Sustaining Neurological Function and Quality of Life",
        "content": "Implementing ongoing therapies (e.g., IVIg, plasma exchange) and regular monitoring to preserve neurological function and enhance daily living."
      },
      {
        "name": "Overcoming Barriers",
        "content": "Addressing challenges such as medication access, side effects, insurance coverage, and the need for specialized care in managing NMOSD."
      },
      {
        "name": "Post-Treatment Outcomes",
        "content": "Monitoring for relapse prevention, improvement in symptoms (such as vision or motor function), and assessing the effectiveness of treatment regimens over time."
      }
    ],
    "metrics": [
      { "value": "79%", "label": "Treatment Duration Rate " },
      { "value": "4.29", "label": "Average Treatment Cycles " }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "40% of severe patients are receiving treatment in Tier B and C hospitals, limiting access to specialized care and advanced treatments, which delays diagnosis and relapse management."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "69% of patients experienced relapses, indicating challenges in achieving stable disease control."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "56% of patients experienced sight loss before treatment initiation.Of these, 16% started treatment late, resulting in an average delay of 4 months."
            }
          ]
        }
      ]
    }
  }
];

export default journeyData;
