# The Remote Chica - Website

Landing page de alta conversión para The Remote Chica (yoviajoytrabajo.com) con landing bilingüe (español/inglés), formularios de contacto, integración con Stripe para comunidad privada y automatización con Telegram Bot.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Pagos:** Stripe
- **Email:** Resend
- **Automatización:** Telegram Bot API
- **Hosting:** Vercel (recomendado)

## 📋 Requisitos previos

- Node.js 18+ y npm
- Cuenta de Resend (para emails)
- Cuenta de Stripe (para pagos de comunidad)
- Bot de Telegram configurado como admin del grupo

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**

Copia `.env.example` a `.env.local` y completa las siguientes variables:

```bash
# Resend API Key (obtener en resend.com)
RESEND_API_KEY=re_xxxxx

# Stripe (obtener en dashboard.stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Telegram Bot (ya configurado)
TELEGRAM_BOT_TOKEN=8720383572:AAE6tkn04x-yX0TUQxTsqpswi-fuTbD8vJI
TELEGRAM_CHAT_ID=-1001234567890  # ID del grupo/canal de Telegram

# Email de contacto
CONTACT_EMAIL=laura@yoviajoytrabajo.com

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Base URL (para producción)
NEXT_PUBLIC_BASE_URL=https://yoviajoytrabajo.com
```

## 🔧 Configuración detallada

### 1. Resend (Emails)

1. Crea una cuenta en [resend.com](https://resend.com)
2. Verifica el dominio `yoviajoytrabajo.com`
3. Genera una API Key
4. Añádela como `RESEND_API_KEY`

### 2. Stripe (Pagos comunidad)

1. Crea una cuenta en [stripe.com](https://stripe.com)
2. Activa modo test para desarrollo
3. Crea un **Producto** para "Comunidad Privada"
4. Crea un **Precio** recurrente mensual de $29 USD
5. Copia el Price ID (empieza con `price_`)
6. Obtén las claves en Dashboard > Developers > API Keys
7. Configura el webhook:
   - URL: `https://tu-dominio.com/api/stripe/webhook`
   - Eventos: `checkout.session.completed`
   - Copia el webhook secret

**Actualizar Price ID en el código:**

Edita `components/sections/ServicesSection.tsx` línea 202 y añade el botón de checkout con tu Price ID real.

### 3. Telegram Bot

1. **Crear el bot:**
   - Habla con [@BotFather](https://t.me/BotFather) en Telegram
   - Usa `/newbot` y sigue las instrucciones
   - Copia el token (ya configurado: `8720383572:AAE6tkn04x-yX0TUQxTsqpswi-fuTbD8vJI`)

2. **Configurar el grupo:**
   - Crea un grupo privado o canal para la comunidad
   - Añade el bot como administrador con permisos de **Invite Users**
   - Obtén el Chat ID del grupo (puedes usar [@userinfobot](https://t.me/userinfobot))
   - Añade el Chat ID como `TELEGRAM_CHAT_ID`

### 4. Google Analytics (Opcional)

1. Crea una propiedad GA4 en [analytics.google.com](https://analytics.google.com)
2. Copia el ID (formato `G-XXXXXXXXXX`)
3. Añádelo como `NEXT_PUBLIC_GA_ID`

## 🏃 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🌐 Flujos principales

### 1. Formularios de contacto (Talleres/Speaker/Colaboraciones)
1. Usuario completa formulario
2. Validación con Zod
3. Envío a `laura@yoviajoytrabajo.com` vía Resend
4. Redirect a página de confirmación

### 2. Compra de comunidad privada
1. Usuario hace clic en "Unirme a la comunidad"
2. Redirect a Stripe Checkout
3. Usuario completa pago
4. Stripe envía webhook a `/api/stripe/webhook`
5. Backend genera link único de Telegram (1 uso, 24h exp.)
6. Email automático con link de acceso
7. Usuario entra al grupo de Telegram

### 3. Navegación bilingüe
- `/` → redirect a `/es` (español por defecto)
- `/es` → Landing en español
- `/en` → Landing en inglés
- Selector de idioma en footer

## 🚀 Despliegue en Vercel

1. **Conectar repositorio:**
   - Push el código a GitHub
   - Conecta el repo en [vercel.com](https://vercel.com)

2. **Configurar variables de entorno:**
   - Ve a Settings > Environment Variables
   - Añade todas las variables de `.env.local`

3. **Configurar dominio:**
   - Ve a Settings > Domains
   - Añade `yoviajoytrabajo.com`
   - Configura DNS según instrucciones

4. **Configurar webhook de Stripe:**
   - Una vez desplegado, obtén la URL de producción
   - En Stripe Dashboard, actualiza el webhook endpoint a:
     `https://yoviajoytrabajo.com/api/stripe/webhook`
   - Copia el nuevo webhook secret de producción
   - Actualiza `STRIPE_WEBHOOK_SECRET` en Vercel

## 🧪 Testing local del webhook de Stripe

Usa Stripe CLI para probar el webhook localmente:

```bash
# Instalar Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Escuchar webhooks
stripe listen --forward-to localhost:3000/api/stripe/webhook

# En otra terminal, trigger un evento de prueba
stripe trigger checkout.session.completed
```

## 📝 Tareas pendientes

- [ ] Añadir fotos reales de Laura
- [ ] Embedir videos testimoniales desde Google Drive
- [ ] Añadir logos de universidades/empresas colaboradoras
- [ ] Crear producto y precio en Stripe (producción)
- [ ] Actualizar Price ID en el código
- [ ] Configurar dominio personalizado de Resend
- [ ] Configurar Stripe en modo producción

## 🎨 Personalización

### Colores de marca

Definidos en `tailwind.config.ts` y `globals.css`:

- **Azul:** `#34bae3` (`brand-blue`)
- **Rosa:** `#c73960` (`brand-pink`)
- **Naranja:** `#f59321` (`brand-orange`)
- **Azul medio:** `#648dc9` (`brand-blue-medium`)
- **Crema:** `#fbe6ce` (`brand-cream`)

### Contenido y traducciones

Todos los textos están en `lib/i18n/translations.ts`. Edita ese archivo para cambiar copy, añadir secciones o modificar traducciones.

## 🆘 Soporte

Si necesitas ayuda con la configuración, escribe a laura@yoviajoytrabajo.com
