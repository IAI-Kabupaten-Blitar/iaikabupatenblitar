const postsCollection = {
  name: "posts",
  label: "Berita",
  folder: "src/contents/posts",
  create: true,
  media_folder: "",
  public_folder: "",
  path: "{{year}}-{{month}}-{{day}}-{{slug}}/index",
  slug: "{{fields.slug}}",
  editor: {
    preview: false,
  },
  fields: [
    {
      label: "Judul",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      required: false,
      hint: "Biarkan kosong untuk menghasilkan slug secara otomatis",
      pattern: ["^[-a-z0-9]+$", "Must be a valid URL slug"],
    },
    {
      label: "Tanggal",
      name: "date",
      widget: "datetime",
      format: "YYYY-MM-DD",
      date_format: true,
      time_format: false,
      required: true,
    },
    {
      label: "Penulis",
      name: "author",
      widget: "string",
    },
    {
      label: "Gambar Utama",
      name: "thumbnail",
      widget: "image",
    },
    {
      label: "Tulisan",
      name: "body",
      widget: "markdown",
    },
  ],
};

export default postsCollection;
