# blufit Gym Website

Next.js website for blufit Gym in Bondel, Mangaluru.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Google Sheets form saving

The contact form sends enquiries to a Google Sheets webhook before opening WhatsApp.

Set this environment variable in your deployment:

```bash
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/your-web-app-id/exec"
```

Use a Google Apps Script Web App connected to your sheet, with a `doPost` handler that appends the submitted row. The app sends:

- `name`
- `phone`
- `message`
- `source`
- `submittedAt`
- `userAgent`
- `referrer`

Example Apps Script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries');
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.message || '',
    data.source || '',
    data.submittedAt || '',
    data.userAgent || '',
    data.referrer || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```
