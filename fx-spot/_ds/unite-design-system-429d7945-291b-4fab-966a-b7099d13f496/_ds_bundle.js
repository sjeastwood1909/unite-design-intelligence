/* @ds-bundle: {"format":3,"namespace":"UniteDesignSystem_429d79","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Checkbox","sourcePath":"components/controls/Checkbox.jsx"},{"name":"RadioButton","sourcePath":"components/controls/RadioButton.jsx"},{"name":"RadioButtonGroup","sourcePath":"components/controls/RadioButton.jsx"},{"name":"Toggle","sourcePath":"components/controls/Toggle.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Tile","sourcePath":"components/data/Tile.jsx"},{"name":"InlineNotification","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"ToastNotification","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"Loading","sourcePath":"components/feedback/Loading.jsx"},{"name":"InlineLoading","sourcePath":"components/feedback/Loading.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"NumberInput","sourcePath":"components/forms/NumberInput.jsx"},{"name":"Search","sourcePath":"components/forms/Search.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"UNITE_ICONS","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"ContentSwitcher","sourcePath":"components/navigation/ContentSwitcher.jsx"},{"name":"Link","sourcePath":"components/navigation/Link.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c3764b08a6de","components/controls/Checkbox.jsx":"e911cd203754","components/controls/RadioButton.jsx":"52dab06c47a4","components/controls/Toggle.jsx":"8844b37ed2bd","components/data/Badge.jsx":"7d81d8d32552","components/data/DataTable.jsx":"bc00738e50ac","components/data/Tile.jsx":"0121a457900a","components/feedback/InlineNotification.jsx":"e1416e8d8d50","components/feedback/Loading.jsx":"499941466864","components/feedback/Modal.jsx":"01c682e12b31","components/feedback/ProgressBar.jsx":"e22117b58ed7","components/feedback/Tag.jsx":"44f95abc638c","components/feedback/Tooltip.jsx":"dc2c8a9af6b7","components/forms/Dropdown.jsx":"7510d61d1267","components/forms/NumberInput.jsx":"17a596a3a2f4","components/forms/Search.jsx":"f3f69fc83fb7","components/forms/Select.jsx":"8460f7f4b271","components/forms/TextArea.jsx":"03c2a02d2a4f","components/forms/TextInput.jsx":"69214630317d","components/icons/Icon.jsx":"264e3f073360","components/navigation/Accordion.jsx":"1b039049a3cc","components/navigation/Breadcrumb.jsx":"600f2eb30bb8","components/navigation/ContentSwitcher.jsx":"860a6d88fb29","components/navigation/Link.jsx":"d6af0b2c99a0","components/navigation/Pagination.jsx":"4e0e9673f3f6","components/navigation/Tabs.jsx":"d5c5eed5ce89","ui_kits/trading-workspace/Screens.jsx":"47e734d667b6","ui_kits/trading-workspace/UIShell.jsx":"cfcee69beb29"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UniteDesignSystem_429d79 = window.UniteDesignSystem_429d79 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite Checkbox. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  indeterminate = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-checkbox');
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: 'unite-checkbox ' + (disabled ? 'is-disabled ' : '') + className,
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: inputId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "unite-checkbox__box",
    "aria-hidden": "true"
  }), label != null && /*#__PURE__*/React.createElement("span", {
    className: "unite-control__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/controls/RadioButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite RadioButton — use within a RadioButtonGroup. */
function RadioButton({
  label,
  value,
  checked,
  defaultChecked,
  onChange,
  name,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-radio');
  return /*#__PURE__*/React.createElement("label", {
    className: 'unite-radio ' + (disabled ? 'is-disabled ' : '') + className,
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "unite-radio__circle",
    "aria-hidden": "true"
  }), label != null && /*#__PURE__*/React.createElement("span", {
    className: "unite-control__label"
  }, label));
}

/* Groups radio buttons; manages name + selection. */
function RadioButtonGroup({
  legend,
  name,
  value,
  defaultValue,
  onChange,
  options = [],
  horizontal = true,
  children,
  className = ''
}) {
  const groupName = name || uid('unite-radio-group');
  const [internal, setInternal] = React.useState(defaultValue);
  const controlled = value !== undefined;
  const selected = controlled ? value : internal;
  const handle = v => {
    if (!controlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("fieldset", {
    className: 'unite-form-item ' + className,
    style: {
      border: 'none',
      margin: 0,
      padding: 0
    }
  }, legend && /*#__PURE__*/React.createElement("legend", {
    className: "unite-label",
    style: {
      padding: 0
    }
  }, legend), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      gap: horizontal ? 'var(--spacing-06)' : 'var(--spacing-04)',
      marginBlockStart: 'var(--spacing-02)'
    }
  }, options.map(opt => {
    const o = typeof opt === 'string' ? {
      label: opt,
      value: opt
    } : opt;
    return /*#__PURE__*/React.createElement(RadioButton, {
      key: o.value,
      name: groupName,
      label: o.label,
      value: o.value,
      checked: selected === o.value,
      disabled: o.disabled,
      onChange: () => handle(o.value)
    });
  }), children));
}
Object.assign(__ds_scope, { RadioButton, RadioButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/RadioButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite Toggle switch. */
function Toggle({
  label,
  labelA = 'Off',
  labelB = 'On',
  checked,
  defaultChecked,
  onChange,
  size = 'md',
  hideStateLabel = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-toggle');
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const controlled = checked !== undefined;
  const on = controlled ? checked : internal;
  const handle = e => {
    if (!controlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-toggle ' + (size === 'sm' ? 'unite-toggle--sm ' : '') + (disabled ? 'is-disabled ' : '') + className
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "unite-label"
  }, label), /*#__PURE__*/React.createElement("label", {
    className: "unite-toggle__control",
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "checkbox",
    checked: on,
    onChange: handle,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "unite-toggle__track",
    "aria-hidden": "true"
  }), !hideStateLabel && /*#__PURE__*/React.createElement("span", {
    className: "unite-toggle__state"
  }, on ? labelB : labelA)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Badge — small count / status indicator, typically on an icon. */
function Badge({
  count,
  dot = false,
  max = 99,
  className = '',
  ...rest
}) {
  if (dot) return /*#__PURE__*/React.createElement("span", _extends({
    className: 'unite-badge unite-badge--dot ' + className
  }, rest));
  const display = typeof count === 'number' && count > max ? max + '+' : count;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'unite-badge ' + className
  }, rest), display);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loading.jsx
try { (() => {
/* Unite Loading — circular indeterminate spinner. */
function Loading({
  size = 'md',
  withOverlay = false,
  small = false,
  className = ''
}) {
  const px = small || size === 'sm' ? 16 : size === 'lg' ? 88 : 44;
  const stroke = px <= 16 ? 2 : px <= 44 ? 5 : 8;
  const r = (px - stroke) / 2;
  const c = px / 2;
  const circ = 2 * Math.PI * r;
  const spinner = /*#__PURE__*/React.createElement("span", {
    className: 'unite-loading ' + className,
    role: "status",
    "aria-label": "Loading"
  }, /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: `0 0 ${px} ${px}`
  }, /*#__PURE__*/React.createElement("circle", {
    className: "track",
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    className: "head",
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    strokeWidth: stroke,
    strokeDasharray: circ,
    strokeDashoffset: circ * 0.7
  })));
  if (withOverlay) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--overlay)',
        zIndex: 9000
      }
    }, spinner);
  }
  return spinner;
}

/* Inline loading — spinner + status text, transitions to success. */
function InlineLoading({
  status = 'active',
  text = 'Loading…',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'unite-inline-loading ' + className
  }, status === 'finished' ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--support-success)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 11.6L2.9 8l1-1 2.6 2.6L12.1 4l1 1z"
  }))) : /*#__PURE__*/React.createElement(Loading, {
    small: true
  }), /*#__PURE__*/React.createElement("span", null, text));
}
Object.assign(__ds_scope, { Loading, InlineLoading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/* Unite ProgressBar — determinate or indeterminate progress. */
function ProgressBar({
  label,
  helperText,
  value = 0,
  max = 100,
  status = 'active',
  size = 'md',
  className = ''
}) {
  const pct = status === 'indeterminate' ? 40 : Math.max(0, Math.min(100, value / max * 100));
  const kind = status === 'finished' ? 'success' : status === 'error' ? 'error' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-progress ' + (status === 'indeterminate' ? 'unite-progress--indeterminate ' : '') + (kind ? 'unite-progress--' + kind + ' ' : '') + className
  }, (label || helperText) && /*#__PURE__*/React.createElement("div", {
    className: "unite-progress__labels"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "unite-progress__label"
  }, label), helperText && /*#__PURE__*/React.createElement("span", {
    className: "unite-progress__caption"
  }, helperText)), /*#__PURE__*/React.createElement("div", {
    className: "unite-progress__track",
    role: "progressbar",
    "aria-valuenow": status === 'indeterminate' ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    style: size === 'sm' ? {
      height: '0.25rem'
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "unite-progress__bar",
    style: {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/* Unite Tooltip — hover/focus label for an interactive element. */
function Tooltip({
  label,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'unite-tooltip ' + className,
    tabIndex: 0
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "unite-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite TextArea — multi-line text field. */
function TextArea({
  label,
  helperText,
  placeholder,
  value,
  defaultValue,
  onChange,
  rows = 4,
  invalid = false,
  invalidText,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-textarea');
  const fieldClass = ['unite-field', invalid ? 'unite-field--invalid' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-form-item ' + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "unite-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: fieldClass,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest)), invalid && invalidText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text unite-helper-text--invalid"
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text"
  }, helperText) : null);
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Design System — Icon
   Renders glyphs from the Unite icon set (Carbon-derived 16px functional icons).
   All glyphs are inlined as currentColor paths and normalized into a 16-unit
   grid so they share a consistent optical size at any `size`. */

const UNITE_ICONS = {
  "analytics": {
    "w": 14,
    "h": 14,
    "d": ["M 1 0 L 0 0 L 0 13 C 0 13.265 0.105 13.52 0.293 13.707 C 0.48 13.895 0.735 14 1 14 L 14 14 L 14 13 L 1 13 L 1 0 Z", "M 14 3.5 L 10.5 3.5 L 10.5 4.5 L 12.295 4.5 L 8.5 8.295 L 6.355 6.145 C 6.309 6.098 6.253 6.061 6.192 6.036 C 6.131 6.01 6.066 5.997 6 5.997 C 5.934 5.997 5.869 6.01 5.808 6.036 C 5.747 6.061 5.691 6.098 5.645 6.145 L 2 9.795 L 2.705 10.5 L 6 7.205 L 8.145 9.355 C 8.191 9.402 8.247 9.439 8.308 9.464 C 8.369 9.49 8.434 9.503 8.5 9.503 C 8.566 9.503 8.631 9.49 8.692 9.464 C 8.753 9.439 8.809 9.402 8.855 9.355 L 13 5.205 L 13 7 L 14 7 L 14 3.5 Z"]
  },
  "catalog": {
    "w": 12,
    "h": 14,
    "d": ["M 11 0 L 2 0 C 1.735 0 1.48 0.105 1.293 0.293 C 1.105 0.48 1 0.735 1 1 L 1 3 L 0 3 L 0 4 L 1 4 L 1 6.5 L 0 6.5 L 0 7.5 L 1 7.5 L 1 10 L 0 10 L 0 11 L 1 11 L 1 13 C 1 13.265 1.105 13.52 1.293 13.707 C 1.48 13.895 1.735 14 2 14 L 11 14 C 11.265 14 11.52 13.895 11.707 13.707 C 11.895 13.52 12 13.265 12 13 L 12 1 C 12 0.735 11.895 0.48 11.707 0.293 C 11.52 0.105 11.265 0 11 0 Z M 11 13 L 2 13 L 2 11 L 3 11 L 3 10 L 2 10 L 2 7.5 L 3 7.5 L 3 6.5 L 2 6.5 L 2 4 L 3 4 L 3 3 L 2 3 L 2 1 L 11 1 L 11 13 Z", "M 9 3 L 5 3 L 5 4 L 9 4 L 9 3 Z", "M 9 6.5 L 5 6.5 L 5 7.5 L 9 7.5 L 9 6.5 Z", "M 9 10 L 5 10 L 5 11 L 9 11 L 9 10 Z"]
  },
  "checkmark-filled": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 5.616 0 4.262 0.411 3.111 1.18 C 1.96 1.949 1.063 3.042 0.533 4.321 C 0.003 5.6 -0.136 7.008 0.135 8.366 C 0.405 9.723 1.071 10.971 2.05 11.95 C 3.029 12.929 4.277 13.595 5.634 13.865 C 6.992 14.136 8.4 13.997 9.679 13.467 C 10.958 12.937 12.051 12.04 12.82 10.889 C 13.589 9.738 14 8.384 14 7 C 14 5.143 13.263 3.363 11.95 2.05 C 10.637 0.737 8.857 0 7 0 Z M 6 9.795 L 3.5 7.295 L 4.295 6.5 L 6 8.205 L 9.705 4.5 L 10.503 5.293 L 6 9.795 Z"]
  },
  "delete": {
    "w": 14,
    "h": 10,
    "d": ["M 5 10 L 13.5 10 C 13.776 10 14 9.776 14 9.5 L 14 0.5 C 14 0.224 13.776 0 13.5 0 L 5 0 C 4.867 0 4.74 0.053 4.646 0.146 L 0.146 4.646 C -0.049 4.842 -0.049 5.158 0.146 5.354 L 4.646 9.854 C 4.74 9.947 4.867 10 5 10 Z M 13 9 L 5.207 9 L 1.207 5 L 5.207 1 L 13 1 L 13 9 Z M 11.5 2.707 L 9.207 5 L 11.5 7.293 L 10.793 8 L 8.5 5.707 L 6.207 8 L 5.5 7.293 L 7.793 5 L 5.5 2.707 L 6.207 2 L 8.5 4.293 L 10.793 2 L 11.5 2.707 Z"]
  },
  "error-filled": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 6.079 -0.006 5.166 0.172 4.315 0.521 C 3.463 0.871 2.689 1.387 2.038 2.038 C 1.387 2.689 0.871 3.463 0.521 4.315 C 0.172 5.166 -0.006 6.079 0 7 C -0.006 7.921 0.172 8.834 0.521 9.686 C 0.871 10.538 1.387 11.311 2.038 11.963 C 2.689 12.614 3.463 13.129 4.315 13.479 C 5.166 13.829 6.079 14.006 7 14 C 7.921 14.006 8.834 13.829 9.686 13.479 C 10.538 13.129 11.311 12.614 11.963 11.963 C 12.614 11.311 13.129 10.538 13.479 9.686 C 13.829 8.834 14.006 7.921 14 7 C 14.006 6.079 13.829 5.166 13.479 4.315 C 13.129 3.463 12.614 2.689 11.963 2.038 C 11.311 1.387 10.538 0.871 9.686 0.521 C 8.834 0.172 7.921 -0.006 7 0 Z M 9.723 10.5 L 3.5 4.278 L 4.278 3.5 L 10.5 9.723 L 9.723 10.5 Z"]
  },
  "folder": {
    "w": 14,
    "h": 12,
    "d": ["M 4.585 1 L 6.295 2.705 L 6.585 3 L 13 3 L 13 11 L 1 11 L 1 1 L 4.585 1 Z M 4.585 0 L 1 0 C 0.735 0 0.48 0.105 0.293 0.293 C 0.105 0.48 0 0.735 0 1 L 0 11 C 0 11.265 0.105 11.52 0.293 11.707 C 0.48 11.895 0.735 12 1 12 L 13 12 C 13.265 12 13.52 11.895 13.707 11.707 C 13.895 11.52 14 11.265 14 11 L 14 3 C 14 2.735 13.895 2.48 13.707 2.293 C 13.52 2.105 13.265 2 13 2 L 7 2 L 5.295 0.295 C 5.202 0.201 5.091 0.127 4.969 0.077 C 4.848 0.026 4.717 0 4.585 0 Z"]
  },
  "help": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 5.616 0 4.262 0.411 3.111 1.18 C 1.96 1.949 1.063 3.042 0.533 4.321 C 0.003 5.6 -0.136 7.008 0.135 8.366 C 0.405 9.723 1.071 10.971 2.05 11.95 C 3.029 12.929 4.277 13.595 5.634 13.865 C 6.992 14.136 8.4 13.997 9.679 13.467 C 10.958 12.937 12.051 12.04 12.82 10.889 C 13.589 9.738 14 8.384 14 7 C 14 5.143 13.263 3.363 11.95 2.05 C 10.637 0.737 8.857 0 7 0 Z M 7 13 C 5.813 13 4.653 12.648 3.667 11.989 C 2.68 11.33 1.911 10.392 1.457 9.296 C 1.003 8.2 0.884 6.993 1.115 5.829 C 1.347 4.666 1.918 3.596 2.757 2.757 C 3.596 1.918 4.666 1.347 5.829 1.115 C 6.993 0.884 8.2 1.003 9.296 1.457 C 10.392 1.911 11.33 2.68 11.989 3.667 C 12.648 4.653 13 5.813 13 7 C 13 8.591 12.368 10.117 11.243 11.243 C 10.117 12.368 8.591 13 7 13 Z", "M 7 11.5 C 7.414 11.5 7.75 11.164 7.75 10.75 C 7.75 10.336 7.414 10 7 10 C 6.586 10 6.25 10.336 6.25 10.75 C 6.25 11.164 6.586 11.5 7 11.5 Z", "M 7.5 3 L 6.75 3 C 6.454 2.999 6.161 3.057 5.888 3.17 C 5.615 3.283 5.367 3.448 5.158 3.658 C 4.948 3.867 4.783 4.115 4.67 4.388 C 4.557 4.661 4.499 4.954 4.5 5.25 L 4.5 5.5 L 5.5 5.5 L 5.5 5.25 C 5.5 4.918 5.632 4.601 5.866 4.366 C 6.101 4.132 6.418 4 6.75 4 L 7.5 4 C 7.832 4 8.149 4.132 8.384 4.366 C 8.618 4.601 8.75 4.918 8.75 5.25 C 8.75 5.582 8.618 5.899 8.384 6.134 C 8.149 6.368 7.832 6.5 7.5 6.5 L 6.5 6.5 L 6.5 8.75 L 7.5 8.75 L 7.5 7.5 C 8.097 7.5 8.669 7.263 9.091 6.841 C 9.513 6.419 9.75 5.847 9.75 5.25 C 9.75 4.653 9.513 4.081 9.091 3.659 C 8.669 3.237 8.097 3 7.5 3 Z"]
  },
  "in-progress": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 5.616 0 4.262 0.411 3.111 1.18 C 1.96 1.949 1.063 3.042 0.533 4.321 C 0.003 5.6 -0.136 7.008 0.135 8.366 C 0.405 9.723 1.071 10.971 2.05 11.95 C 3.029 12.929 4.277 13.595 5.634 13.865 C 6.992 14.136 8.4 13.997 9.679 13.467 C 10.958 12.937 12.051 12.04 12.82 10.889 C 13.589 9.738 14 8.384 14 7 C 13.998 5.144 13.26 3.365 11.947 2.053 C 10.635 0.74 8.856 0.002 7 0 L 7 0 Z M 7 13 C 5.409 13 3.883 12.368 2.757 11.243 C 1.632 10.117 1 8.591 1 7 C 1 5.409 1.632 3.883 2.757 2.757 C 3.883 1.632 5.409 1 7 1 L 7 7 L 11.241 11.241 C 10.684 11.799 10.024 12.242 9.296 12.543 C 8.568 12.845 7.788 13 7 13 L 7 13 Z"]
  },
  "information-filled": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 5.616 0 4.262 0.411 3.111 1.18 C 1.96 1.949 1.063 3.042 0.533 4.321 C 0.003 5.6 -0.136 7.008 0.135 8.366 C 0.405 9.723 1.071 10.971 2.05 11.95 C 3.029 12.929 4.277 13.595 5.634 13.865 C 6.992 14.136 8.4 13.997 9.679 13.467 C 10.958 12.937 12.051 12.04 12.82 10.889 C 13.589 9.738 14 8.384 14 7 C 14 5.143 13.263 3.363 11.95 2.05 C 10.637 0.737 8.857 0 7 0 L 7 0 Z M 7 3 C 7.148 3 7.293 3.044 7.417 3.126 C 7.54 3.209 7.636 3.326 7.693 3.463 C 7.75 3.6 7.765 3.751 7.736 3.896 C 7.707 4.042 7.635 4.175 7.53 4.28 C 7.425 4.385 7.292 4.457 7.146 4.486 C 7.001 4.515 6.85 4.5 6.713 4.443 C 6.576 4.386 6.459 4.29 6.376 4.167 C 6.294 4.043 6.25 3.898 6.25 3.75 C 6.25 3.551 6.329 3.36 6.47 3.22 C 6.61 3.079 6.801 3 7 3 Z M 9 11.063 L 5 11.063 L 5 9.938 L 6.438 9.938 L 6.438 7.063 L 5.5 7.063 L 5.5 5.938 L 7.563 5.938 L 7.563 9.938 L 9 9.938 L 9 11.063 Z"]
  },
  "information": {
    "w": 14,
    "h": 14,
    "d": ["M 7.5 10 L 7.5 6 L 5.5 6 L 5.5 7 L 6.5 7 L 6.5 10 L 5 10 L 5 11 L 9 11 L 9 10 L 7.5 10 Z", "M 7 3 C 6.852 3 6.707 3.044 6.583 3.126 C 6.46 3.209 6.364 3.326 6.307 3.463 C 6.25 3.6 6.235 3.751 6.264 3.896 C 6.293 4.042 6.365 4.175 6.47 4.28 C 6.575 4.385 6.708 4.457 6.854 4.486 C 6.999 4.515 7.15 4.5 7.287 4.443 C 7.424 4.386 7.541 4.29 7.624 4.167 C 7.706 4.043 7.75 3.898 7.75 3.75 C 7.75 3.551 7.671 3.36 7.53 3.22 C 7.39 3.079 7.199 3 7 3 Z", "M 7 14 C 5.616 14 4.262 13.589 3.111 12.82 C 1.96 12.051 1.063 10.958 0.533 9.679 C 0.003 8.4 -0.136 6.992 0.135 5.634 C 0.405 4.277 1.071 3.029 2.05 2.05 C 3.029 1.071 4.277 0.405 5.634 0.135 C 6.992 -0.136 8.4 0.003 9.679 0.533 C 10.958 1.063 12.051 1.96 12.82 3.111 C 13.589 4.262 14 5.616 14 7 C 14 8.857 13.263 10.637 11.95 11.95 C 10.637 13.263 8.857 14 7 14 Z M 7 1 C 5.813 1 4.653 1.352 3.667 2.011 C 2.68 2.67 1.911 3.608 1.457 4.704 C 1.003 5.8 0.884 7.007 1.115 8.171 C 1.347 9.334 1.918 10.404 2.757 11.243 C 3.596 12.082 4.666 12.653 5.829 12.885 C 6.993 13.116 8.2 12.997 9.296 12.543 C 10.392 12.089 11.33 11.32 11.989 10.333 C 12.648 9.347 13 8.187 13 7 C 13 5.409 12.368 3.883 11.243 2.757 C 10.117 1.632 8.591 1 7 1 Z"]
  },
  "list": {
    "w": 12,
    "h": 10,
    "d": ["M 12 0 L 3 0 L 3 1 L 12 1 L 12 0 Z", "M 12 9 L 3 9 L 3 10 L 12 10 L 12 9 Z", "M 12 4.5 L 3 4.5 L 3 5.5 L 12 5.5 L 12 4.5 Z", "M 1 4.5 L 0 4.5 L 0 5.5 L 1 5.5 L 1 4.5 Z", "M 1 0 L 0 0 L 0 1 L 1 1 L 1 0 Z", "M 1 9 L 0 9 L 0 10 L 1 10 L 1 9 Z"]
  },
  "menu": {
    "w": 12,
    "h": 10,
    "d": ["M 12 0 L 0 0 L 0 1 L 12 1 L 12 0 Z", "M 12 9 L 0 9 L 0 10 L 12 10 L 12 9 Z", "M 12 3 L 0 3 L 0 4 L 12 4 L 12 3 Z", "M 12 6 L 0 6 L 0 7 L 12 7 L 12 6 Z"]
  },
  "moon": {
    "w": 11.995,
    "h": 13,
    "d": ["M 4.751 1.207 C 4.522 2.185 4.491 3.2 4.66 4.191 C 4.828 5.182 5.193 6.129 5.734 6.976 C 6.274 7.824 6.978 8.555 7.805 9.127 C 8.632 9.698 9.564 10.098 10.548 10.304 C 10.031 10.839 9.411 11.265 8.726 11.556 C 8.041 11.847 7.305 11.998 6.561 11.999 C 6.491 11.999 6.422 12.001 6.352 11.999 C 5.056 11.953 3.817 11.455 2.851 10.591 C 1.884 9.727 1.251 8.551 1.061 7.269 C 0.871 5.986 1.136 4.678 1.81 3.57 C 2.484 2.463 3.525 1.627 4.751 1.207 L 4.751 1.207 Z M 5.49 0 C 5.461 0 5.432 0.003 5.403 0.008 C 3.811 0.291 2.38 1.153 1.385 2.428 C 0.39 3.703 -0.097 5.3 0.016 6.914 C 0.129 8.527 0.836 10.041 1.999 11.164 C 3.162 12.288 4.699 12.941 6.315 12.999 C 6.397 13.002 6.479 12.999 6.561 12.999 C 7.61 12.999 8.644 12.747 9.575 12.264 C 10.507 11.78 11.308 11.079 11.912 10.221 C 11.961 10.147 11.989 10.061 11.994 9.973 C 12 9.884 11.982 9.796 11.942 9.717 C 11.902 9.637 11.842 9.57 11.768 9.521 C 11.694 9.472 11.608 9.444 11.52 9.439 C 10.521 9.351 9.556 9.035 8.698 8.515 C 7.841 7.994 7.115 7.284 6.576 6.438 C 6.037 5.593 5.7 4.635 5.591 3.638 C 5.481 2.641 5.602 1.632 5.945 0.69 C 5.974 0.615 5.985 0.533 5.976 0.453 C 5.967 0.373 5.94 0.295 5.895 0.228 C 5.851 0.16 5.791 0.105 5.72 0.065 C 5.65 0.025 5.571 0.003 5.49 0 L 5.49 0 Z"]
  },
  "pending-filled": {
    "w": 14,
    "h": 14,
    "d": ["M 7 0 C 5.616 0 4.262 0.411 3.111 1.18 C 1.96 1.949 1.063 3.042 0.533 4.321 C 0.003 5.6 -0.136 7.008 0.135 8.366 C 0.405 9.723 1.071 10.971 2.05 11.95 C 3.029 12.929 4.277 13.595 5.634 13.865 C 6.992 14.136 8.4 13.997 9.679 13.467 C 10.958 12.937 12.051 12.04 12.82 10.889 C 13.589 9.738 14 8.384 14 7 C 14 5.143 13.263 3.363 11.95 2.05 C 10.637 0.737 8.857 0 7 0 L 7 0 Z M 3 8 C 2.802 8 2.609 7.941 2.444 7.831 C 2.28 7.722 2.152 7.565 2.076 7.383 C 2 7.2 1.981 6.999 2.019 6.805 C 2.058 6.611 2.153 6.433 2.293 6.293 C 2.433 6.153 2.611 6.058 2.805 6.019 C 2.999 5.981 3.2 6 3.383 6.076 C 3.565 6.152 3.722 6.28 3.831 6.444 C 3.941 6.609 4 6.802 4 7 C 4 7.265 3.895 7.52 3.707 7.707 C 3.52 7.895 3.265 8 3 8 Z M 7 8 C 6.802 8 6.609 7.941 6.444 7.831 C 6.28 7.722 6.152 7.565 6.076 7.383 C 6 7.2 5.981 6.999 6.019 6.805 C 6.058 6.611 6.153 6.433 6.293 6.293 C 6.433 6.153 6.611 6.058 6.805 6.019 C 6.999 5.981 7.2 6 7.383 6.076 C 7.565 6.152 7.722 6.28 7.831 6.444 C 7.941 6.609 8 6.802 8 7 C 8 7.265 7.895 7.52 7.707 7.707 C 7.52 7.895 7.265 8 7 8 L 7 8 Z M 11 8 C 10.802 8 10.609 7.941 10.444 7.831 C 10.28 7.722 10.152 7.565 10.076 7.383 C 10 7.2 9.981 6.999 10.019 6.805 C 10.058 6.611 10.153 6.433 10.293 6.293 C 10.433 6.153 10.611 6.058 10.805 6.019 C 10.999 5.981 11.2 6 11.383 6.076 C 11.565 6.152 11.722 6.28 11.831 6.444 C 11.941 6.609 12 6.802 12 7 C 12 7.265 11.895 7.52 11.707 7.707 C 11.52 7.895 11.265 8 11 8 Z"]
  },
  "renew": {
    "w": 13,
    "h": 13.013,
    "d": ["M 4.5 3.507 L 1.89 3.507 C 2.537 2.513 3.487 1.755 4.6 1.345 C 5.713 0.935 6.928 0.896 8.065 1.234 C 9.201 1.571 10.199 2.267 10.908 3.217 C 11.617 4.167 12 5.321 12 6.507 L 13 6.507 C 13.001 5.169 12.59 3.864 11.823 2.769 C 11.055 1.674 9.969 0.843 8.711 0.388 C 7.454 -0.067 6.086 -0.123 4.796 0.227 C 3.505 0.578 2.354 1.318 1.5 2.347 L 1.5 0.507 L 0.5 0.507 L 0.5 4.507 L 4.5 4.507 L 4.5 3.507 Z", "M 8.5 9.507 L 11.11 9.507 C 10.463 10.501 9.513 11.259 8.4 11.668 C 7.287 12.078 6.072 12.117 4.935 11.78 C 3.799 11.442 2.801 10.747 2.092 9.797 C 1.383 8.846 1 7.692 1 6.507 L 0 6.507 C -0.001 7.844 0.41 9.149 1.177 10.244 C 1.945 11.339 3.031 12.171 4.289 12.626 C 5.546 13.081 6.914 13.137 8.204 12.786 C 9.495 12.435 10.646 11.695 11.5 10.667 L 11.5 12.507 L 12.5 12.507 L 12.5 8.507 L 8.5 8.507 L 8.5 9.507 Z"]
  },
  "search": {
    "w": 13.518,
    "h": 13.518,
    "d": ["M 13.518 12.811 L 9.742 9.035 C 10.649 7.945 11.101 6.548 11.005 5.134 C 10.908 3.719 10.27 2.396 9.223 1.441 C 8.176 0.485 6.801 -0.031 5.384 0.001 C 3.966 0.034 2.616 0.611 1.614 1.614 C 0.611 2.616 0.034 3.966 0.001 5.384 C -0.031 6.801 0.485 8.176 1.441 9.223 C 2.396 10.27 3.719 10.908 5.134 11.005 C 6.548 11.101 7.945 10.649 9.035 9.742 L 12.811 13.518 L 13.518 12.811 Z M 1.018 5.518 C 1.018 4.628 1.282 3.758 1.776 3.018 C 2.271 2.278 2.973 1.701 3.796 1.36 C 4.618 1.02 5.523 0.931 6.396 1.104 C 7.269 1.278 8.07 1.706 8.7 2.336 C 9.329 2.965 9.758 3.767 9.931 4.64 C 10.105 5.513 10.016 6.418 9.675 7.24 C 9.335 8.062 8.758 8.765 8.018 9.259 C 7.278 9.754 6.408 10.018 5.518 10.018 C 4.325 10.016 3.181 9.542 2.337 8.698 C 1.494 7.855 1.019 6.711 1.018 5.518 Z"]
  },
  "send": {
    "w": 12.014,
    "h": 11.998,
    "d": ["M 11.742 5.553 L 0.742 0.053 C 0.656 0.01 0.559 -0.008 0.463 0.003 C 0.368 0.014 0.277 0.052 0.202 0.113 C 0.131 0.173 0.078 0.251 0.049 0.339 C 0.019 0.428 0.016 0.522 0.037 0.613 L 1.517 5.998 L 0.017 11.368 C -0.003 11.443 -0.005 11.523 0.01 11.599 C 0.026 11.676 0.06 11.748 0.108 11.809 C 0.157 11.87 0.219 11.919 0.29 11.952 C 0.361 11.985 0.439 12.001 0.517 11.998 C 0.596 11.997 0.673 11.978 0.742 11.943 L 11.742 6.443 C 11.824 6.401 11.893 6.337 11.941 6.259 C 11.989 6.18 12.014 6.09 12.014 5.998 C 12.014 5.906 11.989 5.816 11.941 5.737 C 11.893 5.659 11.824 5.595 11.742 5.553 Z M 1.292 10.553 L 2.397 6.498 L 7.017 6.498 L 7.017 5.498 L 2.397 5.498 L 1.292 1.443 L 10.397 5.998 L 1.292 10.553 Z"]
  },
  "view-off": {
    "w": 15,
    "h": 14,
    "d": ["M 2.12 10.255 L 2.835 9.545 C 2.052 8.842 1.437 7.972 1.035 7 C 2.05 4.465 4.85 2.5 7.5 2.5 C 8.182 2.509 8.858 2.631 9.5 2.86 L 10.275 2.08 C 9.396 1.709 8.454 1.512 7.5 1.5 C 5.87 1.561 4.294 2.099 2.966 3.046 C 1.639 3.993 0.618 5.309 0.03 6.83 C -0.01 6.94 -0.01 7.06 0.03 7.17 C 0.474 8.349 1.19 9.406 2.12 10.255 Z", "M 5.5 6.865 C 5.535 6.386 5.741 5.935 6.08 5.596 C 6.42 5.256 6.871 5.05 7.35 5.015 L 8.255 4.105 C 7.748 3.971 7.214 3.973 6.708 4.11 C 6.202 4.247 5.74 4.514 5.37 4.885 C 4.999 5.256 4.732 5.717 4.595 6.223 C 4.458 6.73 4.456 7.263 4.59 7.77 L 5.5 6.865 Z", "M 14.97 6.83 C 14.396 5.337 13.399 4.044 12.1 3.11 L 14.5 0.705 L 13.795 0 L 0.5 13.295 L 1.205 14 L 3.755 11.45 C 4.892 12.117 6.182 12.479 7.5 12.5 C 9.13 12.439 10.706 11.901 12.033 10.954 C 13.361 10.007 14.382 8.691 14.97 7.17 C 15.01 7.06 15.01 6.94 14.97 6.83 Z M 9.5 7 C 9.498 7.35 9.404 7.693 9.227 7.996 C 9.051 8.298 8.798 8.549 8.495 8.723 C 8.191 8.897 7.847 8.988 7.497 8.988 C 7.147 8.987 6.803 8.895 6.5 8.72 L 9.22 6 C 9.4 6.303 9.496 6.648 9.5 7 Z M 7.5 11.5 C 6.451 11.482 5.422 11.211 4.5 10.71 L 5.77 9.44 C 6.347 9.841 7.048 10.026 7.748 9.963 C 8.448 9.9 9.104 9.594 9.601 9.097 C 10.098 8.599 10.405 7.943 10.468 7.243 C 10.531 6.543 10.346 5.843 9.945 5.265 L 11.38 3.83 C 12.527 4.617 13.424 5.718 13.965 7 C 12.95 9.535 10.15 11.5 7.5 11.5 Z"]
  },
  "view": {
    "w": 15,
    "h": 11,
    "d": ["M 14.97 5.33 C 14.382 3.809 13.361 2.493 12.033 1.546 C 10.706 0.599 9.13 0.061 7.5 0 C 5.87 0.061 4.294 0.599 2.966 1.546 C 1.639 2.493 0.618 3.809 0.03 5.33 C -0.01 5.44 -0.01 5.56 0.03 5.67 C 0.618 7.191 1.639 8.507 2.966 9.454 C 4.294 10.401 5.87 10.939 7.5 11 C 9.13 10.939 10.706 10.401 12.033 9.454 C 13.361 8.507 14.382 7.191 14.97 5.67 C 15.01 5.56 15.01 5.44 14.97 5.33 Z M 7.5 10 C 4.85 10 2.05 8.035 1.035 5.5 C 2.05 2.965 4.85 1 7.5 1 C 10.15 1 12.95 2.965 13.965 5.5 C 12.95 8.035 10.15 10 7.5 10 Z", "M 7.5 2.5 C 6.906 2.5 6.326 2.676 5.833 3.006 C 5.34 3.335 4.955 3.804 4.728 4.352 C 4.501 4.9 4.442 5.503 4.557 6.085 C 4.673 6.667 4.959 7.202 5.378 7.621 C 5.798 8.041 6.333 8.327 6.915 8.442 C 7.496 8.558 8.1 8.499 8.648 8.272 C 9.196 8.045 9.665 7.66 9.994 7.167 C 10.324 6.673 10.5 6.093 10.5 5.5 C 10.5 4.704 10.184 3.941 9.621 3.379 C 9.058 2.816 8.295 2.5 7.5 2.5 Z M 7.5 7.5 C 7.104 7.5 6.718 7.383 6.389 7.163 C 6.06 6.943 5.803 6.631 5.652 6.265 C 5.501 5.9 5.461 5.498 5.538 5.11 C 5.615 4.722 5.806 4.365 6.086 4.086 C 6.365 3.806 6.722 3.616 7.11 3.538 C 7.498 3.461 7.9 3.501 8.265 3.652 C 8.631 3.804 8.943 4.06 9.163 4.389 C 9.382 4.718 9.5 5.104 9.5 5.5 C 9.5 6.03 9.289 6.539 8.914 6.914 C 8.539 7.289 8.03 7.5 7.5 7.5 Z"]
  },
  "warning-filled": {
    "w": 14,
    "h": 13.5,
    "d": ["M 7.001 1.586 L 6.999 1.586 L 1.324 12.498 L 1.325 12.5 L 12.675 12.5 L 12.676 12.498 L 7.001 1.586 Z M 6.438 4.5 L 7.563 4.5 L 7.563 9 L 6.438 9 L 6.438 4.5 Z M 7 11.5 C 6.852 11.5 6.707 11.456 6.583 11.374 C 6.46 11.291 6.364 11.174 6.307 11.037 C 6.25 10.9 6.235 10.749 6.264 10.604 C 6.293 10.458 6.365 10.325 6.47 10.22 C 6.575 10.115 6.708 10.043 6.854 10.014 C 6.999 9.985 7.15 10 7.287 10.057 C 7.424 10.114 7.541 10.21 7.624 10.333 C 7.706 10.457 7.75 10.602 7.75 10.75 C 7.75 10.949 7.671 11.14 7.53 11.28 C 7.39 11.421 7.199 11.5 7 11.5 Z", "M 13.5 13.5 L 0.5 13.5 C 0.414 13.5 0.33 13.478 0.255 13.436 C 0.18 13.394 0.117 13.333 0.073 13.259 C 0.028 13.186 0.003 13.102 0 13.017 C -0.003 12.931 0.017 12.846 0.056 12.769 L 6.556 0.269 C 6.599 0.188 6.662 0.12 6.741 0.073 C 6.819 0.025 6.908 0 7 0 C 7.092 0 7.181 0.025 7.259 0.073 C 7.338 0.12 7.401 0.188 7.444 0.269 L 13.944 12.769 C 13.983 12.846 14.003 12.931 14 13.017 C 13.997 13.102 13.972 13.186 13.927 13.259 C 13.883 13.333 13.82 13.394 13.745 13.436 C 13.67 13.478 13.586 13.5 13.5 13.5 Z M 1.325 12.5 L 12.675 12.5 L 12.676 12.498 L 7.001 1.586 L 6.999 1.586 L 1.324 12.498 L 1.325 12.5 Z"]
  },
  "chevron-down": {
    "w": 16,
    "h": 16,
    "d": ["M8 11L3 6l.7-.7L8 9.6l4.3-4.3.7.7z"]
  },
  "chevron-up": {
    "w": 16,
    "h": 16,
    "d": ["M8 5l5 5-.7.7L8 6.4l-4.3 4.3L3 10z"]
  },
  "chevron-right": {
    "w": 16,
    "h": 16,
    "d": ["M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"]
  },
  "chevron-left": {
    "w": 16,
    "h": 16,
    "d": ["M5 8l5-5 .7.7L6.4 8l4.3 4.3L10 13z"]
  },
  "caret-down": {
    "w": 16,
    "h": 16,
    "d": ["M8 11L4 6h8z"]
  },
  "close": {
    "w": 16,
    "h": 16,
    "d": ["M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3 4.7 12 8 8.7 11.3 12 12 11.3 8.7 8z"]
  },
  "add": {
    "w": 16,
    "h": 16,
    "d": ["M14 7L9 7 9 2 7 2 7 7 2 7 2 9 7 9 7 14 9 14 9 9 14 9z"]
  },
  "subtract": {
    "w": 16,
    "h": 16,
    "d": ["M2 7.5h12v1H2z"]
  },
  "arrow-right": {
    "w": 16,
    "h": 16,
    "d": ["M10 4l-.7.7L12.1 7.5H2v1h10.1l-2.8 2.8.7.7 4-4z"]
  },
  "arrow-left": {
    "w": 16,
    "h": 16,
    "d": ["M6 4l.7.7L3.9 7.5H14v1H3.9l2.8 2.8-.7.7-4-4z"]
  },
  "checkmark": {
    "w": 16,
    "h": 16,
    "d": ["M6.5 11.6L2.9 8l1-1 2.6 2.6L12.1 4l1 1z"]
  },
  "overflow-vertical": {
    "w": 16,
    "h": 16,
    "d": ["M8 2.5a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z", "M8 6.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z", "M8 10.7a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"]
  },
  "overflow-horizontal": {
    "w": 16,
    "h": 16,
    "d": ["M4 6.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z", "M8 6.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z", "M12 6.6a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"]
  },
  "filter": {
    "w": 16,
    "h": 16,
    "d": ["M2 3h12v1.2H2zM4 7.4h8v1.2H4zM6 11.8h4v1.2H6z"]
  },
  "draggable": {
    "w": 16,
    "h": 16,
    "d": ["M6 3.2a1 1 0 11-2 0 1 1 0 012 0zM12 3.2a1 1 0 11-2 0 1 1 0 012 0zM6 8a1 1 0 11-2 0 1 1 0 012 0zM12 8a1 1 0 11-2 0 1 1 0 012 0zM6 12.8a1 1 0 11-2 0 1 1 0 012 0zM12 12.8a1 1 0 11-2 0 1 1 0 012 0z"]
  },
  "warning-alt": {
    "w": 16,
    "h": 16,
    "d": ["M8 1L1 13.5h14L8 1zm-.55 4h1.1v4.5h-1.1V5zM8 12a.75.75 0 110-1.5A.75.75 0 018 12z"]
  },
  "user": {
    "w": 16,
    "h": 16,
    "d": ["M8 1.6a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2zM8 8.4c-2.7 0-5 1.5-5 3.6V14h10v-2c0-2.1-2.3-3.6-5-3.6z"]
  },
  "settings": {
    "w": 16,
    "h": 16,
    "d": ["M13.5 8.7v-1.4l-1.4-.3a4.4 4.4 0 00-.4-1l.8-1.2-1-1-1.2.8a4.4 4.4 0 00-1-.4L8 1.5H6.6L6.3 2.9a4.4 4.4 0 00-1 .4l-1.2-.8-1 1 .8 1.2a4.4 4.4 0 00-.4 1l-1.4.3v1.4l1.4.3c.1.35.24.68.4 1l-.8 1.2 1 1 1.2-.8c.32.16.65.3 1 .4l.3 1.4H8l.3-1.4c.35-.1.68-.24 1-.4l1.2.8 1-1-.8-1.2c.16-.32.3-.65.4-1l1.4-.3zM8 10a2 2 0 110-4 2 2 0 010 4z"]
  },
  "notification": {
    "w": 16,
    "h": 16,
    "d": ["M14 11.3l-1.4-1.7V7a4.6 4.6 0 00-3.6-4.5V2a1 1 0 10-2 0v.5A4.6 4.6 0 003.4 7v2.6L2 11.3V13h12v-1.7zM8 15a1.6 1.6 0 001.5-1h-3A1.6 1.6 0 008 15z"]
  },
  "edit": {
    "w": 16,
    "h": 16,
    "d": ["M2 11.6V14h2.4l7-7-2.4-2.4-7 7zM13.7 5.1a.7.7 0 000-1L11.9 2.3a.7.7 0 00-1 0l-1.1 1.1 2.4 2.4 1.1-1.1z"]
  },
  "copy": {
    "w": 16,
    "h": 16,
    "d": ["M10 1H3a1 1 0 00-1 1v8h1V2h7V1zM13 4H6a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V5a1 1 0 00-1-1zm0 10H6V5h7v9z"]
  },
  "download": {
    "w": 16,
    "h": 16,
    "d": ["M13 11v2H3v-2H2v3h12v-3zM8 10.5L4.5 7l.7-.7L7.5 8.6V1h1v7.6l2.3-2.3.7.7z"]
  },
  "circle-dash": {
    "w": 16,
    "h": 16,
    "d": ["M8 1.4A6.6 6.6 0 108 14.6 6.6 6.6 0 008 1.4zm0 12.1A5.5 5.5 0 118 2.5a5.5 5.5 0 010 11z"]
  },
  "chevron-mini-down": {
    "w": 16,
    "h": 16,
    "d": ["M8 10L4.5 6.5 5.2 5.8 8 8.6l2.8-2.8.7.7z"]
  }
};
const ICON_NAMES = ["add", "analytics", "arrow-left", "arrow-right", "caret-down", "catalog", "checkmark", "checkmark-filled", "chevron-down", "chevron-left", "chevron-mini-down", "chevron-right", "chevron-up", "circle-dash", "close", "copy", "delete", "download", "draggable", "edit", "error-filled", "filter", "folder", "help", "in-progress", "information", "information-filled", "list", "menu", "moon", "notification", "overflow-horizontal", "overflow-vertical", "pending-filled", "renew", "search", "send", "settings", "subtract", "user", "view", "view-off", "warning-alt", "warning-filled"];

/* ─── Dynamic Carbon CDN loader ─────────────────────────────────────────────
   For any icon not in UNITE_ICONS, we lazily fetch it from the official
   @carbon/icons package on unpkg (Apache-2.0). The CDN module is a CommonJS
   descriptor object; we extract viewBox + path data with a simple regex and
   normalise it into the same { w, h, d[] } shape used by the inline registry.

   Carbon naming convention:
     - Most icons: kebab-case  e.g. "add", "close", "arrow-right"
     - Filled/directional variants use double-dash: "warning--filled",
       "checkmark--filled", "chevron--down", "arrow--right"
   Pass the Carbon icon folder name exactly (no size suffix).
   Full library reference: https://carbondesignsystem.com/elements/icons/library/
   ─────────────────────────────────────────────────────────────────────────── */
const _dynCache = {}; // name → { w, h, d }
const _inFlight = {}; // name → Promise

function _fetchCarbon(name) {
  if (_dynCache[name]) return Promise.resolve(_dynCache[name]);
  if (_inFlight[name]) return _inFlight[name];
  const url = 'https://unpkg.com/@carbon/icons/lib/' + name + '/16.js';
  const p = fetch(url).then(function (r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.text();
  }).then(function (text) {
    const vbMatch = text.match(/"viewBox"\s*:\s*"([^"]+)"/);
    const pathMatches = [...text.matchAll(/"d"\s*:\s*"([^"]+)"/g)];
    if (!vbMatch || !pathMatches.length) throw new Error('parse');
    const parts = vbMatch[1].split(/\s+/).map(Number);
    const w = parts[2],
      h = parts[3];
    const d = pathMatches.map(function (m) {
      return m[1].replace(/\\"/g, '"');
    });
    const def = {
      w: w,
      h: h,
      d: d
    };
    _dynCache[name] = def;
    return def;
  }).finally(function () {
    delete _inFlight[name];
  });
  _inFlight[name] = p;
  return p;
}
function Icon({
  name,
  size = 16,
  title,
  className = '',
  style = {},
  ...rest
}) {
  // Initialise from in-memory cache so already-fetched icons render sync.
  const [dynDef, setDynDef] = React.useState(function () {
    return _dynCache[name] || null;
  });
  const def = UNITE_ICONS[name] || dynDef;
  React.useEffect(function () {
    if (UNITE_ICONS[name]) return; // already in inline registry
    if (_dynCache[name]) {
      setDynDef(_dynCache[name]);
      return;
    }
    // Fetch from Carbon CDN, then trigger a re-render.
    _fetchCarbon(name).then(function (d) {
      setDynDef(d);
    }).catch(function () {
      if (typeof console !== 'undefined') console.warn('Unite Icon: could not load "' + name + '" from Carbon CDN (' + 'https://unpkg.com/@carbon/icons/lib/' + name + '/16.js' + '). ' + 'Check the icon name at https://carbondesignsystem.com/elements/icons/library/');
    });
  }, [name]);
  if (!def) {
    // While the CDN fetch is in flight, render an invisible placeholder that
    // reserves the same space so layout doesn't shift on load.
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        flexShrink: 0,
        verticalAlign: 'middle',
        ...style
      }
    });
  }
  const {
    w,
    h,
    d
  } = def;
  const target = 14;
  const scale = target / Math.max(w, h);
  const tx = (16 - w * scale) / 2;
  const ty = (16 - h * scale) / 2;
  const transform = w === 16 && h === 16 ? undefined : 'translate(' + tx + ' ' + ty + ') scale(' + scale + ')';
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    role: title ? 'img' : 'presentation',
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    focusable: "false",
    className: className,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("g", {
    transform: transform
  }, d.map(function (p, i) {
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p
    });
  })));
}
Object.assign(__ds_scope, { UNITE_ICONS, ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl'
};

/* Unite Button — the primary action component. */
function Button({
  children,
  kind = 'primary',
  size = 'lg',
  icon,
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  href,
  className = '',
  ...rest
}) {
  const classes = ['unite-btn', 'unite-btn--' + kind, 'unite-btn--' + (SIZES[size] || 'lg'), iconOnly ? 'unite-btn--icon-only' : '', !iconOnly && icon ? 'unite-btn--with-icon' : '', fullWidth ? 'unite-btn--full' : '', className].filter(Boolean).join(' ');
  const iconEl = icon ? /*#__PURE__*/React.createElement("span", {
    className: "unite-btn__icon",
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 16
  }) : icon) : null;
  const content = iconOnly ? iconEl : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "unite-btn__label"
  }, children), iconEl);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classes,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/* Unite DataTable — sortable, selectable tabular data with toolbar.
   `headers`: [{ key, header, sortable }]  ·  `rows`: [{ id, ...cells }] */
function DataTable({
  title,
  description,
  headers = [],
  rows = [],
  size = 'md',
  selectable = false,
  sortable = false,
  toolbar = null,
  className = ''
}) {
  const [sort, setSort] = React.useState({
    key: null,
    dir: 'none'
  });
  const [selected, setSelected] = React.useState(() => new Set());
  const sorted = React.useMemo(() => {
    if (!sort.key || sort.dir === 'none') return rows;
    const r = [...rows].sort((a, b) => {
      const av = a[sort.key],
        bv = b[sort.key];
      if (av === bv) return 0;
      return (av > bv ? 1 : -1) * (sort.dir === 'asc' ? 1 : -1);
    });
    return r;
  }, [rows, sort]);
  const toggleSort = key => setSort(s => {
    if (s.key !== key) return {
      key,
      dir: 'asc'
    };
    return {
      key,
      dir: s.dir === 'asc' ? 'desc' : s.dir === 'desc' ? 'none' : 'asc'
    };
  });
  const allSelected = rows.length > 0 && selected.size === rows.length;
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(rows.map(r => r.id)));
  const toggleRow = id => setSelected(prev => {
    const n = new Set(prev);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-table-wrap ' + className
  }, (title || toolbar) && /*#__PURE__*/React.createElement("div", {
    className: "unite-table-toolbar"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "unite-table-toolbar__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingInline: 'var(--spacing-05)',
      color: 'var(--text-secondary)',
      fontSize: 'var(--type-body-01-size)'
    }
  }, description)), toolbar), /*#__PURE__*/React.createElement("table", {
    className: 'unite-table unite-table--' + size
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allSelected,
    onChange: toggleAll,
    "aria-label": "Select all rows"
  })), headers.map(h => {
    const isSortable = sortable && h.sortable !== false;
    const active = sort.key === h.key && sort.dir !== 'none';
    return /*#__PURE__*/React.createElement("th", {
      key: h.key,
      className: isSortable ? 'is-sortable' : ''
    }, isSortable ? /*#__PURE__*/React.createElement("button", {
      className: "unite-table__sort",
      onClick: () => toggleSort(h.key)
    }, h.header, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: active ? 1 : 0.4,
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: active && sort.dir === 'desc' ? 'chevron-up' : 'chevron-down',
      size: 16
    }))) : h.header);
  }))), /*#__PURE__*/React.createElement("tbody", null, sorted.map(row => /*#__PURE__*/React.createElement("tr", {
    key: row.id,
    className: selected.has(row.id) ? 'is-selected' : ''
  }, selectable && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.has(row.id),
    onChange: () => toggleRow(row.id),
    "aria-label": 'Select row ' + row.id
  })), headers.map(h => /*#__PURE__*/React.createElement("td", {
    key: h.key
  }, row[h.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Tile — flexible container for grouping content. */
function Tile({
  children,
  kind = 'base',
  href,
  selected = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['unite-tile', kind === 'clickable' ? 'unite-tile--clickable' : '', kind === 'selectable' ? 'unite-tile--selectable' : '', selected ? 'unite-tile--selected' : '', className].filter(Boolean).join(' ');
  if (kind === 'clickable' && href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    onClick: kind === 'selectable' || kind === 'clickable' ? onClick : undefined,
    role: kind === 'selectable' ? 'button' : undefined,
    tabIndex: kind === 'selectable' ? 0 : undefined
  }, rest), kind === 'selectable' && selected && /*#__PURE__*/React.createElement("span", {
    className: "unite-tile__check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark-filled",
    size: 16
  })), children);
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tile.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineNotification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  error: 'error-filled',
  success: 'checkmark-filled',
  warning: 'warning-filled',
  info: 'information-filled'
};

/* Unite InlineNotification — contextual status message tied to a task or region. */
function InlineNotification({
  kind = 'info',
  title,
  subtitle,
  onClose,
  lowContrast = true,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: 'unite-notification unite-notification--' + kind + ' ' + className
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "unite-notification__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[kind],
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "unite-notification__body"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "unite-notification__title"
  }, title, " "), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "unite-notification__subtitle"
  }, subtitle), children), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-notification__close",
    "aria-label": "Close notification",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20
  })));
}

/* Unite ToastNotification — transient, self-dismissing message (high-contrast). */
function ToastNotification({
  kind = 'info',
  title,
  subtitle,
  caption,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: 'unite-notification unite-notification--' + kind + ' unite-notification--toast ' + className,
    style: {
      minWidth: '18rem'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "unite-notification__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[kind],
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "unite-notification__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "unite-notification__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "unite-notification__subtitle"
  }, subtitle), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'var(--spacing-04)',
      fontSize: 'var(--type-label-01-size)',
      opacity: 0.8
    }
  }, caption)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-notification__close",
    "aria-label": "Close notification",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20
  })));
}
Object.assign(__ds_scope, { InlineNotification, ToastNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/* Unite Modal — focused task or confirmation in an overlay. */
function Modal({
  open = true,
  onClose,
  size = 'md',
  label,
  title,
  children,
  primaryText = 'Save',
  secondaryText = 'Cancel',
  onPrimary,
  onSecondary,
  danger = false,
  hideFooter = false,
  className = ''
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "unite-modal__overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: 'unite-modal unite-modal--' + size + ' ' + className,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "unite-modal__header"
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "unite-modal__label"
  }, label), title && /*#__PURE__*/React.createElement("h2", {
    className: "unite-modal__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-modal__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "unite-modal__body"
  }, children), !hideFooter && /*#__PURE__*/React.createElement("div", {
    className: "unite-modal__footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: "secondary",
    onClick: onSecondary || onClose
  }, secondaryText), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    kind: danger ? 'danger' : 'primary',
    onClick: onPrimary
  }, primaryText))));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Tag — compact metadata / category label. */
function Tag({
  children,
  type = 'gray',
  size = 'md',
  filter = false,
  onClose,
  icon,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'unite-tag unite-tag--' + type + (size === 'sm' ? ' unite-tag--sm' : '') + ' ' + className
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, filter && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-tag__close",
    "aria-label": "Remove",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite Dropdown — single-select listbox (custom, for richer option rendering). */
function Dropdown({
  label,
  items = [],
  selectedItem,
  onChange,
  placeholder = 'Choose an option',
  itemToString = i => i == null ? '' : typeof i === 'string' ? i : i.label,
  size = 'md',
  disabled = false,
  id,
  className = ''
}) {
  const baseId = id || uid('unite-dropdown');
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(null);
  const controlled = selectedItem !== undefined;
  const selected = controlled ? selectedItem : internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const pick = item => {
    if (!controlled) setInternal(item);
    onChange && onChange(item);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-form-item ' + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "unite-label",
    htmlFor: baseId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "unite-dropdown",
    "data-open": open,
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    id: baseId,
    type: "button",
    className: "unite-dropdown__trigger",
    "data-placeholder": selected == null,
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      height: 'var(--size-' + size + ')'
    }
  }, /*#__PURE__*/React.createElement("span", null, selected == null ? placeholder : itemToString(selected)), /*#__PURE__*/React.createElement("span", {
    className: "unite-dropdown__chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))), open && /*#__PURE__*/React.createElement("ul", {
    className: "unite-dropdown__menu",
    role: "listbox"
  }, items.map((item, i) => {
    const isSel = selected != null && itemToString(item) === itemToString(selected);
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      role: "option",
      "aria-selected": isSel,
      className: "unite-dropdown__option",
      onClick: () => pick(item)
    }, /*#__PURE__*/React.createElement("span", null, itemToString(item)), isSel && /*#__PURE__*/React.createElement("span", {
      className: "unite-dropdown__check"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "checkmark",
      size: 16
    })));
  }))));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/NumberInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite NumberInput — numeric field with increment / decrement steppers. */
function NumberInput({
  label,
  helperText,
  value,
  defaultValue,
  onChange,
  min,
  max,
  step = 1,
  size = 'md',
  disabled = false,
  invalid = false,
  invalidText,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-number');
  const [internal, setInternal] = React.useState(defaultValue ?? 0);
  const controlled = value !== undefined;
  const val = controlled ? value : internal;
  const clamp = n => {
    if (min != null && n < min) n = min;
    if (max != null && n > max) n = max;
    return n;
  };
  const set = n => {
    n = clamp(n);
    if (!controlled) setInternal(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-form-item ' + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "unite-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "unite-number"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: "number",
    className: 'unite-field unite-field--' + size + (invalid ? ' unite-field--invalid' : ''),
    value: val,
    min: min,
    max: max,
    step: step,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    "aria-invalid": invalid || undefined
  }, rest)), /*#__PURE__*/React.createElement("div", {
    className: "unite-number__steppers"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-number__step",
    "aria-label": "Decrement",
    disabled: disabled,
    onClick: () => set(Number(val) - step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "subtract",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-number__step",
    "aria-label": "Increment",
    disabled: disabled,
    onClick: () => set(Number(val) + step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "add",
    size: 16
  })))), invalid && invalidText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text unite-helper-text--invalid"
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text"
  }, helperText) : null);
}
Object.assign(__ds_scope, { NumberInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NumberInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Search.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Search — text field for filtering / querying, with clear button. */
function Search({
  value,
  defaultValue,
  onChange,
  onClear,
  placeholder = 'Search',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue || '');
  const controlled = value !== undefined;
  const val = controlled ? value : internal;
  const handle = e => {
    if (!controlled) setInternal(e.target.value);
    onChange && onChange(e);
  };
  const clear = () => {
    if (!controlled) setInternal('');
    onClear && onClear();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-search ' + (val ? 'unite-search--has-value ' : '') + className,
    role: "search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "unite-search__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    className: 'unite-field unite-field--' + size,
    placeholder: placeholder,
    value: val,
    onChange: handle,
    disabled: disabled,
    "aria-label": placeholder
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "unite-search__clear",
    "aria-label": "Clear search",
    onClick: clear,
    tabIndex: val ? 0 : -1
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Search });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Search.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite Select — native select styled to Unite with a chevron affordance. */
function Select({
  label,
  helperText,
  value,
  defaultValue,
  onChange,
  children,
  size = 'md',
  invalid = false,
  invalidText,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-select');
  const fieldClass = ['unite-field', 'unite-field--' + size, invalid ? 'unite-field--invalid' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-form-item ' + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "unite-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "unite-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: fieldClass,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    className: "unite-select-chevron"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))), invalid && invalidText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text unite-helper-text--invalid"
  }, invalidText) : helperText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text"
  }, helperText) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;
const uid = p => p + '-' + ++_id;

/* Unite TextInput — single-line text field with label, helper & validation. */
function TextInput({
  label,
  helperText,
  placeholder,
  value,
  defaultValue,
  onChange,
  size = 'md',
  type = 'text',
  invalid = false,
  invalidText,
  warn = false,
  warnText,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || uid('unite-input');
  const fieldClass = ['unite-field', 'unite-field--' + size, invalid ? 'unite-field--invalid' : '', warn && !invalid ? 'unite-field--warn' : ''].filter(Boolean).join(' ');
  const showIcon = invalid || warn;
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-form-item ' + className
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "unite-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "unite-field-wrap"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: fieldClass,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest)), showIcon && /*#__PURE__*/React.createElement("span", {
    className: 'unite-field-icon ' + (invalid ? 'unite-field-icon--error' : 'unite-field-icon--warn')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: invalid ? 'error-filled' : 'warning-filled',
    size: 16
  }))), invalid && invalidText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text unite-helper-text--invalid"
  }, invalidText) : warn && warnText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text"
  }, warnText) : helperText ? /*#__PURE__*/React.createElement("div", {
    className: "unite-helper-text"
  }, helperText) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/* Unite Accordion — stacked, expandable sections. */
function Accordion({
  items = [],
  allowMultiple = false,
  className = ''
}) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => setOpen(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("ul", {
    className: 'unite-accordion ' + className
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "unite-accordion__item",
      "data-open": isOpen
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "unite-accordion__heading",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "unite-accordion__chevron"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      className: "unite-accordion__title"
    }, item.title)), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "unite-accordion__panel"
    }, item.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/* Unite Breadcrumb — shows hierarchy & location. */
function Breadcrumb({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("ol", {
    className: 'unite-breadcrumb ' + className
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "unite-breadcrumb__item",
      "aria-current": last ? 'page' : undefined
    }, last ? item.label : /*#__PURE__*/React.createElement("a", {
      href: item.href || '#'
    }, item.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "unite-breadcrumb__sep",
      "aria-hidden": "true"
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ContentSwitcher.jsx
try { (() => {
/* Unite ContentSwitcher — choose between alternate views of the same content. */
function ContentSwitcher({
  options = [],
  selectedIndex,
  defaultIndex = 0,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultIndex);
  const controlled = selectedIndex !== undefined;
  const sel = controlled ? selectedIndex : internal;
  const select = i => {
    if (!controlled) setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-content-switcher ' + className,
    role: "tablist"
  }, options.map((opt, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "tab",
    className: "unite-content-switcher__btn",
    "aria-selected": i === sel,
    onClick: () => select(i)
  }, typeof opt === 'string' ? opt : opt.label)));
}
Object.assign(__ds_scope, { ContentSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ContentSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Unite Link. */
function Link({
  children,
  href = '#',
  icon,
  inline = false,
  disabled = false,
  visited = false,
  className = '',
  ...rest
}) {
  const cls = ['unite-link', inline ? 'unite-link--inline' : '', visited ? 'unite-link--visited' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", _extends({
    href: disabled ? undefined : href,
    className: cls,
    "aria-disabled": disabled || undefined
  }, rest), children, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Link.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/* Unite Pagination — page through a data set. */
function Pagination({
  totalItems = 0,
  page = 1,
  pageSize = 10,
  pageSizes = [10, 25, 50],
  onPageChange,
  onPageSizeChange,
  className = ''
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-pagination ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "unite-pagination__group"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      borderInlineEnd: '1px solid var(--border-subtle-01)',
      paddingInlineEnd: 'var(--spacing-05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "unite-pagination__text"
  }, "Items per page:"), /*#__PURE__*/React.createElement("select", {
    className: "unite-field unite-field--md",
    style: {
      width: 'auto',
      background: 'transparent',
      borderBlockEnd: 'none',
      paddingInline: 'var(--spacing-03)'
    },
    value: pageSize,
    onChange: e => onPageSizeChange && onPageSizeChange(Number(e.target.value))
  }, pageSizes.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("span", {
    className: "unite-pagination__text"
  }, start, "\u2013", end, " of ", totalItems, " items")), /*#__PURE__*/React.createElement("div", {
    className: "unite-pagination__group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "unite-pagination__text",
    style: {
      borderInlineStart: '1px solid var(--border-subtle-01)'
    }
  }, page, " of ", totalPages, " pages"), /*#__PURE__*/React.createElement("div", {
    className: "unite-pagination__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "unite-pagination__btn",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => onPageChange && onPageChange(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "unite-pagination__btn",
    "aria-label": "Next page",
    disabled: page >= totalPages,
    onClick: () => onPageChange && onPageChange(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/* Unite Tabs — switch between related panels. */
function Tabs({
  tabs = [],
  selectedIndex,
  defaultIndex = 0,
  onChange,
  contained = false,
  children,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultIndex);
  const controlled = selectedIndex !== undefined;
  const sel = controlled ? selectedIndex : internal;
  const select = i => {
    if (!controlled) setInternal(i);
    onChange && onChange(i);
  };
  const panels = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    className: 'unite-tabs ' + (contained ? 'unite-tabs--contained ' : '') + className
  }, /*#__PURE__*/React.createElement("ul", {
    className: "unite-tabs__list",
    role: "tablist"
  }, tabs.map((t, i) => {
    const label = typeof t === 'string' ? t : t.label;
    const disabled = typeof t === 'object' && t.disabled;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      role: "presentation"
    }, /*#__PURE__*/React.createElement("button", {
      role: "tab",
      className: "unite-tab",
      "aria-selected": i === sel,
      disabled: disabled,
      onClick: () => select(i)
    }, label));
  })), panels[sel] != null && /*#__PURE__*/React.createElement("div", {
    className: "unite-tabs__panel",
    role: "tabpanel"
  }, panels[sel]));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trading-workspace/Screens.jsx
try { (() => {
/* Unite Trading Workspace — main content screens.
   Composes Unite primitives (DataTable, Tag, Tile, Tabs, …) into realistic
   markets, blotter and research views. */
const U = window.UniteDesignSystem_429d79;
const {
  DataTable,
  Tag,
  Tile,
  Tabs,
  Button,
  Search,
  ContentSwitcher,
  Icon,
  ProgressBar,
  InlineNotification
} = U;
function Metric({
  label,
  value,
  delta,
  positive
}) {
  return /*#__PURE__*/React.createElement(Tile, {
    className: "tw-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-metric__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tw-metric__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: 'tw-metric__delta ' + (positive ? 'is-up' : 'is-down')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: positive ? 'chevron-up' : 'chevron-down',
    size: 16
  }), delta));
}
function PageHeader({
  breadcrumb,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-pagehead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-pagehead__crumb"
  }, breadcrumb), /*#__PURE__*/React.createElement("div", {
    className: "tw-pagehead__row"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "tw-pagehead__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tw-pagehead__actions"
  }, children)));
}
function MarketsView({
  onNewOrder
}) {
  const quotes = [{
    id: 1,
    sym: 'EURUSD',
    bid: '1.08416',
    ask: '1.08428',
    chg: '+0.55%',
    up: true
  }, {
    id: 2,
    sym: 'GBPUSD',
    bid: '1.27148',
    ask: '1.27162',
    chg: '+0.22%',
    up: true
  }, {
    id: 3,
    sym: 'USDJPY',
    bid: '156.204',
    ask: '156.221',
    chg: '-0.34%',
    up: false
  }, {
    id: 4,
    sym: 'AUDUSD',
    bid: '0.66201',
    ask: '0.66214',
    chg: '-0.11%',
    up: false
  }, {
    id: 5,
    sym: 'USDCHF',
    bid: '0.89945',
    ask: '0.89961',
    chg: '+0.08%',
    up: true
  }, {
    id: 6,
    sym: 'USDCAD',
    bid: '1.37402',
    ask: '1.37418',
    chg: '+0.41%',
    up: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: "Markets / FX Spot",
    title: "FX Spot"
  }, /*#__PURE__*/React.createElement(Button, {
    kind: "ghost",
    icon: "renew",
    iconOnly: true,
    "aria-label": "Refresh"
  }), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    icon: "add",
    onClick: onNewOrder
  }, "New order")), /*#__PURE__*/React.createElement("div", {
    className: "tw-metrics"
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Desk P&L (today)",
    value: "+$48,210",
    delta: "2.4%",
    positive: true
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Net exposure",
    value: "$12.4M",
    delta: "0.8%",
    positive: true
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Open orders",
    value: "14",
    delta: "3",
    positive: false
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Credit used",
    value: "78%",
    delta: "5%",
    positive: false
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-section__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tw-section__title"
  }, "Live quotes"), /*#__PURE__*/React.createElement(ContentSwitcher, {
    options: ['FX', 'Rates', 'Equities']
  })), /*#__PURE__*/React.createElement("div", {
    className: "tw-quotes"
  }, quotes.map(q => /*#__PURE__*/React.createElement(Tile, {
    key: q.id,
    className: "tw-quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-quote__sym"
  }, q.sym), /*#__PURE__*/React.createElement("div", {
    className: "tw-quote__prices"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tw-quote__cap"
  }, "BID"), /*#__PURE__*/React.createElement("span", {
    className: "tw-quote__num"
  }, q.bid)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "tw-quote__cap"
  }, "ASK"), /*#__PURE__*/React.createElement("span", {
    className: "tw-quote__num"
  }, q.ask))), /*#__PURE__*/React.createElement("div", {
    className: 'tw-quote__chg ' + (q.up ? 'is-up' : 'is-down')
  }, q.chg))))));
}
function BlotterView({
  rows,
  onNewOrder
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: "Markets / Blotter",
    title: "Order blotter"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Search, {
    placeholder: "Filter orders"
  })), /*#__PURE__*/React.createElement(Button, {
    kind: "primary",
    icon: "add",
    onClick: onNewOrder
  }, "New order")), /*#__PURE__*/React.createElement("div", {
    className: "tw-section"
  }, /*#__PURE__*/React.createElement(DataTable, {
    title: "Working & filled orders",
    description: "Updated just now \xB7 auto-refresh on",
    selectable: true,
    sortable: true,
    headers: [{
      key: 'sym',
      header: 'Instrument'
    }, {
      key: 'side',
      header: 'Side'
    }, {
      key: 'qty',
      header: 'Quantity'
    }, {
      key: 'px',
      header: 'Limit'
    }, {
      key: 'venue',
      header: 'Venue'
    }, {
      key: 'status',
      header: 'Status'
    }],
    rows: rows
  })));
}
function ResearchView() {
  const notes = [{
    tag: 'FX',
    color: 'teal',
    title: 'EUR resilience into the ECB meeting',
    meta: 'Macro Strategy · 12 min read',
    time: '08:30'
  }, {
    tag: 'Rates',
    color: 'cyan',
    title: 'Front-end repricing: where the curve goes next',
    meta: 'Rates Research · 6 min read',
    time: '07:50'
  }, {
    tag: 'Equities',
    color: 'purple',
    title: 'Earnings season scorecard — week 3',
    meta: 'Equity Research · 9 min read',
    time: 'Yesterday'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "tw-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: "Research / Today",
    title: "Research feed"
  }, /*#__PURE__*/React.createElement(Button, {
    kind: "tertiary",
    icon: "filter"
  }, "Filter")), /*#__PURE__*/React.createElement("div", {
    className: "tw-section",
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(InlineNotification, {
    kind: "info",
    title: "3 new notes",
    subtitle: "Curated for your FX & Rates coverage."
  }), /*#__PURE__*/React.createElement("div", {
    className: "tw-notes"
  }, notes.map((n, i) => /*#__PURE__*/React.createElement(Tile, {
    key: i,
    kind: "clickable",
    href: "#",
    className: "tw-note"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-note__top"
  }, /*#__PURE__*/React.createElement(Tag, {
    type: n.color,
    size: "sm"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    className: "tw-note__time"
  }, n.time)), /*#__PURE__*/React.createElement("div", {
    className: "tw-note__title"
  }, n.title), /*#__PURE__*/React.createElement("div", {
    className: "tw-note__meta"
  }, n.meta))))));
}
Object.assign(window, {
  TWMarketsView: MarketsView,
  TWBlotterView: BlotterView,
  TWResearchView: ResearchView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trading-workspace/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trading-workspace/UIShell.jsx
try { (() => {
/* Unite Trading Workspace — UI Shell (header + side nav).
   Recreates the Unite enterprise shell: a dark global header with product
   wordmark, header nav and action icons, plus a light side navigation rail. */
const {
  Icon,
  Badge
} = window.UniteDesignSystem_429d79;
function Wordmark({
  light = true
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/unite-logo.svg",
    alt: "Unite",
    height: "20",
    style: {
      display: 'block',
      filter: light ? 'invert(1) brightness(10)' : 'none'
    }
  });
}
function Header({
  onToggleNav,
  headerNav = [],
  activeHeader,
  onHeaderNav,
  notifications = 0,
  onAction
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "tw-header"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-header__btn tw-header__menu",
    "aria-label": "Open menu",
    onClick: onToggleNav
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    className: "tw-header__brand",
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("span", {
    className: "tw-header__product"
  }, "Trading")), /*#__PURE__*/React.createElement("nav", {
    className: "tw-header__nav"
  }, headerNav.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    className: 'tw-header__navitem' + (item === activeHeader ? ' is-active' : ''),
    onClick: () => onHeaderNav && onHeaderNav(item)
  }, item))), /*#__PURE__*/React.createElement("div", {
    className: "tw-header__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tw-header__btn",
    "aria-label": "Search",
    onClick: () => onAction && onAction('search')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "tw-header__btn",
    "aria-label": "Notifications",
    onClick: () => onAction && onAction('notifications'),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notification",
    size: 20
  }), notifications > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dot: true
  }))), /*#__PURE__*/React.createElement("button", {
    className: "tw-header__btn",
    "aria-label": "Settings",
    onClick: () => onAction && onAction('settings')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "tw-header__btn tw-header__avatar",
    "aria-label": "Account"
  }, /*#__PURE__*/React.createElement("span", null, "AM"))));
}
function SideNav({
  items = [],
  active,
  onNavigate,
  open = true
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: 'tw-sidenav' + (open ? '' : ' is-collapsed'),
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "tw-sidenav__list"
  }, items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, /*#__PURE__*/React.createElement("button", {
    className: 'tw-sidenav__item' + (item.id === active ? ' is-active' : ''),
    onClick: () => onNavigate && onNavigate(item.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "tw-sidenav__label"
  }, item.label), item.count != null && /*#__PURE__*/React.createElement("span", {
    className: "tw-sidenav__count"
  }, item.count))))));
}
Object.assign(window, {
  TWHeader: Header,
  TWSideNav: SideNav,
  TWWordmark: Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trading-workspace/UIShell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RadioButton = __ds_scope.RadioButton;

__ds_ns.RadioButtonGroup = __ds_scope.RadioButtonGroup;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.InlineNotification = __ds_scope.InlineNotification;

__ds_ns.ToastNotification = __ds_scope.ToastNotification;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.InlineLoading = __ds_scope.InlineLoading;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.NumberInput = __ds_scope.NumberInput;

__ds_ns.Search = __ds_scope.Search;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.UNITE_ICONS = __ds_scope.UNITE_ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.ContentSwitcher = __ds_scope.ContentSwitcher;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
