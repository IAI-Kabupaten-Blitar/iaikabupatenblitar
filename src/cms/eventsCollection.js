const eventsCollection = {
  name: "events",
  label: "Kegiatan",
  folder: "src/contents/events",
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
      format: "YYYY-MM-DD HH:mm",
      date_format: true,
      time_format: true,
      required: true,
    },
    {
      label: "Waktu",
      name: "time",
      widget: "string",
    },
    {
      label: "Tempat",
      name: "location",
      widget: "string",
    },
    {
      label: "Peta Lokasi",
      name: "maps",
      widget: "text",
    },
    {
      label: "Kontak",
      name: "contacts",
      widget: "list",
      summary: "{{fields.contact}}",
      field: { label: "Contact", name: "contact", widget: "string" },
      allow_add: true,
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

export default eventsCollection;
