// Capitalize the first letter of a strig
export function capitalize(str) {
  if (!str) return "
  return str.charAt(0).toUpperCase(+ str.slice(1);
}

// Convert a string to kebab-ca
export function kebabCase(str
  if (!str) return "";
  return st
    .replace(/\s+/g, "-
    .replace(/([a-z])(A-Z])/g, "$1-$2"
    .toLowerCase()
}
// Reverse a string
export function revers(str) {
  if (!str) return "";
  return str.split("").reverse().join("");
}