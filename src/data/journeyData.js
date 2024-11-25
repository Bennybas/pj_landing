export const journeyData = [
  {
    "number": 1,
    "title": "Initial Assessment",
    "description": "Critical period where primary care physicians in Germany play a key role in the initial detection and assessment of neurological symptoms.",
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
      { "value": "30.95%", "label": "Overall Referral Rate in Germany" },
      { "value": "64.29%", "label": "AQP4-IgG Screening Rate in Germany" },
      { "value": "6 to 82 years", "label": "Age Statistics: Range in Germany" },
      { "value": "Germany: 63.89%", "label": "Country Distribution for Germany" }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Limited awareness of NMOSD symptoms, as seen in the 64.29% AQP4-IgG screening rate in Germany."
            },
            {
              "text": "Lack of specialized training in rare diseases, with Germany accounting for 63.89% of diagnoses."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Delayed access to referral centers, with an overall referral rate of only 30.95% in Germany."
            },
            {
              "text": "Insufficient AQP4-IgG test resources despite an 85.19% positivity rate when used."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Low awareness of symptoms leads to delays, as seen across age groups (6–82 years) in Germany."
            },
            {
              "text": "Financial and logistical barriers affect access, with variability within German healthcare systems."
            }
          ]
        }
      ]
    }
  },
  {
    "number": 2,
    "title": "Diagnosis Confirmation",
    "description": "Detailed diagnostic process in Germany including the use of biomarkers and differential diagnosis methods for NMOSD.",
    "actions": [
      {
        "name": "Consultation with a Neurologist or Neuromuscular Specialist",
        "content": "Detailed evaluation of neurological symptoms, clinical history, and ruling out other possible diagnoses such as MS."
      },
      {
        "name": "AQP4-IgG Antibody Testing",
        "content": "Blood test to check for the presence of AQP4-IgG antibodies, a key biomarker for NMOSD diagnosis."
      },
      {
        "name": "MRI for Neurological Involvement",
        "content": "MRI scans of the brain and spinal cord to detect lesions, transverse myelitis, or optic neuritis typically seen in NMOSD."
      },
      {
        "name": "Diagnosis Confirmation and Staging",
        "content": "Diagnosis confirmation based on AQP4-IgG antibody presence, MRI findings, and clinical symptoms. Classification as NMOSD with or without AQP4-IgG antibodies."
      }
    ],
    "metrics": [
      { "value": "85.19%", "label": "AQP4-IgG Positivity Rate in Germany" },
      { "value": "57.14%", "label": "MRI Confirmation Rate in Germany" },
      { "value": "1.59", "label": "Average Relapse in Germany" },
      { "value": "59.53%", "label": "Average Relapse After Treatment in Germany" },
      { "value": "40.47%", "label": "Average Relapse Before Treatment in Germany" }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Difficulty interpreting MRI or AQP4-IgG results, with a 57.14% MRI confirmation rate in Germany."
            },
            {
              "text": "Confusion with MS, shown by a 40.47% relapse rate before treatment in Germany."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Limited access to advanced diagnostics like AQP4-IgG, reflected in a 64.29% screening rate in Germany."
            },
            {
              "text": "Long wait times for MRI and lab tests, delaying the 4.29 average treatment cycles in Germany."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Anxiety or non-compliance impacts follow-up, with 59.53% relapses occurring after treatment in Germany."
            },
            {
              "text": "Cost and travel constraints for advanced tests reduce diagnostic efficiency in Germany."
            }
          ]
        }
      ]
    }
  },
  {
    "number": 3,
    "title": "Treatment Initiation and Monitoring Outcomes",
    "description": "Long-term treatment, monitoring, and management of NMOSD disease in Germany.",
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
      { "value": "79%", "label": "Treatment Duration Rate in Germany" },
      { "value": "4.29", "label": "Average Treatment Cycles in Germany" }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Challenges in treatment optimization, with a treatment duration rate of 79% in Germany."
            },
            {
              "text": "Difficulty monitoring efficacy, as shown by a 59.53% relapse rate after treatment in Germany."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Limited reimbursement for therapies, reflected in Germany's 63.89% access rate."
            },
            {
              "text": "Lack of integrated monitoring systems, with an average of 1.59 relapses per patient in Germany."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Fear of side effects hinders initiation, with 40.47% relapses occurring before treatment in Germany."
            },
            {
              "text": "Non-adherence affects long-term outcomes, as seen in a 79% treatment duration rate in Germany."
            }
          ]
        }
      ]
    }
  }
];

export default journeyData;
