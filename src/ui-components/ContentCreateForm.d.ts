/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContentCreateFormInputValues = {
    title?: string;
    threshold?: number;
    type?: string;
    videoLink?: string;
    textContent?: string;
};
export declare type ContentCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    threshold?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    videoLink?: ValidationFunction<string>;
    textContent?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentCreateFormOverridesProps = {
    ContentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    threshold?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    textContent?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentCreateFormProps = React.PropsWithChildren<{
    overrides?: ContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onSuccess?: (fields: ContentCreateFormInputValues) => void;
    onError?: (fields: ContentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onValidate?: ContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContentCreateForm(props: ContentCreateFormProps): React.ReactElement;
