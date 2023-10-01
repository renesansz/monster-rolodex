import { HTMLProps } from "react";

export type SearchBoxProps = Pick<HTMLProps<HTMLInputElement>, "value" | "onChange">
