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
      { "value": "30.95%", "label": "Overall Referral Rate" },
      { "value": "64.29%", "label": "AQP4-IgG Screening Rate" },
      { "value": "6 to 82 years", "label": "Age Statistics: Range " },
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Delayed referrals due to symptom overlap with common conditions, contributing to a median referral delay of 5.4 months."
            },
            {
              "text": "Insufficient knowledge of NMOSD among PCPs leads to inconsistent use of advanced diagnostics."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Referral systems lack standardization, resulting in up to 42% of cases requiring multiple consultations before reaching a neurologist."
            },
            {
              "text": "Access to AQP4-IgG tests is uneven, with rural areas reporting a test availability gap of over 25% compared to urban centers."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Patients' lack of awareness of NMOSD symptoms leads to an average delay of 4.8 months before seeking medical attention."
            },
            {
              "text": "Financial constraints delay diagnostic testing for 18% of uninsured or underinsured patients."
            }
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
      { "value": "85.19%", "label": "AQP4-IgG Positivity Rate " },
      { "value": "57.14%", "label": "MRI Confirmation Rate " },
      { "value": "1.59", "label": "Average Relapse " },
      { "value": "59.53%", "label": "Average Relapse After Treatment " },
      { "value": "40.47%", "label": "Average Relapse Before Treatment " }
    ],
    "barriers": {
      "physician": [
        {
          "subpoints": [
            {
              "text": "Misdiagnosis as MS occurs in 22% of NMOSD cases due to overlapping symptoms and lack of clarity in diagnostic criteria."
            },
            {
              "text": "Over-reliance on MRI alone leads to missed NMOSD diagnoses in AQP4-IgG-negative cases."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "Insufficient integration between primary and tertiary care causes diagnostic delays averaging 7.2 months."
            },
            {
              "text": "Laboratory backlogs result in AQP4-IgG test turnaround times exceeding 14 days for 35% of patients."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Patients delay MRI follow-up appointments, leading to an average diagnostic delay of 2.3 months."
            },
            {
              "text": "Fear of invasive procedures discourages 11% of patients from completing necessary tests."
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
              "text": "Lack of training in NMOSD-specific treatments reduces adherence to guidelines, affecting 18% of physicians."
            },
            {
              "text": "Inconsistent monitoring protocols result in delayed treatment adjustments for 21% of patients."
            }
          ]
        }
      ],
      "system": [
        {
          "subpoints": [
            {
              "text": "High cost of therapies results in 12% of eligible patients not initiating treatment."
            },
            {
              "text": "Limited access to monoclonal antibodies outside major urban centers affects timely initiation for 28% of patients."
            }
          ]
        }
      ],
      "patient": [
        {
          "subpoints": [
            {
              "text": "Side effect concerns lead to 15% of patients discontinuing treatment prematurely."
            },
            {
              "text": "Missed follow-up appointments due to logistical challenges cause delays in relapse management for 8% of patients."
            }
          ]
        }
      ]
    }
  }
];

export default journeyData;
