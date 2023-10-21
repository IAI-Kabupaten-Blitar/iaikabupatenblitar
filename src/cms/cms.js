import CMS from "decap-cms-app";
import slugify from "@sindresorhus/slugify";
import id from "./id";

CMS.registerLocale("id", id);

const config = {
  backend: {
    name: "git-gateway",
    branch: process.env.GATSBY_BRANCH || "master",
  },
  local_backend: process.env.GATSBY_LOCAL_BACKEND === "true",
};

CMS.registerEventListener({
  name: "preSave",
  handler: data => {
    const { entry } = data;
    if (entry.get("collection") !== "posts") return;

    if (entry.getIn(["data", "slug"], "")) return;

    const title = entry.getIn(["data", "title"], "");
    const slug = slugify(title);
    return entry.get("data").set("slug", slug);
  },
});

CMS.init({ config });
