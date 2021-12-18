import React from "react";
import { Container, TextField, Typography, Box, Button } from "@mui/material";

export const Form = ({ addTask }) => {
  const [value, setValue] = React.useState({
    name: "",
    text: "",
    email: "",
  });
  const styleContainer = {
    marginTop: "50px",
    bgcolor: "white",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };
  const styleTypography = {
    textAlign: "left",
    fontWeight: "800",
  };
  const onAddTask = () => {
    addTask(value);
    setValue({
      name: "",
      text: "",
      email: "",
    });
  };
  return (
    <Container sx={styleContainer}>
      <Typography variant="h4" component="div" sx={styleTypography}>
        Обратная связь:
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: "20px", display: "block" },
        }}
      >
        <TextField
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          inputProps={{ style: { fontSize: 30 } }}
          label="Имя"
        />
        <TextField
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          inputProps={{ style: { fontSize: 30 } }}
          label="Почта"
        />
        <TextField
          value={value.text}
          onChange={(e) => setValue({ ...value, text: e.target.value })}
          inputProps={{ style: { fontSize: 30 } }}
          label="Текст..."
          multiline
          rows={3}
        />
      </Box>
      <Button
        onClick={onAddTask}
        sx={{ m: "20px", width: "350px", fontSize: 30 }}
        variant="contained"
      >
        Отправить
      </Button>
    </Container>
  );
};
