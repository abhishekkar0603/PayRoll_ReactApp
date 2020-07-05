import React, { useEffect, useState } from "react";
import { Segment, List, Input, Header, Button, Icon } from "semantic-ui-react";
import Layout from "./layout";
import { Link } from "react-router-dom";

const Net = props => {
  const [id] = useState(props.location.state.emp.id);
  const [first_name] = useState(props.location.state.emp.first_name);
  const [last_name] = useState(props.location.state.emp.last_name);
  const [hours] = useState(props.location.state.emp.hours);
  const [pay] = useState(props.location.state.emp.pay);
  const [allowance] = useState(props.location.state.emp.allowance);
  const [deduction] = useState(props.location.state.emp.deduction);
  const [net, setNet] = useState(0);

  useEffect(() => {
    async function fetchNet() {
      const data = { id };
      const res = await fetch("http://127.0.0.1:8000/net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      res.json().then(data => setNet(data.Monthly_Pay));
    }
    fetchNet();
  }, [id]);

  let name = first_name + " " + last_name;
  return (
    <Layout>
      <Segment>
        <List>
          <List.Item>
            <div style={{ float: "right" }}>
              <Link to="/home">
                <Button color="blue">
                  <Icon name="home" />
                  Home
                </Button>
              </Link>
            </div>
            <div style={{ float: "left" }}>
              <Header as="h1">Employee Monthly Pay Report</Header>
            </div>
          </List.Item>
          <List.Item>
            <Input fluid label="Name" value={name} readOnly />
          </List.Item>
          <List.Item>
            <Input
              fluid
              label="Hours worked per Month (Hrs)"
              value={hours}
              readOnly
            />
          </List.Item>
          <List.Item>
            <Input fluid label="Hourly Pay (Rs)" value={pay} readOnly />
          </List.Item>
          <List.Item>
            <Input
              fluid
              label="Monthly Allowance (Rs)"
              value={allowance}
              readOnly
            />
          </List.Item>
          <List.Item>
            <Input
              fluid
              label="Monthly Deductibles (Rs)"
              value={deduction}
              readOnly
            />
          </List.Item>
        </List>
      </Segment>
      <Segment padded>
        <Input fluid label="Net Monthly Pay (Rs)" value={net} readOnly />
      </Segment>
    </Layout>
  );
};

export default Net;
