export function mergeJSON<TRes>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj1: Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj2: Record<string, any>
) {
  const merged = { ...obj1 };

  for (const key in obj2) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj2.hasOwnProperty(key)) {
      if (
        obj2[key] &&
        typeof obj2[key] === "object" &&
        !Array.isArray(obj2[key])
      ) {
        if (
          obj1[key] &&
          typeof obj1[key] === "object" &&
          !Array.isArray(obj1[key])
        ) {
          merged[key] = mergeJSON(obj1[key], obj2[key]);
        } else {
          merged[key] = { ...obj2[key] };
        }
      } else if (Array.isArray(obj2[key])) {
        merged[key] =
          obj1[key] && Array.isArray(obj1[key])
            ? [...obj1[key], ...obj2[key]]
            : [...obj2[key]];
      } else {
        merged[key] = obj2[key];
      }
    }
  }

  return merged as unknown as TRes;
}
