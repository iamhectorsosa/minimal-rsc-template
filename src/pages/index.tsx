export default async function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia
        culpa voluptate dolore, iure nobis veniam, obcaecati adipisci, sit quod
        laudantium ex ullam ipsum dolorem aliquid et sed deserunt iste!
      </p>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
