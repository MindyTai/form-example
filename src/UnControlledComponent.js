import { useState, useRef } from "react";
import { Form, Input, Button } from "./shared/StyledComponents";

export default () => {
  const accountRef = useRef(null);
  const passwordRef = useRef(null);
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      password: passwordRef.current.value,
      account: accountRef.current.value
    });
  };

  return (
    <>
      <h1>Hello, Normal Form(Uncontrolled Component)</h1>
      <Form onSubmit={handleSubmit}>
        <>
          <label htmlFor="account">Account</label>
          <Input id="account" ref={accountRef} />
        </>
        <>
          <label htmlFor="password">Password</label>
          <Input id="password" ref={passwordRef} />
        </>
        <Button type="submit">Submit</Button>
      </Form>
      <>
        <h1>DATA</h1>
        {data.account}
        {data.password}
      </>
    </>
  );
};
