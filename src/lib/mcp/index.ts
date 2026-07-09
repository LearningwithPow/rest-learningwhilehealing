import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getEventInfo from "./tools/get-event-info";
import getPricing from "./tools/get-pricing";
import getCheckoutUrl from "./tools/get-checkout-url";
import getRestFramework from "./tools/get-rest-framework";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "rest-reset-mcp",
  title: "REST Reset",
  version: "0.1.0",
  instructions:
    "Tools for the REST Reset July 2026 event by Learning While Healing. Requires sign-in. Use these tools to answer questions about the event schedule, pricing, checkout link, and the REST framework.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getEventInfo, getPricing, getCheckoutUrl, getRestFramework],
});