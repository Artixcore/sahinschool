/** Canonical sharable link (opens Google Maps app/tab). */
export const GOOGLE_MAPS_PLACE_URL =
  "https://maps.app.goo.gl/wXGw6xhLvbe6JZH56";

/**
 * Embed iframe src — coordinates match the resolved share link place (Bagerhat area).
 * If the pin moves, update lat/lng to match Google Maps → Share → Embed, or re-resolve GOOGLE_MAPS_PLACE_URL.
 */
export const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=22.6562593%2C89.79504&z=16&output=embed";
