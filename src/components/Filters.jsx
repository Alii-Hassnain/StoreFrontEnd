import React from "react";
import { useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta,params } = useLoaderData();
  const categories = meta.categories;
  const companies = meta.companies;
  const {search,category,company,order,price,shipping} = params;
  console.log(params);
  
  return (
    <Form className="grid lg:grid-cols-4">
      {/* Search Input */}
      <FormInput label="Search" name="search" type="input" size="input-sm" defaultValue={search} />
      {/* Categories */}
      <FormSelect label="Select Categories" name="category" defaultValue={category} size="input-sm" list={categories} />
      {/* companies */}
      <FormSelect label="Select Company" defaultValue={company} name="company" size="input-sm" list={companies} />
      {/* Sort by */}
      <FormSelect
        name="order"
        label="Sort by"
        size="input-sm"
        defaultValue={order}
        list={["a-z", "z-a", "high", "low"]}
      />
      {/* Form Ranges  */}
      <FormRange label="Price Range" type="range" name="price" defaultValue = {price}  />

      <FormCheckbox label="free shipping" name="shipping" defaultValue={shipping}/>

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
