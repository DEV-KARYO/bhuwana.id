export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validasi data yang diterima
    const { name, email, phone, subject, message, recipientName, recipientRole } = body;
    
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Field yang diperlukan tidak lengkap' },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // TODO: Implementasi pengiriman email atau penyimpanan ke database
    // Opsi 1: Gunakan Resend, SendGrid, atau Nodemailer untuk kirim email
    // Opsi 2: Simpan ke database (Supabase, MongoDB, PostgreSQL, dll)
    // Opsi 3: Kirim ke email service eksternal (webhook)
    
    // Untuk sekarang, log ke console dan return success
    console.log('✉️ Contact Form Submission:', {
      senderName: name,
      senderEmail: email,
      senderPhone: phone || 'Not provided',
      subject,
      message,
      sentTo: recipientName,
      recipientRole,
      timestamp: new Date().toISOString(),
    });

    // Simulasi sukses
    return Response.json(
      { 
        success: true, 
        message: 'Pesan Anda telah diterima. Kami akan segera meresponnya.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Terjadi kesalahan saat memproses pesan Anda' },
      { status: 500 }
    );
  }
}

// Batasi metode HTTP yang diizinkan
export async function OPTIONS(request) {
  return Response.json({}, { 
    status: 200,
    headers: {
      'Allow': 'POST, OPTIONS',
    }
  });
}
