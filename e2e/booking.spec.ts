import { test, expect } from "@playwright/test";

test.describe("Flujo de usuario - Dra. Blue", () => {
  test("Navegar por la home, ir a reservar, llenar formulario y ver éxito", async ({ page }) => {
    // 1. Navegar a la home
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Tu sonrisa merece");
    await expect(page.locator('a[href="/reservar"]').first()).toBeVisible();

    // Cerrar cookie banner para que no intercepte clics
    const rejectCookies = page.locator("button:has-text('Solo necesarias')");
    if (await rejectCookies.isVisible().catch(() => false)) {
      await rejectCookies.click();
    }

    // 2. Ir a la página de reserva
    await page.locator('a[href="/reservar"]').first().click();
    await expect(page).toHaveURL("/reservar");
    await expect(page.locator("h1")).toContainText("evaluación gratuita");

    // 3. Paso 1: Datos personales
    await page.locator("#nombre").fill("Usuario Test");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#telefono").fill("+51 999 999 999");
    await page.locator("button:has-text('Continuar')").click();

    // 4. Paso 2: Seleccionar servicio
    await page.locator("button:has-text('Blanqueamiento')").first().click();
    await page.locator("button:has-text('Continuar')").click();

    // 5. Paso 3: Seleccionar fecha y hora
    const fechaInput = page.locator('input[type="date"]');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    await fechaInput.fill(tomorrowStr);
    await page.locator("button:has-text('10:00')").click();
    await page.locator("button:has-text('Continuar')").click();

    // 6. Paso 4: Confirmar
    await expect(page.locator("text=Confirma tu solicitud")).toBeVisible();
    await page.locator("button:has-text('Enviar solicitud de cita')").scrollIntoViewIfNeeded();
    await page.locator("button:has-text('Enviar solicitud de cita')").click({ force: true });

    // 7. Verificar mensaje de éxito
    await expect(page.locator("h3", { hasText: "¡Gracias" })).toBeVisible();
    await expect(page.locator("button:has-text('Confirmar por WhatsApp ahora')")).toBeVisible();
  });

  test("Página de servicio se renderiza con contenido", async ({ page }) => {
    await page.goto("/servicios/diseno-de-sonrisa");
    await expect(page.locator("h1")).toContainText("Diseño de Sonrisa");
    await expect(page.locator("h1")).toContainText("Surco");
    await expect(page.locator("button:has-text('Agenda tu evaluación gratuita')")).toBeVisible();
    await expect(page.locator("text=Beneficios de este tratamiento")).toBeVisible();
  });
});
