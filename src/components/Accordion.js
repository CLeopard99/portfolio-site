import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Accordion extends Component {
  render() {
    return (
      <div>
        <Collapsible
          classParentString="qualificationsAccordion"
          trigger="BSc (Hons) Computer Science"
          open
        >
          <ul>
            <li>Grade: 1st Class</li>
            <li>Newcastle University (UK)</li>
            <li>Length: 3 years (Graduated June 2020)</li>
            <li>British Computer Society (BCS) Accredited</li>
            <li>
              Dissertation title:{" "}
              <i>
                Development of custom assistive technology for Alzheimer’s
                patients
              </i>
            </li>
          </ul>
        </Collapsible>
        <Collapsible
          classParentString="qualificationsAccordion"
          trigger="Extended Diploma IT & Game Development"
        >
          <ul>
            <li>
              Grade: Distinction* Distinction* Distinction <br /> (A-Level
              equivalent: A*A*A)
            </li>
            <li>Hertford Regional College</li>
            <li>Length: 2 years (Completed June 2017)</li>
          </ul>
        </Collapsible>
        <Collapsible
          classParentString="qualificationsAccordion"
          trigger="GCSEs"
        >
          <ul>
            <li>Grades: 9 A*-B GCSEs</li>
            <li>Bishop Stopford's School Enfield</li>
            <li>2010-2015</li>
          </ul>
        </Collapsible>
      </div>
    );
  }
}

export default Accordion;
