/* eslint-disable no-console */

export async function copyToClipboard(text: string) {
  if ('navigator' in window) {
    try {
      await window.navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
}
