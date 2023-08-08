import React, { useState } from "react";
import CustomInput from "../CustomInput";
import "./styles.css";

const Form = () => {
  const [sections, setSections] = useState([
    {
      hospitalName: "",
      hospitalPincode: "",
      hospitalState: "",
      hospitalCity: "",
      icuName: "",
      cameraIpAddress: "",
      rtspPort: "",
      username: "",
      password: "",
      beds: [
        {
          bedNumber: "Bed 1",
          monitorIP: "",
          upperBodyPreset: "",
          lowerBodyPreset: "",
        },
      ],
    },
  ]);

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleAddBed = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].beds.push({
      bedNumber: `Bed ${updatedSections[sectionIndex].beds.length + 1}`,
      monitorIP: "",
      upperBodyPreset: "",
      lowerBodyPreset: "",
    });
    setSections(updatedSections);
  };

  const handleChange = (sectionIndex, bedIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].beds[bedIndex][field] = value;
    setSections(updatedSections);
  };

  return (
    <div className="form-container">
      Hospital Details
      {sections.map((section, sectionIndex) => (
        <form className="form" key={sectionIndex} onSubmit={handleSubmit}>
          {/* Hospital Details */}
          <InputGroup columns={1}>
            <CustomInput
              label="Hospital Name"
              name="hospitalName"
              type="text"
              value={section.hospitalName}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "hospitalName", e.target.value)
              }
            />
          </InputGroup>

          <InputGroup columns={3}>
            <CustomInput
              label="Hospital Pincode"
              name="hospitalPincode"
              type="dropdown"
              value={section.hospitalPincode}
              options={genderOptions}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "hospitalPincode", e.target.value)
              }
            />
            <CustomInput
              label="Hospital State"
              name="hospitalState"
              type="text"
              value={section.hospitalState}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "hospitalState", e.target.value)
              }
            />
            <CustomInput
              label="Hospital City"
              name="hospitalCity"
              type="text"
              value={section.hospitalCity}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "hospitalCity", e.target.value)
              }
            />
          </InputGroup>

          <InputGroup columns={1}>
            <CustomInput
              label="ICU Name"
              name="icuName"
              type="text"
              value={section.icuName}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "icuName", e.target.value)
              }
            />
          </InputGroup>

          <InputGroup columns={4}>
            <CustomInput
              label="Camera IP Address"
              name="cameraIpAddress"
              type="text"
              value={section.cameraIpAddress}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "cameraIpAddress", e.target.value)
              }
            />
            <CustomInput
              label="RTSP Port Number"
              name="rtspPort"
              type="text"
              value={section.rtspPort}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "rtspPort", e.target.value)
              }
            />
            <CustomInput
              label="Username"
              name="username"
              type="text"
              value={section.username}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "username", e.target.value)
              }
            />
            <CustomInput
              label="Password"
              name="password"
              type="text"
              value={section.password}
              onChange={(e) =>
                handleChange(sectionIndex, 0, "password", e.target.value)
              }
            />
          </InputGroup>

          {/* Bed Section */}
          <h3>Bed Details</h3>
          {section.beds.map((bed, bedIndex) => (
            <InputGroup columns={3} key={bedIndex}>
              <CustomInput
                label={`${bed.bedNumber}`}
                name={`bed-${bed.bedNumber}`}
                type="text"
                value={bed.monitorIP}
                onChange={(e) =>
                  handleChange(
                    sectionIndex,
                    bedIndex,
                    "monitorIP",
                    e.target.value
                  )
                }
              />
              <CustomInput
                label="Upper Body Preset Number"
                name={`upper-body-preset-${bed.bedNumber}`}
                type="text"
                value={bed.upperBodyPreset}
                onChange={(e) =>
                  handleChange(
                    sectionIndex,
                    bedIndex,
                    "upperBodyPreset",
                    e.target.value
                  )
                }
              />
              <CustomInput
                label="Lower Body Preset Number"
                name={`lower-body-preset-${bed.bedNumber}`}
                type="text"
                value={bed.lowerBodyPreset}
                onChange={(e) =>
                  handleChange(
                    sectionIndex,
                    bedIndex,
                    "lowerBodyPreset",
                    e.target.value
                  )
                }
              />
            </InputGroup>
          ))}

          <button
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600"
            type="button"
            onClick={() => handleAddBed(sectionIndex)}
          >
            + Add New Bed
          </button>

          <button
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600"
            type="submit"
          >
            + Add New ICU
          </button>
        </form>
      ))}
    </div>
  );
};

const InputGroup = ({ children, columns }) => {
  const columnClasses = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
    4: "w-1/4",
    5: "w-1/5",
  };

  const columnClass = columnClasses[columns] || "w-full";

  return <div className={`flex mb-8 ${columnClass}`}>{children}</div>;
};

export default Form;
