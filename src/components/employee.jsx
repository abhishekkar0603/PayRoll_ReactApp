import React, { useState } from "react";
import { List, Header, Segment, Button, Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Dialogue from "./dialogue";

const Employee = ({ emp }) => {
  const [show, setShow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [hours, setHours] = useState(emp.hours);
  const [pay, setPay] = useState(emp.pay);
  const [allowance, setAllow] = useState(emp.allowance);
  const [deduction, setDed] = useState(emp.deduction);
  return (
    <div>
      <div style={{ marginTop: "2%", alignContent: "center" }}>
        <Segment>
          <Dialogue showProp={show} idProp={emp.id} />
          <List>
            <List.Item key={emp.id}>
              <div style={{ float: "left" }}>
                <Header>{emp.first_name + " " + emp.last_name}</Header>
              </div>
              <div style={{ float: "Right" }}>
                <Button color="blue" onClick={() => setReadOnly(false)}>
                  <Icon name="edit" />
                  Edit
                </Button>
                <Button
                  color="red"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <Icon name="delete" /> Delete
                </Button>
                <Link
                  to={{
                    pathname: `/net`,
                    state: {
                      emp: emp
                    }
                  }}
                >
                  <Button color="green">
                    <Icon name="file pdf" /> Report
                  </Button>
                </Link>
              </div>
              <List>
                <List.Item>
                  <div>
                    <Input
                      fluid
                      label="Hours Worked"
                      defaultValue={emp.hours}
                      type="number"
                      step="any"
                      name="hours"
                      readOnly={readOnly}
                      onChange={e => setHours(e.target.value)}
                    />
                  </div>
                </List.Item>
                <List.Item>
                  <Input
                    fluid
                    label="Hourly Pay"
                    defaultValue={emp.pay}
                    type="number"
                    step="any"
                    name="pay"
                    readOnly={readOnly}
                    onChange={e => setPay(e.target.value)}
                  />
                </List.Item>
                <List.Item>
                  <Input
                    fluid
                    label="Monthly Allowance"
                    defaultValue={emp.allowance}
                    type="number"
                    step="any"
                    name="allowance"
                    readOnly={readOnly}
                    onChange={e => setAllow(e.target.value)}
                  />
                </List.Item>
                <List.Item>
                  <Input
                    fluid
                    label="Monthly Deductibles"
                    defaultValue={emp.deduction}
                    type="number"
                    step="any"
                    name="deduction"
                    readOnly={readOnly}
                    onChange={e => setDed(e.target.value)}
                  />
                </List.Item>
              </List>
            </List.Item>
          </List>

          <Button
            color="blue"
            hidden={readOnly}
            onClick={async () => {
              let data = { id: emp.id };
              if (hours !== emp.hours) {
                data = { ...data, field: "hours", value: hours };
                const response = await fetch("http://127.0.0.1:8000/edit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                });
                if (response.ok) {
                  console.log("response worked!");
                } else {
                  response.catch(err =>
                    alert("Something went wrong, please try again")
                  );
                }
              }
              if (pay !== emp.pay) {
                data = { ...data, field: "pay", value: pay };
                const response = await fetch("http://127.0.0.1:8000/edit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                });
                if (response.ok) {
                  console.log("response worked!");
                } else {
                  response.catch(err =>
                    alert("Something went wrong, please try again")
                  );
                }
              }

              if (allowance !== emp.allowance) {
                data = { ...data, field: "allowance", value: allowance };
                const response = await fetch("http://127.0.0.1:8000/edit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                });
                if (response.ok) {
                  console.log("response worked!");
                } else {
                  response.catch(err =>
                    alert("Something went wrong, please try again")
                  );
                }
              }

              if (deduction !== emp.deduction) {
                data = { ...data, field: "deduction", value: deduction };
                const response = await fetch("http://127.0.0.1:8000/edit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                });
                if (response.ok) {
                  console.log("response worked!");
                } else {
                  response.catch(err =>
                    alert("Something went wrong, please try again")
                  );
                }

                window.location.reload();
              }
            }}
          >
            Submit
          </Button>
        </Segment>
      </div>
    </div>
  );
};

export default Employee;
