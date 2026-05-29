import express from 'express';
import TelegramBot from 'node-telegram-bot-api';

const router = express.Router();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = new TelegramBot(token);

router.post('/checkout', async (req, res) => {
  try {
    const { userId, username, cartItems, totalPrice } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const itemsList = cartItems
      .map(item => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const message = `
📦 <b>New Order!</b>

👤 <b>Username:</b> ${username}
🆔 <b>ID:</b> ${userId}

📋 <b>Items:</b>
${itemsList}

💰 <b>Total:</b> $${totalPrice.toFixed(2)}
    `;

    await bot.sendMessage(chatId, message.trim(), { parse_mode: 'HTML' });

    res.json({ success: true, message: 'Order sent successfully!' });
  } catch (error) {
    console.error('Error sending order to Telegram:', error);
    res.status(500).json({ error: 'Failed to send order' });
  }
});

export default router;
