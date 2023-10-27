import React, { useState } from "react";

const DeliveryAdd=()=> {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    flatNo: "",
    pinCode: "",
    contactNumber: "",
    alterNumber:'',
    area: "",
    city: "",
    landMark: "",
    state: "",
    noteForDeliveryGuy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, for example, send the data to a server or perform any required actions.
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-gray-100 p-10">
        
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        {/* FirstName & LastName */}
        <div className="flex gap-20">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">Last Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        {/* flatNo & landMark */}
        <div className="flex gap-20">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="flatNo">Flat No</label>
            <input
              type="text"
              id="flatNo"
              name="flatNo"
              value={formData.flatNo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Flat No."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="landMark">Landmark</label>
            <input
              type="text"
              id="landMark"
              name="landMark"
              value={formData.landMark}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Landmark"
              required
            />
          </div>
        </div>
        {/* area & pincode */}
        <div className="flex gap-20">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Area"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor=" pinCode">Pin Code</label>
            <input
              type="text"
              id=" pinCode"
              name=" pinCode"
              value={formData. pinCode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Pin Code"
              required
            />
          </div>
        </div>
        {/* city and state */}
        <div className="flex gap-20">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="City"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="State"
              required
            />
          </div>
        </div>

        {/* contact & alternate */}
        <div className="flex gap-20">
          <div className="mb-4">
            <label className="block mb-2" htmlFor=" contactNumber">Contact Number</label>
            <input
              type="text"
              id=" contactNumber"
              name=" contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Contact No."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="alterNumber">Alternate Number</label>
            <input
              type="text"
              id="alterNumber"
              name="alterNumber"
              value={formData.alterNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Alt Number"
              required
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DeliveryAdd;
