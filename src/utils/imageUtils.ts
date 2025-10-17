/**
 * Converts a File object to a base64 data URL string
 * @param file - The file to convert
 * @returns Promise that resolves to base64 data URL
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Converts a base64 data URL to a File object
 * @param dataUrl - The base64 data URL
 * @param filename - The filename for the created file
 * @returns File object
 */
export const base64ToFile = (dataUrl: string, filename: string): File => {
  const arr = dataUrl.split(",")
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png"
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

/**
 * Validates if a string is a valid base64 data URL
 * @param str - String to validate
 * @returns boolean indicating if the string is a valid base64 data URL
 */
export const isValidBase64DataUrl = (str: string): boolean => {
  return /^data:image\/[a-zA-Z]*;base64,/.test(str)
}

/**
 * Extracts the MIME type from a base64 data URL
 * @param dataUrl - The base64 data URL
 * @returns MIME type string or null if invalid
 */
export const getMimeTypeFromDataUrl = (dataUrl: string): string | null => {
  const match = dataUrl.match(/^data:([^;]+);base64,/)
  return match ? match[1] : null
}
