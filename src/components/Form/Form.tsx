import React, { useCallback } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField } from "./form-elements/TextField/TextField";
import { Input } from "./types";
import { CheckBoxGroup } from "./form-elements/CheckBox/CheckBoxGroup";
import { RadioInputFroup } from "./form-elements/RadioInput/RadioInputFroup";
import { StyledForm } from "./Form.styled";
import { Flex, FlexColumn } from "../../design-system/Flex/Flex";
import { Button } from "../../design-system/Button/Button.styles";

type Props = {
  schema: z.Schema<any>;
  inputs: Input[];
  onSubmit: SubmitHandler<any>;
  inputsClassName?: string;
  formClassName?: string;
};

const GenericForm: React.FC<Props> = ({ schema, inputs, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(schema),
  });

  const renderInput = useCallback((input: Input, errors: FieldErrors<any>) => {
    switch (input.type) {
      case "radio":
        return <RadioInputFroup control={control} inputConfig={input} />;
      case "checkbox":
        return <CheckBoxGroup control={control} inputConfig={input} />;
      default:
        return <TextField inputConfig={input} control={control} />;
    }
  }, []);

  return (
    <StyledForm as={"form"} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <FlexColumn key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          {renderInput(input, errors)}
          <Flex>
            {errors[input.name] && (
              <div>{`${errors[input.name]?.message}`}</div>
            )}
          </Flex>
        </FlexColumn>
      ))}
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

export default GenericForm;
