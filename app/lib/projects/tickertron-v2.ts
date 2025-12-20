import { SiSvelte, SiNodedotjs } from "react-icons/si";

import { Project } from "../types";

export const tickertronV2: Project = {
  slug: "tickertron-v2",
  title: "tickertron v2",
  description: "Real-time financial dashboard with WebSocket integration.",
  status: "construction",
  stack: [
    { name: "SvelteKit", icon: SiSvelte },
    { name: "Node.js", icon: SiNodedotjs },

  ],
  repoUrl: "https://github.com/jhiney/tickertron_v2",
  icon: SiSvelte,
  content: `
## The Background
The [initial version of Tickertron](https://jhiney.github.io/tickertron/) was the first thing I ever built and "published" (and it somehow still works!), so four years later I naturally thought it was time for an update.

## The Problem
If you take a look at other "stock" apps, there is a lot of similarity in the UI and the way the data is displayed (Examples [1](https://www.koyfin.com/), [2](https://finviz.com/), and [3](https://www.tradingview.com/)). Without a doubt, these are all fantastic applications and will do the job well. My thought was what if instead we had modern finacial data, but it looked like it was on a Quatron or even better, a Pip-Boy?

## The Solution
I built Tickertron v2 using SvelteKit for the frontend and haven't really picked a backend yet. I also haven't settled on a data provider either, realtime stock data is a bit pricey for hobby projects at the moment.


## Challenges
A whole bunch of them. Check back later please!
`,
};

