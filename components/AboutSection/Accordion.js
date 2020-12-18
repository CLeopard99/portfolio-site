import React, { Component } from "react";
import Collapsible from "react-collapsible";

// Accordion component used to list education history in About section
class Accordion extends Component {
  render() {
    return (
      <div>
         <Collapsible
          classParentString="qualificationsAccordion"
          trigger="MSc Advanced Computer Science"
        >
          <ul>
            <li>Ongoing</li>
            <li>
              Newcastle University <br />
              (UK Russel Group University)
            </li>
            <li>Oct 2020 - Sept 2021</li>
            <li>
              Dissertation title:{" "}
              <i>
                Coming soon.
              </i>
            </li>
            <li>British Computer Society (BCS) Accredited</li>
          </ul>
        </Collapsible>
        <Collapsible
          classParentString="qualificationsAccordion"
          trigger="BSc (Hons) Computer Science"
          open
        >
          <ul>
            <li>Grade: 1st Class</li>
            <li>
              Newcastle University <br />
              (UK Russel Group University)
            </li>
            <li>Sept 2017 - July 2020</li>
            <li>
              Dissertation title:{" "}
              <i>
                Development of custom assistive technology for Alzheimer’s
                patients
              </i>
            </li>
            <li>British Computer Society (BCS) Accredited</li>
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
            <li>Sept 2015 - July 2017</li>
          </ul>
        </Collapsible>
        <Collapsible
          classParentString="qualificationsAccordion"
          trigger="GCSEs"
        >
          <ul>
            <li>Grades: 9 A*-B GCSEs</li>
            <li>Bishop Stopford's School Enfield</li>
            <li>Sept 2010 - Aug 2015</li>
          </ul>
        </Collapsible>
      </div>
    );
  }
}

export default Accordion;
