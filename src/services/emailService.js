/**
 * Sends an email using the server API
 * 
 * @param {Object} emailData - The email data to send
 * @param {string} emailData.to - Email recipient
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.body - Email body content
 * @returns {Promise} - Response from the API
 */
export async function sendEmail(emailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}