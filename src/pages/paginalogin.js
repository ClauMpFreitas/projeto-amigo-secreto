import React, { useState } from "react";
import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";
import { View, Hide } from "grommet-icons";

const PaginaLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    subscribe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    // Lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    setSubmitted(true);
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setFormData({ ...formData, senha: event.target.value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grommet full>
      <Form
        name="Formulário Amigo Almoço"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <FormField label="Email" name="email" required>
          <TextInput
            name="email"
            type="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </FormField>
        <FormField label="Senha" name="senha" required>
          <Button
            icon={showPassword ? <Hide /> : <View />}
            onClick={handleTogglePasswordVisibility}
          />
          <TextInput
            name="senha"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={formData.senha}
            onChange={handlePasswordChange}
            minLength={5}
          />
        </FormField>
        <Box direction="row" justify="center">
          <Button
            type="submit"
            disabled={submitted}
            label={submitted ? "Thanks 🎉" : "Submit"}
            primary
          />
        </Box>
      </Form>
    </Grommet>
  );
};

export default PaginaLogin;
