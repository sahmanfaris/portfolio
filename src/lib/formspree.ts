export function getFormspreeEndpoint(): string | null {
  const raw = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
  if (!raw) return null;

  const id = raw.includes("formspree.io/f/")
    ? raw.split("/f/").pop()?.replace(/\/$/, "")
    : raw;

  return id ? `https://formspree.io/f/${id}` : null;
}
