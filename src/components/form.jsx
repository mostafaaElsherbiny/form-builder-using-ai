// FILE: Form.jsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Form({
  formData,
  onFormChange,
  onAdd,
  onDelete,
  onEdit,
}) {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const toggleAdditionalDetails = () => {
    setShowAdditionalDetails(!showAdditionalDetails);
  };

  const onAddSection = (sectionIndex) => {
    onAdd("additionalSections", sectionIndex, {
      title: "",
      items: [{ name: "", level: "Beginner" }],
    });
  };
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Resume Form</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={onFormChange}
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={onFormChange}
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              value={formData.email}
              onChange={onFormChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={onFormChange}
              placeholder="Phone"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="country"
              type="text"
              value={formData.country}
              onChange={onFormChange}
              placeholder="Country"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="city"
              type="text"
              value={formData.city}
              onChange={onFormChange}
              placeholder="City"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={onFormChange}
              placeholder="Job Title"
            />
          </div>
        </div>
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleAdditionalDetails}
        >
          Edit Additional Details
        </button>
        {showAdditionalDetails && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="address"
                type="text"
                value={formData.address}
                onChange={onFormChange}
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalCode"
              >
                Postal Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="postalCode"
                type="text"
                value={formData.postalCode}
                onChange={onFormChange}
                placeholder="Postal Code"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="drivingLicense"
              >
                Driving License
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="drivingLicense"
                type="text"
                value={formData.drivingLicense}
                onChange={onFormChange}
                placeholder="Driving License"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nationality"
              >
                Nationality
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="nationality"
                type="text"
                value={formData.nationality}
                onChange={onFormChange}
                placeholder="Nationality"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="placeOfBirth"
              >
                Place of Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="placeOfBirth"
                type="text"
                value={formData.placeOfBirth}
                onChange={onFormChange}
                placeholder="Place of Birth"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={onFormChange}
                placeholder="Date of Birth"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="summary"
              >
                Summary
              </label>
              <ReactQuill
                theme="snow"
                value={formData.summary}
                onChange={(value) =>
                  onFormChange({ target: { name: "summary", value } })
                }
              />
            </div>
          </div>
        )}
        <h3 className="text-lg font-bold mb-2">Technical Skills</h3>
        {formData.skills.map((skill, index) => (
          <div key={index} className="mb-4 flex items-center">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              name="skillName"
              type="text"
              value={skill.name}
              onChange={(e) => onEdit("skills", index, "name", e.target.value)}
              placeholder="Skill Name"
            />
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="skillLevel"
              value={skill.level}
              onChange={(e) => onEdit("skills", index, "level", e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <button
              type="button"
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => onDelete("skills", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAdd("skills")}
        >
          Add More Skills
        </button>

        <h3 className="text-lg font-bold mb-2">Employment</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="jobTitle"
              type="text"
              value={exp.title}
              onChange={(e) =>
                onEdit("experience", index, "title", e.target.value)
              }
              placeholder="Job Title"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="company"
              type="text"
              value={exp.company}
              onChange={(e) =>
                onEdit("experience", index, "company", e.target.value)
              }
              placeholder="Company"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="startDate"
              type="date"
              value={exp.startDate}
              onChange={(e) =>
                onEdit("experience", index, "startDate", e.target.value)
              }
              placeholder="Start Date"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="endDate"
              type="date"
              value={exp.endDate}
              onChange={(e) =>
                onEdit("experience", index, "endDate", e.target.value)
              }
              placeholder="End Date"
            />
            <ReactQuill
              theme="snow"
              value={exp.description}
              onChange={(value) =>
                onEdit("experience", index, "description", value)
              }
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={exp.currentlyWorking}
                onChange={(e) =>
                  onEdit(
                    "experience",
                    index,
                    "currentlyWorking",
                    e.target.checked
                  )
                }
              />
              <label className="ml-2 text-gray-700">
                Currently Working Here
              </label>
            </div>
            <button
              type="button"
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => onDelete("experience", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAdd("experience")}
        >
          Add More Employment
        </button>

        <h3 className="text-lg font-bold mb-2">Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="degree"
              type="text"
              value={edu.degree}
              onChange={(e) =>
                onEdit("education", index, "degree", e.target.value)
              }
              placeholder="Degree"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="institution"
              type="text"
              value={edu.institution}
              onChange={(e) =>
                onEdit("education", index, "institution", e.target.value)
              }
              placeholder="Institution"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="years"
              type="text"
              value={edu.years}
              onChange={(e) =>
                onEdit("education", index, "years", e.target.value)
              }
              placeholder="Years"
            />
            <button
              type="button"
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => onDelete("education", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAdd("education")}
        >
          Add More Education
        </button>

        <h3 className="text-lg font-bold mb-2">Certifications</h3>
        {formData.certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="title"
              type="text"
              value={cert.title}
              onChange={(e) =>
                onEdit("certifications", index, "title", e.target.value)
              }
              placeholder="Title"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="description"
              type="text"
              value={cert.description}
              onChange={(e) =>
                onEdit("certifications", index, "description", e.target.value)
              }
              placeholder="Description"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              name="date"
              type="date"
              value={cert.date}
              onChange={(e) =>
                onEdit("certifications", index, "date", e.target.value)
              }
              placeholder="Date"
            />
            <button
              type="button"
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => onDelete("certifications", index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAdd("certifications")}
        >
          Add More Certifications
        </button>

        <h3 className="text-lg font-bold mb-2">Additional Sections</h3>
        {formData.additionalSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <h4 className="text-md font-bold mb-2">{section.title}</h4>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4 flex items-center">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                  name="itemName"
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    onEdit(
                      "additionalSections",
                      sectionIndex,
                      "items",
                      itemIndex,
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Item Name"
                />
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="itemLevel"
                  value={item.level}
                  onChange={(e) =>
                    onEdit(
                      "additionalSections",
                      sectionIndex,
                      "items",
                      itemIndex,
                      "level",
                      e.target.value
                    )
                  }
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    onDelete(
                      "additionalSections",
                      sectionIndex,
                      "items",
                      itemIndex
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}

            <button
              type="button"
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() =>
                onAdd("additionalSections", sectionIndex, "items", {
                  name: "",
                  level: "Beginner",
                })
              }
            >
              Add More Items
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onAddSection("additionalSections")}
        >
          Add More Sections
        </button>
      </form>
    </div>
  );
}
