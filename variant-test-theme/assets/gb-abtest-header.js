import { GrowthBook } from "@growthbook/growthbook";

// Create a GrowthBook instance
const gb = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-abc123",
  // Targeting attributes
  attributes: {
    id: "123",
    country: "US"
  },
  // Only required for A/B testing
  // Called every time a user is put into an experiment
  trackingCallback: (experiment, result) => {
    console.log("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

// Download features and experiments from the CDN
// Also, start running any Visual Editor or URL Redirect experiments
await gb.init();