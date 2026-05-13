# ⚠️ CONFIGURACIÓN IMPORTANTE

Este proyecto requiere configuración de servicios externos antes del primer despliegue.

## 🔑 Variables de entorno requeridas

Copia el archivo `.env.example` a `.env.local` y completa TODAS las variables:

### Resend (Emails) - REQUERIDO
```bash
RESEND_API_KEY=re_xxxxx
```
**Obtener en:** https://resend.com (después de verificar el dominio)

### Stripe (Pagos) - REQUERIDO
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```
**Obtener en:** https://dashboard.stripe.com/test/apikeys

**IMPORTANTE:** Después de crear el Producto y Precio en Stripe, debes actualizar el Price ID en el código.

**Ubicación:** `components/sections/CommunityCheckoutButton.tsx` o crear una variable de entorno `NEXT_PUBLIC_STRIPE_COMMUNITY_PRICE_ID`

### Telegram Bot - REQUERIDO
```bash
TELEGRAM_BOT_TOKEN=8720383572:AAE6tkn04x-yX0TUQxTsqpswi-fuTbD8vJI
TELEGRAM_CHAT_ID=-1001234567890
```
**El bot token ya está configurado.** Solo necesitas obtener el `TELEGRAM_CHAT_ID` de tu grupo privado.

### Google Analytics - OPCIONAL
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Base URL - REQUERIDO para producción
```bash
NEXT_PUBLIC_BASE_URL=https://yoviajoytrabajo.com
```

## 🚀 Pasos para el primer despliegue

1. ✅ Configurar todas las variables de entorno
2. ✅ Crear producto y precio en Stripe ($29/mes)
3. ✅ Actualizar Price ID en el código (ver sección abajo)
4. ✅ Configurar bot de Telegram como admin del grupo
5. ✅ Verificar dominio en Resend
6. ✅ Desplegar en Vercel
7. ✅ Configurar webhook de Stripe con la URL de producción

## 💳 Configurar Price ID de Stripe

Después de crear el producto "Comunidad Privada" en Stripe:

1. Copia el Price ID (formato: `price_xxxxx`)
2. Añádelo como variable de entorno:

```bash
# .env.local
NEXT_PUBLIC_STRIPE_COMMUNITY_PRICE_ID=price_xxxxx
```

3. Actualiza el archivo `components/sections/CommunityCheckoutButton.tsx` o crea una nueva variable de entorno.

**Alternativa temporal:** Puedes hardcodear el Price ID directamente en `ServicesSection.tsx` línea 232, pero se recomienda usar variable de entorno.

## 📧 Configurar Resend

1. Registrarse en https://resend.com
2. Añadir dominio `yoviajoytrabajo.com`
3. Configurar registros DNS según instrucciones de Resend
4. Esperar verificación (puede tardar hasta 48h)
5. Generar API Key
6. Añadir a `.env.local`

**Nota:** Mientras el dominio se verifica, puedes usar el dominio temporal de Resend para testing, pero los emails pueden ir a spam.

## 🤖 Configurar Telegram Bot

El bot token ya está proporcionado. Solo necesitas:

1. Crear un grupo privado para la comunidad
2. Añadir el bot al grupo: https://t.me/tu_bot_username
3. Darle permisos de administrador con "Invite Users via Link"
4. Obtener el Chat ID:
   - Añade [@userinfobot](https://t.me/userinfobot) al grupo temporalmente
   - El bot te dirá el Chat ID del grupo
   - Formato: `-1001234567890` (negativo para grupos)
5. Remover @userinfobot del grupo
6. Añadir el Chat ID a `.env.local`

## ⚠️ Errores comunes

### "Resend API Key not configured"
- Falta `RESEND_API_KEY` en `.env.local`
- El dominio no está verificado en Resend

### "Stripe webhook signature verification failed"
- El `STRIPE_WEBHOOK_SECRET` no coincide
- En local, usa Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
- En producción, configura el webhook en Stripe Dashboard con la URL real

### "Telegram API error: Bad Request: chat not found"
- El `TELEGRAM_CHAT_ID` es incorrecto
- El bot no está añadido al grupo como admin
- El grupo fue eliminado o el bot fue removido

### Formularios no envían emails
- Revisa que `CONTACT_EMAIL` esté configurado
- Verifica que el dominio de Resend esté verificado
- Chequea los logs en Resend Dashboard

## 🧪 Testing local

```bash
# Instalar dependencias
npm install

# Configurar .env.local (ver arriba)

# Iniciar servidor de desarrollo
npm run dev

# En otra terminal, escuchar webhooks de Stripe (opcional)
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## 📚 Documentación completa

Ver `README.md` para documentación completa del proyecto.
