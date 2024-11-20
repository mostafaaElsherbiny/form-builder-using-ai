// FILE: Builder.jsx
import React, { useState } from "react";
import Form from "../components/form";
import Preview from "../components/preview";

function Builder() {
  const [formData, setFormData] = useState({
    firstName: "first",
    lastName: "last",
    email: "",
    phone: "",
    country: "",
    city: "",
    jobTitle: "",
    address: "",
    postalCode: "",
    drivingLicense: "",
    nationality: "",
    placeOfBirth: "",
    dateOfBirth: "",
    summary: "",
    skills: [{ name: "", level: "Beginner" }],
    experience: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: false,
      },
    ],
    education: [{ degree: "", institution: "", years: "" }],
    certifications: [{ title: "", description: "", date: "" }],
    additionalSections: [
      {
        title: "",
        items: [{ name: "", level: "Beginner" }],
      },
    ],
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onAdd = (key, index, defaultValue = null) => {
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [key]: [...prevData[key], { name: "", level: "Beginner" }],
    // }));
    if (defaultValue) {
      setFormData((prevData) => ({
        ...prevData,
        [key]: [...prevData[key], defaultValue],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [key]: [...prevData[key], { name: "", level: "Beginner" }],
      }));
    }
  };

  const onDelete = (key, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: prevData[key].filter((_, i) => i !== index),
    }));
  };

  const onEdit = (key, index, subKey, value) => {
    setFormData((prevData) => {
      const data = [...prevData[key]];
      data[index][subKey] = value;
      return {
        ...prevData,
        [key]: data,
      };
    });
  };

  return (
    <div className="flex">
      <div className="w-1/9 h-screen p-4 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4 ml-6">
          <i className="fas fa-arrow-left mr-2"></i>
        </h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-blue-500">
              <svg
                className="w-8 h-8 block ml-4 mb-3  "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3h4v4H3V3zM3 9h4v4H3V9zM3 15h4v4H3v-4zM9 3h4v4H9V3zM9 9h4v4H9V9zM9 15h4v4H9v-4zM15 3h4v4h-4V3zM15 9h4v4h-4V9zM15 15h4v4h-4v-4z"></path>
              </svg>
              Content
            </a>
          </li>
          <li className="mb-4">
            <a href="#">
              <i className="fas fa-cog mr-2  block ml-4 mb-3 text-xl"></i>
              Setting
            </a>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <div className=" w-11/12 h-screen p-4 border-r border-gray-200 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Form</h2>
            <Form
              formData={formData}
              onFormChange={handleFormChange}
              onAdd={onAdd}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <Preview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;
