/**
 * Example usage of base64 image conversion functionality
 */

import {
  fileToBase64,
  base64ToFile,
  isValidBase64DataUrl,
  getMimeTypeFromDataUrl
} from "../utils/imageUtils"

// Example 1: Convert a file to base64
export const convertFileToBase64Example = async (file: File) => {
  try {
    const base64String = await fileToBase64(file)
    console.log("Base64 string:", base64String)
    return base64String
  } catch (error) {
    console.error("Error converting file to base64:", error)
  }
}

// Example 2: Convert base64 back to a file
export const convertBase64ToFileExample = (
  base64DataUrl: string,
  filename: string
) => {
  try {
    const file = base64ToFile(base64DataUrl, filename)
    console.log("Created file:", file)
    return file
  } catch (error) {
    console.error("Error converting base64 to file:", error)
  }
}

// Example 3: Validate base64 data URL
export const validateBase64Example = (dataUrl: string) => {
  const isValid = isValidBase64DataUrl(dataUrl)
  console.log("Is valid base64 data URL:", isValid)
  return isValid
}

// Example 4: Get MIME type from base64 data URL
export const getMimeTypeExample = (dataUrl: string) => {
  const mimeType = getMimeTypeFromDataUrl(dataUrl)
  console.log("MIME type:", mimeType)
  return mimeType
}

// Example 5: Complete workflow - file to base64 and back
export const completeWorkflowExample = async (originalFile: File) => {
  try {
    // Step 1: Convert file to base64
    const base64String = await fileToBase64(originalFile)
    console.log(
      "Step 1 - Base64 string:",
      base64String.substring(0, 50) + "..."
    )

    // Step 2: Validate the base64 string
    const isValid = isValidBase64DataUrl(base64String)
    console.log("Step 2 - Is valid:", isValid)

    // Step 3: Get MIME type
    const mimeType = getMimeTypeFromDataUrl(base64String)
    console.log("Step 3 - MIME type:", mimeType)

    // Step 4: Convert back to file
    const newFile = base64ToFile(base64String, `converted_${originalFile.name}`)
    console.log("Step 4 - New file:", newFile)

    return {
      originalFile,
      base64String,
      isValid,
      mimeType,
      newFile
    }
  } catch (error) {
    console.error("Error in complete workflow:", error)
  }
}
