type Props = {
  data: unknown;
};

/**
 * Renders schema.org structured data as a JSON-LD script tag.
 * `<` is escaped so no string value can close the script element early.
 */
export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
