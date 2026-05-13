export async function createTelegramInviteLink(chatId: string): Promise<string> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!botToken) {
    throw new Error('TELEGRAM_BOT_TOKEN not configured');
  }
  
  try {
    // Create a chat invite link with expiration (1 day) and member limit (1 person)
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/createChatInviteLink`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          expire_date: Math.floor(Date.now() / 1000) + 86400, // 24 hours from now
          member_limit: 1, // Single use
        }),
      }
    );
    
    const data = await response.json();
    
    if (!data.ok) {
      console.error('Telegram API error:', data);
      throw new Error(`Telegram API error: ${data.description || 'Unknown error'}`);
    }
    
    return data.result.invite_link;
  } catch (error) {
    console.error('Error creating Telegram invite link:', error);
    throw error;
  }
}

export async function revokeTelegramInviteLink(chatId: string, inviteLink: string): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!botToken) {
    return false;
  }
  
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/revokeChatInviteLink`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          invite_link: inviteLink,
        }),
      }
    );
    
    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Error revoking Telegram invite link:', error);
    return false;
  }
}
