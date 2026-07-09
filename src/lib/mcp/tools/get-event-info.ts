import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_event_info",
  title: "Get REST Reset event info",
  description: "Returns the REST Reset event schedule, timezone, and session times.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "REST Reset",
          host: "Learning While Healing",
          dates: "July 28–30, 2026",
          days: "Tuesday to Thursday",
          sessionTime: "7:00 PM – 9:30 PM",
          timezone: "Asia/Manila (PHT)",
          format: "Live on Zoom",
          earlyBirdDeadline: "July 24, 2026 (11:59 PM PHT)",
        }),
      },
    ],
  }),
});