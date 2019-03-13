import * as React from "react";
import { render } from "react-dom";

import { Form, Field } from "react-final-form";
import Styles from "./styles";

const onSubmit = values => {
  console.log(values);
};

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
);

const slug = str =>
  str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

const RadioYesNo = ({ name, label }) => (
  <div>
    <label>{label}</label>
    <div>
      <label>
        <Field name={name} component="input" type="radio" value="Yes" /> Yes
      </label>
      <label>
        <Field name={name} component="input" type="radio" value="No" /> No
      </label>
    </div>
    <Error name={name} />{" "}
  </div>
);

const DropDown = ({ label, name, items }) => (
  <div>
    <label>{label}</label>
    <Field name={name} component="select">
      {items.map(x => (
        <option value={slug(x)}>{x}</option>
      ))}
    </Field>
  </div>
);

export default class Page extends React.Component {
  public shouldComponentUpdate() {
    return true;
  }

  public render() {
    return (
      <Styles>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <h3 style={{ textAlign: "center" }}>
                GENERAL HEALTH and PAST MEDICAL HISTORY
              </h3>
              <div>
                <label>
                  How would you describe your current health over the past year?
                </label>
                <Field name="past_health" component="select">
                  {["", "Very Good", "Good", "Fair", "Poor", "Very Poor"].map(
                    x => (
                      <option value={slug(x)}>{x}</option>
                    )
                  )}
                </Field>
              </div>
              <RadioYesNo
                label="At present, do you have any problems for which
you are attending your GP or a Consultant or are you on a hospital waiting list?"
                name="present_problems"
              />
              <RadioYesNo
                label="Do you have any current illnesses/injuries that are affecting your ability to fully train?"
                name="illness_injury_problems"
              />
              <RadioYesNo
                label="Have you had any absences from training or playing as a result of illness in the past 12 months?"
                name="absence_past_12"
              />
              <RadioYesNo
                label="In the past 5 years have you suffered with any illness which required you to see your GP or a Hopisal Consultant or be admitted to hopsital?
"
                name="illness_hospital"
              />
              <h3 style={{ textAlign: "center" }}>MEDICATION AND ALLERGIES</h3>
              <RadioYesNo
                label="Do you have any allergies?  (e.g penicillin, nuts, shellfish)
"
                name="allergies"
              />
              <RadioYesNo
                label="Are you taking any medications, nasal sprays, inhalers or creams?"
                name="medications"
              />
              <RadioYesNo
                label="Are you taking dietary supplements (e.g. protein powders, gels, vitamin D, multivitamins, fish oils or minerals)?"
                name="supplements"
              />

              <h3 style={{ textAlign: "center" }}>DENTAL</h3>
              <DropDown
                label="When was your last dental check-up? (it is recommended that you arrange a dental check-up every 6 months)
"
                name="last_dental"
                items={[
                  "",
                  "Last 6 Month",
                  "7-12 month",
                  "12+ months ago",
                  "Never"
                ]}
              />
              <RadioYesNo
                label="Do you currently have any dental problems? (e.g. pain, bleeding, grinding, cracked or missing teeth)"
                name="dental_problems"
              />
              <h3 style={{ textAlign: "center" }}>VISION</h3>
              <DropDown
                label="When was your last eye test? (Every child is recommended to have an eye test every two years)"
                name="last_eye_test"
                items={["", "Last 2 years", "Last 4 years", "Never"]}
              />
              <RadioYesNo
                label="Ever had any eye injuries"
                name="eye_injuries"
              />
              <RadioYesNo
                label="Any problems with eyes or vision?"
                name="vision_problems"
              />
              <RadioYesNo
                label="Do you wear glasses/contact lenses"
                name="glasses"
              />
              <h3 style={{ textAlign: "center" }}>VISION</h3>
              <RadioYesNo
                label="Have you ever had a significant head injury?"
                name="head_injury"
              />
              <RadioYesNo
                label="Ever had a hit or blow to the head that caused confusion, prolonged headache, or memory problems?"
                name="head_problems"
              />
              <RadioYesNo
                label="Have you ever been diagnosed with concussion?"
                name="concussion"
              />
              <RadioYesNo
                label="Have you ever been hospitalised or had medical imaging for a head injury?"
                name="imaging_head_injury"
              />
              <RadioYesNo
                label="Have you ever been diagnosed with headaches or migraine?"
                name="diagnosed_headaches_migraine"
              />
              <RadioYesNo
                label="Do you suffer from headaches with exercise?"
                name="excercise_headaches"
              />
              <RadioYesNo
                label="Do you suffer from persistent 'pins and needles' or numbness in any of your limbs (arms or legs?)"
                name="limbs_pins"
              />
              <RadioYesNo
                label="Have you ever had a seizure or been told that you have epilepsy?"
                name="seizure_epilepsy"
              />
              <h3 style={{ textAlign: "center" }}>Medical Screen</h3>
              <label>Have you ever suffered with any of the following?</label>
              <RadioYesNo
                label="Have you ever become ill whilst exercising in the heat? (Heat exhaustion, heat stroke or hyperthermia)"
                name="ill_exercising_heat"
              />
              <RadioYesNo
                label="Muscle cramps whilst exercising"
                name="muscle_cramps"
              />
              <RadioYesNo
                label="Deep vein thrombosis (DVT- blood clot) or Pulmonary embolus"
                name="deep_thrombosis"
              />
              <RadioYesNo label="Anaemia" name="anaemia" />
              <RadioYesNo label="Cancer" name="cancer" />
              <RadioYesNo label="Chronic Fatigue" name="chronic_fatigue" />
              <RadioYesNo label="Diabetes" name="diabetes" />
              <RadioYesNo label="Glandular fever" name="glandular_fever" />
              <RadioYesNo label="Low iron stores" name="low_iron_stores" />
              <RadioYesNo label="Hepatitis" name="hepatitis" />
              <RadioYesNo
                label="Sickle cell disease"
                name="sickle_cell_desease"
              />
              <RadioYesNo label="Thyroid problems" name="thyroid_problems" />
              <RadioYesNo label="Hernia" name="hernia" />
              <RadioYesNo label="Injury to the spleen" name="injury_spleen" />
              <RadioYesNo label="Hay fever" name="hay_fever" />
              <RadioYesNo label="Meningitis" name="meningitis" />
              <RadioYesNo label="Blackouts" name="blackouts" />
              <RadioYesNo label="Dizziness" name="dizziness" />
              <h3 style={{ textAlign: "center" }}>Dermatology</h3>
              <label>Do you suffer from any of the following?</label>
              <RadioYesNo label="Eczema" name="eczema" />
              <RadioYesNo label="Psoriasis" name="psoriasis" />
              <RadioYesNo
                label="Contact Dermatitis"
                name="contact_dermatitis"
              />
              <RadioYesNo label="Chronic Blisters" name="chronic_blisters" />
              <RadioYesNo label="Rashes" name="rashes" />
              <RadioYesNo label="Athletes Foot" name="athletes_foot" />
              <h3 style={{ textAlign: "center" }}>Immunisations</h3>
              <RadioYesNo
                label="Are you up to date with your regular immunisation schedule ? E.g tetanus"
                name="immunisation"
              />
              <h3 style={{ textAlign: "center" }}>Recovery Strategies</h3>
              <label>
                What recovery strategies do you utilise post
                training/competition
              </label>
              <RadioYesNo
                label="Compression garments"
                name="compression_garments"
              />
              <RadioYesNo label="Nutrition" name="nutrition" />
              <RadioYesNo label="Ice baths" name="ice_baths" />
              <RadioYesNo label="Stretching" name="stretching" />
              <RadioYesNo label="Foam Rolling/massage" name="foam_massage" />
              <div>
                <label>Other - please document</label>
                <Field name="other_recovery" component="input" />
              </div>
              <h3 style={{ textAlign: "center" }}>Sleep</h3>
              <DropDown
                label="How many hours do you sleep at night?"
                name="sleep_duration"
                items={[
                  "",
                  "Less than 5",
                  "5-6 hours",
                  "7-8 hours",
                  "9-10 hours",
                  "10+ hours"
                ]}
              />
              <DropDown
                label="Generally how do you rate the quality of your sleep"
                name="sleep_quality"
                items={["", "Very Good", "Good", "Fair", "Poor", "Very Poor"]}
              />
              <RadioYesNo
                label="Do you feel refreshed when you wake up?"
                name="refreshed"
              />
              <RadioYesNo
                label="Do you have a learning disability/ADD/ADHD?"
                name="adhd"
              />
              <div>
                <button type="submit">Submit</button>
              </div>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
          )}
        </Form>
      </Styles>
    );
  }
}

const rootElement = document.getElementById("root");
render(<Page />, rootElement);
