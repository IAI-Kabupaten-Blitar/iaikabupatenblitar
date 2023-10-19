import CMS from "decap-cms-app";
import slugify from "@sindresorhus/slugify";
import id from "./id";

CMS.registerLocale("id", id);

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

CMS.init();
