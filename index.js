// Capitalize the first letter of a string
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase( + str.slce(1);
}

// Convert a string to kebab-ca
export function kebabCase(tr) 
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