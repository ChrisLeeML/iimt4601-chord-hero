/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContent } from "../graphql/queries";
import { updateContent } from "../graphql/mutations";
const client = generateClient();
export default function ContentUpdateForm(props) {
  const {
    id: idProp,
    content: contentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    threshold: "",
    type: "",
    requiredNFT: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [threshold, setThreshold] = React.useState(initialValues.threshold);
  const [type, setType] = React.useState(initialValues.type);
  const [requiredNFT, setRequiredNFT] = React.useState(
    initialValues.requiredNFT
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contentRecord
      ? { ...initialValues, ...contentRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setThreshold(cleanValues.threshold);
    setType(cleanValues.type);
    setRequiredNFT(cleanValues.requiredNFT);
    setErrors({});
  };
  const [contentRecord, setContentRecord] = React.useState(contentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContent
        : contentModelProp;
      setContentRecord(record);
    };
    queryData();
  }, [idProp, contentModelProp]);
  React.useEffect(resetStateValues, [contentRecord]);
  const validations = {
    title: [],
    threshold: [],
    type: [],
    requiredNFT: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title: title ?? null,
          threshold: threshold ?? null,
          type: type ?? null,
          requiredNFT: requiredNFT ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateContent.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contentRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              threshold,
              type,
              requiredNFT,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Threshold"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={threshold}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              threshold: value,
              type,
              requiredNFT,
            };
            const result = onChange(modelFields);
            value = result?.threshold ?? value;
          }
          if (errors.threshold?.hasError) {
            runValidationTasks("threshold", value);
          }
          setThreshold(value);
        }}
        onBlur={() => runValidationTasks("threshold", threshold)}
        errorMessage={errors.threshold?.errorMessage}
        hasError={errors.threshold?.hasError}
        {...getOverrideProps(overrides, "threshold")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              threshold,
              type: value,
              requiredNFT,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Text"
          value="TEXT"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Pdf"
          value="PDF"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Required nft"
        isRequired={false}
        isReadOnly={false}
        value={requiredNFT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              threshold,
              type,
              requiredNFT: value,
            };
            const result = onChange(modelFields);
            value = result?.requiredNFT ?? value;
          }
          if (errors.requiredNFT?.hasError) {
            runValidationTasks("requiredNFT", value);
          }
          setRequiredNFT(value);
        }}
        onBlur={() => runValidationTasks("requiredNFT", requiredNFT)}
        errorMessage={errors.requiredNFT?.errorMessage}
        hasError={errors.requiredNFT?.hasError}
        {...getOverrideProps(overrides, "requiredNFT")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || contentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || contentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
