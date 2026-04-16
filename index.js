// Capitalize the first letter of a string
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert a string to kebab-cas
export function kebabCase(str) 
  if (!str) return 
  return st
    .replace(/\s+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2"
    .toLowerCase();
}

// Reverse a strin
export function reverse(str) {
  if (!str) return "";
  return str.split("").reverse().join("");
}