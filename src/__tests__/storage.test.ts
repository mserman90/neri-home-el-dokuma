import { describe, it, expect, beforeEach, vi } from "vitest";
import { storage } from "../utils/storage";

describe("storage util", () => {
  beforeEach(() => {
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, val: string) => {
        store[key] = val;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        for (const k in store) delete store[k];
      },
    });
  });

  it("saves and retrieves objects from localStorage", () => {
    storage.set("test_key", { a: 1, b: "hello" });
    const result = storage.get("test_key", null);
    expect(result).toEqual({ a: 1, b: "hello" });
  });

  it("returns fallback value when key does not exist", () => {
    const result = storage.get("non_existent_key", "default_val");
    expect(result).toBe("default_val");
  });

  it("removes items from localStorage", () => {
    storage.set("removable", "yes");
    storage.remove("removable");
    const result = storage.get("removable", "fallback");
    expect(result).toBe("fallback");
  });
});
