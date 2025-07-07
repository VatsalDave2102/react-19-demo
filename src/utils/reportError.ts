import type { ErrorInfo } from "react-dom/client";

const reportError = ({
  type,
  error,
  errorInfo,
}: {
  type: "Caught" | "Uncaught" | "Recoverable";
  error: unknown;
  errorInfo: ErrorInfo;
}) => {
  console.error(type, error, errorInfo);
  console.error("Component Stack:", errorInfo.componentStack);
};

export const onCaughtErrorProd = (error: unknown, errorInfo: ErrorInfo) => {
  if (error instanceof Error && error?.message !== "Known Error") {
    reportError({ type: "Caught", error, errorInfo });
  }
};

export const onUncaughtErrorProd = (error: unknown, errorInfo: ErrorInfo) => {
  reportError({ type: "Uncaught", error, errorInfo });
};

export const onRecoverableErrorProd = (
  error: unknown,
  errorInfo: ErrorInfo
) => {
  reportError({ type: "Recoverable", error, errorInfo });
};
