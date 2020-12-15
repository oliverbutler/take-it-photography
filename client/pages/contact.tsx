import React, { useState } from "react";
import Input from "../components/Input";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [danceSchool, setDanceSchool] = useState("");
  const [message, setMessage] = useState("");

  const [left, setLeft] = useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="formContainer">
      <div className="form">
        <div className="tabs">
          <div className={left ? "active" : ""} onClick={() => setLeft(true)}>
            Dance School
          </div>
          <div className={left ? "" : "active"} onClick={() => setLeft(false)}>
            Parent
          </div>
        </div>

        <div className="form-content">
          {left ? (
            <div className="form-left">
              <form>
                <Input
                  type="text"
                  label="Your Name"
                  value={name}
                  onChange={setName}
                />
                <Input
                  type="email"
                  label="Your Email"
                  value={email}
                  onChange={setEmail}
                />
                <Input
                  type="text"
                  label="Your Dance School"
                  value={danceSchool}
                  onChange={setDanceSchool}
                />
                <Input
                  type="textarea"
                  label="Message"
                  value={message}
                  onChange={setMessage}
                />
              </form>
            </div>
          ) : (
            <div className="form-right">
              <form>
                <Input
                  type="text"
                  label="Your Name"
                  value={name}
                  onChange={setName}
                />
                <Input
                  type="email"
                  label="Your Email"
                  value={email}
                  onChange={setEmail}
                />
                <Input
                  type="textarea"
                  label="Message"
                  value={message}
                  onChange={setMessage}
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
