import { defineMcp } from "@lovable.dev/mcp-js";
import getEventInfo from "./tools/get-event-info";
import getPricing from "./tools/get-pricing";
import getCheckoutUrl from "./tools/get-checkout-url";
import getRestFramework from "./tools/get-rest-framework";

export default defineMcp({
  name: "rest-reset-mcp",
  title: "REST Reset",
  version: "0.1.0",
  instructions:
    "Public tools for the REST Reset July 2026 event by Learning While Healing. Use these tools to answer questions about the event schedule, pricing, checkout link, and the REST framework.",
  tools: [getEventInfo, getPricing, getCheckoutUrl, getRestFramework],
});