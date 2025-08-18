import { useState } from "react";
import College from "./College";
import { subjectContext } from "./contextData";
import {
  Box,
  Button,
  FormControl,
  NativeSelect,
  Typography,
} from "@mui/material";

function ContextExample() {
  const [subject, setSubject] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "yellow", p: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Context Example
      </Typography>
      <FormControl sx={{ mb: 2, width: "200px" }}>
        {/* <InputLabel htmlFor="subject-native-select">Subject</InputLabel> */}
        <NativeSelect
          defaultValue={subject}
          value={subject}
          onChange={handleChange}
          inputProps={{
            name: "subject",
            id: "subject-native-select",
          }}
        >
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          <option value="Social Studies">Social Studies</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Geography">Geography</option>
        </NativeSelect>
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => setSubject("")}>Clear Fields</Button>
      <subjectContext.Provider value={subject}>
        <College />
      </subjectContext.Provider>
    </Box>
  );
}

export default ContextExample;
