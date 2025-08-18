import { google } from 'googleapis';

// Configuração do Google Sheets
const configureGoogleSheets = async () => {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem } = body; // 'mensagem' ainda é recebida, mas não será salva

    // Validação dos dados (mantida a validação para 'mensagem' por enquanto, caso o frontend ainda a envie)
    if (!nome || !email || !telefone || !mensagem) {
      return new Response(
        JSON.stringify({ success: false, message: 'Todos os campos são obrigatórios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const sheets = await configureGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = 'Página1';

    // 1. Verificar emails existentes para evitar duplicatas
    const existingEmailsResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: `${sheetName}!D:D`, // Assumindo que o email está na coluna D
    });

    const existingEmails = existingEmailsResponse.data.values ? 
                           existingEmailsResponse.data.values.flat().map(e => e.toLowerCase()) : [];

    if (existingEmails.includes(email.toLowerCase())) {
      return new Response(
        JSON.stringify({ success: false, message: 'Este email já está cadastrado. Mensagem enviada com sucesso!' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } } // 409 Conflict
      );
    }

    // 2. Salvar na planilha do Google Sheets (sem a coluna 'mensagem')
    const date = new Date().toLocaleDateString('pt-BR');
    const time = new Date().toLocaleTimeString('pt-BR');

    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: sheetName,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[date, time, nome, email, telefone]], 
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Mensagem enviada com sucesso!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao processar o formulário' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}