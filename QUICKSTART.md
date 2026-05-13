# 🚀 Inicio Rápido

## 1. Configuración Mínima (5 minutos)

```bash
cd the-remote-chica-web
npm install
cp .env.example .env.local
```

Edita `.env.local` y completa al menos estas variables **MÍNIMAS** para testing local:

```bash
CONTACT_EMAIL=laura@yoviajoytrabajo.com
TELEGRAM_BOT_TOKEN=8720383572:AAE6tkn04x-yX0TUQxTsqpswi-fuTbD8vJI
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 2. Iniciar desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 - verás la landing en español.

Navega a http://localhost:3000/en para la versión en inglés.

## 3. Probar funcionalidades

### ✅ Funciona sin configuración adicional:
- Navegación bilingüe (español/inglés)
- Todas las secciones de contenido
- Diseño responsive
- Selector de idioma en footer

### ⚠️ Requiere configuración de servicios:

**Formularios de contacto:**
- Necesita `RESEND_API_KEY` configurado
- Ver `SETUP.md` para instrucciones de Resend

**Checkout de comunidad:**
- Necesita Stripe configurado (keys + Price ID)
- Ver `SETUP.md` para instrucciones de Stripe

**Acceso automático a Telegram:**
- Necesita `TELEGRAM_CHAT_ID` del grupo privado
- Ver `SETUP.md` para instrucciones

## 4. Siguiente paso: Configuración completa

Lee `SETUP.md` para configurar todos los servicios externos antes del despliegue a producción.

## 5. Build de producción

```bash
npm run build
npm start
```

## 📝 Checklist pre-despliegue

- [ ] Resend API Key configurado y dominio verificado
- [ ] Stripe producto + precio creado
- [ ] `NEXT_PUBLIC_STRIPE_COMMUNITY_PRICE_ID` configurado
- [ ] Bot de Telegram como admin del grupo
- [ ] `TELEGRAM_CHAT_ID` configurado
- [ ] Webhook de Stripe apuntando a dominio de producción
- [ ] Google Analytics configurado (opcional)
- [ ] Variables de entorno copiadas a Vercel
- [ ] Build exitoso: `npm run build`

## 🆘 Problemas comunes

**El servidor no inicia:**
- Verifica que Node.js 18+ esté instalado: `node -v`
- Borra `.next` y `node_modules`, reinstala: `rm -rf .next node_modules && npm install`

**Los formularios no funcionan:**
- Revisa que `RESEND_API_KEY` esté configurado
- Chequea los logs en la consola del navegador

**El checkout de Stripe no funciona:**
- Verifica que todas las variables de Stripe estén configuradas
- Usa las claves de TEST para desarrollo local
- Chequea que `NEXT_PUBLIC_STRIPE_COMMUNITY_PRICE_ID` tenga un Price ID válido

## 📚 Documentación completa

- `README.md` - Documentación técnica completa del proyecto
- `SETUP.md` - Guía detallada de configuración de servicios externos
- `lib/i18n/translations.ts` - Editar textos y traducciones
- `tailwind.config.ts` - Personalizar colores y estilos
