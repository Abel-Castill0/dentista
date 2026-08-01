# Automatizaciones n8n — Dra. Blue

## Requisitos
- n8n corriendo (local con Docker o cloud)
- Webhooks expuestos (ngrok para local)
- Servicio de email configurado en n8n (SMTP o SendGrid)
- WhatsApp Business API (opcional, para WhatsApp automatizado)

---

## 1. Bienvenida al registrarse
**Trigger**: Webhook POST desde el formulario de reserva
**Acción**: Enviar WhatsApp/email de bienvenida con confirmación de solicitud
**Workflow**:
```
[Webhook] → [WhatsApp/Email: Confirmación] → [NoOp]
```
**Webhook esperado**: `POST {N8N_URL}/webhook/welcome`
**Payload**:
```json
{
  "nombre": "string",
  "email": "string",
  "telefono": "string",
  "servicio": "string",
  "fecha": "ISO date",
  "hora": "string"
}
```

---

## 2. Recordatorio de cita (24h antes)
**Trigger**: Cron "0 8 * * *" (diario 8:00 AM)
**Acción**: Consultar Firestore por reservas del día siguiente, enviar WhatsApp/email
**Workflow**:
```
[Cron] → [Firestore: query reservas fecha=mañana, estado=pendiente] → [Loop] → [WhatsApp/Email recordatorio]
```
**Mensaje**: "Hola {nombre}, te recordamos tu cita de {servicio} mañana a las {hora} con la Dra. Blue. Responde este mensaje si necesitas reprogramarla."

---

## 3. Carrito abandonado (reserva no completada)
**Trigger**: Webhook desde formulario (cada cambio de paso)
**Acción**: Si no se completa en 1 hora, enviar WhatsApp recordatorio
**Workflow**:
```
[Webhook: inicio reserva] → [Wait 1 hour] → [Check Firestore: ¿se completó?] → [No → WhatsApp]
```
**Webhook esperado**: `POST {N8N_URL}/webhook/abandoned`
**Payload**:
```json
{
  "sessionId": "string",
  "nombre": "string",
  "email": "string",
  "pasoAlcanzado": 1 | 2 | 3
}
```

---

## 4. Post-tratamiento
**Trigger**: Webhook desde el sistema de gestión
**Acción**: Enviar WhatsApp con cuidados posteriores y encuesta de satisfacción
**Workflow**:
```
[Webhook] → [Wait 2 days] → [WhatsApp: Cuidados post-tratamiento] → [Wait 7 days] → [Email/WhatsApp: Encuesta satisfacción]
```
**Webhook esperado**: `POST {N8N_URL}/webhook/post-treatment`
**Payload**:
```json
{
  "nombre": "string",
  "email": "string",
  "telefono": "string",
  "tratamiento": "string",
  "fechaTratamiento": "ISO date"
}
```

---

## Configurar en n8n
1. Crea un nuevo workflow para cada automatización
2. Añade nodo "Webhook" como trigger
3. Para WhatsApp: usa el nodo "WhatsApp Cloud API" (requiere Meta Business) o "Twilio WhatsApp"
4. Configura los nodos de email para envíos (Gmail/SMTP)
5. Activa el workflow
6. Copia la URL del webhook y pégala en `.env.local`

## URLs de ejemplo (para `.env.local`)
```
NEXT_PUBLIC_N8N_WEBHOOK_WELCOME=https://tu-dominio.ngrok.io/webhook/welcome
NEXT_PUBLIC_N8N_WEBHOOK_REMINDER=https://tu-dominio.ngrok.io/webhook/reminder
NEXT_PUBLIC_N8N_WEBHOOK_ABANDONED=https://tu-dominio.ngrok.io/webhook/abandoned
NEXT_PUBLIC_N8N_WEBHOOK_POST_TREATMENT=https://tu-dominio.ngrok.io/webhook/post-treatment
```

## Flujo WhatsApp de la web
El botón flotante verde usa `src/lib/whatsapp.ts`:
- Número: `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato 51XXXXXXXXX)
- Mensaje por defecto: `NEXT_PUBLIC_WHATSAPP_MESSAGE`
- Cada página de servicio genera un mensaje predefinido con el nombre del servicio
- El mensaje de éxito del formulario incluye botón "Confirmar por WhatsApp ahora"
