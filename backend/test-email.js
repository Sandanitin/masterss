// Test script to send a test payment receipt email
const testEmailSending = async () => {
    const backendUrl = 'http://localhost:3001';

    const testData = {
        customerName: 'Test Customer',
        customerEmail: 'sainithin95054@gmail.com', // Send to your own email for testing
        customerMobile: '+91 9876543210',
        paymentId: 'pay_TEST123456',
        amount: 5000,
        standard: '10th Grade',
        city: 'Hyderabad'
    };

    console.log('🧪 Testing payment receipt email...');
    console.log('Sending to:', testData.customerEmail);

    try {
        const response = await fetch(`${backendUrl}/api/send-payment-receipt`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();

        if (response.ok) {
            console.log('✅ SUCCESS! Email sent successfully');
            console.log('Message ID:', result.messageId);
            console.log('\n📬 Check your email inbox:', testData.customerEmail);
        } else {
            console.error('❌ FAILED! Error:', result.message);
        }
    } catch (error) {
        console.error('❌ FAILED! Error:', error.message);
    }
};

// Run the test
testEmailSending();
