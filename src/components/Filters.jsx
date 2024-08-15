import React from "react";
import { useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";

const Filters = () => {
  const { response } = useLoaderData();
  console.log(response);

  const categories = response.data.meta.categories;
  const companies = response.data.meta.companies;
  console.log(categories);
  console.log(companies);

  return (
    <Form className="grid lg:grid-cols-4">
      {/* Search Input */}
      <FormInput label="Search" name="search" type="input" size="input-sm" />
      {/* Categories */}
      <FormSelect label="Select Categories" size="input-sm" list={categories} />
      {/* companies */}
      <FormSelect label="Select Company" size="input-sm" list={companies} />
      {/* Sort by */}
      <FormSelect
        label="Sort by"
        size="input-sm"
        list={["a-z", "z-a", "high", "low"]}
      />
      {/* Form Ranges  */}
      <FormRange label="Price Range" type="range" name="priceRange"  />

      <div>
        <button className="btn btn-primary btn-sm">Submit</button>
      </div>
      <Link to="/products">
        <button className="btn btn-primary btn-sm">Reset</button>
      </Link>
    </Form>
  );
};

export default Filters;
