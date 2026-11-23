import Image from "next/image";
import { Children, isValidElement, type ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";

function Heading(props: ComponentProps<"h2">) {
  return (
    <h2
      className={
        props.children === "Screenshots"
          ? "sr-only"
          : "mb-2 mt-4 text-xl font-medium"
      }
      {...props}
    />
  );
}

function Screenshot({ src, alt }: ComponentProps<"img">) {
  return typeof src === "string" ? (
    <Image
      src={src}
      alt={alt ?? ""}
      loading="lazy"
      width={900}
      height={500}
      sizes="(max-width: 900px) 100vw, 900px"
      className="mx-auto mt-6 max-h-[500px] rounded-lg border-neutral-800 object-contain"
    />
  ) : null;
}

function Paragraph({ children, ...props }: ComponentProps<"p">) {
  const nodes = Children.toArray(children);
  if (
    nodes.length === 1 &&
    isValidElement(nodes[0]) &&
    nodes[0].type === Screenshot
  ) {
    return <>{children}</>;
  }
  return (
    <p className="mt-2 tracking-wide text-neutral-200" {...props}>
      {children}
    </p>
  );
}

const components: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
  h4: (props) => <h4 className="text-xl font-bold" {...props} />,
  h5: (props) => <h5 className="text-lg font-bold" {...props} />,
  h6: (props) => <h6 className="text-base font-bold" {...props} />,
  h2: Heading,
  h3: (props) => <h3 className="mt-4 text-lg font-medium" {...props} />,
  p: Paragraph,
  ul: (props) => <ul className="mt-2 grid list-disc gap-3 pl-6" {...props} />,
  ol: (props) => (
    <ol className="mt-1 grid list-decimal gap-4 pl-6" {...props} />
  ),
  li: (props) => <li className="text-neutral-300" {...props} />,
  a: (props) => (
    <a
      className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm" {...props} />
  ),
  pre: (props) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-neutral-800 p-4"
      {...props}
    />
  ),
  img: Screenshot,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
