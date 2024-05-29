"use client";

import { Button } from "react-bootstrap";
import { customer } from "@/config/customer";
import { Form, FormControl, Modal } from "react-bootstrap";
import React, { useState, useContext, ChangeEvent } from "react";
import { CustomerContext } from "@/utils/customer-context";

interface Customer {
  name: string;
  number: number;
}

const SearchEmployer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const { setCustomer } = useContext(CustomerContext) || {};

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCustomerSelect = (customer: Customer) => {
    setCustomer && setCustomer(customer);
    setSearchTerm("");
    setShow(false);
  };

  const filteredCustomers = customer.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.number.toString().includes(searchTerm.toLowerCase())
  );

  function handleClose(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Button
        onClick={() => setShow(true)}
        className="w-full bg-gray-200 p-3 rounded-xl items-center space-x-1 hover:font-bold hover:bg-gray-300 h-32 text-xl text-center hover:border-black border-4"
      >
        Search for Employer
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md mx-auto p-6 bg-gray-100"
      >
        <Modal.Header closeButton className="bg-gray-100">
          <Modal.Title className="h-8 text-xl font-bold text-center self-center">
            Search Customers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormControl
              type="text"
              placeholder="Search by Customer Name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </Form>
          {(searchTerm === "" || filteredCustomers.length > 0) && (
            <div className="max-h-100 overflow-auto">
              <ul className="space-y-2">
                {(searchTerm === "" ? customer : filteredCustomers).map(
                  (customer) => (
                    <li
                      key={customer.number}
                      className="p-3 border border-gray-300 rounded"
                    >
                      <button
                        onClick={() => handleCustomerSelect(customer)}
                        className="text-blue-500 hover:underline hover:text-blue-600"
                      >
                        {customer.name}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchEmployer;
