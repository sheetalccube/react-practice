import { useContext } from "react";
import { subjectContext } from "./contextData";

function Subject() {
  const subject = useContext(subjectContext);
  return <div style={{ backgroundColor: "pink", padding: "10px" }}>Subject
    <h3>The subject is :{subject}</h3>
  </div>;
}

export default Subject;
