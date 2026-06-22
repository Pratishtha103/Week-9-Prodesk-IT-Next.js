import "../src/app/globals.css";

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "dark",
    toolbar: {
      title: "Theme",
      items: ["light", "dark"],
    },
  },
};

export const decorators = [
  (Story, context) => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      context.globals.theme
    );

    return (
      <div
        className={
          context.globals.theme === "dark"
            ? "bg-zinc-950 min-h-screen p-6"
            : "bg-white min-h-screen p-6"
        }
      >
        <Story />
      </div>
    );
  },
];

export default preview;