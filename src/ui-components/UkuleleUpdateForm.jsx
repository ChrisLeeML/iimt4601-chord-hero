/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUkulele } from "../graphql/queries";
import { updateUkulele } from "../graphql/mutations";
const client = generateClient();
export default function UkuleleUpdateForm(props) {
  const {
    id: idProp,
    ukulele: ukuleleModelProp,
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
    tokenID: "",
    contractAddress: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [tokenID, setTokenID] = React.useState(initialValues.tokenID);
  const [contractAddress, setContractAddress] = React.useState(
    initialValues.contractAddress
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ukuleleRecord
      ? { ...initialValues, ...ukuleleRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setTokenID(cleanValues.tokenID);
    setContractAddress(cleanValues.contractAddress);
    setErrors({});
  };
  const [ukuleleRecord, setUkuleleRecord] = React.useState(ukuleleModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUkulele.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUkulele
        : ukuleleModelProp;
      setUkuleleRecord(record);
    };
    queryData();
  }, [idProp, ukuleleModelProp]);
  React.useEffect(resetStateValues, [ukuleleRecord]);
  const validations = {
    title: [],
    tokenID: [],
    contractAddress: [],
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
          tokenID: tokenID ?? null,
          contractAddress: contractAddress ?? null,
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
            query: updateUkulele.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ukuleleRecord.id,
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
      {...getOverrideProps(overrides, "UkuleleUpdateForm")}
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
              tokenID,
              contractAddress,
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
        label="Token id"
        isRequired={false}
        isReadOnly={false}
        value={tokenID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              tokenID: value,
              contractAddress,
            };
            const result = onChange(modelFields);
            value = result?.tokenID ?? value;
          }
          if (errors.tokenID?.hasError) {
            runValidationTasks("tokenID", value);
          }
          setTokenID(value);
        }}
        onBlur={() => runValidationTasks("tokenID", tokenID)}
        errorMessage={errors.tokenID?.errorMessage}
        hasError={errors.tokenID?.hasError}
        {...getOverrideProps(overrides, "tokenID")}
      ></TextField>
      <TextField
        label="Contract address"
        isRequired={false}
        isReadOnly={false}
        value={contractAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              tokenID,
              contractAddress: value,
            };
            const result = onChange(modelFields);
            value = result?.contractAddress ?? value;
          }
          if (errors.contractAddress?.hasError) {
            runValidationTasks("contractAddress", value);
          }
          setContractAddress(value);
        }}
        onBlur={() => runValidationTasks("contractAddress", contractAddress)}
        errorMessage={errors.contractAddress?.errorMessage}
        hasError={errors.contractAddress?.hasError}
        {...getOverrideProps(overrides, "contractAddress")}
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
          isDisabled={!(idProp || ukuleleModelProp)}
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
              !(idProp || ukuleleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
