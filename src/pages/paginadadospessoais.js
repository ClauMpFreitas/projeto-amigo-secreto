import React, { useState } from "react";
import { Box, Button, Form, FormField, Grommet, TextInput } from "grommet";
import { Hide, View } from "grommet-icons";
import { v4 as uuidv4 } from "uuid";
import { FileInput } from "grommet";

const PaginaDadosPessoais = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    name: { value: "", id: "" },
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    cargo: "",
    minibio: "",
    photo: null,
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setFormData({ ...formData, senha: event.target.value });
  };

  const handleInputChange = (fieldName, value) => {
    const id = generateUniqueId();
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (event) => {
    // Lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    setSubmitted(true);
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
        <FormField label="Nome completo" name="name" required>
          <TextInput
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(event) => handleInputChange("name", event.target.value)}
          />
        </FormField>
        <FormField label="Endereço completo com número" name="endereco">
          <TextInput
            name="endereco"
            placeholder="Seu endereço completo"
            value={formData.endereco}
            onChange={(event) =>
              setFormData({ ...formData, endereco: event.target.value })
            }
          />
        </FormField>
        <FormField label="Bairro" name="bairro">
          <TextInput
            name="bairro"
            placeholder="Bairro"
            value={formData.bairro}
            onChange={(event) =>
              setFormData({ ...formData, bairro: event.target.value })
            }
          />
        </FormField>
        <FormField label="Cidade" name="cidade">
          <TextInput
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={(event) =>
              setFormData({ ...formData, cidade: event.target.value })
            }
          />
        </FormField>
        <FormField label="Estado" name="estado">
          <TextInput
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={(event) =>
              setFormData({ ...formData, estado: event.target.value })
            }
          />
        </FormField>
        <FormField label="CEP" name="cep">
          <TextInput
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={(event) =>
              setFormData({ ...formData, cep: event.target.value })
            }
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
        <FormField
          name="subscribe"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label style={{ marginRight: "8px" }}>
            Deseja receber nossas atualizações?
          </label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={(event) =>
              setFormData({
                ...formData,
                subscribe: event.target.checked,
              })
            }
          />
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
