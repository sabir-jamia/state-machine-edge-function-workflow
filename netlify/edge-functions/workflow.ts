import { createMachine } from "https://cdn.skypack.dev/xstate";

const trafficLightMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOilTDADsBiAUQDc7kACARkVAAcB7WDmQ5+tHiAAeiALScADPPIB2ACyqAzJuXyFOgBzKANCACeiAEwA2ctYsBWVWuUBODcuX35GgL4+TaFi4hMRk5KZgADaR-ADuTKy0HBYSAkIiYhLSCJyc9uQunFb2GvYuqpyq9pwWGibmCNa2Vg5eDvL6+i4u+n4BGNj4RKQU1BAJbOwpSCBpwqLiM9mcGgXKnPoWit7r8oX1iC425S2qVj3FGnu9fSC0-BBwEoGDISOU1HSpgvOZS7KcFzKWz6IqA5QWTieDTlA6NJR2EouXRdHQ9Xz+EAvYLDMIRaJxb7pBZZRAKcgrTRHeQWVTyTRdKxwrbNVoQ+zWeT2CGqW7YoahUaQIm-RagbIWZSrKHedSQqHrTzMhEtJEooHXDH9IICkYijJiqSyCyQkFgoGQ6GwsyyaoqdzqSpabkOG5+IA */
  createMachine({
    tsTypes: {} as import("./workflow.typegen").Typegen0,
    schema: {
      context: {} as { contextType },
      events: {} as { type: "eventType" },
    },
    id: "trafficLight",
    initial: "green",
    states: {
      green: {
        on: {
          "Event 1": {
            target: "yellow",
          },
        },
      },
      yellow: {
        on: {
          "Event 2": {
            target: "red",
          },
        },
      },
      red: {
        on: {
          "Event 2": {
            target: "green",
          },
        },
      },
    },
  });

export default function () {
  return new Response("Hello from the edge");
}
