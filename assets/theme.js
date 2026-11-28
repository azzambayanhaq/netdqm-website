"use strict";

(() => {
  const STORAGE_KEY = "netdqm.theme";
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function readStoredTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  let storedTheme = readStoredTheme();

  function updateMetaColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute("content", theme === "light" ? "#f5f8fb" : "#070d18");
  }

  function updateButtons() {
    const theme = root.getAttribute("data-theme") || "dark";
    const nextTheme = theme === "dark" ? "light" : "dark";
    const isEnglish = root.lang.toLowerCase().startsWith("en");
    const label = isEnglish
      ? `Switch to ${nextTheme} mode`
      : `Ganti ke tema ${nextTheme === "light" ? "terang" : "gelap"}`;
    const visibleLabel = isEnglish
      ? (nextTheme === "light" ? "Light" : "Dark")
      : (nextTheme === "light" ? "Terang" : "Gelap");

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      const text = button.querySelector("[data-theme-label]");
      if (text) text.textContent = visibleLabel;
    });
  }

  let transitionTimer = 0;

  function applyTheme(theme, save, announce = false) {
    const nextTheme = theme === "light" ? "light" : "dark";
    root.classList.add("is-theme-changing");
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => root.classList.remove("is-theme-changing"), 320);
    root.setAttribute("data-theme", nextTheme);
    updateMetaColor(nextTheme);
    updateButtons();

    if (save) {
      storedTheme = nextTheme;
      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch (error) {
        /* Keep the theme for this page even when storage is unavailable. */
      }
    }
    if (announce && typeof window.netdqmToast === "function") {
      const isEnglish = root.lang.toLowerCase().startsWith("en");
      window.netdqmToast(isEnglish
        ? (nextTheme === "dark" ? "Dark theme enabled" : "Light theme enabled")
        : (nextTheme === "dark" ? "Tema gelap diaktifkan" : "Tema terang diaktifkan"));
    }
  }

  applyTheme(storedTheme || (media.matches ? "dark" : "light"), false);

  function setupThemeControls() {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark", true, true);
      });
    });
    updateButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupThemeControls, { once: true });
  } else {
    setupThemeControls();
  }

  window.addEventListener("netdqm:languagechange", updateButtons);
  media.addEventListener("change", (event) => {
    if (!storedTheme) applyTheme(event.matches ? "dark" : "light", false);
  });
})();
