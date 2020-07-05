import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, Header, Icon } from "semantic-ui-react";
import Layout from "./layout";

const AddEmp = () => {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [hours, setHours] = useState(0);
  const [pay, setPay] = useState(0);
  const [allowance, setAllow] = useState(0);
  const [deduction, setDed] = useState(0);

  let history = useHistory();

  return (
    <Layout>
      <Header as="h3">Enter Employee Details</Header>
      <Form
        onSubmit={async () => {
          const data = {
            first_name,
            last_name,
            hours,
            pay,
            allowance,
            deduction
          };
          //   console.log(data);
          const response = await fetch("http://127.0.0.1:8000/addemp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          if (response.ok) {
            console.log("response worked!");
            history.push("/home");
          } else {
            response.catch(err =>
              alert("Something went wrong, please try again")
            );
          }
        }}
      >
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={e => setFname(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            required
            onChange={e => setLname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hours Worked</label>
          <input
            placeholder="Hours Worked"
            onChange={e => setHours(e.target.value)}
            type="number"
            step="any"
            min={0}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Per hour Pay</label>
          <input
            placeholder="Per hour Pay"
            onChange={e => setPay(e.target.value)}
            type="number"
            step="any"
            min={0}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Monthly Allowance</label>
          <input
            placeholder="Monthly Allowance"
            onChange={e => setAllow(e.target.value)}
            type="number"
            step="any"
            min={0}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Monthly Deductibles</label>
          <input
            placeholder="Monthly Deductibles"
            onChange={e => setDed(e.target.value)}
            type="number"
            step="any"
            min={0}
            required
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
        <Link to="/home">
          <Button color="red">
            <Icon name="cancel" />
            Cancel
          </Button>
        </Link>
      </Form>
    </Layout>
  );
};

export default AddEmp;
