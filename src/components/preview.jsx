// FILE: Preview.jsx
import React from "react";
import Stars from "./stars";

function Preview({ formData }) {
  return (
    <div className="p-4 bg-gray-100 h-full">
      <div className="p-4 bg-white border rounded shadow-md">
        <h2 className="text-3xl font-bold mb-2">
          {formData.firstName + " " + formData.lastName}
        </h2>
        <h3 className="text-xl text-gray-600 mb-4">{formData.jobTitle}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-bold mb-2">Summary</h4>
            <div
              className="text-sm text-gray-600 overflow-auto"
              dangerouslySetInnerHTML={{ __html: formData.summary }}
            ></div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Contacts</h4>
            <ul>
              <li className="text-sm text-gray-600">
                Email: <a href={`mailto:${formData.email}`}>{formData.email}</a>
              </li>
              <li className="text-sm text-gray-600">
                Phone: <a href={`tel:${formData.phone}`}>{formData.phone}</a>
              </li>
              <li className="text-sm text-gray-600">
                Address: {formData.address}
              </li>
              <li className="text-sm text-gray-600">
                Country: {formData.country}
              </li>
              <li className="text-sm text-gray-600">City: {formData.city}</li>
            </ul>
          </div>
        </div>

        <h4 className="text-lg font-bold mb-2">Education</h4>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-md font-bold mb-1">{edu.degree}</h5>
            <p className="text-sm text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-600">{edu.years}</p>
          </div>
        ))}

        <h4 className="text-lg font-bold mb-2">Experience</h4>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-md font-bold mb-1">{exp.title}</h5>
            <p className="text-sm text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-600">
              {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
            </p>
            <div
              className="text-sm text-gray-600 overflow-auto"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            ></div>
          </div>
        ))}

        <h4 className="text-lg font-bold mb-2">Skills</h4>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index} className="mb-2">
              <span className="text-sm text-gray-600">{skill.name}</span>
              <Stars
                rating={
                  skill.level === "Beginner"
                    ? 1
                    : skill.level === "Intermediate"
                    ? 3
                    : 5
                }
              />
            </li>
          ))}
        </ul>

        <h4 className="text-lg font-bold mb-2">Certifications</h4>
        {formData.certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-md font-bold mb-1">{cert.title}</h5>
            <p className="text-sm text-gray-600">{cert.description}</p>
            <p className="text-sm text-gray-600">{cert.date}</p>
          </div>
        ))}

        <h4 className="text-lg font-bold mb-2">Additional Sections</h4>
        {formData.additionalSections.map((section, index) => (
          <div key={index} className="mb-4">
            <h5 className="text-md font-bold mb-1">{section.title}</h5>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <Stars
                    rating={
                      item.level === "Beginner"
                        ? 1
                        : item.level === "Intermediate"
                        ? 3
                        : 5
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
