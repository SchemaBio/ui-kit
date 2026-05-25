// src/components/Button/Button.tsx
import * as React from "react";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var variantStyles = {
  primary: [
    "bg-accent-emphasis text-fg-on-emphasis",
    "hover:bg-[color:color-mix(in_srgb,var(--color-accent-emphasis)_90%,black)]",
    "active:bg-[color:color-mix(in_srgb,var(--color-accent-emphasis)_85%,black)]",
    "border-transparent"
  ].join(" "),
  secondary: [
    "bg-canvas-subtle text-fg-default",
    "hover:bg-canvas-inset",
    "active:bg-[color:color-mix(in_srgb,var(--color-canvas-inset)_95%,black)]",
    "border-border-default"
  ].join(" "),
  danger: [
    "bg-danger-emphasis text-fg-on-emphasis",
    "hover:bg-[color:color-mix(in_srgb,var(--color-danger-emphasis)_90%,black)]",
    "active:bg-[color:color-mix(in_srgb,var(--color-danger-emphasis)_85%,black)]",
    "border-transparent"
  ].join(" "),
  ghost: [
    "bg-transparent text-fg-default",
    "hover:bg-canvas-subtle",
    "active:bg-canvas-inset",
    "border-transparent"
  ].join(" "),
  link: [
    "bg-transparent text-accent-fg",
    "hover:underline",
    "active:text-[color:color-mix(in_srgb,var(--color-accent-fg)_85%,black)]",
    "border-transparent",
    "p-0 h-auto"
  ].join(" ")
};
var sizeStyles = {
  small: "h-7 px-3 text-sm gap-1",
  medium: "h-8 px-4 text-sm gap-1.5",
  large: "h-10 px-5 text-base gap-2"
};
var iconOnlySizeStyles = {
  small: "h-7 w-7 p-0",
  medium: "h-8 w-8 p-0",
  large: "h-10 w-10 p-0"
};
var Spinner = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: cn("animate-spin", className),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ]
  }
);
var Button = React.forwardRef(
  ({
    variant = "primary",
    size = "medium",
    loading = false,
    iconOnly = false,
    leftIcon,
    rightIcon,
    disabled,
    className,
    children,
    onClick,
    onKeyDown,
    type = "button",
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    const handleKeyDown = (event) => {
      if ((event.key === "Enter" || event.key === " ") && !isDisabled) {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (event.key === " " && onClick) {
          onClick(event);
        }
      }
      onKeyDown?.(event);
    };
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        type,
        disabled: isDisabled,
        className: cn(
          // Base styles
          "inline-flex items-center justify-center",
          "font-medium",
          "rounded-medium",
          "border",
          "transition-colors duration-fast",
          // Focus ring for accessibility
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis focus-visible:ring-offset-2",
          // Disabled styles
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          // Variant styles (skip for link variant which has its own sizing)
          variantStyles[variant],
          // Size styles
          variant !== "link" && (iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size]),
          className
        ),
        onClick,
        onKeyDown: handleKeyDown,
        "aria-disabled": isDisabled,
        "aria-busy": loading,
        ...props,
        children: [
          loading && /* @__PURE__ */ jsx(Spinner, { className: "shrink-0" }),
          !loading && leftIcon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: leftIcon }),
          !iconOnly && children && /* @__PURE__ */ jsx("span", { children }),
          !loading && rightIcon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: rightIcon })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Tag/Tag.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CloseIcon = ({ className }) => /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: "12",
    height: "12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx2("path", { d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" })
  }
);
var acmgStyles = {
  pathogenic: "bg-[var(--color-acmg-pathogenic-subtle)] text-[var(--color-acmg-pathogenic)] border-[var(--color-acmg-pathogenic)]",
  "likely-pathogenic": "bg-[var(--color-acmg-likely-pathogenic-subtle)] text-[var(--color-acmg-likely-pathogenic)] border-[var(--color-acmg-likely-pathogenic)]",
  vus: "bg-[var(--color-acmg-vus-subtle)] text-[var(--color-acmg-vus)] border-[var(--color-acmg-vus)]",
  "likely-benign": "bg-[var(--color-acmg-likely-benign-subtle)] text-[var(--color-acmg-likely-benign)] border-[var(--color-acmg-likely-benign)]",
  benign: "bg-[var(--color-acmg-benign-subtle)] text-[var(--color-acmg-benign)] border-[var(--color-acmg-benign)]"
};
var ampTierStyles = {
  "tier-1": "bg-[var(--color-amp-tier-1-subtle)] text-[var(--color-amp-tier-1)] border-[var(--color-amp-tier-1)]",
  "tier-2": "bg-[var(--color-amp-tier-2-subtle)] text-[var(--color-amp-tier-2)] border-[var(--color-amp-tier-2)]",
  "tier-3": "bg-[var(--color-amp-tier-3-subtle)] text-[var(--color-amp-tier-3)] border-[var(--color-amp-tier-3)]",
  "tier-4": "bg-[var(--color-amp-tier-4-subtle)] text-[var(--color-amp-tier-4)] border-[var(--color-amp-tier-4)]"
};
var statusStyles = {
  success: "bg-success-subtle text-success-fg border-success-fg",
  warning: "bg-warning-subtle text-warning-fg border-warning-fg",
  danger: "bg-danger-subtle text-danger-fg border-danger-fg",
  info: "bg-accent-subtle text-accent-fg border-accent-fg",
  neutral: "bg-canvas-subtle text-fg-muted border-border-default"
};
var isACMGVariant = (variant) => ["pathogenic", "likely-pathogenic", "vus", "likely-benign", "benign"].includes(variant);
var isAMPTierVariant = (variant) => ["tier-1", "tier-2", "tier-3", "tier-4"].includes(variant);
var getVariantStyles = (variant) => {
  if (isACMGVariant(variant)) {
    return acmgStyles[variant];
  }
  if (isAMPTierVariant(variant)) {
    return ampTierStyles[variant];
  }
  return statusStyles[variant];
};
var Tag = ({
  variant,
  children,
  icon,
  closable = false,
  onClose,
  className,
  title
}) => {
  const handleClose = (event) => {
    event.stopPropagation();
    onClose?.();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      onClose?.();
    }
  };
  return /* @__PURE__ */ jsxs2(
    "span",
    {
      title,
      className: cn(
        // Base styles - 20px height with 8px horizontal padding
        "inline-flex items-center gap-1",
        "h-5 px-2",
        "text-xs font-medium",
        "rounded-small",
        "border",
        // Variant styles
        getVariantStyles(variant),
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx2("span", { className: "shrink-0 flex items-center", children: icon }),
        /* @__PURE__ */ jsx2("span", { className: "truncate", children }),
        closable && /* @__PURE__ */ jsx2(
          "button",
          {
            type: "button",
            onClick: handleClose,
            onKeyDown: handleKeyDown,
            className: cn(
              "shrink-0 flex items-center justify-center",
              "ml-0.5 -mr-0.5",
              "rounded-sm",
              "hover:bg-black/10 dark:hover:bg-white/10",
              "focus:outline-none focus-visible:ring-1 focus-visible:ring-current",
              "transition-colors duration-fast"
            ),
            "aria-label": "Remove tag",
            children: /* @__PURE__ */ jsx2(CloseIcon, {})
          }
        )
      ]
    }
  );
};
Tag.displayName = "Tag";

// src/components/Form/Form.tsx
import * as React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var FormContext = React2.createContext({
  labelPosition: "top",
  labelWidth: 120
});
var useFormContext = () => React2.useContext(FormContext);
var Form = React2.forwardRef(
  ({
    labelPosition = "top",
    labelWidth = 120,
    onValidSubmit,
    onSubmit,
    className,
    children,
    ...props
  }, ref) => {
    const handleSubmit = (event) => {
      if (onSubmit) {
        onSubmit(event);
      }
      if (onValidSubmit && !event.defaultPrevented) {
        const form = event.currentTarget;
        if (form.checkValidity()) {
          onValidSubmit(new FormData(form));
        } else {
          event.preventDefault();
          const firstInvalid = form.querySelector(":invalid");
          firstInvalid?.focus();
        }
      }
    };
    return /* @__PURE__ */ jsx3(FormContext.Provider, { value: { labelPosition, labelWidth }, children: /* @__PURE__ */ jsx3(
      "form",
      {
        ref,
        className: cn("flex flex-col gap-4", className),
        onSubmit: handleSubmit,
        ...props,
        children
      }
    ) });
  }
);
Form.displayName = "Form";

// src/components/Form/FormItem.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var FormItem = ({
  label,
  required = false,
  error,
  hint,
  htmlFor,
  className,
  children
}) => {
  const { labelPosition, labelWidth } = useFormContext();
  const isLeftAligned = labelPosition === "left";
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn(
        "flex",
        isLeftAligned ? "flex-row items-start" : "flex-col",
        isLeftAligned ? "gap-3" : "gap-2",
        className
      ),
      children: [
        label && /* @__PURE__ */ jsxs3(
          "label",
          {
            htmlFor,
            className: cn(
              "text-sm font-medium text-fg-default",
              isLeftAligned && "shrink-0 pt-2",
              isLeftAligned && `w-[${labelWidth}px]`
            ),
            style: isLeftAligned ? { width: labelWidth } : void 0,
            children: [
              label,
              required && /* @__PURE__ */ jsx4("span", { className: "text-danger-fg ml-0.5", "aria-hidden": "true", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs3("div", { className: cn("flex flex-col gap-1", isLeftAligned && "flex-1"), children: [
          children,
          error && /* @__PURE__ */ jsx4("p", { className: "text-sm text-danger-fg", role: "alert", children: error }),
          hint && !error && /* @__PURE__ */ jsx4("p", { className: "text-sm text-fg-muted", children: hint })
        ] })
      ]
    }
  );
};
FormItem.displayName = "FormItem";

// src/components/Form/Input.tsx
import * as React3 from "react";

// src/utils/accessibility.ts
function generateId(prefix = "ui") {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useReducedMotion() {
  if (typeof window === "undefined") return false;
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery.matches;
}
function prefersHighContrast() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-contrast: more)").matches;
}
function getAriaProps(options) {
  const props = {};
  if (options.label) props["aria-label"] = options.label;
  if (options.labelledBy) props["aria-labelledby"] = options.labelledBy;
  if (options.describedBy) props["aria-describedby"] = options.describedBy;
  if (options.expanded !== void 0) props["aria-expanded"] = options.expanded;
  if (options.selected !== void 0) props["aria-selected"] = options.selected;
  if (options.disabled !== void 0) props["aria-disabled"] = options.disabled;
  if (options.hidden !== void 0) props["aria-hidden"] = options.hidden;
  if (options.live) props["aria-live"] = options.live;
  if (options.role) props["role"] = options.role;
  if (options.pressed !== void 0) props["aria-pressed"] = options.pressed;
  if (options.checked !== void 0) props["aria-checked"] = String(options.checked);
  if (options.controls) props["aria-controls"] = options.controls;
  if (options.owns) props["aria-owns"] = options.owns;
  if (options.haspopup !== void 0) props["aria-haspopup"] = String(options.haspopup);
  if (options.current !== void 0) props["aria-current"] = options.current === true ? "true" : options.current;
  return props;
}
function handleListKeyboardNavigation(event, currentIndex, itemCount, options = {}) {
  const { orientation = "vertical", loop = true } = options;
  const isVertical = orientation === "vertical";
  const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";
  const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
  let newIndex = null;
  switch (event.key) {
    case prevKey:
      event.preventDefault();
      if (currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (loop) {
        newIndex = itemCount - 1;
      }
      break;
    case nextKey:
      event.preventDefault();
      if (currentIndex < itemCount - 1) {
        newIndex = currentIndex + 1;
      } else if (loop) {
        newIndex = 0;
      }
      break;
    case "Home":
      event.preventDefault();
      newIndex = 0;
      break;
    case "End":
      event.preventDefault();
      newIndex = itemCount - 1;
      break;
  }
  return newIndex;
}
function handleGridKeyboardNavigation(event, currentIndex, columnCount, itemCount, options = {}) {
  const { loop = false } = options;
  let newIndex = null;
  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      if (currentIndex >= columnCount) {
        newIndex = currentIndex - columnCount;
      } else if (loop) {
        const lastRowStart = Math.floor((itemCount - 1) / columnCount) * columnCount;
        newIndex = Math.min(lastRowStart + currentIndex % columnCount, itemCount - 1);
      }
      break;
    case "ArrowDown":
      event.preventDefault();
      if (currentIndex + columnCount < itemCount) {
        newIndex = currentIndex + columnCount;
      } else if (loop) {
        newIndex = currentIndex % columnCount;
      }
      break;
    case "ArrowLeft":
      event.preventDefault();
      if (currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (loop) {
        newIndex = itemCount - 1;
      }
      break;
    case "ArrowRight":
      event.preventDefault();
      if (currentIndex < itemCount - 1) {
        newIndex = currentIndex + 1;
      } else if (loop) {
        newIndex = 0;
      }
      break;
    case "Home":
      event.preventDefault();
      if (event.ctrlKey) {
        newIndex = 0;
      } else {
        newIndex = Math.floor(currentIndex / columnCount) * columnCount;
      }
      break;
    case "End":
      event.preventDefault();
      if (event.ctrlKey) {
        newIndex = itemCount - 1;
      } else {
        const rowStart = Math.floor(currentIndex / columnCount) * columnCount;
        newIndex = Math.min(rowStart + columnCount - 1, itemCount - 1);
      }
      break;
  }
  return newIndex;
}
function announceToScreenReader(message, priority = "polite") {
  if (typeof document === "undefined") return;
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `;
  document.body.appendChild(announcement);
  setTimeout(() => {
    announcement.textContent = message;
  }, 100);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1e3);
}
function getVisuallyHiddenStyles() {
  return {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
  };
}
function trapFocus(container) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const handleKeyDown = (event) => {
    if (event.key !== "Tab") return;
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  };
  container.addEventListener("keydown", handleKeyDown);
  firstElement?.focus();
  return () => {
    container.removeEventListener("keydown", handleKeyDown);
  };
}
function isFocusable(element) {
  if (element.hasAttribute("disabled")) return false;
  if (element.getAttribute("tabindex") === "-1") return false;
  if (element.getAttribute("aria-hidden") === "true") return false;
  const focusableTags = ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"];
  if (focusableTags.includes(element.tagName)) {
    if (element.tagName === "A" && !element.hasAttribute("href")) {
      return element.hasAttribute("tabindex");
    }
    return true;
  }
  return element.hasAttribute("tabindex") && element.getAttribute("tabindex") !== "-1";
}
function getFocusableElements(container) {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(", ");
  const elements = Array.from(container.querySelectorAll(selector));
  return elements.filter((el) => {
    const style = window.getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}
function setRovingTabindex(elements, activeIndex) {
  elements.forEach((element, index) => {
    element.setAttribute("tabindex", index === activeIndex ? "0" : "-1");
  });
}
function createSkipLink(targetId, label = "Skip to main content") {
  const link = document.createElement("a");
  link.href = `#${targetId}`;
  link.textContent = label;
  link.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-canvas-default focus:text-fg-default focus:rounded-md focus:shadow-lg";
  return link;
}
function meetsContrastRequirements(foreground, background, level = "AA", isLargeText = false) {
  const ratio = getContrastRatio(foreground, background);
  if (level === "AAA") {
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
  }
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}
function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}
function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const [r, g, b] = rgb.map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

// src/components/Form/Input.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({
    error = false,
    leftElement,
    rightElement,
    errorMessage,
    hint,
    className,
    disabled,
    id: providedId,
    "aria-describedby": ariaDescribedBy,
    ...props
  }, ref) => {
    const generatedId = React3.useMemo(() => generateId("input"), []);
    const inputId = providedId || generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const describedByIds = [
      ariaDescribedBy,
      error && errorMessage ? errorId : null,
      hint ? hintId : null
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxs4("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs4(
        "div",
        {
          className: cn(
            "relative flex items-center",
            "h-8",
            // 32px height
            "rounded-medium",
            "border",
            "bg-canvas-default",
            "transition-colors duration-fast",
            // Border states
            error ? "border-danger-emphasis" : "border-border-default hover:border-border-muted",
            // Focus-within for the wrapper
            !error && "focus-within:border-accent-emphasis focus-within:ring-1 focus-within:ring-accent-emphasis",
            error && "focus-within:ring-1 focus-within:ring-danger-emphasis",
            // Disabled state
            disabled && "opacity-50 cursor-not-allowed bg-canvas-subtle",
            className
          ),
          children: [
            leftElement && /* @__PURE__ */ jsx5("span", { className: "flex items-center justify-center pl-3 text-fg-muted", "aria-hidden": "true", children: leftElement }),
            /* @__PURE__ */ jsx5(
              "input",
              {
                ref,
                id: inputId,
                disabled,
                className: cn(
                  "flex-1 h-full",
                  "bg-transparent",
                  "text-sm text-fg-default",
                  "placeholder:text-fg-subtle",
                  "outline-none",
                  "disabled:cursor-not-allowed",
                  leftElement ? "pl-2" : "pl-3",
                  rightElement ? "pr-2" : "pr-3"
                ),
                "aria-invalid": error,
                "aria-describedby": describedByIds,
                ...props
              }
            ),
            rightElement && /* @__PURE__ */ jsx5("span", { className: "flex items-center justify-center pr-3 text-fg-muted", children: rightElement })
          ]
        }
      ),
      error && errorMessage && /* @__PURE__ */ jsx5("p", { id: errorId, className: "mt-1 text-sm text-danger-fg", role: "alert", children: errorMessage }),
      hint && !error && /* @__PURE__ */ jsx5("p", { id: hintId, className: "mt-1 text-sm text-fg-muted", children: hint })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Form/Select.tsx
import * as React4 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var ChevronDownIcon = () => /* @__PURE__ */ jsx6(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx6(
      "path",
      {
        d: "M4 6L8 10L12 6",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var CheckIcon = () => /* @__PURE__ */ jsx6(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx6(
      "path",
      {
        d: "M13.5 4.5L6 12L2.5 8.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function Select({
  options,
  value,
  onChange,
  multiple = false,
  searchable = false,
  placeholder = "Select...",
  disabled = false,
  error = false,
  className,
  name
}) {
  const [searchQuery, setSearchQuery] = React4.useState("");
  const [open, setOpen] = React4.useState(false);
  const filteredOptions = React4.useMemo(() => {
    if (!searchable || !searchQuery) return options;
    return options.filter(
      (opt) => opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchQuery, searchable]);
  const getDisplayLabel = () => {
    if (multiple && Array.isArray(value)) {
      if (value.length === 0) return placeholder;
      const labels = value.map((v) => options.find((opt) => opt.value === v)?.label).filter(Boolean);
      return labels.length > 2 ? `${labels.slice(0, 2).join(", ")} +${labels.length - 2}` : labels.join(", ");
    }
    const selected = options.find((opt) => opt.value === value);
    return selected?.label || placeholder;
  };
  const handleSingleChange = (newValue) => {
    onChange?.(newValue);
    setSearchQuery("");
  };
  const handleMultiToggle = (optionValue) => {
    if (!multiple || !Array.isArray(value)) return;
    const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue];
    onChange?.(newValue);
  };
  const isSelected = (optionValue) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };
  if (multiple) {
    return /* @__PURE__ */ jsxs5("div", { className: cn("relative", className), children: [
      /* @__PURE__ */ jsxs5(
        "button",
        {
          type: "button",
          disabled,
          onClick: () => setOpen(!open),
          className: cn(
            "flex items-center justify-between w-full",
            "h-8 px-3",
            "rounded-medium border",
            "bg-canvas-default",
            "text-sm text-left",
            "transition-colors duration-fast",
            error ? "border-danger-emphasis" : "border-border-default hover:border-border-muted",
            open && !error && "border-accent-emphasis ring-1 ring-accent-emphasis",
            disabled && "opacity-50 cursor-not-allowed bg-canvas-subtle",
            !value || Array.isArray(value) && value.length === 0 ? "text-fg-subtle" : "text-fg-default"
          ),
          "aria-expanded": open,
          "aria-haspopup": "listbox",
          children: [
            /* @__PURE__ */ jsx6("span", { className: "truncate", children: getDisplayLabel() }),
            /* @__PURE__ */ jsx6(ChevronDownIcon, {})
          ]
        }
      ),
      open && /* @__PURE__ */ jsxs5(
        "div",
        {
          className: cn(
            "absolute z-50 w-full mt-1",
            "bg-canvas-default",
            "border border-border-default",
            "rounded-medium shadow-medium",
            "max-h-60 overflow-auto"
          ),
          children: [
            searchable && /* @__PURE__ */ jsx6("div", { className: "p-2 border-b border-border-subtle", children: /* @__PURE__ */ jsx6(
              "input",
              {
                type: "text",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search...",
                className: cn(
                  "w-full h-7 px-2",
                  "text-sm",
                  "bg-canvas-subtle",
                  "border border-border-default rounded-small",
                  "outline-none focus:border-accent-emphasis"
                ),
                autoFocus: true
              }
            ) }),
            /* @__PURE__ */ jsxs5("div", { role: "listbox", "aria-multiselectable": "true", children: [
              filteredOptions.map((option) => /* @__PURE__ */ jsxs5(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": isSelected(option.value),
                  disabled: option.disabled,
                  onClick: () => handleMultiToggle(option.value),
                  className: cn(
                    "flex items-center gap-2 w-full",
                    "px-3 py-2",
                    "text-sm text-left",
                    "hover:bg-canvas-subtle",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    isSelected(option.value) && "bg-accent-subtle"
                  ),
                  children: [
                    /* @__PURE__ */ jsx6(
                      "span",
                      {
                        className: cn(
                          "flex items-center justify-center",
                          "w-4 h-4",
                          "border rounded-small",
                          isSelected(option.value) ? "bg-accent-emphasis border-accent-emphasis text-fg-on-emphasis" : "border-border-default"
                        ),
                        children: isSelected(option.value) && /* @__PURE__ */ jsx6(CheckIcon, {})
                      }
                    ),
                    option.label
                  ]
                },
                String(option.value)
              )),
              filteredOptions.length === 0 && /* @__PURE__ */ jsx6("div", { className: "px-3 py-2 text-sm text-fg-muted", children: "No options found" })
            ] })
          ]
        }
      ),
      name && Array.isArray(value) && value.map((v) => /* @__PURE__ */ jsx6("input", { type: "hidden", name, value: String(v) }, String(v)))
    ] });
  }
  return /* @__PURE__ */ jsxs5(
    SelectPrimitive.Root,
    {
      value,
      onValueChange: handleSingleChange,
      disabled,
      open,
      onOpenChange: setOpen,
      name,
      children: [
        /* @__PURE__ */ jsxs5(
          SelectPrimitive.Trigger,
          {
            className: cn(
              "flex items-center justify-between w-full",
              "h-8 px-3",
              "rounded-medium border",
              "bg-canvas-default",
              "text-sm",
              "transition-colors duration-fast",
              "outline-none",
              error ? "border-danger-emphasis" : "border-border-default hover:border-border-muted",
              "focus:border-accent-emphasis focus:ring-1 focus:ring-accent-emphasis",
              "data-[placeholder]:text-fg-subtle",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-canvas-subtle",
              className
            ),
            children: [
              /* @__PURE__ */ jsx6(SelectPrimitive.Value, { placeholder }),
              /* @__PURE__ */ jsx6(SelectPrimitive.Icon, { children: /* @__PURE__ */ jsx6(ChevronDownIcon, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsx6(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs5(
          SelectPrimitive.Content,
          {
            className: cn(
              "z-50",
              "bg-canvas",
              "border border-border",
              "rounded-medium shadow-medium",
              "max-h-60 overflow-auto",
              "animate-in fade-in-0 zoom-in-95"
            ),
            position: "popper",
            sideOffset: 4,
            children: [
              searchable && /* @__PURE__ */ jsx6("div", { className: "p-2 border-b border-border-subtle", children: /* @__PURE__ */ jsx6(
                "input",
                {
                  type: "text",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  placeholder: "Search...",
                  className: cn(
                    "w-full h-7 px-2",
                    "text-sm",
                    "bg-canvas-subtle",
                    "border border-border-default rounded-small",
                    "outline-none focus:border-accent-emphasis"
                  ),
                  onClick: (e) => e.stopPropagation()
                }
              ) }),
              /* @__PURE__ */ jsxs5(SelectPrimitive.Viewport, { className: "p-1", children: [
                filteredOptions.map((option) => /* @__PURE__ */ jsxs5(
                  SelectPrimitive.Item,
                  {
                    value: String(option.value),
                    disabled: option.disabled,
                    className: cn(
                      "relative flex items-center",
                      "px-8 py-2",
                      "text-sm",
                      "rounded-small",
                      "cursor-pointer",
                      "outline-none",
                      "hover:bg-canvas-subtle",
                      "focus:bg-canvas-subtle",
                      "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ jsx6(SelectPrimitive.ItemIndicator, { className: "absolute left-2", children: /* @__PURE__ */ jsx6(CheckIcon, {}) }),
                      /* @__PURE__ */ jsx6(SelectPrimitive.ItemText, { children: option.label })
                    ]
                  },
                  String(option.value)
                )),
                filteredOptions.length === 0 && /* @__PURE__ */ jsx6("div", { className: "px-3 py-2 text-sm text-fg-muted", children: "No options found" })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
Select.displayName = "Select";

// src/components/Form/Checkbox.tsx
import * as React5 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var CheckIcon2 = () => /* @__PURE__ */ jsx7(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx7(
      "path",
      {
        d: "M10 3L4.5 8.5L2 6",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var MinusIcon = () => /* @__PURE__ */ jsx7(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx7(
      "path",
      {
        d: "M2.5 6H9.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round"
      }
    )
  }
);
var Checkbox = React5.forwardRef(({ indeterminate = false, label, className, disabled, ...props }, ref) => {
  const checkedState = indeterminate ? "indeterminate" : props.checked;
  return /* @__PURE__ */ jsxs6(
    "label",
    {
      className: cn(
        "inline-flex items-center gap-2",
        "cursor-pointer",
        disabled && "cursor-not-allowed opacity-50"
      ),
      children: [
        /* @__PURE__ */ jsx7(
          CheckboxPrimitive.Root,
          {
            ref,
            disabled,
            checked: checkedState,
            className: cn(
              "flex items-center justify-center",
              "w-4 h-4",
              "rounded-small",
              "border",
              "bg-canvas-default",
              "transition-colors duration-fast",
              "border-border-default",
              "hover:border-border-muted",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis focus-visible:ring-offset-2",
              "data-[state=checked]:bg-accent-emphasis data-[state=checked]:border-accent-emphasis",
              "data-[state=indeterminate]:bg-accent-emphasis data-[state=indeterminate]:border-accent-emphasis",
              "disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx7(CheckboxPrimitive.Indicator, { className: "text-fg-on-emphasis", children: indeterminate ? /* @__PURE__ */ jsx7(MinusIcon, {}) : /* @__PURE__ */ jsx7(CheckIcon2, {}) })
          }
        ),
        label && /* @__PURE__ */ jsx7("span", { className: "text-sm text-fg-default select-none", children: label })
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

// src/components/Form/Radio.tsx
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function RadioGroup({
  options,
  value,
  onChange,
  orientation = "vertical",
  name,
  disabled = false,
  className
}) {
  return /* @__PURE__ */ jsx8(
    RadioGroupPrimitive.Root,
    {
      name,
      value,
      onValueChange: (v) => onChange?.(v),
      disabled,
      orientation,
      className: cn(
        "flex",
        orientation === "horizontal" ? "flex-row gap-4" : "flex-col gap-2",
        className
      ),
      children: options.map((option) => /* @__PURE__ */ jsxs7(
        "label",
        {
          className: cn(
            "inline-flex items-center gap-2",
            "cursor-pointer",
            (disabled || option.disabled) && "cursor-not-allowed opacity-50"
          ),
          children: [
            /* @__PURE__ */ jsx8(
              RadioGroupPrimitive.Item,
              {
                value: String(option.value),
                disabled: option.disabled,
                className: cn(
                  "flex items-center justify-center",
                  "w-4 h-4",
                  "rounded-full",
                  "border",
                  "bg-canvas-default",
                  "transition-colors duration-fast",
                  "border-border-default",
                  "hover:border-border-muted",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis focus-visible:ring-offset-2",
                  "data-[state=checked]:border-accent-emphasis",
                  "disabled:cursor-not-allowed disabled:opacity-50"
                ),
                children: /* @__PURE__ */ jsx8(
                  RadioGroupPrimitive.Indicator,
                  {
                    className: cn(
                      "w-2 h-2",
                      "rounded-full",
                      "bg-accent-emphasis"
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx8("span", { className: "text-sm text-fg-default select-none", children: option.label })
          ]
        },
        String(option.value)
      ))
    }
  );
}
RadioGroup.displayName = "RadioGroup";

// src/components/Form/TextArea.tsx
import * as React6 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var TextArea = React6.forwardRef(
  ({
    autoResize = false,
    error = false,
    minRows = 3,
    maxRows = 10,
    className,
    disabled,
    onChange,
    value,
    ...props
  }, ref) => {
    const textareaRef = React6.useRef(null);
    const [internalValue, setInternalValue] = React6.useState(value || "");
    React6.useImperativeHandle(ref, () => textareaRef.current);
    const lineHeight = 20;
    const paddingY = 16;
    const minHeight = minRows * lineHeight + paddingY;
    const maxHeight = maxRows * lineHeight + paddingY;
    const adjustHeight = React6.useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea || !autoResize) return;
      textarea.style.height = "auto";
      const newHeight = Math.min(
        Math.max(textarea.scrollHeight, minHeight),
        maxHeight
      );
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    }, [autoResize, minHeight, maxHeight]);
    React6.useEffect(() => {
      adjustHeight();
    }, [internalValue, adjustHeight]);
    React6.useEffect(() => {
      adjustHeight();
    }, [adjustHeight]);
    const handleChange = (event) => {
      setInternalValue(event.target.value);
      onChange?.(event);
    };
    React6.useEffect(() => {
      if (value !== void 0) {
        setInternalValue(value);
      }
    }, [value]);
    return /* @__PURE__ */ jsx9(
      "textarea",
      {
        ref: textareaRef,
        disabled,
        value: value !== void 0 ? value : internalValue,
        onChange: handleChange,
        rows: autoResize ? minRows : props.rows,
        className: cn(
          "w-full",
          "px-3 py-2",
          "rounded-medium",
          "border",
          "bg-canvas-default",
          "text-sm text-fg-default",
          "placeholder:text-fg-subtle",
          "transition-colors duration-fast",
          "resize-none",
          // Border states
          error ? "border-danger-emphasis" : "border-border-default hover:border-border-muted",
          // Focus state
          !error && "focus:border-accent-emphasis focus:ring-1 focus:ring-accent-emphasis",
          error && "focus:ring-1 focus:ring-danger-emphasis",
          // Disabled state
          disabled && "opacity-50 cursor-not-allowed bg-canvas-subtle",
          "outline-none",
          className
        ),
        style: {
          minHeight: autoResize ? minHeight : void 0,
          maxHeight: autoResize ? maxHeight : void 0
        },
        "aria-invalid": error,
        ...props
      }
    );
  }
);
TextArea.displayName = "TextArea";

// src/components/Avatar/Avatar.tsx
import * as React7 from "react";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var sizeStyles2 = {
  small: "h-6 w-6 text-xs",
  medium: "h-8 w-8 text-sm",
  large: "h-12 w-12 text-base"
};
var statusSizeStyles = {
  small: "h-2 w-2 border",
  medium: "h-2.5 w-2.5 border-[1.5px]",
  large: "h-3 w-3 border-2"
};
var statusColorStyles = {
  online: "bg-success-emphasis",
  offline: "bg-fg-muted",
  busy: "bg-danger-emphasis"
};
var statusLabels = {
  online: "Online",
  offline: "Offline",
  busy: "Busy"
};
var getInitials = (name) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};
var Avatar = React7.forwardRef(
  ({ src, alt, name, size = "medium", status, className }, ref) => {
    const [imageError, setImageError] = React7.useState(false);
    React7.useEffect(() => {
      setImageError(false);
    }, [src]);
    const showImage = src && !imageError;
    const initials = name ? getInitials(name) : "";
    const accessibleName = alt || name || "User avatar";
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        role: "img",
        "aria-label": status ? `${accessibleName} (${statusLabels[status]})` : accessibleName,
        className: cn(
          "relative inline-flex items-center justify-center",
          "rounded-full",
          "bg-canvas-subtle text-fg-muted",
          "font-medium",
          "overflow-hidden",
          "shrink-0",
          sizeStyles2[size],
          className
        ),
        children: [
          showImage ? /* @__PURE__ */ jsx10(
            "img",
            {
              src,
              alt: "",
              onError: () => setImageError(true),
              className: "h-full w-full object-cover",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ jsx10("span", { "aria-hidden": "true", children: initials }),
          status && /* @__PURE__ */ jsx10(
            "span",
            {
              className: cn(
                "absolute bottom-0 right-0",
                "rounded-full",
                "border-canvas-default",
                statusSizeStyles[size],
                statusColorStyles[status]
              ),
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/Avatar/AvatarGroup.tsx
import * as React8 from "react";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var overlapStyles = {
  small: "-space-x-2",
  medium: "-space-x-2.5",
  large: "-space-x-3"
};
var overflowSizeStyles = {
  small: "h-6 w-6 text-xs",
  medium: "h-8 w-8 text-sm",
  large: "h-12 w-12 text-base"
};
var AvatarGroup = ({
  children,
  max,
  size = "medium",
  className
}) => {
  const childArray = React8.Children.toArray(children);
  const totalCount = childArray.length;
  const showMax = max !== void 0 && max > 0 ? max : totalCount;
  const visibleChildren = childArray.slice(0, showMax);
  const overflowCount = totalCount - showMax;
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      className: cn(
        "inline-flex items-center",
        overlapStyles[size],
        className
      ),
      children: [
        visibleChildren.map((child, index) => {
          if (React8.isValidElement(child)) {
            return /* @__PURE__ */ jsx11(
              "div",
              {
                className: "relative ring-2 ring-canvas-default rounded-full",
                style: { zIndex: visibleChildren.length - index },
                children: React8.cloneElement(child, {
                  size
                })
              },
              index
            );
          }
          return child;
        }),
        overflowCount > 0 && /* @__PURE__ */ jsx11(
          "div",
          {
            className: cn(
              "relative inline-flex items-center justify-center",
              "rounded-full",
              "bg-canvas-subtle text-fg-muted",
              "font-medium",
              "ring-2 ring-canvas-default",
              overflowSizeStyles[size]
            ),
            style: { zIndex: 0 },
            "aria-label": `${overflowCount} more users`,
            children: /* @__PURE__ */ jsxs9("span", { children: [
              "+",
              overflowCount
            ] })
          }
        )
      ]
    }
  );
};
AvatarGroup.displayName = "AvatarGroup";

// src/components/Navigation/Header.tsx
import * as React9 from "react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var Header = React9.forwardRef(
  ({ logo, navigation, search, userMenu, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs10(
      "header",
      {
        ref,
        role: "banner",
        className: cn(
          "h-12 w-full flex items-center justify-between px-4",
          "bg-[var(--color-canvas-default)] border-b border-[var(--color-border-default)]",
          "sticky top-0 z-50",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx12("div", { className: "flex items-center shrink-0", children: logo }),
          /* @__PURE__ */ jsxs10("div", { className: "flex items-center flex-1 justify-center gap-4 mx-4", children: [
            navigation && /* @__PURE__ */ jsx12("nav", { "aria-label": "Main navigation", className: "flex items-center", children: navigation }),
            search && /* @__PURE__ */ jsx12("div", { role: "search", className: "flex items-center", children: search })
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "flex items-center shrink-0", children: userMenu })
        ]
      }
    );
  }
);
Header.displayName = "Header";

// src/components/Navigation/Sidebar.tsx
import * as React10 from "react";
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var RESPONSIVE_BREAKPOINT = 1280;
var Sidebar = React10.forwardRef(
  ({
    children,
    collapsed: controlledCollapsed,
    onCollapsedChange,
    width = 240,
    collapsedWidth = 64,
    className,
    "aria-label": ariaLabel = "Sidebar navigation",
    ...props
  }, ref) => {
    const [internalCollapsed, setInternalCollapsed] = React10.useState(false);
    const isControlled = controlledCollapsed !== void 0;
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed;
    React10.useEffect(() => {
      const handleResize = () => {
        const shouldCollapse = window.innerWidth < RESPONSIVE_BREAKPOINT;
        if (isControlled) {
          if (shouldCollapse !== collapsed) {
            onCollapsedChange?.(shouldCollapse);
          }
        } else {
          setInternalCollapsed(shouldCollapse);
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [isControlled, collapsed, onCollapsedChange]);
    const handleToggle = () => {
      const newCollapsed = !collapsed;
      if (isControlled) {
        onCollapsedChange?.(newCollapsed);
      } else {
        setInternalCollapsed(newCollapsed);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "[" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        handleToggle();
      }
    };
    const currentWidth = collapsed ? collapsedWidth : width;
    return /* @__PURE__ */ jsxs11(
      "aside",
      {
        ref,
        role: "complementary",
        "aria-label": ariaLabel,
        className: cn(
          "h-full flex flex-col",
          "bg-[var(--color-canvas-default)] border-r border-[var(--color-border-default)]",
          "transition-[width] duration-[var(--duration-normal,200ms)] ease-[var(--ease-default,ease)]",
          className
        ),
        style: { width: currentWidth },
        "data-collapsed": collapsed,
        onKeyDown: handleKeyDown,
        ...props,
        children: [
          /* @__PURE__ */ jsx13(
            "button",
            {
              type: "button",
              onClick: handleToggle,
              className: cn(
                "flex items-center justify-center",
                "h-10 mx-2 mt-2 mb-1",
                "rounded-[var(--radius-medium,6px)]",
                "text-[var(--color-fg-muted)]",
                "hover:bg-[var(--color-canvas-subtle)] hover:text-[var(--color-fg-default)]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-emphasis)] focus-visible:ring-offset-2",
                "transition-colors duration-[var(--duration-fast,100ms)]"
              ),
              "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
              "aria-expanded": !collapsed,
              "aria-controls": "sidebar-nav",
              children: /* @__PURE__ */ jsx13(
                "svg",
                {
                  className: cn(
                    "w-5 h-5 transition-transform duration-[var(--duration-normal,200ms)]",
                    collapsed && "rotate-180"
                  ),
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx13(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsx13(
            "nav",
            {
              id: "sidebar-nav",
              "aria-label": "Sidebar",
              className: "flex-1 overflow-y-auto overflow-x-hidden px-2 py-1",
              children: /* @__PURE__ */ jsx13(SidebarContext.Provider, { value: { collapsed }, children })
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarContext = React10.createContext({
  collapsed: false
});
var useSidebarContext = () => React10.useContext(SidebarContext);

// src/components/Navigation/SidebarItem.tsx
import * as React11 from "react";
import { Fragment, jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var SidebarItem = React11.forwardRef(
  ({
    icon,
    label,
    href,
    active = false,
    children,
    onClick,
    className,
    ...props
  }, ref) => {
    const { collapsed } = useSidebarContext();
    const [expanded, setExpanded] = React11.useState(false);
    const hasChildren = React11.Children.count(children) > 0;
    const handleClick = (e) => {
      if (hasChildren) {
        e.preventDefault();
        setExpanded(!expanded);
      }
      onClick?.();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (hasChildren) {
          setExpanded(!expanded);
        }
        onClick?.();
      }
      if (hasChildren) {
        if (e.key === "ArrowRight" && !expanded) {
          e.preventDefault();
          setExpanded(true);
        }
        if (e.key === "ArrowLeft" && expanded) {
          e.preventDefault();
          setExpanded(false);
        }
      }
    };
    const itemClasses = cn(
      "flex items-center gap-3 w-full",
      "h-10 px-3 rounded-[var(--radius-medium,6px)]",
      "text-sm font-medium",
      "transition-colors duration-[var(--duration-fast,100ms)]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-emphasis)] focus-visible:ring-offset-2",
      active ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent-fg)]" : "text-[var(--color-fg-muted)] hover:bg-[var(--color-canvas-subtle)] hover:text-[var(--color-fg-default)]",
      collapsed && "justify-center px-0",
      className
    );
    const content = /* @__PURE__ */ jsxs12(Fragment, { children: [
      icon && /* @__PURE__ */ jsx14("span", { className: "flex-shrink-0 w-5 h-5 flex items-center justify-center", children: icon }),
      !collapsed && /* @__PURE__ */ jsxs12(Fragment, { children: [
        /* @__PURE__ */ jsx14("span", { className: "flex-1 truncate", children: label }),
        hasChildren && /* @__PURE__ */ jsx14(
          "svg",
          {
            className: cn(
              "w-4 h-4 flex-shrink-0 transition-transform duration-[var(--duration-fast,100ms)]",
              expanded && "rotate-90"
            ),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ jsx14(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7"
              }
            )
          }
        )
      ] })
    ] });
    const Element = href && !hasChildren ? "a" : "button";
    const elementProps = href && !hasChildren ? { href } : { type: "button" };
    return /* @__PURE__ */ jsxs12("div", { className: "mb-1", children: [
      /* @__PURE__ */ jsx14(
        Element,
        {
          ref,
          className: itemClasses,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
          "aria-current": active ? "page" : void 0,
          "aria-expanded": hasChildren ? expanded : void 0,
          title: collapsed ? label : void 0,
          ...elementProps,
          ...props,
          children: content
        }
      ),
      hasChildren && !collapsed && expanded && /* @__PURE__ */ jsx14("div", { className: "ml-4 mt-1 border-l border-[var(--color-border-muted)] pl-2", children })
    ] });
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/Navigation/Breadcrumb.tsx
import * as React12 from "react";
import { Fragment as Fragment2, jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var DefaultSeparator = () => /* @__PURE__ */ jsx15(
  "span",
  {
    className: "mx-2 text-[var(--color-fg-muted)]",
    "aria-hidden": "true",
    children: "/"
  }
);
var Breadcrumb = React12.forwardRef(
  ({ items, separator, className, ...props }, ref) => {
    if (!items || items.length === 0) {
      return null;
    }
    const renderSeparator = () => {
      if (separator !== void 0) {
        return /* @__PURE__ */ jsx15("span", { className: "mx-2 text-[var(--color-fg-muted)]", "aria-hidden": "true", children: separator });
      }
      return /* @__PURE__ */ jsx15(DefaultSeparator, {});
    };
    return /* @__PURE__ */ jsx15(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: cn("flex items-center text-sm", className),
        ...props,
        children: /* @__PURE__ */ jsx15("ol", { className: "flex items-center list-none p-0 m-0", children: items.map((item, index) => {
          const isLast = index === items.length - 1;
          return /* @__PURE__ */ jsx15("li", { className: "flex items-center", children: isLast ? (
            // Last item: non-clickable, current page
            /* @__PURE__ */ jsx15(
              "span",
              {
                className: "text-[var(--color-fg-default)] font-medium",
                "aria-current": "page",
                children: item.label
              }
            )
          ) : (
            // Ancestor items: clickable links
            /* @__PURE__ */ jsxs13(Fragment2, { children: [
              item.href ? /* @__PURE__ */ jsx15(
                "a",
                {
                  href: item.href,
                  className: cn(
                    "text-[var(--color-fg-muted)]",
                    "hover:text-[var(--color-accent-fg)] hover:underline",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-emphasis)] focus:ring-offset-1 rounded-sm",
                    "transition-colors duration-[var(--duration-fast,100ms)]"
                  ),
                  children: item.label
                }
              ) : /* @__PURE__ */ jsx15("span", { className: "text-[var(--color-fg-muted)]", children: item.label }),
              renderSeparator()
            ] })
          ) }, index);
        }) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// src/components/Navigation/BottomNav.tsx
import * as React13 from "react";
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var MOBILE_BREAKPOINT = 768;
var BottomNav = React13.forwardRef(
  ({ items, maxItems = 5, className, ...props }, ref) => {
    const [isMobile, setIsMobile] = React13.useState(false);
    React13.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
    if (!isMobile) {
      return null;
    }
    const displayItems = items.slice(0, maxItems);
    return /* @__PURE__ */ jsx16(
      "nav",
      {
        ref,
        className: cn(
          "fixed bottom-0 left-0 right-0 z-50",
          "h-16 flex items-center justify-around",
          "bg-[var(--color-canvas-default)] border-t border-[var(--color-border-default)]",
          "safe-area-inset-bottom",
          className
        ),
        role: "navigation",
        "aria-label": "Bottom navigation",
        ...props,
        children: displayItems.map((item) => /* @__PURE__ */ jsx16(BottomNavItemComponent, { item }, item.id))
      }
    );
  }
);
BottomNav.displayName = "BottomNav";
var BottomNavItemComponent = ({ item }) => {
  const { icon, label, href, active, onClick } = item;
  const handleClick = () => {
    onClick?.();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };
  const itemClasses = cn(
    "flex flex-col items-center justify-center",
    "flex-1 h-full px-2 py-1",
    "text-xs font-medium",
    "transition-colors duration-[var(--duration-fast,100ms)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-emphasis)] focus:ring-inset",
    active ? "text-[var(--color-accent-fg)]" : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg-default)]"
  );
  const content = /* @__PURE__ */ jsxs14(Fragment3, { children: [
    /* @__PURE__ */ jsx16(
      "span",
      {
        className: cn(
          "w-6 h-6 flex items-center justify-center mb-1",
          active && "text-[var(--color-accent-fg)]"
        ),
        children: icon
      }
    ),
    /* @__PURE__ */ jsx16("span", { className: "truncate max-w-full", children: label })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx16(
      "a",
      {
        href,
        className: itemClasses,
        onClick: handleClick,
        "aria-current": active ? "page" : void 0,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx16(
    "button",
    {
      type: "button",
      className: itemClasses,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "aria-current": active ? "page" : void 0,
      children: content
    }
  );
};

// src/components/Modal/Modal.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var sizeStyles3 = {
  small: "max-w-[400px]",
  medium: "max-w-[600px]",
  large: "max-w-[800px]",
  fullscreen: "max-w-none w-screen h-screen m-0 rounded-none"
};
var Modal = ({
  open,
  onOpenChange,
  size = "medium",
  closeOnEscape = true,
  closeOnOverlayClick = true,
  children,
  className
}) => {
  const handleEscapeKeyDown = (event) => {
    if (!closeOnEscape) {
      event.preventDefault();
    }
  };
  const handlePointerDownOutside = (event) => {
    if (!closeOnOverlayClick) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ jsx17(DialogPrimitive.Root, { open, onOpenChange, children: /* @__PURE__ */ jsxs15(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx17(
      DialogPrimitive.Overlay,
      {
        className: cn(
          "fixed inset-0 z-50",
          "bg-black/50",
          // Animation
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "duration-300"
        )
      }
    ),
    /* @__PURE__ */ jsx17(
      DialogPrimitive.Content,
      {
        onEscapeKeyDown: handleEscapeKeyDown,
        onPointerDownOutside: handlePointerDownOutside,
        className: cn(
          "fixed left-1/2 top-1/2 z-50",
          "-translate-x-1/2 -translate-y-1/2",
          "w-full",
          "bg-canvas",
          "border border-border",
          "rounded-large",
          "shadow-extra-large",
          "focus:outline-none",
          // Animation
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "duration-300",
          // Size
          sizeStyles3[size],
          // Fullscreen specific
          size === "fullscreen" && "top-0 left-0 translate-x-0 translate-y-0",
          className
        ),
        children
      }
    )
  ] }) });
};
Modal.displayName = "Modal";

// src/components/Modal/ModalHeader.tsx
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var CloseIcon2 = ({ className }) => /* @__PURE__ */ jsxs16(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx18("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ jsx18("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ]
  }
);
var ModalHeader = ({
  children,
  showCloseButton = true,
  className
}) => {
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: cn(
        "flex items-center justify-between",
        "px-6 py-4",
        "border-b border-border-default",
        className
      ),
      children: [
        /* @__PURE__ */ jsx18(DialogPrimitive2.Title, { className: "text-base font-semibold text-fg-default", children }),
        showCloseButton && /* @__PURE__ */ jsx18(
          DialogPrimitive2.Close,
          {
            className: cn(
              "rounded-medium p-1",
              "text-fg-muted hover:text-fg-default",
              "hover:bg-canvas-subtle",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis",
              "transition-colors duration-fast"
            ),
            "aria-label": "Close",
            children: /* @__PURE__ */ jsx18(CloseIcon2, {})
          }
        )
      ]
    }
  );
};
ModalHeader.displayName = "ModalHeader";

// src/components/Modal/ModalBody.tsx
import * as DialogPrimitive3 from "@radix-ui/react-dialog";
import { jsx as jsx19 } from "react/jsx-runtime";
var ModalBody = ({ children, className }) => {
  return /* @__PURE__ */ jsx19(DialogPrimitive3.Description, { asChild: true, children: /* @__PURE__ */ jsx19(
    "div",
    {
      className: cn(
        "px-6 py-4",
        "text-fg-default text-sm",
        "overflow-y-auto",
        "max-h-[60vh]",
        className
      ),
      children
    }
  ) });
};
ModalBody.displayName = "ModalBody";

// src/components/Modal/ModalFooter.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var ModalFooter = ({ children, className }) => {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      className: cn(
        "flex items-center justify-end gap-3",
        "px-6 py-4",
        "border-t border-border-default",
        className
      ),
      children
    }
  );
};
ModalFooter.displayName = "ModalFooter";

// src/components/Modal/Dialog.tsx
import * as React14 from "react";
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
var DialogButton = ({ variant, onClick, children, autoFocus }) => {
  const variantStyles2 = {
    primary: [
      "bg-accent-emphasis text-fg-on-emphasis",
      "hover:bg-[color:color-mix(in_srgb,var(--color-accent-emphasis)_90%,black)]"
    ].join(" "),
    secondary: [
      "bg-canvas-subtle text-fg-default",
      "border border-border-default",
      "hover:bg-canvas-inset"
    ].join(" "),
    danger: [
      "bg-danger-emphasis text-fg-on-emphasis",
      "hover:bg-[color:color-mix(in_srgb,var(--color-danger-emphasis)_90%,black)]"
    ].join(" ")
  };
  return /* @__PURE__ */ jsx21(
    "button",
    {
      type: "button",
      onClick,
      autoFocus,
      className: cn(
        "inline-flex items-center justify-center",
        "h-8 px-4",
        "text-sm font-medium",
        "rounded-medium",
        "transition-colors duration-fast",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis focus-visible:ring-offset-2",
        variantStyles2[variant]
      ),
      children
    }
  );
};
var Dialog = ({
  type,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  open,
  onOpenChange,
  placeholder = "",
  defaultValue = "",
  className
}) => {
  const [inputValue, setInputValue] = React14.useState(defaultValue);
  const inputId = React14.useMemo(() => generateId("dialog-input"), []);
  const descriptionId = React14.useMemo(() => generateId("dialog-desc"), []);
  React14.useEffect(() => {
    if (open) {
      setInputValue(defaultValue);
    }
  }, [open, defaultValue]);
  const handleConfirm = () => {
    if (type === "prompt") {
      onConfirm?.(inputValue);
    } else {
      onConfirm?.();
    }
  };
  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && type === "prompt") {
      event.preventDefault();
      handleConfirm();
    }
  };
  const getConfirmText = () => {
    if (confirmText) return confirmText;
    switch (type) {
      case "confirm":
        return "Confirm";
      case "alert":
        return "OK";
      case "prompt":
        return "Submit";
      default:
        return "OK";
    }
  };
  const getCancelText = () => {
    return cancelText || "Cancel";
  };
  return /* @__PURE__ */ jsxs17(
    Modal,
    {
      open,
      onOpenChange,
      size: "small",
      closeOnEscape: type !== "alert",
      closeOnOverlayClick: type !== "alert",
      className,
      children: [
        /* @__PURE__ */ jsx21(ModalHeader, { showCloseButton: type !== "alert", children: title }),
        /* @__PURE__ */ jsxs17(ModalBody, { children: [
          /* @__PURE__ */ jsx21("p", { id: descriptionId, className: "text-fg-muted", children: message }),
          type === "prompt" && /* @__PURE__ */ jsx21(
            "input",
            {
              id: inputId,
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              onKeyDown: handleKeyDown,
              placeholder,
              "aria-describedby": descriptionId,
              className: cn(
                "mt-4 w-full",
                "h-8 px-3",
                "text-sm text-fg-default",
                "bg-canvas-default",
                "border border-border-default rounded-medium",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-emphasis focus:border-transparent",
                "placeholder:text-fg-subtle"
              ),
              autoFocus: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs17(ModalFooter, { children: [
          type !== "alert" && /* @__PURE__ */ jsx21(DialogButton, { variant: "secondary", onClick: handleCancel, children: getCancelText() }),
          /* @__PURE__ */ jsx21(
            DialogButton,
            {
              variant: type === "confirm" ? "danger" : "primary",
              onClick: handleConfirm,
              autoFocus: type === "alert",
              children: getConfirmText()
            }
          )
        ] })
      ]
    }
  );
};
Dialog.displayName = "Dialog";

// src/components/Tooltip/Tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
function Tooltip({
  content,
  placement = "top",
  delay = 200,
  children,
  className,
  variant = "default"
}) {
  const variantStyles2 = {
    default: "bg-fg-default text-canvas-default",
    nav: "bg-white dark:bg-[#161b22] text-fg-default border border-border shadow-lg"
  };
  const arrowStyles = {
    default: "fill-fg-default",
    nav: "fill-white dark:fill-[#161b22]"
  };
  return /* @__PURE__ */ jsx22(TooltipPrimitive.Provider, { delayDuration: delay, children: /* @__PURE__ */ jsxs18(TooltipPrimitive.Root, { children: [
    /* @__PURE__ */ jsx22(TooltipPrimitive.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsx22(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs18(
      TooltipPrimitive.Content,
      {
        side: placement,
        sideOffset: 8,
        collisionPadding: 8,
        className: cn(
          // Base styles
          "z-50 overflow-hidden rounded-lg px-3 py-2",
          "text-sm font-medium",
          // Variant styles
          variantStyles2[variant],
          // Animation
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          // Side-specific animations
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        children: [
          content,
          /* @__PURE__ */ jsx22(TooltipPrimitive.Arrow, { className: arrowStyles[variant] })
        ]
      }
    ) })
  ] }) });
}
Tooltip.displayName = "Tooltip";

// src/components/Tooltip/Popover.tsx
import * as React15 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
function Popover({
  content,
  placement = "bottom",
  trigger = "click",
  open,
  onOpenChange,
  children,
  className
}) {
  const [internalOpen, setInternalOpen] = React15.useState(false);
  const hoverTimeoutRef = React15.useRef(null);
  const isControlled = open !== void 0;
  const isOpen = isControlled ? open : internalOpen;
  const handleOpenChange = React15.useCallback(
    (newOpen) => {
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );
  const handleMouseEnter = React15.useCallback(() => {
    if (trigger === "hover") {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        handleOpenChange(true);
      }, 200);
    }
  }, [trigger, handleOpenChange]);
  const handleMouseLeave = React15.useCallback(() => {
    if (trigger === "hover") {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        handleOpenChange(false);
      }, 100);
    }
  }, [trigger, handleOpenChange]);
  React15.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs19(PopoverPrimitive.Root, { open: isOpen, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx23(PopoverPrimitive.Trigger, { asChild: true, children: trigger === "hover" ? /* @__PURE__ */ jsx23(
      "span",
      {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        style: { display: "inline-block" },
        children
      }
    ) : children }),
    /* @__PURE__ */ jsx23(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxs19(
      PopoverPrimitive.Content,
      {
        side: placement,
        sideOffset: 4,
        collisionPadding: 8,
        onMouseEnter: trigger === "hover" ? handleMouseEnter : void 0,
        onMouseLeave: trigger === "hover" ? handleMouseLeave : void 0,
        onEscapeKeyDown: () => handleOpenChange(false),
        className: cn(
          // Base styles
          "z-50 w-72 rounded-md border border-border-default",
          "bg-canvas-default p-4 shadow-md outline-none",
          // Animation
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          // Side-specific animations
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        children: [
          content,
          /* @__PURE__ */ jsx23(PopoverPrimitive.Arrow, { className: "fill-canvas-default" })
        ]
      }
    ) })
  ] });
}
Popover.displayName = "Popover";

// src/components/DataTable/DataTable.tsx
import * as React16 from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Fragment as Fragment5, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
var ROW_HEIGHTS = {
  compact: 40,
  default: 48,
  comfortable: 56
};
function getRowKey(row, rowKey) {
  if (typeof rowKey === "function") {
    return rowKey(row);
  }
  return String(row[rowKey]);
}
function getCellValue(row, accessor) {
  if (typeof accessor === "function") {
    return accessor(row);
  }
  return row[accessor];
}
var SortIcon = ({ direction }) => /* @__PURE__ */ jsx24(
  "svg",
  {
    className: cn(
      "w-4 h-4 ml-1 inline-block transition-transform",
      direction === null && "opacity-30"
    ),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: direction === "asc" ? /* @__PURE__ */ jsx24("path", { d: "M12 5v14M5 12l7-7 7 7" }) : direction === "desc" ? /* @__PURE__ */ jsx24("path", { d: "M12 19V5M5 12l7 7 7-7" }) : /* @__PURE__ */ jsxs20(Fragment5, { children: [
      /* @__PURE__ */ jsx24("path", { d: "M8 10l4-4 4 4", opacity: "0.5" }),
      /* @__PURE__ */ jsx24("path", { d: "M8 14l4 4 4-4", opacity: "0.5" })
    ] })
  }
);
var Checkbox2 = ({ checked, indeterminate, onChange, "aria-label": ariaLabel }) => {
  const ref = React16.useRef(null);
  React16.useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);
  return /* @__PURE__ */ jsx24(
    "input",
    {
      ref,
      type: "checkbox",
      checked,
      onChange: (e) => onChange(e.target.checked),
      "aria-label": ariaLabel,
      className: cn(
        "w-4 h-4 rounded border-border-default",
        "text-accent-emphasis focus:ring-accent-emphasis focus:ring-2",
        "cursor-pointer"
      )
    }
  );
};
var ExpandIcon = ({ expanded }) => /* @__PURE__ */ jsx24(
  "svg",
  {
    className: cn(
      "w-4 h-4 transition-transform duration-fast",
      expanded && "rotate-90"
    ),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /* @__PURE__ */ jsx24("path", { d: "M9 18l6-6-6-6" })
  }
);
var ResizeHandle = ({ onResize }) => {
  const [isResizing, setIsResizing] = React16.useState(false);
  const startXRef = React16.useRef(0);
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    startXRef.current = e.clientX;
    const handleMouseMove = (moveEvent) => {
      const delta = moveEvent.clientX - startXRef.current;
      startXRef.current = moveEvent.clientX;
      onResize(delta);
    };
    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: cn(
        "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize",
        "hover:bg-accent-emphasis",
        isResizing && "bg-accent-emphasis"
      ),
      onMouseDown: handleMouseDown,
      role: "separator",
      "aria-orientation": "vertical"
    }
  );
};
function DataTable({
  data,
  columns,
  rowKey,
  selectable = false,
  selectionMode = "multiple",
  selectedRows = /* @__PURE__ */ new Set(),
  onSelectionChange,
  expandable = false,
  expandedRows = /* @__PURE__ */ new Set(),
  onExpandChange,
  renderExpandedRow,
  sortColumn,
  sortDirection,
  onSortChange,
  density = "default",
  striped = false,
  stickyHeader = true,
  virtualizeThreshold = 1e3,
  columnWidths: externalColumnWidths,
  onColumnWidthChange,
  onRowClick,
  onRowDoubleClick,
  className
}) {
  const [internalColumnWidths, setInternalColumnWidths] = React16.useState(
    /* @__PURE__ */ new Map()
  );
  const columnWidths = externalColumnWidths ?? internalColumnWidths;
  const visibleColumns = React16.useMemo(
    () => columns.filter((col) => col.visible !== false),
    [columns]
  );
  const { leftPinnedColumns, unpinnedColumns, rightPinnedColumns } = React16.useMemo(() => {
    const left = [];
    const center = [];
    const right = [];
    visibleColumns.forEach((col) => {
      if (col.pinned === "left") left.push(col);
      else if (col.pinned === "right") right.push(col);
      else center.push(col);
    });
    return { leftPinnedColumns: left, unpinnedColumns: center, rightPinnedColumns: right };
  }, [visibleColumns]);
  const rowHeight = ROW_HEIGHTS[density];
  const handleColumnResize = React16.useCallback(
    (columnId, delta) => {
      const currentWidth = columnWidths.get(columnId) ?? columns.find((c) => c.id === columnId)?.width ?? 150;
      const column = columns.find((c) => c.id === columnId);
      const minWidth = column?.minWidth ?? 50;
      const maxWidth = column?.maxWidth ?? 500;
      const newWidth = Math.max(minWidth, Math.min(maxWidth, currentWidth + delta));
      if (onColumnWidthChange) {
        onColumnWidthChange(columnId, newWidth);
      } else {
        setInternalColumnWidths((prev) => new Map(prev).set(columnId, newWidth));
      }
    },
    [columnWidths, columns, onColumnWidthChange]
  );
  const handleSort = React16.useCallback(
    (columnId) => {
      if (!onSortChange) return;
      let newDirection;
      if (sortColumn !== columnId) {
        newDirection = "asc";
      } else if (sortDirection === "asc") {
        newDirection = "desc";
      } else if (sortDirection === "desc") {
        newDirection = null;
      } else {
        newDirection = "asc";
      }
      onSortChange(columnId, newDirection);
    },
    [sortColumn, sortDirection, onSortChange]
  );
  const handleRowSelect = React16.useCallback(
    (rowId, checked) => {
      if (!onSelectionChange) return;
      const newSelection = new Set(selectedRows);
      if (selectionMode === "single") {
        newSelection.clear();
        if (checked) newSelection.add(rowId);
      } else {
        if (checked) {
          newSelection.add(rowId);
        } else {
          newSelection.delete(rowId);
        }
      }
      onSelectionChange(newSelection);
    },
    [selectedRows, selectionMode, onSelectionChange]
  );
  const handleSelectAll = React16.useCallback(
    (checked) => {
      if (!onSelectionChange) return;
      if (checked) {
        const allKeys = new Set(data.map((row) => getRowKey(row, rowKey)));
        onSelectionChange(allKeys);
      } else {
        onSelectionChange(/* @__PURE__ */ new Set());
      }
    },
    [data, rowKey, onSelectionChange]
  );
  const handleRowExpand = React16.useCallback(
    (rowId) => {
      if (!onExpandChange) return;
      const newExpanded = new Set(expandedRows);
      if (newExpanded.has(rowId)) {
        newExpanded.delete(rowId);
      } else {
        newExpanded.add(rowId);
      }
      onExpandChange(newExpanded);
    },
    [expandedRows, onExpandChange]
  );
  const allSelected = data.length > 0 && data.every((row) => selectedRows.has(getRowKey(row, rowKey)));
  const someSelected = data.some((row) => selectedRows.has(getRowKey(row, rowKey)));
  const isIndeterminate = someSelected && !allSelected;
  const getColumnWidth = (column) => {
    return columnWidths.get(column.id) ?? column.width ?? 150;
  };
  const renderHeaderCell = (column, isPinned = false) => {
    const width = getColumnWidth(column);
    const isSortable = column.sortable && onSortChange;
    const isSorted = sortColumn === column.id;
    const align = column.align || "left";
    const justifyClass = align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";
    return /* @__PURE__ */ jsxs20(
      "th",
      {
        className: cn(
          "relative px-3 py-2 text-sm font-semibold text-fg-default",
          "border-b border-border-default bg-canvas-subtle",
          isPinned && "sticky z-10",
          isSortable && "cursor-pointer select-none hover:bg-canvas-inset",
          align === "center" && "text-center",
          align === "right" && "text-right",
          align === "left" && "text-left"
        ),
        style: { width, minWidth: column.minWidth, maxWidth: column.maxWidth },
        onClick: isSortable ? () => handleSort(column.id) : void 0,
        "aria-sort": isSorted ? sortDirection === "asc" ? "ascending" : "descending" : void 0,
        children: [
          /* @__PURE__ */ jsxs20("div", { className: cn("flex items-center", justifyClass), children: [
            typeof column.header === "string" ? column.header : column.header,
            isSortable && /* @__PURE__ */ jsx24(SortIcon, { direction: isSorted ? sortDirection ?? null : null })
          ] }),
          /* @__PURE__ */ jsx24(ResizeHandle, { onResize: (delta) => handleColumnResize(column.id, delta) })
        ]
      },
      column.id
    );
  };
  const renderDataCell = (row, column, isPinned = false) => {
    const width = getColumnWidth(column);
    const align = column.align || "left";
    return /* @__PURE__ */ jsx24(
      "td",
      {
        className: cn(
          "px-3 py-2 text-sm text-fg-default",
          "border-b border-border-muted",
          isPinned && "sticky bg-canvas-default z-10",
          align === "center" && "text-center",
          align === "right" && "text-right",
          align === "left" && "text-left"
        ),
        style: { width, minWidth: column.minWidth, maxWidth: column.maxWidth },
        children: getCellValue(row, column.accessor)
      },
      column.id
    );
  };
  const renderRow = (row, index) => {
    const rowId = getRowKey(row, rowKey);
    const isSelected = selectedRows.has(rowId);
    const isExpanded = expandedRows.has(rowId);
    return /* @__PURE__ */ jsxs20(React16.Fragment, { children: [
      /* @__PURE__ */ jsxs20(
        "tr",
        {
          className: cn(
            "transition-colors duration-fast",
            striped && index % 2 === 1 && "bg-canvas-subtle",
            "hover:bg-canvas-inset",
            isSelected && "bg-accent-subtle hover:bg-accent-muted",
            onRowClick && "cursor-pointer"
          ),
          style: { height: rowHeight },
          onClick: () => onRowClick?.(row),
          onDoubleClick: () => onRowDoubleClick?.(row),
          "aria-selected": selectable ? isSelected : void 0,
          "data-row-id": rowId,
          children: [
            expandable && /* @__PURE__ */ jsx24("td", { className: "w-10 px-2 border-b border-border-muted", children: /* @__PURE__ */ jsx24(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  handleRowExpand(rowId);
                },
                className: "p-1 rounded hover:bg-canvas-subtle",
                "aria-expanded": isExpanded,
                "aria-label": isExpanded ? "Collapse row" : "Expand row",
                children: /* @__PURE__ */ jsx24(ExpandIcon, { expanded: isExpanded })
              }
            ) }),
            selectable && /* @__PURE__ */ jsx24("td", { className: "w-10 px-2 border-b border-border-muted", children: /* @__PURE__ */ jsx24(
              Checkbox2,
              {
                checked: isSelected,
                onChange: (checked) => handleRowSelect(rowId, checked),
                "aria-label": `Select row ${rowId}`
              }
            ) }),
            leftPinnedColumns.map((col) => renderDataCell(row, col, true)),
            unpinnedColumns.map((col) => renderDataCell(row, col)),
            rightPinnedColumns.map((col) => renderDataCell(row, col, true))
          ]
        }
      ),
      expandable && isExpanded && renderExpandedRow && /* @__PURE__ */ jsx24("tr", { className: "bg-canvas-subtle", children: /* @__PURE__ */ jsx24(
        "td",
        {
          colSpan: visibleColumns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0),
          className: "px-4 py-3 border-b border-border-muted",
          children: renderExpandedRow(row)
        }
      ) })
    ] }, rowId);
  };
  const shouldVirtualize = data.length > virtualizeThreshold;
  const parentRef = React16.useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 5,
    enabled: shouldVirtualize
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();
  const renderVirtualRow = (virtualRow) => {
    const row = data[virtualRow.index];
    const rowId = getRowKey(row, rowKey);
    const isSelected = selectedRows.has(rowId);
    const isExpanded = expandedRows.has(rowId);
    return /* @__PURE__ */ jsxs20(
      "tr",
      {
        className: cn(
          "transition-colors duration-fast absolute w-full",
          striped && virtualRow.index % 2 === 1 && "bg-canvas-subtle",
          "hover:bg-canvas-inset",
          isSelected && "bg-accent-subtle hover:bg-accent-muted",
          onRowClick && "cursor-pointer"
        ),
        style: {
          height: rowHeight,
          transform: `translateY(${virtualRow.start}px)`
        },
        onClick: () => onRowClick?.(row),
        onDoubleClick: () => onRowDoubleClick?.(row),
        "aria-selected": selectable ? isSelected : void 0,
        "data-row-id": rowId,
        children: [
          expandable && /* @__PURE__ */ jsx24("td", { className: "w-10 px-2 border-b border-border-muted", children: /* @__PURE__ */ jsx24(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                handleRowExpand(rowId);
              },
              className: "p-1 rounded hover:bg-canvas-subtle",
              "aria-expanded": isExpanded,
              "aria-label": isExpanded ? "Collapse row" : "Expand row",
              children: /* @__PURE__ */ jsx24(ExpandIcon, { expanded: isExpanded })
            }
          ) }),
          selectable && /* @__PURE__ */ jsx24("td", { className: "w-10 px-2 border-b border-border-muted", children: /* @__PURE__ */ jsx24(
            Checkbox2,
            {
              checked: isSelected,
              onChange: (checked) => handleRowSelect(rowId, checked),
              "aria-label": `Select row ${rowId}`
            }
          ) }),
          leftPinnedColumns.map((col) => renderDataCell(row, col, true)),
          unpinnedColumns.map((col) => renderDataCell(row, col)),
          rightPinnedColumns.map((col) => renderDataCell(row, col, true))
        ]
      },
      rowId
    );
  };
  return /* @__PURE__ */ jsx24(
    "div",
    {
      ref: parentRef,
      className: cn(
        "relative overflow-auto border border-border-default rounded-medium",
        className
      ),
      role: "region",
      "aria-label": "Data table",
      tabIndex: 0,
      children: /* @__PURE__ */ jsxs20(
        "table",
        {
          className: "w-full border-collapse",
          role: "grid",
          "aria-rowcount": data.length,
          "aria-colcount": visibleColumns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0),
          children: [
            /* @__PURE__ */ jsx24("thead", { className: cn(stickyHeader && "sticky top-0 z-20"), children: /* @__PURE__ */ jsxs20("tr", { children: [
              expandable && /* @__PURE__ */ jsx24("th", { className: "w-10 px-2 py-2 border-b border-border-default bg-canvas-subtle" }),
              selectable && selectionMode === "multiple" && /* @__PURE__ */ jsx24("th", { className: "w-10 px-2 py-2 border-b border-border-default bg-canvas-subtle", children: /* @__PURE__ */ jsx24(
                Checkbox2,
                {
                  checked: allSelected,
                  indeterminate: isIndeterminate,
                  onChange: handleSelectAll,
                  "aria-label": "Select all rows"
                }
              ) }),
              selectable && selectionMode === "single" && /* @__PURE__ */ jsx24("th", { className: "w-10 px-2 py-2 border-b border-border-default bg-canvas-subtle" }),
              leftPinnedColumns.map((col) => renderHeaderCell(col, true)),
              unpinnedColumns.map((col) => renderHeaderCell(col)),
              rightPinnedColumns.map((col) => renderHeaderCell(col, true))
            ] }) }),
            /* @__PURE__ */ jsx24("tbody", { children: data.length === 0 ? /* @__PURE__ */ jsx24("tr", { children: /* @__PURE__ */ jsx24(
              "td",
              {
                colSpan: visibleColumns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0),
                className: "px-4 py-8 text-center text-fg-muted",
                children: "No data available"
              }
            ) }) : shouldVirtualize ? /* @__PURE__ */ jsx24("tr", { children: /* @__PURE__ */ jsx24(
              "td",
              {
                colSpan: visibleColumns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0),
                style: { height: totalSize, position: "relative", padding: 0 },
                children: /* @__PURE__ */ jsx24("div", { style: { position: "relative", height: totalSize }, children: /* @__PURE__ */ jsx24("table", { className: "w-full border-collapse", style: { position: "absolute", top: 0, left: 0 }, children: /* @__PURE__ */ jsx24("tbody", { children: virtualRows.map((virtualRow) => renderVirtualRow(virtualRow)) }) }) })
              }
            ) }) : data.map((row, index) => renderRow(row, index)) })
          ]
        }
      )
    }
  );
}
DataTable.displayName = "DataTable";

// src/providers/ThemeProvider.tsx
import * as React17 from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
var ThemeContext = React17.createContext(void 0);
var STORAGE_KEY_DEFAULT = "schema-ui-theme";
function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function getStoredTheme(storageKey) {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
    return null;
  } catch {
    return null;
  }
}
function resolveTheme(theme) {
  if (theme === "system") {
    return getSystemTheme();
  }
  return theme;
}
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = STORAGE_KEY_DEFAULT
}) {
  const [theme, setThemeState] = React17.useState(() => {
    const stored = getStoredTheme(storageKey);
    return stored ?? defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = React17.useState(() => {
    const stored = getStoredTheme(storageKey);
    return resolveTheme(stored ?? defaultTheme);
  });
  React17.useEffect(() => {
    setResolvedTheme(resolveTheme(theme));
  }, [theme]);
  React17.useEffect(() => {
    if (theme !== "system") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setResolvedTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);
  React17.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);
  const setTheme = React17.useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch {
    }
  }, [storageKey]);
  const value = React17.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme
    }),
    [theme, resolvedTheme, setTheme]
  );
  return /* @__PURE__ */ jsx25(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = React17.useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export {
  Avatar,
  AvatarGroup,
  BottomNav,
  Breadcrumb,
  Button,
  Checkbox,
  DataTable,
  Dialog,
  Form,
  FormItem,
  Header,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Popover,
  RadioGroup,
  Select,
  Sidebar,
  SidebarItem,
  Tag,
  TextArea,
  ThemeProvider,
  Tooltip,
  announceToScreenReader,
  cn,
  createSkipLink,
  generateId,
  getAriaProps,
  getContrastRatio,
  getFocusableElements,
  getVisuallyHiddenStyles,
  handleGridKeyboardNavigation,
  handleListKeyboardNavigation,
  isFocusable,
  meetsContrastRequirements,
  prefersHighContrast,
  prefersReducedMotion,
  setRovingTabindex,
  trapFocus,
  useFormContext,
  useReducedMotion,
  useSidebarContext,
  useTheme
};
