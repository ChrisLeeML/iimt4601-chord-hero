/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Content } from "../API.ts";
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
export declare type ContentUpdateFormInputValues = {
    title?: string;
    threshold?: number;
    type?: string;
    videoLink?: string;
    textContent?: string;
};
export declare type ContentUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    threshold?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
    videoLink?: ValidationFunction<string>;
    textContent?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentUpdateFormOverridesProps = {
    ContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    threshold?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    videoLink?: PrimitiveOverrideProps<TextFieldProps>;
    textContent?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    content?: Content;
    onSubmit?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onSuccess?: (fields: ContentUpdateFormInputValues) => void;
    onError?: (fields: ContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContentUpdateFormInputValues) => ContentUpdateFormInputValues;
    onValidate?: ContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentUpdateForm(props: ContentUpdateFormProps): React.ReactElement;
