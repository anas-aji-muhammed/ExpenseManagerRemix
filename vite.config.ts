import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      // Routes configuration
      routes(defineRoutes) {
        return defineRoutes((route)=>{
          route("/", "features/marketing/home_layout.tsx", ()=>{
            route("", "features/marketing/home.tsx", { index: true });
            route("pricing", "features/marketing/pricing.tsx", );
            route("auth", "features/auth/AuthenticationPage.tsx", );

          });

          route("/app", "features/app/app.tsx", ()=>{
            route("expenses", "features/app/expenses/expenses.tsx", ()=>{
              route("add", "features/app/expenses/expensesAdd.tsx", );
              // route(":id", "features/app/expenses/expenses_detail.tsx", );

            });
            route("dashboard", "features/app/dashboard/dashboard.tsx", );

          });

        })
      },
    }),
    tsconfigPaths(),
  ],
});
