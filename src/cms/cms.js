import CMS from "decap-cms-app";
import slugify from "@sindresorhus/slugify";
import id from "./id";
import postsCollection from "./postsCollection";

CMS.registerLocale("id", id);

const config = {
  backend: {
    name: "github",
    repo: "IAI-Kabupaten-Blitar/iaikabupatenblitar",
    branch: process.env.GATSBY_BRANCH || "master",
  },
  local_backend: process.env.NODE_ENV === "development",
  locale: "id",
  media_folder: "static/images/uploads",
  public_folder: "/images/uploads",
  collections: [postsCollection],
};

if (process.env.NODE_ENV === "production") {
  config.publish_mode = "editorial_workflow";
  const postsIndex = config.collections.findIndex(
    collection => collection.name === "posts"
  );
  if (postsIndex !== -1)
    config.collections[postsIndex].preview_path = "berita/{{slug}}";
}

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
