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
import { createContent } from "../graphql/mutations";
const client = generateClient();
export default function ContentCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    videoLink: "",
    textContent: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [threshold, setThreshold] = React.useState(initialValues.threshold);
  const [type, setType] = React.useState(initialValues.type);
  const [videoLink, setVideoLink] = React.useState(initialValues.videoLink);
  const [textContent, setTextContent] = React.useState(
    initialValues.textContent
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setThreshold(initialValues.threshold);
    setType(initialValues.type);
    setVideoLink(initialValues.videoLink);
    setTextContent(initialValues.textContent);
    setErrors({});
  };
  const validations = {
    title: [],
    threshold: [],
    type: [],
    videoLink: [{ type: "URL" }],
    textContent: [],
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
          title,
          threshold,
          type,
          videoLink,
          textContent,
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
            query: createContent.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContentCreateForm")}
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
              videoLink,
              textContent,
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
              videoLink,
              textContent,
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
              videoLink,
              textContent,
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
      </SelectField>
      <TextField
        label="Video link"
        isRequired={false}
        isReadOnly={false}
        value={videoLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              threshold,
              type,
              videoLink: value,
              textContent,
            };
            const result = onChange(modelFields);
            value = result?.videoLink ?? value;
          }
          if (errors.videoLink?.hasError) {
            runValidationTasks("videoLink", value);
          }
          setVideoLink(value);
        }}
        onBlur={() => runValidationTasks("videoLink", videoLink)}
        errorMessage={errors.videoLink?.errorMessage}
        hasError={errors.videoLink?.hasError}
        {...getOverrideProps(overrides, "videoLink")}
      ></TextField>
      <TextField
        label="Text content"
        isRequired={false}
        isReadOnly={false}
        value={textContent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              threshold,
              type,
              videoLink,
              textContent: value,
            };
            const result = onChange(modelFields);
            value = result?.textContent ?? value;
          }
          if (errors.textContent?.hasError) {
            runValidationTasks("textContent", value);
          }
          setTextContent(value);
        }}
        onBlur={() => runValidationTasks("textContent", textContent)}
        errorMessage={errors.textContent?.errorMessage}
        hasError={errors.textContent?.hasError}
        {...getOverrideProps(overrides, "textContent")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
