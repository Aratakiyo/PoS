"use client";

import { customer } from "@/config/customer";
import React, { useState } from "react";
import { Form, FormControl, Button, Modal } from "react-bootstrap";

interface Customer {
  name: string;
  number: number;
}

const Customer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
    setSearchTerm("");
    handleClose();
  };

  const filteredCustomers = customer.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.number.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border-black border-4 bg-gray-100 p-8 rounded-xl w-full ">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-2 px-4 sm:space-x-20">
        <div className="text-lg font-bold">
          <p>Customer Name: {selectedCustomer ? selectedCustomer.name : ""}</p>
          <p>
            Customer Number: {selectedCustomer ? selectedCustomer.number : ""}
          </p>
        </div>
        <Button
          className="bg-blue-400 p-4 rounded-xl flex items-center space-x-1 hover:underline hover:bg-blue-500"
          onClick={handleShow}
        >
          Search
        </Button>
      </div>
      <br />
      <div className="text-lg mx-auto flex h-15 max-w-6xl items-center justify-between space-x-4 px-4 sm:space-x-20">
        <div>
          <p> Amount Presently Due </p>
          <p> Current Payment Plan Balance </p>
          <p className="font-bold"> Total Outstanding Balance </p>
        </div>
        <div>
          <p> $0.00 </p>
          <p> $0.00 </p>
          <p className="font-bold"> $0.00 </p>
        </div>
      </div>
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

export default Customer;
