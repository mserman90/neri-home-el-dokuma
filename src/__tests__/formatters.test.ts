import { describe, it, expect } from "vitest";
import { tl, waLink, FREE_SHIPPING, PHONE, WA_BASE } from "../utils/formatters";

describe("formatters utils", () => {
  it("formats Turkish Lira correctly", () => {
    expect(tl(3250)).toContain("3.250");
    expect(tl(3250)).toContain("₺");
    expect(tl(0)).toContain("0");
  });

  it("generates correct WhatsApp links", () => {
    const link = waLink("Merhaba Neri Home");
    expect(link).toContain(WA_BASE);
    expect(link).toContain("text=Merhaba%20Neri%20Home");
  });

  it("has valid constants", () => {
    expect(FREE_SHIPPING).toBe(5000);
    expect(PHONE).toBe("+90 537 696 65 02");
  });
});
