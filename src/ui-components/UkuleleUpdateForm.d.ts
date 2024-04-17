/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Ukulele } from "../API.ts";
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
export declare type UkuleleUpdateFormInputValues = {
    title?: string;
    tokenID?: string;
    contractAddress?: string;
    chain?: string;
};
export declare type UkuleleUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    tokenID?: ValidationFunction<string>;
    contractAddress?: ValidationFunction<string>;
    chain?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UkuleleUpdateFormOverridesProps = {
    UkuleleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tokenID?: PrimitiveOverrideProps<TextFieldProps>;
    contractAddress?: PrimitiveOverrideProps<TextFieldProps>;
    chain?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UkuleleUpdateFormProps = React.PropsWithChildren<{
    overrides?: UkuleleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ukulele?: Ukulele;
    onSubmit?: (fields: UkuleleUpdateFormInputValues) => UkuleleUpdateFormInputValues;
    onSuccess?: (fields: UkuleleUpdateFormInputValues) => void;
    onError?: (fields: UkuleleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UkuleleUpdateFormInputValues) => UkuleleUpdateFormInputValues;
    onValidate?: UkuleleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UkuleleUpdateForm(props: UkuleleUpdateFormProps): React.ReactElement;
