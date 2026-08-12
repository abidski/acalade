// lib/detect-resource-type.ts
export function detectResourceType(url: string): "youtube" | "website" {
  const trimmed = url.trim().toLowerCase();

  if (
    trimmed.includes("youtube.com/watch") ||
    trimmed.includes("youtu.be/") ||
    trimmed.includes("youtube.com/shorts")
  ) {
    return "youtube";
  }

  return "website";
}
