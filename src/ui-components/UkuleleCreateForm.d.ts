/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UkuleleCreateFormInputValues = {
    title?: string;
    tokenID?: string;
    contractAddress?: string;
};
export declare type UkuleleCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    tokenID?: ValidationFunction<string>;
    contractAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UkuleleCreateFormOverridesProps = {
    UkuleleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tokenID?: PrimitiveOverrideProps<TextFieldProps>;
    contractAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UkuleleCreateFormProps = React.PropsWithChildren<{
    overrides?: UkuleleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UkuleleCreateFormInputValues) => UkuleleCreateFormInputValues;
    onSuccess?: (fields: UkuleleCreateFormInputValues) => void;
    onError?: (fields: UkuleleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UkuleleCreateFormInputValues) => UkuleleCreateFormInputValues;
    onValidate?: UkuleleCreateFormValidationValues;
} & React.CSSProperties>;
export default function UkuleleCreateForm(props: UkuleleCreateFormProps): React.ReactElement;
