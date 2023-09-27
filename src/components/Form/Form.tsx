import React, { useCallback, useMemo } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "./form-elements/TextField/TextField";
import { Input, InputTypes } from "./types";
import { CheckBoxGroup } from "./form-elements/CheckBox/CheckBoxGroup";
import { RadioInputFroup } from "./form-elements/RadioInput/RadioInputFroup";
import { StyledForm } from "./Form.styled";
import { FlexColumn } from "../../design-system/Flex/Flex";
import { generateZodSchemaFromInputs } from "./utils";
import { Body1 } from "../../design-system/Typography/Typography";
import styled from "styled-components";
import { Button } from "../../design-system/Button";
import { z } from "zod";

const StyledErrorMessage = styled(Body1)`
  height: 20px;
  color: ${({ theme }) => theme.colors.error};
`;

type Props = {
  inputs: Input[];
  onSubmit: SubmitHandler<any>;
  inputsClassName?: string;
  formClassName?: string;
};

const GenericForm: React.FC<Props> = ({ inputs, onSubmit }) => {
  const schema = useMemo(() => {
    return generateZodSchemaFromInputs(inputs);
  }, [inputs]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const renderInput = useCallback((input: Input, errors: FieldErrors<any>) => {
    switch (input.type) {
      case InputTypes.Radio:
        return <RadioInputFroup control={control} inputConfig={input} />;
      case InputTypes.Checkbox:
        return <CheckBoxGroup control={control} inputConfig={input} />;
      default:
        return <TextField inputConfig={input} control={control} />;
    }
  }, []);

  return (
    <StyledForm as={"form"} onSubmit={handleSubmit((data) => onSubmit(data))}>
      {inputs.map((input) => (
        <FlexColumn key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          {renderInput(input, errors)}
          <StyledErrorMessage>
            {errors[input.name] && (
              <div>{`* ${errors[input.name]?.message}`}</div>
            )}
          </StyledErrorMessage>
        </FlexColumn>
      ))}
      <Button>Submit</Button>
    </StyledForm>
  );
};

export default GenericForm;
