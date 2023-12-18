import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  PageHeader,
  TextInput,
} from "grommet";
import { v4 as uuidv4 } from "uuid";
import { FileInput } from "grommet";

const PaginaDadosPessoais = () => {
  const [formData, setFormData] = useState({
    name: { value: "", id: "" },
    cargo: "",
    minibio: "",
    photo: null,
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleInputChange = (fieldName, value) => {
    const id = generateUniqueId();
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Formulário enviado:", formData);
    setSubmitted(true);
  };

  return (
    <Grommet full>
      <PageHeader title="Ficha de Cadastro" />
      <Form
        name="Formulário Amigo Almoço"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <FormField label="Nome completo" name="name" required>
          <TextInput
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(event) => handleInputChange("name", event.target.value)}
          />
        </FormField>
        <FormField label="Cargo (opcional)" name="cargo">
          <TextInput
            name="cargo"
            placeholder="Cargo"
            value={formData.cargo}
            onChange={(event) =>
              setFormData({ ...formData, cargo: event.target.value })
            }
          />
        </FormField>
        <FormField label="Mini Bio (Opcional)" name="minibio">
          <TextInput
            name="minibio"
            placeholder="Mini Bio"
            value={formData.minibio}
            onChange={(event) =>
              setFormData({ ...formData, minibio: event.target.value })
            }
            as="textarea"
            rows={6}
          />
        </FormField>
        <FormField label="Foto" name="photo">
          <FileInput name="photo" onChange={handleFileChange} />
        </FormField>
        <Box style={{ margin: "15px" }} direction="row" justify="center">
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

export default PaginaDadosPessoais;
