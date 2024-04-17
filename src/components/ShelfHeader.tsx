export default function ShelfHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
}
