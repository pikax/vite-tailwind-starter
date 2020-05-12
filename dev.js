const { createViteSSR } = require("zipe");
const { createServer } = require("vite");

const SSR = createViteSSR(({ app, zipeSSR }) => {
  app.use(async (ctx, next) => {
    // if (ctx.path === "") {
    //   ctx.body = await zipeSSR("/views/Test.vue");
    //   return;
    // }

    const ll = await zipeSSR("/App.vue", ctx, [
      {
        importLine: "import router from '/router.js'",
        enhance(app, dependency) {
          return app.use(dependency);
        },
      },
      {
        importLine: "import css from '/css.js'",
      },
    ]);
    ctx.body = ll;
    return;

    await next();
  });
});

createServer({
  plugins: [SSR],
}).listen(3006);
