const QRCode = require("qrcode");

exports.createSchemaCustomization = ({ actions, schema }, options) => {
  const { createTypes } = actions;

  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    schema.buildObjectType({
      name: "Frontmatter",
      fields: {
        qrcode: {
          type: "String",
          async resolve(source, args, context, info) {
            if (!source.maps || source.maps === "") return null;

            const { maps } = source;
            let qrcode = "";

            try {
              qrCode = await QRCode.toDataURL(maps);
            } catch (err) {
              return maps;
            }

            return qrCode;
          },
        },
      },
    }),
  ];
  createTypes(typeDefs);
};
