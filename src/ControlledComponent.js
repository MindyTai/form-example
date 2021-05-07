import { useState } from "react";
import { Form, Input, Button } from "./shared/StyledComponents";

export default () => {
  const [account, setAccount] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    if (e.target.id === "account") {
      setAccount(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ password, account });
  };
  return (
    <>
      <h1>Hello, Normal Form(Controlled Component)</h1>
      <Form onSubmit={handleSubmit}>
        <>
          <label htmlFor="account">Account</label>
          <Input id="account" value={account} onChange={handleChange} />
        </>
        <>
          <label htmlFor="password">Password</label>
          <Input id="password" value={password} onChange={handleChange} />
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
