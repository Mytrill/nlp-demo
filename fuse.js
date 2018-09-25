const { context, src, task } = require("fuse-box/sparky")
const {
  FuseBox,
  WebIndexPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  QuantumPlugin
} = require("fuse-box")

/** Tasks */
task("default", context => {
  context.clean().then(context.dev)
})

task("dev", context => {
  context.clean().then(context.dev)
})

task("prod", context => {
  context.clean().then(context.prod)
})

/** Set Config */
function initFusebox(isProduction) {
  return FuseBox.init({
    homeDir: "src/",
    output: "dist/$name.js",
    target: "browser@es5",
    plugins: [
      WebIndexPlugin({
        template: "src/index.html"
      }),
      [
        SassPlugin(),
        CSSResourcePlugin({
          dist: "dist/css-resources"
        }),
        CSSPlugin()
      ],
      isProduction &&
        QuantumPlugin({
          uglify: true,
          treeshake: true,
          bakeApiIntoBundle: "app"
        })
    ],
    alias: {
      components: "~/components",
      lib: "~/lib",
      modules: "~/modules"
    }
  })
}

/** Context */
context(
  class {
    /** clean dist directory */
    clean() {
      return src("dist")
        .clean("dist/")
        .clean(".fusebox/")
        .exec()
    }

    /** dev build */
    dev() {
      const fuse = initFusebox(false)
      fuse.dev({ open: true })
      fuse
        .bundle("app")
        .watch()
        .hmr()
        .instructions(" > index.tsx")
      return fuse.run()
    }

    /** prod build  */
    prod() {
      const fuse = initFusebox(true)
      fuse.bundle("app").instructions(" > index.tsx")
      return fuse.run()
    }
  }
)
