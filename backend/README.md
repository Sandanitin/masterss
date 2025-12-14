# Memory MASTERS - Nodemailer Backend

Backend server for Memory MASTERS email service using Nodemailer with Gmail SMTP.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

The `.env` file is already configured with Gmail SMTP credentials:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sainithin95054@gmail.com
SMTP_PASS=vzzp jykw zfpu qzmi
EMAIL_FROM="Memory MASTERS <sainithin95054@gmail.com>"
```

### 3. Start the Server

```bash
npm start
```

Or for development with watch mode:

```bash
npm run dev
```

### 4. Verify Server is Running

Visit: http://localhost:3001/api/health

You should see: `{"status":"ok","message":"Email server is running"}`

## API Endpoints

### POST /api/send-payment-receipt

Sends a payment receipt email to the customer.

**Request Body:**
```json
{
  "customerName": "John Doe",
  "customerEmail": "customer@example.com",
  "customerMobile": "+91 1234567890",
  "paymentId": "pay_ABC123",
  "amount": 5000,
  "standard": "10th",
  "city": "Mumbai"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "<message-id>"
}
```

## Email Template

The server sends a professional HTML email with:
- Payment confirmation badge
- Transaction details (ID, amount, date)
- Student information
- Next steps section
- Branded header and footer

## Running with Frontend

1. **Start Backend** (Terminal 1):
   ```bash
   cd backend
   npm start
   ```

2. **Start Frontend** (Terminal 2):
   ```bash
   cd ..
   npm run dev
   ```

The frontend will automatically connect to the backend at `http://localhost:3001`.

## Deployment

When deploying to production:

1. Deploy the backend to a hosting service (Render, Railway, Vercel, etc.)
2. Update the frontend `.env` file:
   ```env
   VITE_BACKEND_URL=https://your-backend-url.com
   ```

## Troubleshooting

**Error: SMTP Configuration Error**
- Verify the Gmail credentials in `.env`
- Ensure the app password is correct (no spaces)
- Check if "Less secure app access" is enabled or use App Password

**Error: ECONNREFUSED**
- Make sure the backend server is running on port 3001
- Check if another service is using port 3001
- Verify VITE_BACKEND_URL in frontend `.env`
