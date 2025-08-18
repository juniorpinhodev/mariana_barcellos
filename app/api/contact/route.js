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
    const { nome, email, telefone, mensagem } = body;

    // Validação dos dados
    if (!nome || !email || !telefone || !mensagem) {
      return new Response(
        JSON.stringify({ success: false, message: 'Todos os campos são obrigatórios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Salvar na planilha do Google Sheets
    const sheets = await configureGoogleSheets();
    const date = new Date().toLocaleDateString('pt-BR');
    const time = new Date().toLocaleTimeString('pt-BR');

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Página1', // CORREÇÃO FINAL APLICADA AQUI
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[date, time, nome, email, telefone, mensagem]],
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Dados salvos na planilha com sucesso!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro ao salvar os dados' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
