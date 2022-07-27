import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const [country, setCountry] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]);

  const [gender, setGender] = useState(["Male", "Female"]);
  const [device, setDevice] = useState(["Desktop", "Mobile", "Tablet"]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    console.log(user);
    fetch("http://localhost:8080/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    reset();
  };

  return (
    <div>
      <div className="mt-10 bg-gray-200 rounded-2xl p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="grid grid-cols-3 gap-x-4"
        >
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Your Name</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Your Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Select Country</span>
            </label>
            <select
              class="select select-bordered"
              {...register("country", { required: true })}
            >
              <option disabled>Pick one</option>
              {country.map((c) => (
                <option>{c}</option>
              ))}
            </select>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Select Gender</span>
            </label>
            <select
              class="select select-bordered"
              {...register("gender", { required: true })}
            >
              <option disabled>Pick one</option>
              {gender.map((g) => (
                <option>{g}</option>
              ))}
            </select>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Select Device</span>
            </label>
            <select
              class="select select-bordered"
              {...register("device", { required: true })}
            >
              <option disabled>Pick one</option>
              {device.map((d) => (
                <option>{d}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn mt-auto">
            Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
